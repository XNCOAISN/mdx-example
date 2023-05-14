import { ReactNode } from "react";

const RootLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title>MDX</title>
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
