create database sistema;
use sistema;
create table categoria(
    cat_codigo int not null auto_increment,
    cat_descricao varchar(100) not null,
    constraint pk_categoria primary key(cat_codigo)
);

create table produto(
    prod_codigo int not null auto_increment,
    prod_descricao varchar(100) not null,
    prod_precoCusto decimal(10,2) not null default 0,
    prod_precoVenda decimal(10,2) not null default 0,
    prod_dataValidade DATE,
    prod_qtdEstoque decimal(10,2) not null default 0,
    prod_cat_cod int not null,
    constraint pk_prod_codido primary key (prod_codigo),
    constraint fk_categoria_cod foreign key (prod_cat_cod) references categoria(cat_codigo)
);