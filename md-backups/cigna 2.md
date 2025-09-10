# Cigna Health Insurance II

The second time I worked with Cigna, it was a change of pace from frontend-oriented development to heavy backend and AWS Cloud management.

I made contributions to the frontend codebase and even the UX considerations, but since I was more involved with the backend, that's what I'll expand upon.

## Backend

This time I was part of the core team that managed the tables other teams relied upon. In addition to any necessary data changes, I also handled migrations and piipeline support.

My main work was in PostgreSQL and Node.js, adding tables and columns where necessary, then adding / modifying Lambdas for increased functionality.

since our tables were critical to other teams, I also handled correspondence and (when necessary) coordination of changes that affect multiple teams.

Other tasks included managing IAM permissions, creating/modifying Teradata CRON jobs, and updating our build pipeline.

  * That last part is something I'm proud of. By updating our CRON jobs and leveraging DataFrames and S3, I was able to bring our full build times from 6+ hours ~1 hour. This allowed more flexibility for ALL developers on my team when iterating or undoing a mistake.

Learning to maximize use of views, joins and chained `with as` statements was a fun experience.

## Conclusion

I enjoyed working with Cigna this time too! The heavy emphasis on backend was intimidating at first, but I found it surprisingly fun to optimize queries and solve problems with database-oriented approach. It wasn't too isolating either. There were many moments where another developer and I would tackle a problem from both sides.