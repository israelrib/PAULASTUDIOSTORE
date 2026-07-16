USE paulastudiostore;

CREATE TABLE lojista (
idLojista INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(200) NOT NULL,
cpf MEDIUMINT(11) NOT NULL UNIQUE,
cpnj MEDIUMINT(14) NOT NULL,
email VARCHAR(120) NOT NULL,
senha VARCHAR(13) NOT NULL,
telefone MEDIUMINT(14)
);

-- COMANDO PARA EXCLUIR UMA TABELA --
DROP TABLE paulastudiostore;

CREATE TABLE Endereco(
idEndereco INT PRIMARY KEY AUTO_INCREMENT,
rua VARCHAR(45) NOT NULL,
cep MEDIUMINT(11) NOT NULL,
bairro VARCHAR(45) NOT NULL,
numero INT,
complemento VARCHAR(200),
tipo VARCHAR(45)
);

CREATE TABLE Formas_Pagamento (
idFormas_pagamento INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45) NOT NULL,
link VARCHAR(200),
ativo BOOLEAN
);

CREATE TABLE Categorias (
idCategoria INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100) NOT NULL
);

CREATE TABLE Marca(
idMarca INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR (100) NOT NULL,
logo LONGBLOB
);

CREATE TABLE Cores(
idCores INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(20) NOT NULL,
codigo_cor VARCHAR(20)
);

-- CRIAR TABELAS COM CHAVE ESTRANGEIRAS FK --

CREATE TABLE Loja(
idLoja INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(200) NOT NULL,
whatsapp VARCHAR(50), 
instagram VARCHAR(50),
facebook VARCHAR(50),
linkedin VARCHAR(50),
telefone MEDIUMINT(14) NOT NULL,
email VARCHAR(120) NOT NULL,
Endereco_idEndereco INT,
Lojista_idLojista INT,
FOREIGN KEY (Endereco_idEndereco)
REFERENCES Endereco (idEndereco),
FOREIGN KEY (Lojista_idLojista)
REFERENCES Lojista (idLojista)
);

CREATE TABLE Cliente (
idCliente INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(200) NOT NULL,
cpf MEDIUMINT(12) NOT NULL,
telefone MEDIUMINT(15) NOT NULL,
email VARCHAR(120) NOT NULL,
senha VARCHAR(13) NOT NULL,
data_nascimento DATE NOT NULL,
Loja_idLoja INT,
FOREIGN KEY (Loja_idLoja) REFERENCES Loja (idLoja)
);

CREATE TABLE Endereco_has_Cliente (
Endereco_idEndereco INT,
Cliente_idCliente INT,
FOREIGN KEY (Endereco_idEndereco) REFERENCES Endereco (idEndereco),
FOREIGN KEY (Cliente_idCliente) REFERENCES Cliente (idCliente)
);

CREATE TABLE Banner(
idBanner INT AUTO_INCREMENT PRIMARY KEY,
imagem LONGBLOB,
data_inicio DATE NOT NULL,
data_final DATE NOT NULL,
status_visibilidade TINYINT,
Loja_idLoja INT,
FOREIGN KEY (Loja_idLoja) REFERENCES Loja (idLoja)
);

CREATE TABLE Promocao(
idPromocao INT auto_increment PRIMARY KEY,
data_inicio date NOT NULL,
data_final date NOT NULL,
valor_promocao float,
nome varchar(45),
Banner_idBanner INT,
FOREIGN KEY (Banner_idBanner) REFERENCES Banner (idBanner)
);
CREATE TABLE Tamanho (
idTamanho INT AUTO_INCREMENT PRIMARY KEY,
tamanho VARCHAR(45) NOT NULL,
imagem LONGBLOB
);
CREATE TABLE Cupom (
idCupom INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(45) NOT NULL,
data_validade DATE NOT NULL,
quantidade INT NOT NULL,
desconto FLOAT,
Loja_idLoja INT,
FOREIGN KEY (Loja_idLoja) REFERENCES Loja (idLoja)
);
CREATE TABLE Produto (
idProduto INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
descricao TEXT(1000),
codigo VARCHAR(45) NOT NULL,
preco_antigo FLOAT NOT NULL,
preco_promocional FLOAT NOT NULL,
quantidade_estoque INT NOT NULL,
ativo TINYINT,
Loja_idLoja INT,
Marca_idMarca INT,
Categoria_idCategoria INT,
FOREIGN KEY (Loja_idLoja) REFERENCES Loja (idLoja),
FOREIGN KEY (Marca_idMarca) REFERENCES Marca (idMarca),
FOREIGN KEY (Categoria_idCategoria) REFERENCES Categorias (idCategoria)
);

