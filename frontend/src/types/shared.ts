type BreedInfo = {
  id: string;
  name: string;
  description: string;
  origin: string;
  temperament: string;
};

type CatsInfo = {
  id: string;
  url: string;
  breeds?: BreedInfo[];
};

type PageMetadata = {
  page: number;
  disableLoadMore: boolean;
};

export type {
  BreedInfo,
  CatsInfo,
  PageMetadata,
};
