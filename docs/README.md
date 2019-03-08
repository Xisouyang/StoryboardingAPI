# StoryboardingAPI

The **Storyboarding API** allows the user to submit and find different concepts of stories for free. This API sends back JSON with important elements of a story such as plot, conflict, resolution and more.


## Getting Started

These instructions will get help you make a call to the API to retrieve the information. See instructions for notes on how to request the project on your own personal project.

## Authentication

Use [Postman](https://www.getpostman.com/) to *Sign In* and *Log In* to the API

**POST URl:** __https://storyboarding-api.herokuapp.com/auth/sign-up__

Sign up with a **username**, **password**, and **email**.

**POST URl:** __https://storyboarding-api.herokuapp.com/auth/login__

Login with your **username** and **password**.

### User Schema

| Key         | Type         | Description                                                           |
|-------------|--------------|-----------------------------------------------------------------------|
| username    |    string    | The user's name                                                       |
| password    |    string    | The user's password                                                   |
| email       |    string    | The user's email                                                      |

## Requests

**GET all stories URL** __https://storyboarding-api.herokuapp.com/api/users/stories__
```JSON
{
"_id": "5c8143e08d44700d4c4bc04a",
"genre": "Action",
"plot": "sample plot",
"conflict": "sample conflict",
"resolution": "sample resolution",
"character": "sample character",
"setting": "sample setting",
"author": "5c813f261907480d21fbd1ce",
"__v": 0
},
{
"_id": "5c81e47c7f4ab70884d7ec19",
"genre": "Horror",
"plot": "sample plot",
"conflict": "sample conflict",
"resolution": "sample resolution",
"character": "sample character",
"setting": "sample setting",
"author": "5c813e951907480d21fbd1cc",
"__v": 0
},
{
"_id": "5c81e52acafce90895b8eeac",
"genre": "Mystery",
"plot": "sample plot",
"conflict": "sample conflict",
"resolution": "sample resolution",
"character": "sample character",
"setting": "sample setting",
"author": "5c813f261907480d21fbd1ce",
"__v": 0
},
{
"_id": "5c81eb7718c059091437aeec",
"genre": "Romance",
"plot": "sample plot",
"conflict": "sample conflict",
"resolution": "sample resolution",
"character": "sample character",
"setting": "sample setting",
"author": "5c813f261907480d21fbd1ce",
"__v": 0
}
```
