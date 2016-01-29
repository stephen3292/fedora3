# Schema

## votes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
value       | string    | not null, default: 0
votable_id  | integer   | not null, foreign key (references users), indexed
user_id     | integer   | not null, foreign key (references users), indexed
archived    | boolean   | not null, default: false

## answers
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
question_id | integer   | not null, foreign key (references questions), indexed
body        | text      |
title       | string    | not null

## replies
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
answer_id   | integer   | not null, foreign key (references answers), indexed
body        | string    | not null

## questions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
title       | string    | not null
body        | text      | not null

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
question_id | integer   | not null, foreign key (references questions), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key

username        | string    | not null, indexed, unique
description     | string    | not null
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
