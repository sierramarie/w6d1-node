--insert into users (name, username, password, photo_url, created_at, updated_at) values ('Cyrus Schneider', 'cyrus', null, 'http://robohash.org/cyrus', localtimestamp, localtimestamp)

--update users set photo_url='http://unsplash.it/600/600?random' where id=2;

--select * from users where id=1

--select id, name, username, photo_url, created_at, updated_at from users where created_at > '2017-03-06 10:30:00'


--select id, name as fullname from users order by id desc
--select id, name as fullname from users order by id asc


--select * from messages join users on users.id = messages.user_id

--insert into messages (body, user_id) values ('Sorry it took me a while to respond', 1)


--select
--	messages.body,
--	users.username
--from messages
--join users on users.id = messages.user_id
--where messages.body like '%H%'
--order by users.username


--insert into messages (body, user_id) values ('You been hackt', 0)

--select * from messages

--delete from messages where id=5

--select count(*) as message_count, user_id from messages group by user_id

--select * from messages where body like '%H%' and id=1 limit 1

--select * from messages limit 2



