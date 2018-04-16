select users.first_name, users.last_name, characters.name as character, scenes.name as scene, users_productions.blackout_dates from users
join users_characters on (users.id = users_characters.user_id)
join characters on (users_characters.character_id = characters.id)
join scenes_characters on (scenes_characters.character_id = characters.id)
join scenes on (scenes.id = scenes_characters.scene_id)
join users_productions on (users_productions.user_id = users.id);