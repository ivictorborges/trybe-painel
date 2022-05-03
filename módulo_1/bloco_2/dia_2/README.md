# DIA 2

O objetivo dos exercícios desse dia foi colocar em prática o que havia aprendido sobre Git e Github - Entendendo os comandos. Para isso, precisei seguir os seguintes requisitos :

1. Navegue até a raiz do projeto com o arquivo .txt
2. Verifique se não existe nada sem "commitar" utilizando git status
3. Crie uma nova branch com o nome trybe-skills-changes e faça checkout nela
4. No arquivo .txt, ao final da lista de habilidades , adicione mais duas habilidades que serão desenvolvidas na Trybe
5. Faça um git add nome-do-arquivo.extensao
6. Agora um git commit -m "Mensagem que você gostaria"
7. Uma boa prática é sempre resumir o que o seu commit está alterando, por exemplo, git commit -m "Adiciona nova skill"
8. Evite juntar muitas modificações em um único commit. Assim, caso haja algum erro no código, ficará mais fácil visualizar em qual alteração ele surgiu
9. E por último um git push -u origin trybe-skills-changes
10. Abra um Pull Request com uma descrição detalhada
11. Retorne para a branch principal, master, com o comando: git checkout master
12. Verifique que você está na branch master, com o comando: git branch (esta branch deve estar com o formato original, sem as habilidades recém adicionadas)
13. Crie uma nova branch trybe-skills-updates a partir da master e faça checkout nela
14. No mesmo arquivo .txt que você modificou no passo 4, também ao final da sua lista de habilidades, adicione mais um aprendizado que você terá nos próximos blocos
15. Faça um git add nome-do-arquivo.extensao
16. Agora um git commit -m "Mensagem que você gostaria"
17. e por último um git push -u origin trybe-skills-updates
18. Após o primeiro "push" da sua branch, você pode usar apenas o comando git push
Agora, faça o merge das branches trybe-skills-changes e trybe-skills-updates na branch master, através do Pull Request