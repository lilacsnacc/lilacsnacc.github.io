# Dice Versa Games

Took on a role as Lead Developer to remake the website for a boardgame cafe client.

At this point, I had enough leadership and fullstack experience to be confident in the project.

## Design

The design is amazing, and it's largely thanks to Patrick *G*lazer's efforts. He was the designer on the team. For my part, I led by advising in terms of ADA and dev feasability of design. For example, we once considered having a Games catalogue page where we would load all the owned games and fetch all images and do pagination and... It was too much. The conclusion was to simply link to the boardgamegeek page that already lists owned games.

## Frontend

Once design was ready, the two developers (Patrick *F*urbert and I) got to work on the bones of the site. We decided to go with Svelte, since it has had rave reviews. I must say, the reviews were right. We had just started after Svelte 5 was introduced, so after the initial hump of understanding Svelte's rune system, the rest was quite a breeze. Creating components, hooks, and styles was a very intuitive process. It can all be done neatly in one file, the same way you might write regular HTML / CSS / JS.

## Backend / Firebase

Once the bones were ready, we decided to use Firebase as our backend solution. Again, we heard it was much more straightforward to Amplify (Amplify is to AWS as Firebase is to Google Cloud Platform). Again, the reviews were correct, as setting up GitHub CICD to Firebase Hosting was a simple as adding a .yaml file to the codebase. For images we used Firebase Storage, and for data (such as Events and Menu Items), we used Firebase Realtime Database.

Also, we use Firebase Functions to handle email sending and newsletter subscription (making use of the MailChimp API). Firebase Functions was deceptively simple! I found myself trying to follow the AWS process of adding Lambdas, when in practice I could just open `index.js` in the `/functions` folder and get to coding. Definitely a pleasing experience.

Once the website was ready, we switched the domain to Firebase Hosting and added 301 redirects as necessary. A quick sitemap and an update to the robots.txt, and we were all set in terms of SEO.

## Admin Editing

One of the real fun parts of remaking this website is that it is *not* server-side *and not* static. This presented a hurdle in SEO optimization, but we largely overcame it. But what's exciting about that is the ease with which we were able to let CEO do edits on the fly. We use Firebase Authentication with SSO email validation to allow admin privilege.

Most of the data has a default fallback that loads first, then a call is made to Realtime DB. If data has changed from the default, it will show up for all users without even needing to rebuild or redeploy. We also considered making use of the established WebSocket connection to make changes show immediately, but that would be an unnecessary expense and dev time.

Editing capabilities are fully-featured, including image upload and selection, full list modification (add, remove, or reorganize lists), and every bit of input data necessary (colors, prices, titles, etc).

## Conclusion

All in all, this was a fun, satisfying challenge. We created a stylish, modern website for a cafe that we care about, and that's how work should be.