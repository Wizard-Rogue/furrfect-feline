import express, { Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors';
import 'dotenv/config';

import { BreedInfo, CatParams, CatsInfo } from './types';

const app = express();
const { CAT_API_KEY, CAT_API_URL, PORT = 3000 } = process.env;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/breeds", async (_, res: Response) => {
  const URL = CAT_API_URL + "/breeds";

  try {
    const breedsRequest = await fetch(URL, {
      method: "GET",
    });

    if (!breedsRequest.ok) {
      console.error("Fetch failed!");
      return res.status(500).send({ message: "Apologies but we could not load new cats for you at this time! Miau!" });
    } else {
      const breedsData = await breedsRequest.json() as BreedInfo[];
      const breeds = breedsData.map((breed) => {
        return {
          id: breed.id,
          name: breed.name,
          description: breed.description,
          origin: breed.origin,
          temperament: breed.temperament,
        };
      });

      return res.status(200).send(breeds);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
});

app.get("/cats", async (req: Request, res: Response) => {
  const URL = CAT_API_URL + "/images/search?";
  const { limit = 10, page = 0, breedIds } = req.query;
  const params = {
    limit,
    page,
    api_key: CAT_API_KEY,
    ...(breedIds?.length && { breed_ids: breedIds }),
  } as CatParams;

  try {
    const catsRequest = await fetch(URL + new URLSearchParams(params), {
      method: "GET",
    });

    if (!catsRequest.ok) {
      console.error("Fetch failed!");
      return res.status(500).send({ message: "Apologies but we could not load new cats for you at this time! Miau!" });
    } else {
      const catsData = await catsRequest.json() as CatsInfo[];
      const cats = catsData.map((cat) => {
        return {
          id: cat.id,
          url: cat.url,
          breeds: cat.breeds?.map((breed) => {
            return {
              id: breed.id,
              name: breed.name,
              description: breed.description,
              origin: breed.origin,
              temperament: breed.temperament,
            }
          }),
        };
      });

      return res.status(200).send(cats);
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
