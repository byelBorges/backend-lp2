create database sistema;
use sistema;
create table categoria(
    cat_codigo int not null auto_increment,
    cat_descricao varchar(100) not null,
    constraint pk_categoria primary key(cat_codigo)
);

create table produto(
    prod_codigo int not null auto_increment,
    prod_nome varchar(50) not null,
    prod_descricao varchar(100) not null,
    prod_precoCusto decimal(10,2) not null default 0,
    prod_precoVenda decimal(10,2) not null default 0,
    prod_dataValidade DATE,
    prod_qtdEstoque decimal(10,2) not null default 0,
    prod_cat_cod int not null,
    constraint pk_prod_codido primary key (prod_codigo),
    constraint fk_categoria_cod foreign key (prod_cat_cod) references categoria(cat_codigo)
);

CREATE TABLE fornecedor(
    forn_codigo INT NOT NULL AUTO_INCREMENT,
    forn_CNPJ INT NOT NULL,
    forn_nome VARCHAR(50),
    forn_endereco VARCHAR(100),
    forn_bairro VARCHAR(40),
    forn_email VARCHAR(100),
    forn_num INT NOT NULL,
    forn_complemento VARCHAR(50),
    forn_cep VARCHAR(9) NOT NULL,
    forn_tel VARCHAR(11) NOT NULL,
    CONSTRAINT pk_fornecedor PRIMARY KEY(forn_codigo)
);

CREATE TABLE cliente(
    cli_codigo INT NOT NULL AUTO_INCREMENT,
    cli_cpf VARCHAR(14) NOT NULL UNIQUE,
    cli_nome VARCHAR(50) NOT NULL,
    cli_endereco VARCHAR(100),
    cli_bairro VARCHAR(40),
    cli_num INT NOT NULL,
    cli_cidade VARCHAR(50),
    cli_uf VARCHAR(2) NOT NULL,
    cli_cep VARCHAR(11) NOT NULL,
    CONSTRAINT pk_cliente PRIMARY KEY(cli_codigo)
);