CREATE TABLE Produto_has_Tamanho (
    Produto_idProduto INT,
    Tamanho_idTamanho INT,
    FOREIGN KEY (Produto_idProduto) REFERENCES Produto (idProduto),
    FOREIGN KEY (Tamanho_idTamanho) REFERENCES Tamanho (idTamanho)
);

CREATE TABLE Pedidos (
idPedidos INT AUTO_INCREMENT PRIMARY KEY,
data DATE NOT NULL,
nota_fiscal LONGBLOB, 
data_entrega DATE,
status_entrega VARCHAR(45) NOT NULL,
status_pagamento VARCHAR(45) NOT NULL,
codigo VARCHAR(45) NOT NULL,
Cliente_idCliente INT,
Loja_idLoja INT,
Endereco_idEndereco INT,
Formas_Pagamento_idFormas_Pagamento INT,
FOREIGN KEY (Cliente_idCliente) REFERENCES Cliente (idCliente),
FOREIGN KEY (Loja_idLoja) REFERENCES Loja (idLoja),
FOREIGN KEY (Endereco_idEndereco) REFERENCES Endereco (idEndereco),
FOREIGN KEY (Formas_Pagamento_idFormas_Pagamento) REFERENCES Formas_Pagamento (idFormas_Pagamento)
);

CREATE TABLE Cartao_Pagamento (
idCartao_Pagamento INT AUTO_INCREMENT PRIMARY KEY,
numero MEDIUMINT(40) NOT NULL UNIQUE,
data_vencimento VARCHAR(45) NOT NULL,
cvc INT NOT NULL,
cpf INT NOT NULL UNIQUE,
nome_proprietario VARCHAR(200) NOT NULL,
nome_identificacao VARCHAR(45) NOT NULL,
bandeira VARCHAR(45),
tipo VARCHAR(45),
ativo TINYINT,
Cliente_idCliente INT,
FOREIGN KEY (Cliente_idCliente) REFERENCES Cliente (idCliente)
);

CREATE TABLE Frete (
idFrete INT AUTO_INCREMENT PRIMARY KEY,
valor FLOAT NOT NULL,
tipo VARCHAR (45) NOT NULL,
bairro VARCHAR (45),
entrega_full TINYINT,
codigo_rastreio VARCHAR(100),
Pedidos_idPedidos INT,
Pedidos_Cliente_idCliente INT,
Pedidos_Endereco_idEndereco INT,
FOREIGN KEY (Pedidos_idPedidos) REFERENCES Pedidos (idPedidos),
FOREIGN KEY (Pedidos_Cliente_idCliente) REFERENCES Pedidos (Cliente_idCliente),
FOREIGN KEY (Pedidos_Endereco_idEndereco) REFERENCES Pedidos (Endereco_idEndereco)
);

CREATE TABLE Carrinho (
idCarrinho INT AUTO_INCREMENT PRIMARY KEY,
quantidade_produto INT NOT NULL,
preco_total FLOAT NOT NULL,
Cliente_idCliente INT,
FOREIGN KEY (Cliente_idCliente) REFERENCES Cliente (idCliente)
);

