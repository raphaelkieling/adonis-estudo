# Adonis JS Estudo - :books:
Estudo de adonis para facilitar minha vida de freelancer, encontrar uma forma de facilitar a forma em que faço os CRUD's.

Levando em consideração que nem todos os projetos poderão ser utilizados o Adonis, vai depender do escopo e regras de negócio do projeto.

### O que é
> AdonisJs favours developer joy with consistent and expressive API to build a full-stack web application or a micro API server.

O Adonis é um framework que foi criado na filosofia de "foque na regra de negócio e não em qual biblioteca utilizar".

A comparação que fazem é que Express ou Koa são ótimos casos quando tua aplicação é começa a crescer muito. Não existe um padrão definido para Express ou Koa. O Adonis JS cria um padrão e facilita a vida do desenvolvedor e do empregador em procurar desenvolvedores já que para entrar em um novo projeto com padrões torna-se mais fácil.

- Prove criação de API
- Robusta utilização de Injeção de Dependência
- Padronização para projetos robustos
- Sessão
- Bodyparser automático
- Autenticação
- Middleware de segurança
- CORS
- Migrations
- Lucid ORM
- Utiliza Edge como template
  
### NEW na linha de comando

Por default é criado basedo no [Fullstack App](https://github.com/adonisjs/adonis-fullstack-app)
```sh
    adonis new <PROJECT-NAME>
```

Pode-se utilizar as flags ``--slim`` ou ``--api-only`` para que não seja feito o clone do blueprint fullstack app.

Caso queira utilizar blueprints criados pela comunidade passando
``--blueprint=<github-org/repo>``

### MVC
Iniciando um projeto
```sh
    adonis new <PROJECT-NAME>
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

Configurando Rota
```js
    // Cria GET - GETALL - POST 
    // -GETBYID... referente a um controller. 
    // MUITO ÚTIL para cruds básicos
    // lembrando que precisa fazer as requisições
    // normalmente lá na controller.
    Route.resource('person','PersonController')

    // configuração pra API 
    // limitando pra 5 removiment por 
    // exemplo o create e  o edit que é para MVC
    Route
        .resource('person','PersonController')
        .apiOnly()

    //localhost:port/test
    Route.get('/test', async (req, res) => {
        return "hello from my test view!";
    });
        
    // colocar um prefixo. port/v1/test em vez de port/test
    Route.group('v1', () => {
        //localhost:port/v1/test/<optional-name>
        Route.get('/test/:name?', async (req, res) => {
            return "hello from my test view!";
        });

        // executa a função index do person controlle.
        Route.get('/test_get','PersonController.index')
    }).prefix('/v1')
```
Criando View
```js
    adonis make:view person.list

    // cria um arquivo na pasta person chamada list.edge
    // edge pois utiliza o EDGE como template html    
```

Chamando uma View no Controller
```js
    // Dentro de person controller tem uma função chamada index
    // falamos que a view vai renderizer o arquivo list de dentro da pasta person.
    async index ({ request, response, view }) {
        return view.render('person.list',{
        //estamos passando title como argumento para usar dentro do html com {{title}}
        title: 'Título do post'     
    })
  }
```

Retornando JSON de um objeto
```js
    // Isto dentro do Controller PersonController
    async index ({ request, response, view }) {
        const person = {
            name: 'Raphael Kieling'
        }

        response.json(person)
    }
```

Retornando JSON de uma requisição ao banco
```js

    // importante adicionar na parte de cima
    // const Person = use('App/Models/Person') < nome do objeto
    const persons = await Person.all();

    return view.render('person.list',{
      title: 'Lista de pessoas'  ,
      persons: persons.toJSON()
    })
```

Salvando um Objeto
```js
    const person = new Person();

    person.name = "Raphael Kieling"
    person.description = "Nice Guy"

    await person.save()
```


---
### Validação das requisições

Precisa instalar o provedor de validação do adonis
```sh
    adonis install @adonisjs/validator
```

Adiciona lá no start/app.js
```js
    const providers = [
        '@adonisjs/validator/providers/ValidatorProvider'
    ]
```
Validando um requisição
```js
    // rota qualquer index por exemplo
    // isto está na controller PersonController (exemplo)

    // não esquecer de chamar o validator
    const { validate } = use('Validator')

    class PersonController{
        async index({request,session,responde}){
            const rules = {
                email: 'required|email',
                password:'required'
            }

            const validation = await validate(request.all(),rules)

            if(validation.fails())
                return "Erro Ocorrido"

            return "Tudo correto"
        }
    }
```



---

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