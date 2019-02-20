SELECT s.*
from survey s
JOIN admin a on s.admin_id = a.admin_id
where s.survey_id = $1;