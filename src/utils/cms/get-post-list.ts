import { client } from "./init";

export type GetListRes = {
  contents: Array<{
    body: string;
    createdAt: Date;
    id: string;
    tag: Array<string>;
    title: string;
  }>;
};
export const getPostList = async (): Promise<GetListRes> => {
  const list = await client.get<GetListRes>({ endpoint: "blog" });
  list.contents.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
  return list;
};
