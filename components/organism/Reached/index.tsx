import ReachedItem from '../../molecules/ReachedItem';
import HorizontalLine from './HorizontalLine';
import VerticalLine from './VerticalLine';

export default function Reached() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <ReachedItem value="290M+" desc="Players Top Up" />
          <VerticalLine />
          <HorizontalLine />
          <ReachedItem value="12.500" desc="Games Available" />
          <HorizontalLine />
          <VerticalLine />
          <ReachedItem value="99,9%" desc="Happy Players" />
          <HorizontalLine />
          <VerticalLine />
          <ReachedItem value="4.7" desc="Rating Worldwide" />
        </div>
      </div>
    </section>
  );
}
