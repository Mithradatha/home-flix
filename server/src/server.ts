import * as dotenv from 'dotenv';

const result: dotenv.DotenvConfigOutput = dotenv.config();

if (result.error) {
  throw result.error;
}

import app from './app';

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log('Express server listening on port ' + PORT);
});
