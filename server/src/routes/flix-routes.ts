import { RegisterableRoutes } from './registerable-routes.interface';
import { FlixController } from '../controllers/flix-controller';
import { Application } from 'express';

export class FlixRoutes implements RegisterableRoutes {
  private flixController: FlixController = new FlixController();

  register(app: Application): void {
    app
      .route('/flixes')
      .get(this.flixController.retrieveAll)
      .post(this.flixController.create);

    app
      .route('/flixes/:flixId')
      .get(this.flixController.retrieveOneById)
      .put(this.flixController.update)
      .delete(this.flixController.delete);
  }
}
