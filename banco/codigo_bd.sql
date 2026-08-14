CREATE DATABASE IF NOT EXISTS railway;
USE railway;
show tables;
-- =====================================================
-- TABELAS SEM CHAVES ESTRANGEIRAS
-- =====================================================

CREATE TABLE Lojista (
    idLojista INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(200) NOT NULL,
    cpf VARCHAR(30) NOT NULL UNIQUE,
    cnpj VARCHAR(30) NOT NULL UNIQUE,
    email VARCHAR(120) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    telefone VARCHAR(30)
);

CREATE TABLE Endereco (
    idEndereco INT PRIMARY KEY AUTO_INCREMENT,
    rua VARCHAR(45) NOT NULL,
    cep VARCHAR(30) NOT NULL,
    bairro VARCHAR(45) NOT NULL,
    numero INT,
    complemento VARCHAR(200),
    tipo VARCHAR(45)
);

CREATE TABLE Formas_Pagamento (
    idFormas_Pagamento INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    link VARCHAR(200),
    ativo TINYINT NOT NULL DEFAULT 1
);

CREATE TABLE Categorias (
    idCategoria INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE Marca (
    idMarca INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL UNIQUE,
    logo LONGBLOB
);

CREATE TABLE Cores (
    idCores INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(20) NOT NULL,
    codigo_cor VARCHAR(20)
);

CREATE TABLE Tamanho (
    idTamanho INT AUTO_INCREMENT PRIMARY KEY,
    tamanho VARCHAR(45) NOT NULL UNIQUE,
    imagem LONGBLOB
);

-- =====================================================
-- LOJA
-- =====================================================

CREATE TABLE Loja (
    idLoja INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(200) NOT NULL,
    whatsapp VARCHAR(50),
    instagram VARCHAR(50),
    facebook VARCHAR(50),
    linkedin VARCHAR(50),
    telefone VARCHAR(30) NOT NULL,
    email VARCHAR(120) NOT NULL,
    Endereco_idEndereco INT,
    Lojista_idLojista INT,

    FOREIGN KEY (Endereco_idEndereco)
        REFERENCES Endereco(idEndereco),

    FOREIGN KEY (Lojista_idLojista)
        REFERENCES Lojista(idLojista)
);

-- =====================================================
-- CLIENTE
-- =====================================================

CREATE TABLE Cliente (
    idCliente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(200) NOT NULL,
    cpf VARCHAR(30) UNIQUE,
    telefone VARCHAR(30),
    email VARCHAR(120) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    data_nascimento DATE,
    Loja_idLoja INT,

    FOREIGN KEY (Loja_idLoja)
        REFERENCES Loja(idLoja)
);

-- =====================================================
-- ENDEREÇO x CLIENTE
-- =====================================================

CREATE TABLE Endereco_has_Cliente (
    Endereco_idEndereco INT NOT NULL,
    Cliente_idCliente INT NOT NULL,

    PRIMARY KEY (
        Endereco_idEndereco,
        Cliente_idCliente
    ),

    FOREIGN KEY (Endereco_idEndereco)
        REFERENCES Endereco(idEndereco),

    FOREIGN KEY (Cliente_idCliente)
        REFERENCES Cliente(idCliente)
);

-- =====================================================
-- BANNER
-- =====================================================

CREATE TABLE Banner (
    idBanner INT AUTO_INCREMENT PRIMARY KEY,
    imagem LONGBLOB,
    data_inicio DATE NOT NULL,
    data_final DATE NOT NULL,
    status_visibilidade TINYINT NOT NULL DEFAULT 1,
    Loja_idLoja INT,

    FOREIGN KEY (Loja_idLoja)
        REFERENCES Loja(idLoja)
);

-- =====================================================
-- PROMOÇÃO
-- =====================================================

CREATE TABLE Promocao (
    idPromocao INT AUTO_INCREMENT PRIMARY KEY,
    data_inicio DATE NOT NULL,
    data_final DATE NOT NULL,
    valor_promocao DECIMAL(10,2),
    nome VARCHAR(45),
    Banner_idBanner INT,

    FOREIGN KEY (Banner_idBanner)
        REFERENCES Banner(idBanner)
);

-- =====================================================
-- CUPOM
-- =====================================================

CREATE TABLE Cupom (
    idCupom INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45) NOT NULL,
    data_validade DATE NOT NULL,
    quantidade INT NOT NULL,
    desconto DECIMAL(10,2),
    Loja_idLoja INT,

    FOREIGN KEY (Loja_idLoja)
        REFERENCES Loja(idLoja)
);

-- =====================================================
-- PRODUTO
-- =====================================================

