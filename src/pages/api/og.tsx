import { ImageResponse } from "@vercel/og";

import type { NextRequest } from "next/server";

export const config = {
  runtime: "experimental-edge",
};

export default (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);

    const hasTitle = searchParams.has("title");

    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "BayahtyのBlog";

    return new ImageResponse(
      (
        <div
          style={{
            background: "#F7EDDE",
            width: "100%",
            height: "100%",
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              fontSize: "60px",
              padding: "0 1rem",
              width: "90%",
              height: "80%",
              background: "white",
              borderRadius: "30px",
              display: "flex",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              overflowWrap: "break-word",
              wordWrap: "break-word",
              border: "solid black 10px",
            }}
          >
            {title}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 600,
      }
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
