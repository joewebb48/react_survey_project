SELECT s.*
FROM survey s
JOIN admin a on a.admin_id = s.admin_id
WHERE a.admin_id = $1;