import { STATUS_LABELS } from "../statuses";
// Display the application's status using its CSS class and label
export default function StatusBadge({ status }) {
  const badgeClass = `badge badge-${status}`;

  return <span className={badgeClass}>{STATUS_LABELS[status]}</span>;
}
