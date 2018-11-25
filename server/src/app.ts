import { RoutesModule } from './routes/routes.module';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import * as cors from 'cors';

class App {
  public app: express.Application;
  private routes = new RoutesModule();

  constructor() {
    this.app = express();
    this.config();
    this.routes.register(this.app);
    this.mongoSetup();
  }

  private config(): void {
    // support application/json type post data
    this.app.use(bodyParser.json());

    // support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));

    // allow requests from another site
    this.app.use(cors({ origin: process.env.CORS_ORIGIN }));
  }

  private mongoSetup(): void {
    mongoose.connect(
      process.env.DB_CONNECTION_STRING,
      {
        auth: {
          user: process.env.DB_USERNAME,
          password: process.env.DB_PASSWORD
        },
        useNewUrlParser: true
      }
    );
  }
}

export default new App().app;
