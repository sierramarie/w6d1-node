1.<!--How many users are there?-->

select count(*) from users;
50.

2.<!--What are the 5 most expensive items?-->

select * from items order by items.price asc;
Small Cotton Gloves, Small Wooden Computer, Awesome Granite Pants, Sleek Wooden Hat, Ergonomic Steel Car. 


3.<!--What's the cheapest book? (Does that change for "category is exactly 'book'" 
versus "category contains 'book'"?)-->

select * from items where category like '%book%' order by price;
Ergonomic Granite Chair 

select * from items where category='%book%' order by price;
Ergonomic Granite Chair 

(Does not change.)



4.<!--Who lives at "6439 Zetta Hills, Willmouth, WY"? Do they have another address?-->

select distinct user_id from addresses where street like '%6439%'; 
40 

 select first_name, last_name from users where id like '%40%';
 Corrine Little


5.<!--Correct Virginie Mitchell's address to "New York, NY, 10108".-->

update addresses set city = 'New York, NY, 10108' where user_id = 41;


6.<!--How much would it cost to buy one of each tool?-->
select sum(price) from items where category like '%tools%';
$46,477.00


7.<!--How many total items did we sell?-->
select sum(quantity) from orders;
2,125

8.<!--How much was spent on books?-->
select sum(price) from items where category like '%books%';
59,241


9.<!--Simulate buying an item by inserting a User for yourself and an Order for that User.-->

select * from users;
insert into users (id, first_name, last_name, email) values ('51', 'Sierra', 'Roberts', 'email@email.com');

select * from addresses;
insert into addresses (user_id, street, city, state, zip) values ('51', 'Appletree Lane', 'Seattle', 'WA', '46142');

select * from orders;
insert into orders (user_id, item_id, quantity, created_at) values ('51', '99', '24', '2015-02-09 00:40:32.432378'); 