CREATE TABLE Produto (
    idProduto INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao VARCHAR(1000),
    codigo VARCHAR(45) NOT NULL UNIQUE,
    preco_antigo DECIMAL(10,2) NOT NULL,
    preco_promocional DECIMAL(10,2) NOT NULL,
    quantidade_estoque INT NOT NULL,
    ativo TINYINT NOT NULL DEFAULT 1,
    Loja_idLoja INT,
    Marca_idMarca INT,
    Categoria_idCategoria INT,

    FOREIGN KEY (Loja_idLoja)
        REFERENCES Loja(idLoja),

    FOREIGN KEY (Marca_idMarca)
        REFERENCES Marca(idMarca),

    FOREIGN KEY (Categoria_idCategoria)
        REFERENCES Categorias(idCategoria)
);

-- =====================================================
-- PRODUTO x TAMANHO
-- =====================================================

CREATE TABLE Produto_has_Tamanho (
    Produto_idProduto INT NOT NULL,
    Tamanho_idTamanho INT NOT NULL,

    PRIMARY KEY (
        Produto_idProduto,
        Tamanho_idTamanho
    ),

    FOREIGN KEY (Produto_idProduto)
        REFERENCES Produto(idProduto),

    FOREIGN KEY (Tamanho_idTamanho)
        REFERENCES Tamanho(idTamanho)
);

-- =====================================================
-- PEDIDOS
-- =====================================================

CREATE TABLE Pedidos (
    idPedidos INT AUTO_INCREMENT PRIMARY KEY,
    data DATE NOT NULL,
    nota_fiscal LONGBLOB,
    data_entrega DATE,
    status_entrega VARCHAR(45) NOT NULL,
    status_pagamento VARCHAR(45) NOT NULL,
    codigo VARCHAR(45) NOT NULL UNIQUE,
    Cliente_idCliente INT,
    Loja_idLoja INT,
    Endereco_idEndereco INT,
    Formas_Pagamento_idFormas_Pagamento INT,

    FOREIGN KEY (Cliente_idCliente)
        REFERENCES Cliente(idCliente),

    FOREIGN KEY (Loja_idLoja)
        REFERENCES Loja(idLoja),

    FOREIGN KEY (Endereco_idEndereco)
        REFERENCES Endereco(idEndereco),

    FOREIGN KEY (Formas_Pagamento_idFormas_Pagamento)
        REFERENCES Formas_Pagamento(idFormas_Pagamento)
);

-- =====================================================
-- CARTÃO DE PAGAMENTO
-- =====================================================

CREATE TABLE Cartao_Pagamento (
    idCartao_Pagamento INT AUTO_INCREMENT PRIMARY KEY,
    numero VARCHAR(30) NOT NULL UNIQUE,
    data_vencimento VARCHAR(45) NOT NULL,
    cvc VARCHAR(4),
    cpf VARCHAR(30),
    nome_proprietario VARCHAR(200) NOT NULL,
    nome_identificacao VARCHAR(45) NOT NULL,
    bandeira VARCHAR(45),
    tipo VARCHAR(45),
    ativo TINYINT NOT NULL DEFAULT 1,
    Cliente_idCliente INT,

    FOREIGN KEY (Cliente_idCliente)
        REFERENCES Cliente(idCliente)
);

-- =====================================================
-- FRETE
-- =====================================================

CREATE TABLE Frete (
    idFrete INT AUTO_INCREMENT PRIMARY KEY,
    valor DECIMAL(10,2) NOT NULL,
    tipo VARCHAR(45) NOT NULL,
    bairro VARCHAR(45),
    entrega_full TINYINT,
    codigo_rastreio VARCHAR(100),
    Pedidos_idPedidos INT,

    FOREIGN KEY (Pedidos_idPedidos)
        REFERENCES Pedidos(idPedidos)
);

-- =====================================================
-- CARRINHO
-- =====================================================

CREATE TABLE Carrinho (
    idCarrinho INT AUTO_INCREMENT PRIMARY KEY,
    Cliente_idCliente INT,

    FOREIGN KEY (Cliente_idCliente)
        REFERENCES Cliente(idCliente)
);

-- =====================================================
-- IMAGEM DO PRODUTO
-- =====================================================

CREATE TABLE Imagem (
    idImagem_Produto INT AUTO_INCREMENT PRIMARY KEY,
    arquivo LONGBLOB NOT NULL,
    Produto_idProduto INT,

    FOREIGN KEY (Produto_idProduto)
        REFERENCES Produto(idProduto)
);

-- =====================================================
-- AVALIAÇÃO DO PRODUTO
-- =====================================================

CREATE TABLE Avaliacao_Produto (
    idAvaliacao_Produto INT AUTO_INCREMENT PRIMARY KEY,
    data DATE NOT NULL,
    nota DECIMAL(2,1) NOT NULL,
    descricao VARCHAR(250),
    Produto_idProduto INT,

    FOREIGN KEY (Produto_idProduto)
        REFERENCES Produto(idProduto)
);

-- =====================================================
-- BANNER x PRODUTO
-- =====================================================

CREATE TABLE Banner_has_Produto (
    Banner_idBanner INT NOT NULL,
    Produto_idProduto INT NOT NULL,

    PRIMARY KEY (
        Banner_idBanner,
        Produto_idProduto
    ),

    FOREIGN KEY (Banner_idBanner)
        REFERENCES Banner(idBanner),

    FOREIGN KEY (Produto_idProduto)
        REFERENCES Produto(idProduto)
);

