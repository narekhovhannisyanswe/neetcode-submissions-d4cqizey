-- Write your query below
select name
from customers
full join orders on orders.customer_id = customers.id
where customer_id is null