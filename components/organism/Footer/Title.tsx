interface Title {
  title: string;
}

export default function Title(props: Title) {
  const { title } = props;
  return <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>;
}
