import { HomeController } from '../controllers/home-controller';
import { Application } from 'express';
import { RegisterableRoutes } from './registerable-routes.interface';

export class HomeRoutes implements RegisterableRoutes {
  private homeController: HomeController = new HomeController();

  register(app: Application): void {
    app.route('/').get(this.homeController.index);
  }
}
