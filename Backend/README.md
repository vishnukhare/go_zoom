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
