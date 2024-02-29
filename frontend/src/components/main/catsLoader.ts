import { CatsInfo } from "../../types/shared";

async function loadCats () {
  try {
    const catsRequest = await fetch("/cats", {
      method: "GET",
    });

    if (!catsRequest.ok) {
      console.error("Fetch failed!");
      throw new Error("Apologies but we could not load new cats for you at this time! Miau!");
    } else {
      const catsData = await catsRequest.json() as CatsInfo[];
      return catsData;
    }
  } catch (error) {
    throw error;
  }
}

export default loadCats;
