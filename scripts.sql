create database sisnotas;
create table NotaFiscal(
    idNota int primary key,
    Emissor varchar(150) not null,
    Data date not null,
    index(Data)
);
create table Item(
    idNota int,
    idItem int,
    Produto text not null,
    Valor decimal(15,3) not null,
    foreign key(idNota) references NotaFiscal(idNota),
    primary key(idNota,idItem),
    index(Produto)
);