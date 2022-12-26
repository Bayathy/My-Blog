import { client } from "./init";
import { GetArticleRes } from "./get-article";

export type GetListRes = {
  contents: Array<GetArticleRes>;
};
export const getPostList = async (): Promise<GetListRes> => {
  const list = await client.get<GetListRes>({ endpoint: "blog" });
  list.contents.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
  return list;
};
