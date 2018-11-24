import { RegisterableRoutes } from './registerable-routes.interface';
import { HomeRoutes } from './home-routes';
import { FlixRoutes } from './flix-routes';
import { Application } from 'express';

export class RoutesModule implements RegisterableRoutes {
  private routers: RegisterableRoutes[] = [new HomeRoutes(), new FlixRoutes()];

  register(app: Application): void {
    this.routers.forEach((router: RegisterableRoutes) => {
      router.register(app);
    });
  }
}
