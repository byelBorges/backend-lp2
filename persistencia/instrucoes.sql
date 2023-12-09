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
    prod_descricao varchar(200) not null,
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
    forn_CNPJ VARCHAR(18) NOT NULL,
    forn_nome VARCHAR(50),
    forn_endereco VARCHAR(100),
    forn_bairro VARCHAR(40),
    forn_email VARCHAR(100),
    forn_num INT NOT NULL,
    forn_complemento VARCHAR(50),
    forn_cep VARCHAR(10) NOT NULL,
    forn_tel VARCHAR(14) NOT NULL,
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
    cli_cep VARCHAR(10) NOT NULL,
    CONSTRAINT pk_cliente PRIMARY KEY(cli_codigo)
);

CREATE TABLE venda(
    ven_dataVenda DATE,
    ven_valorTotal DECIMAL(10,2) NOT NULL DEFAULT 0,
    ven_qtdItens INT NOT NULL DEFAULT 1,
    ven_prod_cod INT NOT NULL,
    ven_cli_cod INT NOT NULL,
    CONSTRAINT pk_venda PRIMARY KEY(ven_cli_cod, ven_dataVenda),
    CONSTRAINT fk_venda_cli_cod FOREIGN KEY (ven_cli_cod) REFERENCES cliente(cli_codigo),
    CONSTRAINT prod FOREIGN KEY (ven_prod_cod) REFERENCES produto(prod_codigo)
);