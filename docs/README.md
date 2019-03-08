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

### Queries

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
"author": "5c813f261907480d21fbd1ce"
},
{
"_id": "5c81e47c7f4ab70884d7ec19",
"genre": "Horror",
"plot": "sample plot",
"conflict": "sample conflict",
"resolution": "sample resolution",
"character": "sample character",
"setting": "sample setting",
"author": "5c813e951907480d21fbd1cc"
},
{
"_id": "5c81e52acafce90895b8eeac",
"genre": "Mystery",
"plot": "sample plot",
"conflict": "sample conflict",
"resolution": "sample resolution",
"character": "sample character",
"setting": "sample setting",
"author": "5c813f261907480d21fbd1ce"
},
{
"_id": "5c81eb7718c059091437aeec",
"genre": "Romance",
"plot": "sample plot",
"conflict": "sample conflict",
"resolution": "sample resolution",
"character": "sample character",
"setting": "sample setting",
"author": "5c813f261907480d21fbd1ce"
}
```
**GET all stories from specific user URL:** __https://storyboarding-api.herokuapp.com/api/users/:userId/stories/__

```JSON
{
"_id": "5c81e52acafce90895b8eeac",
"genre": "Mystery",
"plot": "sample plot",
"conflict": "sample conflict",
"resolution": "sample resolution",
"character": "sample character",
"setting": "sample setting",
"author": "5c813f261907480d21fbd1ce"
},
{
"_id": "5c81eb7718c059091437aeec",
"genre": "Romance",
"plot": "sample plot",
"conflict": "sample conflict",
"resolution": "sample resolution",
"character": "sample character",
"setting": "sample setting",
"author": "5c813f261907480d21fbd1ce"
}
```
**GET one story from a specific user URL:** __https://storyboarding-api.herokuapp.com/api/users/:userId/stories/__

```JSON
{
"_id": "5c81eb7718c059091437aeec",
"genre": "Romance",
"plot": "sample plot",
"conflict": "sample conflict",
"resolution": "sample resolution",
"character": "sample character",
"setting": "sample setting",
"author": "5c813f261907480d21fbd1ce"
}
```
### Create

**POST a new story associated with your user URL:** __https://storyboarding-api.herokuapp.com/api/users/:userId/stories/new__

### Update

**PUT a new story associated with your user URL:**
__https://storyboarding-api.herokuapp.com/api/users/:userId/stories/:id__

### Delete

**DELETE a new story associated with your user URL:**
 __https://storyboarding-api.herokuapp.com/api/users/:userId/stories/:id__

**NOTE: Update and Delete routes restricted to Admin for now.**

### Story Schema

| Key         | Type         | Description                                                           |
|-------------|--------------|-----------------------------------------------------------------------|
| genre       |    string    | The story genre                                                       |
| plot        |    string    | The story plot                                                        |
| conflict    |    string    | The story conflict                                                    |
| resolution  |    string    | The story resolution                                                  |
| character   |    string    | The story characters                                                  |
| setting     |    string    | The story setting                                                     |