-- =====================================================
-- PRODUTO x CORES
-- =====================================================

CREATE TABLE Produto_has_Cores (
    Produto_idProduto INT NOT NULL,
    Cores_idCores INT NOT NULL,

    PRIMARY KEY (
        Produto_idProduto,
        Cores_idCores
    ),

    FOREIGN KEY (Produto_idProduto)
        REFERENCES Produto(idProduto),

    FOREIGN KEY (Cores_idCores)
        REFERENCES Cores(idCores)
);

-- =====================================================
-- CUPOM x CATEGORIA
-- =====================================================

CREATE TABLE Cupom_has_Categorias (
    Cupom_idCupom INT NOT NULL,
    Categorias_idCategoria INT NOT NULL,

    PRIMARY KEY (
        Cupom_idCupom,
        Categorias_idCategoria
    ),

    FOREIGN KEY (Cupom_idCupom)
        REFERENCES Cupom(idCupom),

    FOREIGN KEY (Categorias_idCategoria)
        REFERENCES Categorias(idCategoria)
);

-- =====================================================
-- PRODUTO x CUPOM
-- =====================================================

CREATE TABLE Produto_has_Cupom (
    Produto_idProduto INT NOT NULL,
    Cupom_idCupom INT NOT NULL,

    PRIMARY KEY (
        Produto_idProduto,
        Cupom_idCupom
    ),

    FOREIGN KEY (Produto_idProduto)
        REFERENCES Produto(idProduto),

    FOREIGN KEY (Cupom_idCupom)
        REFERENCES Cupom(idCupom)
);

-- =====================================================
-- CARRINHO x PRODUTO
-- =====================================================

CREATE TABLE Carrinho_has_Produto (
    Carrinho_idCarrinho INT NOT NULL,
    Produto_idProduto INT NOT NULL,
    quantidade INT NOT NULL DEFAULT 1,
    preco_unitario DECIMAL(10,2) NOT NULL,

    PRIMARY KEY (
        Carrinho_idCarrinho,
        Produto_idProduto
    ),

    FOREIGN KEY (Carrinho_idCarrinho)
        REFERENCES Carrinho(idCarrinho),

    FOREIGN KEY (Produto_idProduto)
        REFERENCES Produto(idProduto)
);

-- =====================================================
-- PEDIDO x PRODUTO
-- =====================================================

CREATE TABLE Pedidos_has_Produto (
    Pedidos_idPedidos INT NOT NULL,
    Produto_idProduto INT NOT NULL,
    quantidade INT NOT NULL DEFAULT 1,
    preco_unitario DECIMAL(10,2) NOT NULL,

    PRIMARY KEY (
        Pedidos_idPedidos,
        Produto_idProduto
    ),

    FOREIGN KEY (Pedidos_idPedidos)
        REFERENCES Pedidos(idPedidos),

    FOREIGN KEY (Produto_idProduto)
        REFERENCES Produto(idProduto)
);

-- =====================================================
-- PRODUTO x PROMOÇÃO
-- =====================================================

CREATE TABLE Produto_has_Promocao (
    Produto_idProduto INT NOT NULL,
    Promocao_idPromocao INT NOT NULL,

    PRIMARY KEY (
        Produto_idProduto,
        Promocao_idPromocao
    ),

    FOREIGN KEY (Produto_idProduto)
        REFERENCES Produto(idProduto),

    FOREIGN KEY (Promocao_idPromocao)
        REFERENCES Promocao(idPromocao)
);

-- =====================================================
-- PROMOÇÃO x CATEGORIA
-- =====================================================

CREATE TABLE Promocao_has_Categoria (
    Promocao_idPromocao INT NOT NULL,
    Categorias_idCategoria INT NOT NULL,

    PRIMARY KEY (
        Promocao_idPromocao,
        Categorias_idCategoria
    ),

    FOREIGN KEY (Promocao_idPromocao)
        REFERENCES Promocao(idPromocao),

    FOREIGN KEY (Categorias_idCategoria)
        REFERENCES Categorias(idCategoria)
);

-- CADASTRAR LOJISTAS --
INSERT INTO Lojista (nome, cpf, cnpj, email, senha, telefone) values ('Israel', 06288778117, 45472546000183, 'israel.contato02@gmail.com', '123456789rs', '63992938076');

-- CADASTRAR OS DADOS DA LOJA --
-- CADASTRAR OS DADOS DA LOJA --

INSERT INTO Loja (nome, whatsapp, telefone, email, Endereco_idEndereco, Lojista_idLojista) VALUES ('PAULA STUDIO STORE', '6399293-8076', '6399293-8076', 'paulastudiostore@gmail.com', 1, 1);

INSERT INTO Endereco (rua, cep, bairro, numero, tipo) VALUES ('Rua Caramuru', '77900000','Setor Eldorado', 740, 'Ponto Comercial');



SELECT * FROM Endereco;
SELECT * FROM Lojista;