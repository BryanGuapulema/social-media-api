###Social media API

Build an API for a social media platform in the Node web app. The API should support features like getting a user profile, following a user, uploading a post, deleting a post, liking a post, unlike a liked post, and commenting on a post. 

Technical specifications

Tech stack 

Backend: NodeJS 

Ports 
    Backend: 8000 


Implementation details
Write a backend in the tech stack mentioned below that exposes an API that returns the necessary response.
	 Use API /api/posts endpoint to POST the given parameters in a cart to the database:
		 title: Title of the post 
		desc: Description of the post 
		author: Author of the post. The default value should be 1, as requests are made only with user id 1. 
	Use API /api/posts endpoint to GET the given parameters in a cart to the database:
		 id: ID of the post 
		title: Title of the post 
		desc: Description of the post 
		author: Author of the post. The default value should be 1, as requests are made only with user id 1. 
		created_at: Date and time when the post was created 
		comments: Array of comments, for the particular post 
		likes: Number of likes for the particular post 
	Use API /api/comment/{id} endpoint to POST the given parameters in a Product to the database: 
		comment: Comment for the particular post where id is the post id of the particular post 

Note: Requests will be made by the user with id {1}. Dummy users are present in the database.

API Endpoints 
	GET /api/user/{id} would return a user profile populated with a number of followers. ⛔
	GET /api/posts would return all posts sorted by post time ✅. 
	GET api/posts/{id} would return a single post populated with its number of likes and comments ⛔
	POST api/posts/ would add a new post. ✅
	PUT api/posts/{id} would update a post with {id} ✅
	DELETE api/posts/{id} would delete post with {id} ✅
	POST api/follow/{id} would follow user with {id} 
	POST api/unfollow/{id} would unfollow user with {id} 
	POST /api/like/{id} like a post with {id} ✅
	POST /api/unlike/{id} would unlike post with {id} ✅
	POST /api/comment/{id} add comment for post with {id} 
Tables 
	User 
	Posts 
	Follows
	Likes 
	Comments 

Testing instructions 
	To run any additional commands, use the Terminal. For example, navigate to the '/backend' directory in the Terminal and use the command: npm run test. 
	Upon clicking the Run code or Submit code buttons, access the Build log or Execution log to review comprehensive details pertaining to the test outcomes. 

Submission instructions
	Clicking Run code compiles and runs your code against sample tests, but it won't give scores. 
	Clicking Submit code runs your code against multiple test cases, assessing different scenarios holistically and the score will be assigned accordingly. So, make sure your code solves the problem statement correctly. 

Backend Nodejs