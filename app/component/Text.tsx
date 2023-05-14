type TextProps = {
  text: string;
};

export const Text = ({ text }: TextProps) => {
  return <div style={{ color: "green" }}>{text}</div>;
};
