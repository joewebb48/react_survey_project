select s.title as survey_title, s.subTitle, q.type_id, q.title as question_title, o.content, o.otions_id as _id
from questions q
join survey s on s.survey_id = q.survey_id
join options o on o.question_id = q.question_id
WHERE s.survey_id = $1;