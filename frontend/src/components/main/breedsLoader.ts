import { BreedInfo } from '../../types/shared';

async function breedsLoader() {
  try {
    const breedsRequest = await fetch("/breeds", {
      method: "GET",
    });

    if (!breedsRequest.ok) {
      throw new Error("Fetch failed!");
    } else {
      const breedsData = await breedsRequest.json() as BreedInfo[];
      return { breedsData };
    }
  } catch (error) {
    throw error;
  }
};

export default breedsLoader;
