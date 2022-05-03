# DIA 1

O objetivo dos exercícios desse dia foi colocar em prática o que havia aprendido sobre Git e GitHub - O que é e para que serve. Para isso, precisei seguir os seguintes requisitos :

1. Para instalar o Git abra o seu terminal e digite o seguinte comando: sudo apt-get install git-all
2. Para configurar identidade, digite o comando abaixo em seu terminal: git config --global user.name "Seu nome"
git config --global user.email seuemail@exemplo.br
3. Para visualizar as configurações, execute o comando à seguir no seu terminal: git config --global core.editor "code --wait"
4. Digite git --version para saber qual versão do git está instalada
5. Digite git config --list, para verificar as configurações definidas
6. Abra seu terminal e digite o comando que cria uma nova chave SSH, usando o seu email como rótulo : ssh-keygen -t rsa -b 4096 -C "seuemail@gmail.com"
7. Primeiro você deve iniciar o ssh-agent em background: eval "$(ssh-agent -s)"
8. Agora você deve adicionar sua chave privada SSH ao ssh-agent. Para isso execute o comando abaixo no terminal: ssh-add ~/.ssh/id_rsa