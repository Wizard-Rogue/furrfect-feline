type BreedInfo = {
  id: string;
  name: string;
  description: string;
  origin: string;
  temperament: string;
};

type CatParams = {
  limit: string;
  page: string;
  breed_ids?: string;
  api_key: string;
};

type CatsInfo = {
  id: string;
  url: string;
  breeds?: BreedInfo[];
};

export {
  BreedInfo,
  CatParams,
  CatsInfo,
};
