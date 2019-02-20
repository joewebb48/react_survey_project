INSERT INTO admin (userName, email, password)
VALUES (${userName}, ${email}, ${hash})
returning *;