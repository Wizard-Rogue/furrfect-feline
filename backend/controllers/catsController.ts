import { Request, Response } from 'express';
import 'dotenv/config';

import { BreedInfo, CatParams, CatsInfo } from '../types';
const { CAT_API_KEY, CAT_API_URL } = process.env;

const getCats = async (req: Request, res: Response) => {
  const URL = CAT_API_URL + "/images/search?";
  const { limit = 10, page = 0, breedIds } = req.query;
  const params = {
    order: "ASC",
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

      if (!catsData || catsData.length === 0) return res.status(204).send();

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
};

const getCat = async (req: Request, res: Response) => {
  const URL = CAT_API_URL + "/images/" + req.params.id;

  try {
    const catRequest = await fetch(URL, {
      method: "GET",
    });

    if (!catRequest.ok) {
      console.error("Fetch failed!");
      return res.status(500).send({ message: "Apologies but we could not load new cats for you at this time! Miau!" });
    } else {
      const catData = await catRequest.json() as CatsInfo;
      const cat = {
        id: catData.id,
        url: catData.url,
        breeds: catData.breeds?.map((breed) => {
          return {
            id: breed.id,
            name: breed.name,
            description: breed.description,
            origin: breed.origin,
            temperament: breed.temperament,
          }
        }),
      };

      return res.status(200).send(cat);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
};

export default {
  getCat,
  getCats,
};
