interface FooterLinkProps {
  title: string;
  link?: string;
}

export default function FooterLink(props: Partial<FooterLinkProps>) {
  const { title, link } = props;
  return (
    <li className="mb-6">
      <a className="text-lg color-palette-1 text-decoration-none" href={link}>
        {title}
      </a>
    </li>
  );
}
