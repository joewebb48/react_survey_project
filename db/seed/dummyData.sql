insert into admin(
userName,
email,
password,
) values (
    'JoeDirt',
    'joe@dirtmail.com',
    'password'
)


insert into survey (
admin_id,
title,
subtitle,
date,
active
)values(
    1,
    'my first dummy data insert',
    'subtitle words',
    '2-12-19',
    true
)


insert into type(
type
)values (
    'DropDown'
)


-- // insert multiple questions

insert into questions (
survey_id,
title,
type_select id
) values (
    1,
    'question title 1',
    1
)

--// insert multiple options

insert into options(
content,
correct,
question_id
) values (
    'option 1.',
    true,
    1
)