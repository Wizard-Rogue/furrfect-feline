import express, { Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const { CAT_API_KEY, CAT_API_URL, PORT = 3000 } = process.env;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

type BreedInfo = {
  id: string;
  name: string;
};

app.get("/breeds", async (_, res: Response) => {
  try {
    const URL = CAT_API_URL + "/breeds";
    const breedsRequest = await fetch(URL, {
      method: "GET",
    });

    if (!breedsRequest.ok) {
      console.error("Fetch failed!");
      return res.status(500).send({ message: "Fetch Failed!" });
    } else {
      const breedsData = await breedsRequest.json() as BreedInfo[];
      const breeds = breedsData.map((breed) => {
        return {
          id: breed.id,
          name: breed.name,
        };
      });

      return res.status(200).send(breeds);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
});

app.listen(PORT, () => {
  console.log("Server is up on port", PORT);
});

export default app;
