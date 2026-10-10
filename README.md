# Job Application Tracker — Take-Home #1 starter

A React application for tracking job applications. It displays a summary of 
applications by status and a list of job applications,
including company names, job titles, application statuses, dates, sources, and notes.

This branch is **a scaffolded project — the data, the stylesheet and an entry point**.

Full instructions and the grading rubric: <https://go.prmf.org/355/takehomes/1>

## Run it

```bash
npm install
npm run dev
```

## What you are given

- `src/applications.js` — the applications, already written
- `src/statuses.js` — the status names, labels and a date formatter
- `src/index.css` — every class you need; you should not have to write CSS

## What you add

- Break the page into components, each in its own file
- Render the list with map() and stable keys
- Show a status badge, and hide fields that are empty
- Calculate the summary counts from the data

What I added

- Summary.jsx — Calculates the total applications and counts by status.

- ApplicationList.jsx — Sorts applications newest first and displays them using map() with stable keys.

- ApplicationCard.jsx — Displays application details and hides empty notes and sources.

- StatusBadge.jsx — Displays the status badge using its CSS class and label.


---

Push your work to **your own private repository** and add
**@joshbarcher** as a collaborator. Do not push to this one.
