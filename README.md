# teste-vnda-front-pleno

### Como executar o projeto:

#### Passo 1:
Abrir o terminal e instalar as dependências de desenvolvimento necessárias para rodar o Gulp. 
Comando: yarn ou npm install.

#### Passo 2:
Executar as tasks(tarefas do Gulp) para automatizar o workflow através dos comandos a seguir:

<strong>gulp serve</strong> - cria um "servidor" para monitorar todas alterações realizadas nos documentos html,<br> 
disparando um refresh no browser automaticamente.

<strong>gulp</strong> - ativa o monitoramento dos arquivos Sass que estão dentro da pasta "src",<br>
minificando-os e transportando-os para a pasta "dist"

<strong>gulp build-img</strong> - minifica as imagens, transportando-as para a pasta "dist". 

<strong>gulp pages</strong> - minifica os arquivos html, transportando-os para a pasta "dist".

<strong>gulp clean</strong> - apaga todos os arquivos e a própria pasta "dist". Use com cautela! 

