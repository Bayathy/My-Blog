import { client } from "./init";

export type GetArticleRes = {
  body: string;
  createdAt: string;
  id: string;
  tag: Array<string>;
  title: string;
};
export const getArticle = async (id: string): Promise<GetArticleRes> => {
  return await client.get({ endpoint: "blog", contentId: id });
};
