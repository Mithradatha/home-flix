import { Request, Response } from 'express';

export interface CrudController {

    create(req: Request, res: Response): void;

    retrieveAll(req: Request, res: Response): void;

    retrieveOneById(req: Request, res: Response): void;

    update(req: Request, res: Response): void;

    delete(req: Request, res: Response): void;
}