# API Documentation

## User Registration Endpoint

### POST /user/register

Register a new user in the system.

#### Request Body

```json
{
  "fullname": {
    "firstname": "string",
    "lastname": "string"
  },
  "email": "string",
  "password": "string"
}
```

#### Required Fields

- `fullname.firstname`: User's first name (minimum 3 characters)
- `fullname.lastname`: User's last name (optional, minimum 3 characters if provided)
- `email`: Valid email address
- `password`: Password (minimum 6 characters)

#### Response Status Codes

- `201`: User successfully created
- `400`: Bad request (Invalid input data)
- `409`: Conflict (Email already exists)
- `500`: Internal server error

#### Success Response

```json
{
  "status": "success",
  "message": "User registered successfully"
}
```

#### Error Response

```json
{
  "status": "error",
  "message": "Error description"
}
```

#### Example Usage

```bash
curl -X POST http://localhost:4000/user/register \
-H "Content-Type: application/json" \
-d '{
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "john@example.com",
    "password": "password123"
}'
```

## User Login Endpoint

### POST /user/login

Authenticate a user and return a token.

#### Request Body

```json
{
  "email": "string",
  "password": "string"
}
```

#### Required Fields

- `email`: Valid email address
- `password`: Password (minimum 6 characters)

#### Response Status Codes

- `200`: User successfully authenticated
- `400`: Bad request (Invalid input data)
- `401`: Unauthorized (Invalid credentials)
- `404`: Not found (User not found)
- `500`: Internal server error

#### Success Response

```json
{
  "status": "success",
  "message": "User authenticated successfully",
  "token": "jwt_token"
}
```

#### Error Response

```json
{
  "status": "error",
  "message": "Error description"
}
```

#### Example Usage

```bash
curl -X POST http://localhost:4000/user/login \
-H "Content-Type: application/json" \
-d '{
    "email": "john@example.com",
    "password": "password123"
}'
```

## User Profile Endpoint

### GET /user/profile

Retrieve the authenticated user's profile.

#### Headers

- `Authorization`: Bearer token

#### Response Status Codes

- `200`: User profile retrieved successfully
- `401`: Unauthorized (Invalid or missing token)
- `500`: Internal server error

#### Success Response

```json
{
  "status": "success",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com"
  }
}
```

#### Error Response

```json
{
  "status": "error",
  "message": "Error description"
}
```

#### Example Usage

```bash
curl -X GET http://localhost:4000/user/profile \
-H "Authorization: Bearer jwt_token"
```

## User Logout Endpoint

### GET /user/logout

Log out the authenticated user.

#### Headers

- `Authorization`: Bearer token

#### Response Status Codes

- `200`: User logged out successfully
- `401`: Unauthorized (Invalid or missing token)
- `500`: Internal server error

#### Success Response

```json
{
  "status": "success",
  "message": "Logged out successfully"
}
```

#### Error Response

```json
{
  "status": "error",
  "message": "Error description"
}
```

#### Example Usage

```bash
curl -X GET http://localhost:4000/user/logout \
-H "Authorization: Bearer jwt_token"
```
