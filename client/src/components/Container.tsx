interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => (
  <div className="container max-w-7xl m-auto">{children}</div>
);

export default Container;
