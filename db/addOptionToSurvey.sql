insert into options(
    content,
    correct,
    question_id
)values(
    $1,
    $2,
    $3
)
returning *;