create extension if not exists "uuid-ossp";
create table if not exists product (
	id uuid not null default uuid_generate_v4() primary key,
	title text not null,
	description text,
	price integer
);
create table if not exists stock (
	product_id uuid not null references product(id),
	"count" integer
);