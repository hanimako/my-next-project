export type Category = {
  name: string;
};

export type News = {
  id: string;
  title: String;
  category: {
    name: string;
  };
  publishedAt: string;
  createdAt: string;
};
