import Sidebar from '../../../components/organism/Sidebar';
import TransactionsContent from '../../../components/organism/TransactionsContent';

export default function Transactions() {
  return (
    <section className="transactions overflow-auto">
      <Sidebar activeMenu="transactions" />
      <TransactionsContent />
    </section>
  );
}