CREATE TABLE Imagem (
idImagem_Produto INT AUTO_INCREMENT PRIMARY KEY,
arquivo LONGBLOB NOT NULL,
Produto_idProduto INT,
FOREIGN KEY (Produto_idProduto) REFERENCES  Produto (idProduto) 
);
CREATE TABLE Avaliacao_Produto (
idAvaliacao_Produto INT AUTO_INCREMENT PRIMARY KEY,
data DATE NOT NULL,
nota FLOAT NOT NULL,
descricao TEXT(250),
Produto_idProduto INT,
FOREIGN KEY (Produto_idProduto) REFERENCES Produto (idProduto)
);

CREATE TABLE Banner_has_Produto (
Banner_idBanner INT,
Produto_idProduto INT,
FOREIGN KEY (Banner_idBanner) REFERENCES Banner (idBanner),
FOREIGN KEY (Produto_idProduto) REFERENCES Produto (idProduto)
);
CREATE TABLE Produto_has_Cores (
Produto_idProduto INT,
Cores_idCores INT,
FOREIGN KEY (Produto_idProduto) REFERENCES Produto (idProduto),
FOREIGN KEY (Cores_idCores) REFERENCES Cores (idCores)
);
CREATE TABLE Cupom_has_Categorias (
Cupom_idCupom INT,
Categorias_idCategoria INT,
FOREIGN KEY (Cupom_idCupom) REFERENCES Cupom (idCupom),
FOREIGN KEY (Categorias_idCategoria) REFERENCES Categorias (idCategoria)
);
CREATE TABLE Produto_has_Cupom (
Produto_idProduto INT,
Cupom_idCupom INT,
FOREIGN KEY (Produto_idProduto) REFERENCES Produto (idProduto),
FOREIGN KEY (Cupom_idCupom) REFERENCES Cupom (idCupom)
);

CREATE TABLE Carrinho_has_Produto (
Carrinho_idCarrinho INT,
Produto_idProduto INT,
FOREIGN KEY (Carrinho_idCarrinho) REFERENCES Carrinho (idCarrinho),
FOREIGN KEY (Produto_idProduto) REFERENCES Produto (idProduto)
);
CREATE TABLE Pedidos_has_Produto (
Pedidos_idPedidos INT,
Produto_idProduto INT,
FOREIGN KEY (Pedidos_idPedidos) REFERENCES Pedidos (idPedidos),
FOREIGN KEY (Produto_idProduto) REFERENCES Produto (idProduto)
);

CREATE TABLE Produto_has_Promocao (
Produto_idProduto INT,
Promocao_idPromocao INT,
FOREIGN KEY (Produto_idProduto) REFERENCES Produto (idProduto),
FOREIGN KEY (Promocao_idPromocao) REFERENCES Promocao (idPromocao)
);

CREATE TABLE Promocao_has_Categoria (
Promocao_idPromocao INT,
Categorias_idCategoria INT,
FOREIGN KEY (Promocao_idPromocao) REFERENCES Promocao (idPromocao),
FOREIGN KEY (Categorias_idCategoria) REFERENCES Categorias (idCategoria)
);

-- DML - COMANDO DE MODELAGEM DO BD --
-- INSERIR, EDITAR, EXCLUIR, LISTAR --

-- LISTAGEM DE TABELA --
SHOW TABLES;

-- INSERT - INSERIR DADOS NA TABELA
INSERT INTO endereco (rua, cep, bairro, numero, complemento, tipo) values('Avenida Caramuru', 77809050, 'Eldorado', '740', 'Próximo à Escola Welder Maria', 'Comercial');

-- LISTAR DADOS DA TABELA --

SELECT * FROM loja;

INSERT INTO Lojista (nome, cpf, email, senha, telefone) values ('João', 06288778117, 'paulastudistore@gmail.com', '123abc', '63992938076');

-- CADASTRAR OS DADOS DA LOJA --
INSERT INTO Loja (nome, whatsapp, telefone, email, endereco_idendereco, lojista_idLojista) values ('PAULA STUDIO STORE', '6399293-8076', '6399293-8076', 'paulastudiostore@gmail.com', 1, 1);

