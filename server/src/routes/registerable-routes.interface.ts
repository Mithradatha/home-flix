import { Application } from 'express';

export interface RegisterableRoutes {
  register(app: Application): void;
}
