import OverviewContent from '../../components/organism/OverviewContent';
import Sidebar from '../../components/organism/Sidebar';

export default function Member() {
  return (
    <section className="overview overflow-auto">
      <Sidebar />
      <OverviewContent />
    </section>
  );
}
