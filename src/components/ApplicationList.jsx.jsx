import ApplicationCard from "./ApplicationList.jsx";

export default function ApplicationList({ applications }) {
  // Create a copy of the list and put the newest applications first
  const newestFirst = [...applications].sort((app1, app2) => {
    return app2.appliedOn.localeCompare(app1.appliedOn);
  });

  return (
    <section className="job-list">
      {newestFirst.map((app) => (
        <ApplicationCard key={app.id} application={app} />
      ))}
    </section>
  );
}
