import { CrudController } from './crud-controller.interface';
import * as mongoose from 'mongoose';
import { FlixSchema } from '../models/flix-schema';
import { Request, Response } from 'express';

const Flix = mongoose.model('Flix', FlixSchema);

export class FlixController implements CrudController {
  create(req: Request, res: Response): void {
    let flix = new Flix(req.body);

    flix.save((err, flix) => {
      if (err) {
        res.send(err);
      }
      const resourceLocation: string = req.protocol + '://' + req.get('host') + req.originalUrl + '/' + flix._id;
      res.status(201).location(resourceLocation).send({ links: { flix: resourceLocation } });
    });
  }

  retrieveAll(req: Request, res: Response): void {
    Flix.find({}, (err, flixes) => {
      if (err) {
        res.send(err);
      }
      res.status(200).json(flixes);
    });
  }

  retrieveOneById(req: Request, res: Response): void {
    Flix.findById(req.params.flixId, (err, flix) => {
      if (err) {
        res.send(err);
      }
      res.status(200).json(flix);
    });
  }

  update(req: Request, res: Response): void {
    Flix.findOneAndUpdate(
      { _id: req.params.flixId },
      req.body,
      { new: true },
      (err, flix) => {
        if (err) {
          res.send(err);
        }
        res.status(200).json(flix);
      }
    );
  }

  delete(req: Request, res: Response): void {
    Flix.remove({ _id: req.params.flixId }, err => {
      if (err) {
        res.send(err);
      }
      res.status(200);
    });
  }
}
