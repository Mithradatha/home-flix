import { Request, Response } from 'express';

export class HomeController {
  
    index(req: Request, res: Response): void {
        const flixLocation: string = req.protocol + '://' + req.get('host') + req.originalUrl + 'flixes';
        res.json({ links: { flixes: flixLocation } });
    }
}
