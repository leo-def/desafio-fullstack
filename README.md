Growdev - Full Stack Developer
===================

<a href="https://growdev.com.br/" target="_blank"> <img src="./mockups/logo-growdev.png" width="400px" /> </a>

O objetivo deste desafio é testar a parte técnica dos candidatos para as oportunidades da Growdev.

É pedido o desenvolvimento de uma sistema que realiza o CRUD de mentores das formações da Growdev. As regras e requisitos estão logo abaixo.

# Especificações Técnicas
- **Front-end Web:**
  - [Vue.js](https://vuejs.org/)
  - [React](https://react.dev/)
  - [Angular](https://angular.io/)
- **Front-end Mobile:** 
  - [Flutter](https://flutter.dev/)
- **API:** NodeJS
- **Banco de Dados:** Postgress
- **Idioma de escrita do código:** Inglês

> **OBS**: Deve ser escolhido o framework frontend conforme orientado na vaga

# Funcionalidade
## Descrição
A Growdev precisa ter o controle e a gestão dos mentores que são alocados nas turmas dos programas de formações e para isso a Growdev precisa ter os cadastros dos mentores em seu sistema.

O desafio consiste em criar uma sistema para o cadastro de mentores conforme os critérios de aceitação.

## Protótipo de baixo nível
A seguir, são apresentados 2 protótipos de baixo nível que serve como um guia para a criação do front-end. Fique à vontade para usar sua criatividade na criação do front-end.

* Listagem de Mentores
![Listagem de Mentores](/mockups/listagem_mentores.png)

* Criar/Editar Mentor
![Cadastro/edição de Mentores](/mockups/cadastro_mentor.png)

## História de usuário
- **Sendo** um usuário administrativo da Growdev
- **Eu gostaria de** gerenciar cadastros de mentores
- **Para que** eu possa alocar os mentores nos programas de formações

### Critérios de aceite: 

#### Cenário: Listar mentores cadastrados 
- **Dado** que estou dentro do sistema de gestão da growdev,
- **Quando** acesso o menu de mentores,
- **Então** devo ser capaz de visualizar a lista em forma de tabela dos mentores cadastrados no sistema
- **E** exibe opção Cadastrar Mentor ao topo
- **E** exibe opção Editar por mentor
- **E** exibe opção Excluir por mentor
- **E** exibe opção de voltar/avançar de página
- **E** exibe opção de mudar quantidade de linhas
####
- **Dado** que estou na página de listagem de mentores,
- **Quando** utilizo os filtros disponíveis,
- **Então** devo ser capaz de filtrar a lista de mentores com base em critérios como nome, cpf e email.
####
- **Dado** que estou na página de listagem de mentores,
- **Quando** visualizo a lista de mentores cadastrados,
- **Então** devo ser capaz de navegar através das diferentes páginas da lista, com a opção de escolher quantas linhas da tabela desejo visualizar por página.

#### Cenário: Cadastrar novo aluno
- **Dado** que estou na página de listagem de mentores,
- **Quando** clico em Cadastrar Mentor
- **Então** abre a página de Cadastro do mentor
- **E** exibe os campos obrigatórios vazios
####
- **Dado** que inseri dados válidos nos campos
- **Quando** clico em Salvar
- **Então** cria o novo mentor na base
- **E** retorna mensagem de sucesso
####
- **Dado** que inseri dados inválidos nos campos
- **Quando** clico em Salvar
- **Então** não acontece nada
- **E** o botão deve estar desabilitado
####
- **Dado** que inseri dados válidos nos campos
- **Quando** clico em Salvar
- **E** acontece algum erro no servidor
- **Então** não cria o mentor
- **E** retorna mensagem de falha
- **E** não persiste a gravação dos dados no banco
####
- **Dado** que inseri dados válidos nos campos
- **Quando** clico em Cancelar
- **Então** retorna para página de listagem de mentores
- **E** não persiste a gravação dos dados no banco 

#### Cenário: Editar cadastro de mentor
- **Dado** que estou na página de listagem de mentores
- **Quando** clico em Editar
- **Então** abre a página de Cadastro de mentor 
- **E** exibe os campos do cadastro preenchidos
- **E** habilita alteração dos campos editáveis
- **E** altera o título da página de Novo Mentor para Edição Mentor
####
- **Dado** que estou na página de Cadastro do Mentor
- **Quando** clica em Salvar
- **Então** grava os dados editáveis na base
####
- **Dado** que estou na página de Cadastro do mentor
- **Quando** clica em Cancelar
- **Então** retorna para a página de listagem de mentores
- **E** não persiste a gravação dos dados

#### Cenário: Excluir cadastro de mentor
- **Dado** que estou na página de listagem de mentores
- **Quando** clico em Excluir
- **Então** exibe um modal de confirmação de exclusão
####
- **Dado** que estou no modal de confirmação de exclusão 
- **Quando** clico em Confirmar
- **Então** então exclui o registro do mentor
####
- **Dado** que estou no modal de confirmação de exclusão
- **Quando** clico em Cancelar
- **Então** então fecha o modal e não persiste a exclusão

## Campos obrigatórios:
- **Nome** (editável)
- **Email** (editável)
- **CPF** (não editável) (chave única)
- **Identificador** (não editável) (chave única) (não visível na tela)

### 

# Critérios de avaliação
- Qualidade de escrita do código
- Organização do projeto
- Qualidade da API
- Lógica da solução implementada
- Qualidade da camada de persistência
- Utilização do Git (quantidade e descrição dos commits, Git Flow, ...)
- Validações
- Tratamento de erros
- Padrões de projeto e arquitetura

# Desejável
- Testes de unidade
- Documentação da arquitetura de solução

# Diferenciais
- Segurança da aplicação (autenticação, autorização, ...)

# Instruções de entrega
1. Crie um fork do repositório no seu GitHub
2. Faça o push do código desenvolvido no seu Github
3. Inclua um arquivo chamado COMENTARIOS.md explicando
    - Decisão da arquitetura utilizada
    - Lista de bibliotecas de terceiros utilizadas
    - O que você melhoraria se tivesse mais tempo
    - Quais requisitos obrigatórios que não foram entregues
4. Informe a Growdev quando concluir o desafio junto com o link do repositório
5. Após revisão do projeto junto com a equipe de desevolvimento deixe seu repositório privado
