import { CatsInfo } from "../types/shared";
import fetchError from "../components/error/error";

/**
 * This is the loader responsible for GET /cats
 * @returns catsData<catInfo[]>
 * @throws error depending on the error encountered
 */
async function loadCats (breed: string = '', page: number = 0) {
  const params = {
    page: page.toString(),
    breedIds: breed,
  };

  try {
    const catsRequest = await fetch("/cats?" + new URLSearchParams(params), {
      method: "GET",
    });

    if (!catsRequest.ok) {
      throw fetchError;
    }

    if (catsRequest.status === 204) return []; // return empty when a 204 is received
    const catsData = await catsRequest.json() as CatsInfo[];
    return catsData;
  } catch (error) {
    throw error;
  }
}

export function catsLoader () {
  return loadCats();
}

export default loadCats;
