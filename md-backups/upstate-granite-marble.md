# Upstate Granite Marble Quality Tracker

Quality and Event tracking webapp written in plain JS and Postgres - a fully on-prem architecture, commissioned and owned by the Upstate Granite Marble.

The app is meant to track cost and frequency of negative events in the business's day-to-day operations and material usage. It works as both an event log and a cumulative data analysis tool, capable of generating historical reports and trends.

## NodeJS + PostgreSQL

Since this was to ba an on-prem, intranet-only offering, and the client had already secured a main server; I decided to host the webapp from the main serve with a Postgres DB.

I created a custom Node server (persisted by PM2) to direct requests between SQL endpoints and static files. The client sees much potential in the app, so I was careful to make the internal architecture easily extensible.

I greatly benefitted from creating a single, standardized way to connect and query the database. Whenever the client greenlighted a new analysis feature, I could focus on building just that query and add it to the list of available APIs.

## Conclusion

It's always a good feeling to get a project done from top to bottom. This project reinforced my skill with Postgres, and prepped me for my next job at Cigna. If you'd like a demo of the project, or to see the code that makes it tick, do get in touch! ^_^
