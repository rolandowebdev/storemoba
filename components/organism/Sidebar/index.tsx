import Profile from './Profile';
import Footer from './Footer';
import MenuItem from './MenuItem';

interface SidebarProps {
  activeMenu: 'overview' | 'transactions' | 'settings';
}

export default function Sidebar(props: SidebarProps) {
  const { activeMenu } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            href="/"
            title="Overview"
            icon="ic-menu-overview"
            active={activeMenu === 'overview'}
          />
          <MenuItem
            href="/member/transactions"
            title="Transactions"
            icon="ic-menu-transactions"
            active={activeMenu === 'transactions'}
          />
          <MenuItem href="/member" title="Messages" icon="ic-menu-messages" />
          <MenuItem href="/member" title="Card" icon="ic-menu-card" />
          <MenuItem href="/member" title="Rewards" icon="ic-menu-rewards" />
          <MenuItem
            href="/member/edit-profile"
            title="Settings"
            icon="ic-menu-settings"
            active={activeMenu === 'settings'}
          />
          <MenuItem href="/sign-in" title="Log Out" icon="ic-menu-logout" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
