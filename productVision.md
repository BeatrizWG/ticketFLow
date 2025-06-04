# Visão do Produto

Construir uma aplicação web para gestão de tickets integrados ao Jira, com foco em oferecer uma experiência simples, eficiente e totalmente adaptada às necessidades de equipes técnicas. A plataforma permitirá que engenheiros, analistas de qualidade (QAs) e administradores visualizem, priorizem, atualizem e acompanhem demandas técnicas de forma centralizada, intuitiva e colaborativa.

Diferenciando-se por sua usabilidade, flexibilidade e integração fluida com fluxos de trabalho existentes, o produto tem como propósito eliminar a complexidade excessiva de ferramentas robustas, oferecendo uma alternativa enxuta, personalizável e focada na produtividade.

## Objetivos chave:
- Centralizar e simplificar a gestão de tickets técnicos.
- Proporcionar maior controle, visibilidade e agilidade na resolução de demandas.
- Reduzir fricções no uso diário com uma interface amigável e adaptável.

## Funcionalidades principais:
- Cadastro de usuários (engenheiros, QAs e administradores).
- Criação, visualização e atualização de tickets.
- Gerenciamento e priorização de tickets.
- Monitoramento contínuo do progresso dos tickets.

# Arquitetura

O sistema será desenvolvido como uma aplicação web de arquitetura full-stack, com separação entre as camadas de apresentação (frontend), lógica de negócio (backend) e persistência de dados (banco de dados).

## Frontend

A interface do usuário é construída com React, que combina HTML e JavaScript para estruturar e controlar os elementos visuais das telas. Cada componente visual possui também um arquivo CSS correspondente, responsável pela estilização, mantendo a separação entre estrutura e aparência.

## Backend

O backend é implementado em Node.js, utilizando JavaScript puro para receber e processar os dados enviados pelas telas do frontend. Ele é responsável por tratar as requisições, validar informações, aplicar regras de negócio e se comunicar com o banco de dados.

## Banco de Dados

A aplicação utiliza o MongoDB, um banco de dados NoSQL orientado a documentos. Ele armazena os dados de forma flexível em estruturas JSON, facilitando o armazenamento e a consulta de informações provenientes das telas, como dados de login, usuários e outros registros da aplicação.

## Hospedagem e Deploy

A aplicação será hospedada na Vercel, uma plataforma moderna de deploy contínuo que se integra com repositórios Git. A Vercel permite que a aplicação seja disponibilizada na web de forma rápida, segura e escalável, facilitando o processo de atualização e entrega de novas funcionalidades.

Essa arquitetura garante uma estrutura modular, moderna e escalável, onde cada camada possui responsabilidades bem definidas, promovendo organização, facilidade de manutenção e flexibilidade para futuras evoluções do sistema.
