<h1 align="center"> :man_technologist: Tech4Humans - Teste prático de programação :woman_technologist: </h1>

<p>
 
Bom dia a todos! Meu nome é Orlando e este é o repositório para o desafio proposto para a vaga de programador! :smiley: <br/>
Foi uma ótima oportunidade de aprendizado e espero que gostem do resultado! <br/>
Abaixo uma imagem do resultado final, qualquer dúvida é só entrar em contato comigo!

</p>

![image](https://user-images.githubusercontent.com/78616220/136705605-f0f542f6-be66-4cb6-86d5-2bf4709b3d98.png)

## Setup

Para rodar este projeto localmente, é necessário que seja instalado o MySql Server, criar um usuário e uma senha (caso já tenha o MySql Server instalado pule para a etapa "Criando a tabela")

### Instalando o MySql Server: 

1. Abra o terminal e rode os seguintes comandos:

#### Linux
```javascript
  sudo apt update
  sudo apt install mysql-server
```
#### Mac
```javascript
   brew install mysql
```
2. Após a instalação crie um usuário e uma senha com o seguinte comando:
```javascript
  sudo mysql_secure_installation
```

3. Siga os passos e após a criação do usuário e senha já é possivel acessar o banco de dados com o seguinte comando:
```javascript
  sudo mysql -u [nome_do_usuario] -p
```

### Criando a tabela 

Para criar a tabela utilizada no projeto utilize o arquivo seed.sql localizado em Back-End/seed.sql.
Para a criação podemos tanto utilizar a interface MySql WorkBench ou pelo terminal.
Pelo terminal acesse o mysql utilizando o comando:

```javascript
  sudo mysql -u [nome_do_usuario] -p
```

Após acessar a instância do mysql, copie e cole o contéudo do seed.sql para a criação da tabela.

### Clonando o projeto:

1. Clone o projeto:
```javascript
  git clone https://github.com/o-flores/Tech4Humans.git
```

3. Instale as dependências:
```javascript
  cd Tech4Humans
  cd Back-End
  npm i
  cd ..
  cd front-end
  npm i
```

4. Crie o arquivo .env na raiz do diretório Back-End/ e crie as variáveis de ambiente para a conexão com o banco. Utilize o usuário e a senha criadas anteriormente:
```javascript
DB_USER=[nome_do_usuario]
DB_PASS=[senha_do_usuario]
```

5. Para rodar o servidor rode os seguintes comandos:
```javascript
  cd Back-End
  npm start
```
6. Para abrir a aplicação no seu browser rode os seguintes comandos:
```javascript
  cd cd front-end
  npm start
```
6. Dessa forma, o projeto está pronto para ser rodado localmente
---
