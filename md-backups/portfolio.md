# My Portfolio!

The portfolio itself has been a big project of mine. Here is a link to the [GitHub repo](https://github.com/lilacsnacc/lilacsnacc.github.io).

If you're on GitHub, you can view the site at [nshabazz.com](nshabazz.com)

For my portfolio site, I tried to show off a bunch of my favorite tech, such as React (TypeScript), Vite, and MUI (MaterialUI).

I also made sure to use AWS technologies, and separately, their new rival, Supabase! There are a few other fun bits, but that's it for the summary. From here it gets technical:

## React, Vite, & MUI:

- I used React because it is a popular library with solid features and principles. I prefer Svelte, but I already have another project showcasing Svelte, and although I could showcase Angular skills, Angular seems to be falling off these days...
- I used Vite because it is the lean, modern alternative to create-react-app, which has a ton of vulnerabilities and hasn't been maintained in years...
  - Next.js was in consideration, but I prefer that for bigger, bulkier projects (think Enterprise)
- MUI was used for its massively helpful premade components. MUI provides the snackbar that pops up, the transition on the project buttons, and almost all of the icons in my portfolio
- Otherwise, I wanted to show an understanding of modern css, UX / UI, and an ability to use libraries such as react-tsparticles

## AWS (Amazon Web Services)

This is a technology I've known for 5 years. If you or your team makes use of AWS, I can help!

- When you send an email through the Contact Me form, that happens via AWS. The classic way would be to set up an API Gateway to a Lambda, but this time I used Lambda with Edge functions! The function is written in Python, and it makes use of Amazon SES to format and send to my personal email.
- I also made sure to use S3 somewhere, since that's always popular. It wasn't super necessary, but I host some of the project metadatas' markdown and images in AWS. The access policy is read-only, with a suitable CORS policy.
  - If I did not use S3, I would just place the assets in the website's public folder

## Supabase

This is a completely new technology to me, and I really enjoyed using it!!

- The metadata for the projects table is hosted in Supabase. I wrote SQL for most of the procedure. Unfortunately, I didn't think of a way to show off deeper SQL knowledge (such as JOIN, VIEW, etc).
- For the multiplayer background, I used Supabase's Realtime service to send the cursor position of other people on the site to each other. each "player" has a div positioned at their cursor - these divs repulse particles from tsparticles, providing a simple but cute interaction.
- I also briefly used the Supabase bucket storage (their answer to S3), but since they have time-limited access URLs I decided to stick with Amazon's storage solution

## Conclusion

All that said, I'm still not done with the site! The finishing touches will include:

- Adding a ton of tests to my components. One thing I would have liked to show off more is that I am familiar with unit testing and integration testing with Jest (I avoid snapshots like the plague).
- Make the project markdowns more exciting. Add some pictures, color, spice!

Otherwise, if there's anything else that piqued your interest let's get in touch! This is my code for my portfolio, so there's no NDA preventing me from showing you.
