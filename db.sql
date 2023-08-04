CREATE TABLE orders (
    order_id varchar(30) PRIMARY KEY,
    address varchar(100),
    weight integer,
    total_price integer
);

CREATE TABLE users (
    user_id varchar(30) PRIMARY KEY,
    username varchar(30),
    password varchar
);

CREATE TABLE products (
    product_id varchar(30) PRIMARY KEY,
    title varchar(30),
    description varchar(200),
    cost integer,
    stock_status boolean,
    stock_amount integer
);

CREATE TABLE carts (
    cart_id varchar(30) PRIMARY KEY,
    user_id varchar(30) REFERENCES users(user_id),
    number_items integer,
    total_cost integer
);

CREATE TABLE carts_products (
    cart_id varchar(30) REFERENCES carts(cart_id),
    product_id varchar(30) REFERENCES products(product_id)
);

CREATE TABLE users_orders (
    user_id varchar(30) REFERENCES users(user_id),
    order_id varchar(30) REFERENCES orders(order_id)
);