# Cigna Health Insurance I

The first time I worked with Cigna was for it's newest app for backend insurance. As a fullstack engineer, I wore many hats and sometimes worked directly with stakeholders.

Being an enterprise-size app, there were a lot of technologies at play, so I'll break it into chunks and get technical:

## Frontend

For our frontend, we used React (TypeScript), MUI, and Apollo. The whole team was full-stack, and we worked with every piece of the app in every way, from componentization, to bug handling, to writing tests.

Figma was the translator between design and development, and most of the time we managed to create pixel-perfect renditions of the given designs.

  - I'm really proud of this part because when something was not clear / not possible, we maintained an open line of communication with the designers, and both teams would often learn from each other (willingly, enthusiastically even).

We used Apollo GraphQL for our queries, with a ton of shared hooks. Creating those hooks (among other shared components) was a major time-saver in the long-run.

Finally, we used Jest for testing. At first, we used Snapshots, but waiting 5+ minutes every time you want to commit a change was... not fun. So we removed that, and we made do with enforcing unit tests on every new component.

  - This is another pride point. We unanimously agreed that writing tests is important, but we also agreed that the purgatory of Snapshot testing was not worth it. So we settled on enforced unit testing.
  - Still, the many instances of waiting in the daily development cycle were a bit of a pain point..

## Backend

On the backend we used a lot of AWS. This used to include DynamoDB but we have since migrated to our own PostgresQL solution. Still, we used API Gateway and Lambdas like anyone else to access and modify data.

It's a health insurance company, so there were a ton of tables, joins, and views to be made. But also, it's a health insurance company, so I can't go too into detail.

As I mentioned, we connected the endpoints with GraphQL, but the Lambdas themselves used JS and supporting SQL libraries. Since Cigna has multiple teams and sources, there were multiple libraries to use.

  * This was a pain point as well. Sometimes, a lack of cross-team communication would cause completely avoidable development hiccups. Often we would be unable to make smooth changes because another team had a dependancy, or vice-versa. The agreed-upon solution was separation of responsibilities (repos, endpoints, etc), but that was slow-going.

Though confusing at first, since we were dealing with highly financial data at large volumes, it felt like an intro to analytics. I'm not sure if it meets the standard of Big Data, but we wrote some truly fearsome functions and queries.

## Conclusion

Working with Cigna was fun! There were a few new topics, but I also became much sharper in what I already knew. It also helped me realize, as well as I can work solo, I much prefer working with a good team. Everyone (including non-technical members) was very good at their craft! We meshed very well, and I cannot sing their praises enough.