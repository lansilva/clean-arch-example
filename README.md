# Estrutura de diretórios

application → Camada responsável pela entrada e validação de dados

    └ controllers 
    └ errors
    └ helpers
    └ middlewares 
    └ validation

domain → Camada responsável pela regra de negócio

    └ contracts → Interfaces 
	    └ gateways → Interface de recurso fora do contexto da regra de negócio	
      └ repos
    └ entities
    └ usecases

infra  → Implementação de recursos externos

    └ gateways → Implementação dos recursos seguindo o contrato de domínio
    └ repos

main → Configuração da aplicação, exemplo: Docs, Factories, Routes

    └ adapters
    └ config
    └ docs → Documentação da API, exemplo: Swagger
    └ factories → Responsável por criar os objetos que serão injetados nos componentes
    └ routes → Definição das rotas

# Referências 

Descomplicando a Clean Architecture
https://medium.com/luizalabs/descomplicando-a-clean-architecture-cf4dfc4a1ac6

NodeJs Avançado com TDD, Clean Architecture e Typescript - Rodrigo Manguinho
https://github.com/rmanguinho/advanced-node

The Clean Architecture
https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html


