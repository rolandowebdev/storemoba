import Image from 'next/image';
import Link from 'next/link';
import cx from 'classnames';

interface MenuItemProps {
  title: string;
  active?: boolean;
  icon:
    | 'ic-menu-overview'
    | 'ic-menu-card'
    | 'ic-menu-logout'
    | 'ic-menu-messages'
    | 'ic-menu-rewards'
    | 'ic-menu-settings'
    | 'ic-menu-transactions';
  href: string;
}

export default function MenuItem(props: Partial<MenuItemProps>) {
  const { title, icon, active, href } = props;
  const classItem = cx({
    item: true,
    'mb-30': true,
    active: active,
  });
  return (
    <div className={classItem}>
      <div className="me-3">
        <Image src={`/icon/${icon}.svg`} width={25} height={25} alt={icon} />
      </div>
      <p className="item-title m-0">
        <Link href={`${href}`}>
          <a className="text-lg text-decoration-none">{title}</a>
        </Link>
      </p>
    </div>
  );
}
