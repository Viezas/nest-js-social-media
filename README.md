# Social media API

In this project, we are going to create an API for an Instagram like social media.

---

## Database

For more convenience, you can find an .sql file which contain our database already filled with data
```
database/sociale_media_api.sql
```
Note that no videos or images will be actually uploaded on the server.

---

## Expected resources and features

### User

Since it's a social media, of course there will be users

    Fields :
        - id, first_name, last_name, username, email, email_verified_at, password, phone, pfp_url, remember_token, created_at, updated_at

    Expected features related to a user:
        - Likes
            - A user can like a post or a post comment
        - Followers
            - A user can follow another user
        - Comments
            - A user can comment a post

### Category

With this resource, we can categorize our posts

    Fields :
        - id, name, created_at, updated_at

### Post

In an Instagram like social media, a post is basically a video posted by a user

    Fields :
        - id, user_id, category_id, video_url, title, description, created_at, updated_at

### Comment

As said earlier, a user has the ability to comment a post.

    Fields :
        - id, user_id, post_id, body, created_at, updated_at

### Like (bonus)

In any social media, there is a like feature. In our case, since the user can like either a post or a comment, this resource is a polymorphic resource

    Fields :
        - id, user_id, likeable_type, likeable_id, created_at, updated_at