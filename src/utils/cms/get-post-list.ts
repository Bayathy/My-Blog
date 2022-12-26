import { client } from "./init";
import { GetArticleRes } from "./get-article";

type GetListRes = {
  contents: Array<GetArticleRes>;
};

export const getPostList = async (): Promise<Array<GetArticleRes>> => {
  const list = await client.get<GetListRes>({ endpoint: "blog" });
  list.contents.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
  return list.contents;
};
