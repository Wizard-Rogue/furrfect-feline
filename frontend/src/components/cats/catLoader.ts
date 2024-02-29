import type { LoaderFunction } from "react-router-dom";
import { CatsInfo } from "../../types/shared";

/**
 * This is the loader responsible for GET /cats/:id
 * @returns catData<CatsInfo>
 */
const catLoader: LoaderFunction = async ({ params }) => {
  const { id } = params;

  try {
    const catRequest = await fetch("/cats/" + id, {
      method: "GET",
    });

    if (!catRequest.ok) {
      throw new Error("Fetch failed!");
    } else {
      const catData = await catRequest.json() as CatsInfo;
      return { catData };
    }
  } catch (error) {
    throw error;
  }
};

export default catLoader;
