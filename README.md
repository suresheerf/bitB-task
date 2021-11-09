# A simple api for user creation , reading , update nas deletion.

# To run dev server there should be a .env file

```
PORT=3000
NODE_ENV=development
DATABASE=mongodb://localhost:27017/userdb

```

# one can run development server

```
npm run dev
```

# To create new user, post to "/user" endpoint .request body should contain.

```
{
    "name":"name",
    "username":"username",
    "password":"password"
}
```

# To get user details, send get request to "/user" endpoint. request should contain

# "username" query parameters

```
/user?username=username
```

# To update user details ,send patch request to "/user" endpoint. you can only update name & username fields of a user , not the password.

# request should contain user_id of the user

```
/user?id=618a5dcb73af0b45dda79756
```

# To delete the user , send delete request to "/user" endpoint.

```
/user?id=618a5dcb73af0b45dda79756
```

# published postman collection

[ https://documenter.getpostman.com/view/16750472/UVC5EnQ3 ]
