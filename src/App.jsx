import { applications } from "./applications";
import Summary from "./components/Summary";
import ApplicationList from "./components/ApplicationList";

// Show the summary and application list
export default function App() {
  return (
    <main className="container">
      <header className="site-header">
        <h1>Job Application Tracker</h1>
        <p>Keep track of your job applications.</p>
      </header>

      <Summary applications={applications} />
      <ApplicationList applications={applications} />
    </main>
  );
}
