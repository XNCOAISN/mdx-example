import { NextResponse } from "next/server";

export const GET = async () => {
  const data = {
    title: "title",
    source: `
# Hello World

This is from Server Components!

<Text text="text" />
    `,
  };

  return NextResponse.json(data);
};
