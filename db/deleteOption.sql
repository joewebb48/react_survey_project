delete from options
where options_id = $1;

-- select content, options_id from options o
-- join questions q on q.question_id = o.question_id;