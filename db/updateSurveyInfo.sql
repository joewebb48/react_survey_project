UPDATE survey SET 
title = $1,
subtitle = $2
WHERE survey_id = $3;