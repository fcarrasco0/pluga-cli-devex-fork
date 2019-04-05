# Pluga CLI [Beta]

Plataforma de aplicação da Pluga.

## Instalando

Pluga CLI é desenvolvida em Node.js `v8.10`. É provável que funcione em todas
as versões posteriores, porém é recomendado o uso dessa versão.

Exemplo de instalação com [nvm](https://github.com/creationix/nvm)

```sh
$ nvm install v8.10
$ nvm use 8.10
$ npm install -g pluga-cli
$ pluga --help
```

## Comandos

### init

```sh
$ pluga init path/to/my_app
```

O comando `init` inicia um novo Pluga app no caminho definido, com a estrutura
de pastas necessária e alguns exemplos de como configurar seu app.

A pasta raiz do app deve seguir o padrão *snake_case*, e será igual à
identificação do seu app na Pluga (ex: `$ pluga init pied_piper`).

Por padrão, o nome do seu app será a versão *CamelCase* do nome da pasta criada
(ex: "PiedPiper"). Você pode sobrescrever esse comportamento com a opção
`--app-name`.

### test

```sh
$ pluga test
```

O comando `test` roda todos os testes do seu app usando o framework
[mocha](https://github.com/mochajs/mocha). Você pode adicionar um
[glob](https://en.wikipedia.org/wiki/Glob_%28programming%29) como parâmetro
para filtrar os testes que deseja rodar (ex: `$ pluga test test/triggers/*`).

### push

```sh
$ pluga push my-contact-email@example.com
```

O comando `push` realiza o build e upload do seu app para a Pluga. É muito
importante que preencha o email de contato ao realizar o push, pois é com esse
email que a equipe da Pluga irá entrar em contato para avançar com a implantação
do seu app na plataforma. (ex: `$ pluga push dinesh@piedpiper.com`)

Não se esqueça de preencher o campo `version` no arquivo **app.json**, assim a
equipe da Pluga consegue entender a evolução do seu app. Recomendamos que use
[semver](https://semver.org).