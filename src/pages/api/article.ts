import Client from "@notionhq/client/build/src/Client";
import { NextApiRequest, NextApiResponse } from "next";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });

  const databaseId = process.env.DATABASE_ID;

  const pages = await notion.databases.query({
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    database_id: databaseId!,
  });

  console.log(pages);
};
