select productions.name as production, dates from productions
join users_productions on (productions.id = users_productions.production_id)
where users_productions.user_id = 4;
