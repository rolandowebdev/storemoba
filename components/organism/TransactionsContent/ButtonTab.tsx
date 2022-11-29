import cx from 'classnames';

interface ButtonTabProps {
  title: string;
  active?: boolean;
  dataFilter: string;
}

export default function ButtonTab(props: Partial<ButtonTabProps>) {
  const { title, active, dataFilter } = props;
  const btnClass = cx({
    'btn btn-status rounded-pill text-sm me-3': true,
    'btn-active': active,
  });
  return (
    <a data-filter={dataFilter} href="#" className={btnClass}>
      {title}
    </a>
  );
}
