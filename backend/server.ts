import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors';
import 'dotenv/config';
import routes from './routes';

const app = express();
const { PORT = 3000 } = process.env;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

routes(app);

app.listen(PORT, () => {
  console.log("Server is up on port", PORT);
});

export default app;
