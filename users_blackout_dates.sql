select users.id as id, users.first_name, users.last_name, characters.name as character, users_productions.blackout_dates from users
join users_productions on (users.id = users_productions.user_id)
join users_characters on (users.id = users_characters.user_id)
join characters on (users_characters.character_id = characters.id);
