This is a online technical interview with few modifications, not an original idea
for a project. 

### Social media API

Build an API for a social media platform in the Node web app. The API should support features like getting a user profile, following a user, uploading a post, deleting a post, liking a post, unlike a liked post, and commenting on a post. 

## Technical specifications

-Tech stack 

-Backend: NodeJS 

-Ports 
    -Backend: 8000 


## Implementation details
Write a backend in the tech stack mentioned below that exposes an API that returns the necessary response.
	 -Use API /api/posts endpoint to POST the given parameters in a cart to the database:
		 title: Title of the post 
		desc: Description of the post 
		author: Author of the post. The default value should be 1, as requests are made only with user id 1. 
	-Use API /api/posts endpoint to GET the given parameters in a cart to the database:
		 id: ID of the post 
		title: Title of the post 
		desc: Description of the post 
		author: Author of the post. The default value should be 1, as requests are made only with user id 1. 
		created_at: Date and time when the post was created 
		comments: Array of comments, for the particular post 
		likes: Number of likes for the particular post 
	-Use API /api/comment/{id} endpoint to POST the given parameters in a Product to the database: 
		comment: Comment for the particular post where id is the post id of the particular post 

## API Endpoints 
	1. GET /api/user/{id} would return a user profile populated with a number of followers.                                                   ✅
	2. GET /api/posts would return all posts sorted by post time ✅. 
	3. GET api/posts/{id} would return a single post populated with its number of likes and comments                                                 ✅
	4. POST api/posts/ would add a new post.                     ✅
	5. PUT api/posts/{id} would update a post with {id}          ✅
	6. DELETE api/posts/{id} would delete post with {id}         ✅
	7. POST api/follow/{id} would follow user with {id}          ✅
	8. POST api/unfollow/{id} would unfollow user with {id}      ✅
	9. POST /api/like/{id} like a post with {id}                 ✅
	10. POST /api/unlike/{id} would unlike post with {id}        ✅
	11. POST /api/comment/{id} add comment for post with {id}    ✅

## Tables 
	-User      ✅
	-Posts     ✅
	-Follows   ✅
	-Likes     ✅
	-Comments  ✅
