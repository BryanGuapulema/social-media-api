###
/*
NOTE: Not found errors to be returned with 404 status and response as:
{
    "Error": "Not found"
}
All formats have to be matched to be scored against test cases.
*/

### GET @ /api/posts.✅
/*
GET @ /api/posts
Returns all posts
Expected format:
{
    "message": "success",
    "data": [
        {
            "id": 1,
            "title": "Test title",
            "description": "Test description 1",
            "user": "Test User 2",
            "createdAt": "2021-09-16 16:00:00"
        }
    ]
}
*/



### GET @ /api/posts/id 🟡
/*
GET @ /api/posts/id
Returns single post
Expected Format:
{
    "message": "success",
    "data": {
        "id": 2,
        "title": "Test title url 2",
        "description": "Test description 2",
        "user": "Test User 3",
        "createdAt": "2021-09-16 17:00:00",
        "likes": 1,
        "comments": [
            {
                "comment": "Post comment",
                "name": "Test User 1"
            }
        ]
    }
}
NOTE: If intermediate tasks have been omitted then return comments as an empty array and likes as 0.
*/


### POST @ /api/posts ✅
/*
POST @ /api/posts
Add a post
Req body Example:
{
    title: "Unit test title",
    description: "Unit test"
}
Response:
{
    "message": "success"
}
*/

### PUT @ api/posts/id ✅
/*
PUT @ api/posts/id
Update a single post
Req body:
{
    title: "Unit test title",
    description: "Unit test"
}
Response:
{
    "message": "success"
}
*/


### DELETE @ api/posts/id ✅
/*
DELETE @ api/posts/id
Delete a post
Response:
{
    "message": "deleted"
}
*/


### POST @ api/follow/id ✅
/*
POST @ api/follow/id
Follow user with id. Follow request to be sent by user with id 1.
Empty body.
Response:
{
    "message": "success"
}
*/


### POST @ api/unfollow/id  ✅
/*
POST @ api/unfollow/id
UnFollow user with id. UnFollow request to be sent by user with id 1.
Empty body.
Response:
{
    "message": "success"
}
*/



### GET @ api/user/id ✅
/*
GET @ api/user/id
Get user with no of followers and following.
Responnse Example:
{
    "message": "success",
    "data": {
        "id": 2,
        "name": "Test User 2",        
        "follows": 1,
        "followers": 2
    }
}
*/


### @ api/like/id ✅
/*
POST @ api/like/id
Like post with id. Like is made by user with id 1.
Empty body.
Response:
{
    "message": "success"
}
*/


### @ api/unlike/id ✅
/*
POST @ api/unlike/id
UnLike post with id. UnLike is made by user with id 1.
Empty body.
Response:
{
    "message": "success"
}
*/


### POST @ /api/comment/id
/*
POST @ /api/comment/id
Comment on post with id. Comment is made by user with id 1
Request Body:
{
    comment: "Post comment"
}
Response:
{
    "message": "success"
}
*/
