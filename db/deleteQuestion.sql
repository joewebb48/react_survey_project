DELETE FROM questions
WHERE question_id = $1;
-- returning *;