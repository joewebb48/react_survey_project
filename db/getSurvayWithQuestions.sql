-- select s.title as survey_title, s.subTitle, q.type_id, q.title as question_title, 
-- o.content, o.options_id as _id
-- from questions q
-- join survey s on s.survey_id = q.survey_id
-- join options o on o.question_id = q.question_id
-- WHERE s.survey_id = $1;
-- l
-- l
-- l
select s.title as survey_title, s.subTitle, q.title as question_title, 
q.question_id, q.type_id
from questions q 
join survey s on s.survey_id = q.survey_id
WHERE s.survey_id = $1;




-- select s.title as survey_title, s.subTitle, q.title as question_title, 
-- q.question_id, q.type_id, o.content
-- from questions q 
-- join survey s on s.survey_id = q.survey_id
-- join options o on o.question_id = q.question_id
-- WHERE s.survey_id = $1;