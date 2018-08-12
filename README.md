# Adonis JS Estudo - :books:
Estudo de adonis para facilitar minha vida de freelancer, encontrar uma forma de facilitar a forma em que faço os CRUD's.

Levando em consideração que nem todos os projetos poderão ser utilizados o Adonis, vai depender do escopo e regras de negócio do projeto.

### O que é
> AdonisJs favours developer joy with consistent and expressive API to build a full-stack web application or a micro API server.

O Adonis é um framework que foi criado na filosofia de "foque na regra de negócio e não em qual biblioteca utilizar".

A comparação que fazem é que Express ou Koa são ótimos casos quando tua aplicação é começa a crescer muito. Não existe um padrão definido para Express ou Koa. O Adonis JS cria um padrão e facilita a vida do desenvolvedor e do empregador em procurar desenvolvedores já que para entrar em um novo projeto com padrões torna-se mais fácil.

- Prove criação de API
- Robusta utilização de Injeção de Dependência

### MVC
Iniciando um projeto
```sh
    adonis new mvc
```

Criando controller
```sh
    // --resource cria  automaticamente métodos pré-definidos.
    adonis make:controller Person --resource
```

Criando Model
```sh
    adonis make:model Person
```

### Atualizando do 3.0 para o 4.0

#### Using async / await
3.0
```js
    * index () {
        yield User.all()
    }
```

4.0
```js
    async index () {
        await User.all()
    }
```