import { RoutesModule } from './routes/routes.module';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import * as cors from 'cors';

class App {
  public app: express.Application;
  public routes = new RoutesModule();
  public mongoUrl = 'mongodb://localhost/home-flix';

  constructor() {
    this.app = express();
    this.config();
    this.routes.register(this.app);
    this.mongoSetup();
  }

  private config(): void {
    // support application/json type post data
    this.app.use(bodyParser.json());

    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));

    this.app.use(cors({ origin: 'http://localhost:4200' }));
  }

  private mongoSetup(): void {
    mongoose.connect(
      this.mongoUrl,
      { useNewUrlParser: true }
    );
  }
}

export default new App().app;
