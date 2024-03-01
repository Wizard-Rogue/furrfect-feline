import { BreedInfo } from '../../types/shared';
import fetchError from '../error/error';

/**
 * This is the loader responsible for GET /breeds
 * @returns breedsData<BreedInfo[]>
 */
async function breedsLoader() {
  try {
    const breedsRequest = await fetch("/breeds", {
      method: "GET",
    });

    if (!breedsRequest.ok) {
      throw fetchError;
    }

    const breedsData = await breedsRequest.json() as BreedInfo[];
    return { breedsData };
  } catch (error) {
    throw error;
  }
};

export default breedsLoader;
