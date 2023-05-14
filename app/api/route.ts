import { NextResponse } from "next/server";

export const GET = async () => {
  const data = {
    title: "title",
    source: `
# Hello World

This is from Server Components!
    `,
  };

  return NextResponse.json(data);
};
