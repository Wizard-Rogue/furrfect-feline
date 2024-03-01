import { Request, Response } from 'express';
import { BreedInfo } from '../types';
import 'dotenv/config';

const { CAT_API_URL } = process.env;

const getBreeds = async (req: Request, res: Response) => {
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
};

export default { getBreeds };
