select concat(users.first_name, ' ', users.last_name) as name, characters.name as character from users
join users_characters on (users.id = users_characters.user_id)
join characters on (users_characters.character_id = characters.id)
join users_productions on (users_productions.user_id = users.id)
where (users_productions.production_id = 1);