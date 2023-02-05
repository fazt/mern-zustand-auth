interface Props {
  children: React.ReactNode;
}

export const Container = ({ children }: Props) => (
  <div className="container max-w-7xl m-auto">{children}</div>
);

