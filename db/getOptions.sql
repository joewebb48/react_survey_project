select content, options_id from options o
join questions q on q.question_id = o.question_id
where o.question_id = $1;
