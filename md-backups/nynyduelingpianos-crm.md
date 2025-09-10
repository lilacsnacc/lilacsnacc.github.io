# NYNY Dueling Pianos CRM

CRM (Customer Relationship Management) database written in plain vanilla JS with an AWS backend. It's been active since year one, and is now three years in the making. With every rewrite it's gotten more performant and fully featured. 

As of now, it features a two searchable tables with filtering, WordPress / Gravity form integration,  Quickbooks integration, and more. More details below:

## AWS

From the start, this project was written with AWS in mind.

- I created a CodeCommit repo and set up CI/CD, serving with Route53 from a dedicated S3 bucket.
- The user accesses and modifies data through API Gateway endpoints connected to Lambdas
	- As well, each endpoint method has an authentication function that runs first
- The Lambdas, in turn, access and modify DynamoDB tables that host the actual data
	- fun fact: when I first started, I made a different lambda for each request method 😅 don't worry, I've learned since then
- And of course, there was also a lot of Role and IAM work in the background

## Quickbooks

The CRM works well, but it doesn't have the financial capabilities of QuickBooks, so the client needed an invoice integration. It is a one-way, multi-step process that eventually updates the client invoice on QuickBooks with data from the CRM. The client still goes through the API Gateway endpoint to reach the Lambda that connects with the QuickBooks API.

## WordPress / Gravity

The client has their own website made in WordPress with a Gravity contact form. But it was tiresome having to manually notice each email, collect the data, and input it into the CRM. So we added an integration in WP to automatically gather the data and send it to the CRM. We also added spam filtering, which prevents a ton of unwanted data from appearing. Even this process goes through the API Gateway -> Lambda pipeline,

## More Fun Stuff

some other fun things I've done include:

- function to summarize the details and generate a signed PDF contract
- live multi-person editing on one of the tables
- automated client offboarding emails

## Conclusion

Using vanilla JS was quite the personal challenge, and there's a lot I would have done differently (like creating separate metadata tables for viewing all of the data efficiently), but this was a very good experience!! Since the project deals with professional client data, I cannot show everything, but if you'd like, I'd love to give you a guided tour of the code.