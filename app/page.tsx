import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { MDXComponents } from "mdx/types";

import { Text } from "./component/Text";

const components: MDXComponents = {
  h1: (props) => (
    <h1 {...props} style={{ color: "red" }}>
      {props.children}
    </h1>
  ),
  Text,
};

const getData = async () => {
  const res = await fetch("http://localhost:3000/api", { cache: "no-cache" });

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return await res.json();
};

export const generateMetadata = async () => {
  const data = await getData();
  const metadata: Metadata = {
    title: data.title,
  };
  return metadata;
};

const Page = async () => {
  const data = await getData();

  return (
    <>
      {/* @ts-expect-error Server Component */}
      <MDXRemote components={components} source={data.source} />
    </>
  );
};

export default Page;
