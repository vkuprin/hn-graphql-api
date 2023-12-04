# Fullstack Engineer Quest - Backend

## ✅ **Instructions for Your Quest:**

- Complete the quest and submit your solution. You’re welcome to submit it as soon as you are done, we evaluate submissions continuously.
- Email the solution to us by sending a single zip-file with the source code (without `node_modules` folder). If you have issues sending it as an attachment, please use a service like [wetransfer](http://wetransfer.com) to upload the zip and send the download link.
- After you hand in the challenge, we will review your submission and get back to you with next steps by email.

## ⛰ The **Quest: An enhanced interface to a news source**

*(The following is entirely made up for the purpose of this quest)*

**Intro**

Ycombinator has made a large investment in Uizard and is requesting a few new features. The leadership is especially in love with their [Hacker News](https://news.ycombinator.com/) and has asked to include the latest news into Uizard’s editor. Our designers have come up with a little expandable UI element that can display news in our editor but our editor engineers requested a better interface to the data.

To facilitate the integration you are tasked with implementing a service that acts as a layer between the source endpoint and our internal services and provides additional features.

**Your data source:**

You are given two endpoints to fetch data from. One for a list of top stories and one for individual story details. The latter takes a story ID as argument which can be found in the top stories response.

- (A) Top stories:
  GET https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty
- (B) Individual story details:
  GET https://hacker-news.firebaseio.com/v0/item/{STORY_ID}.json?print=pretty

**Your service should provide the following:**

- Expose a proxy API serving the news data to our internal services
- Each news item in a response should contain all story details as provided by (B)
- The following endpoints must be available:
    - *recent*: A list of the 10 most recent top stories by “time”
    - *popular*: List of the 10 highest rated stories by “score”
    - *highlight*: Show a new, random story every hour. Repeated queries return the same story for one hour after which a new story is the highlight.
      The response of this endpoint should additionally include the HTML <meta> description of the source article (will have to fetch ”url”)
    - *refresh*: When *******refresh******* is called, your server should immediately refetch the data from the two source endpoints, (A) and (B), so that other requests deliver the latest data.
      *********highlight********* should also show a new story now
- An instance of your service should fetch data from the source endpoints only once every 5 minutes and whenever *************refresh************* is called internally.

It is not expected to implement any functionality beyond this list, e.g. authorisation mechanisms.

**Your submission should include:**

- An api server in Node.js/Typescript exposing a GraphQL or pure REST interface. *If you have experience in GraphQL, please use it*
- If you create a REST API, please include a brief OpenAPI spec of your endpoints (just technical details, no wordy descriptions needed)
- If you’re comfortable with TypeScript, we encourage you to use it, but it is not a requirement
- Please include a readme that documents how to run your code

Feel free to take some shortcuts, the output should be a demo of your skills, not a production-ready deliverable. You can use the readme to tell us about shortcuts if you like.