# Brewery Review System Backend

## Description

The Brewery Review System Backend is a Node.js application that provides backend functionality for managing brewery reviews. It includes user authentication, brewery entry creation and management, and interaction with a MongoDB database.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Endpoints](#endpoints)
4. [Authentication](#authentication)
5. [Database](#database)

## Installation

To install and run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set environment variables:**

   Create a `.env` file in the root directory and add the things like this:

   ```plaintext
   PORT=3000
   DB_URL=mongodb://localhost:27017/brewery-review-system
   JWT_SECRET=your_jwt_secret
   ```

   Replace `your_jwt_secret` with a secure string for JWT encryption.

4. **Start the server:**

   ```bash
   npm start
   ```

   The server should now be running on `http://localhost:3000`.

## Usage

This backend provides API endpoints to manage brewery reviews. Integrate with a frontend or test using API client tools like Postman or Insomnia.

## Endpoints

### Authentication

#### Register User

- **POST** `/api/auth/register`

  Registers a new user.

  Request body:
  ```json
  {
    "username": "example_user",
    "email": "user@example.com",
    "password": "password"
  }
  ```

  Response:
  ```json
  {
    "token": "jwt_token",
    "username": "example_user"
  }
  ```

#### Login User

- **POST** `/api/auth/login`

  Logs in a user.

  Request body:
  ```json
  {
    "email": "user@example.com",
    "password": "password"
  }
  ```

  Response:
  ```json
  {
    "token": "jwt_token",
    "username": "example_user"
  }
  ```

### Brewery Entries

#### Create Entry

- **POST** `/api/breweries`

  Creates a new entry for a brewery.

  Request body:
  ```json
  {
    "breweryId": "brewery_id",
    "rating": 4,
    "description": "Great brewery!",
    "reviewerName": "John Doe",
    "reviewerProfilePic": "url_to_profile_pic"
  }
  ```

  Response:
  ```json
  {
    "_id": "entry_id",
    "breweryId": "brewery_id",
    "rating": 4,
    "description": "Great brewery!",
    "reviewerName": "John Doe",
    "reviewerProfilePic": "url_to_profile_pic",
    "date": "formatted_date",
    "likes": 0,
    "dislikes": 0
  }
  ```

#### Get Entries

- **GET** `/api/breweries/:id`

  Retrieves all entries for a specific brewery.

  Response:
  ```json
  [
    {
      "_id": "entry_id",
      "breweryId": "brewery_id",
      "rating": 4,
      "description": "Great brewery!",
      "reviewerName": "John Doe",
      "reviewerProfilePic": "url_to_profile_pic",
      "date": "formatted_date",
      "likes": 0,
      "dislikes": 0
    },
    {
      "_id": "another_entry_id",
      "breweryId": "brewery_id",
      "rating": 5,
      "description": "Amazing beer selection!",
      "reviewerName": "Jane Smith",
      "reviewerProfilePic": "url_to_profile_pic",
      "date": "formatted_date",
      "likes": 0,
      "dislikes": 0
    }
  ]
  ```

#### Get Entry by ID

- **GET** `/api/breweries/entry/:id`

  Retrieves a specific brewery entry by ID.

  Response:
  ```json
  {
    "_id": "entry_id",
    "breweryId": "brewery_id",
    "rating": 4,
    "description": "Great brewery!",
    "reviewerName": "John Doe",
    "reviewerProfilePic": "url_to_profile_pic",
    "date": "formatted_date",
    "likes": 0,
    "dislikes": 0
  }
  ```

#### Update Entry

- **PUT** `/api/breweries/:id`

  Updates an existing brewery entry by ID.

  Request body:
  ```json
  {
    "rating": 5,
    "description": "Updated review!",
    "likes": 10,
    "dislikes": 2
  }
  ```

  Response:
  ```json
  {
    "_id": "entry_id",
    "breweryId": "brewery_id",
    "rating": 5,
    "description": "Updated review!",
    "reviewerName": "John Doe",
    "reviewerProfilePic": "url_to_profile_pic",
    "date": "formatted_date",
    "likes": 10,
    "dislikes": 2
  }
  ```

### Database

The project uses MongoDB as the database. Ensure MongoDB is installed and running locally or update `DB_URL` in the `.env` file accordingly.
