import { STATUSES, STATUS_LABELS } from "../statuses";

// Count all applications and group them by status
export default function Summary({ applications }) {
  return (
    <section className="summary">
      <div className="summary-tile">
        <strong>{applications.length}</strong>
        <span>Total</span>
      </div>

      {STATUSES.map((status) => {
        const count = applications.filter(
          (app) => app.status === status
        ).length;

        return (
          <div className="summary-tile" key={status}>
            <strong>{count}</strong>
            <span>{STATUS_LABELS[status]}</span>
          </div>
        );
      })}
    </section>
  );
}
