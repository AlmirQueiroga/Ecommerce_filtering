Aplicação em React responsiva para exibir e filtrar lista de produtos. Pode ser visto a resultado do desenvolvimento nos prints a seguir:

![image](https://user-images.githubusercontent.com/28552417/188363392-c5dcd9f4-e6a5-4498-913a-288a1516844f.png)
![image](https://user-images.githubusercontent.com/28552417/188363478-3030c0b2-5b61-411d-88ad-290ff67a2e3b.png)

## Inicio do projeto

Para iniciar o projeto foi utilizado Vite, essa foi uma decisão inicial foi tomada para maior modernidade e desempenho do projeto,
ou seja, utilização de Roll Up no lugar de Webpack, ESBuild apresentando suporte nativo a ESModules e entre outras vantagens.
Não foram utilizadas bibliotecas de componentes prontos como Material-UI, elaborando meus próprios, 
fora isso foi levado em consideração como arquitetar o projeto, sendo considerada a utilização de Redux mas se tornou preferível
utilizar ContextApi considerando o tamanho do projeto e também sua estrutura baseada na leitura de um objeto Json. Tomadas estas decisões
iniciais, o desenvolvimento e funcionalidades são descritas a seguir

### Utilização do JSON

Ao desenvolver o projeto foi utilizado o json productsCategory disponibilizado e o desenvolvimento, consultado e filtragem voltado inteiramente em sua 
utilização assim como o desafio supunha, mas para um contexto mais realista em desenvolvimento de software foi criado um endpoint no mockapi que é 
consultado apenas para atualização do Json antes de seu tratamento, os valores serão sempre iguais mas foi imaginada esta arquitetura apenas para 
realismo, como se fosse utilizado o Json depositado em cache para soluções como queda de internet, etc..

![image](https://user-images.githubusercontent.com/28552417/188365396-9c6550d5-270b-40ef-a608-e61561ca668d.png)
![image](https://user-images.githubusercontent.com/28552417/188365658-692b4fe1-8700-48db-83d0-ca9775c713d4.png)


## ContextApi

### Provider

Considerando a utilização de um Json estático, foi utilizado o storage in cache na aplicação, desta forma armazenando os dados 
no cache na primeira execução e filtrando tais dados armazenados no state Products diretamente no Provider que consiste o Context Api.

![image](https://user-images.githubusercontent.com/28552417/188366229-0f652658-d625-4335-bf51-1f23dde3b25b.png)

### Filtragem

#### Models

Foram estruturadas interfaces para tipagem de produtos, tais models são base de utilização no useContext, que compreende
as funções de filtragem getOneProduct e filterProduct, também com props categories e filteredProducts fornecidos à aplicação.
Tais modelos podem ser vistos a seguir

![image](https://user-images.githubusercontent.com/28552417/188370209-7bd9530b-64e5-46a8-aa4d-64be0bbf12c8.png)
![image](https://user-images.githubusercontent.com/28552417/188370247-5dee0dff-ff74-49ad-ac86-d46e1bec8329.png)

### useContext

Para estrutura do projeto, essas funções do provider que controlam o estado dos produtos a serem exibidos na tela, ao selecionar um
produto ou ao mudar os parametros de filtragem no useEffect[selectedCategory, search] na Home, são chamadas tais funções que tratam
seus respectivos estados e retornam Products[] que apresentam category e name solicitados, disponibilizando os states categories e 
filtered products. Tais funcionalidades podem ver a seguir

![image](https://user-images.githubusercontent.com/28552417/188371376-7a3ad6b4-379f-496b-9522-c4a343a1fa95.png)
![image](https://user-images.githubusercontent.com/28552417/188371432-988e51c3-0350-469c-9b80-06405a254c4b.png)
![image](https://user-images.githubusercontent.com/28552417/188371847-861dc393-a93f-466e-9f42-623cb225f80c.png)


## Roteamento

Após o desenvolvimento do provider foi realizado o desenvolvimento do roteamento que vai controlar a página de exibir a lista e página
específica do produto. FOi utilizado o react-router-dom para construção de um roteamento rápido, simples e resposivo caracterizando uma
SPA. O componente de roteamento criado contendo as páginas pode ser visto abaixo.

![image](https://user-images.githubusercontent.com/28552417/188366944-bc432f6d-ced9-494b-9b5d-88f0f3138549.png)

## NavBar

O NavBar foi um componente criado para funcionar acima do roteamento, ou seja, compreendendo toda aplicação, sendo um componente simples
de valor principalmente estético, sendo sua principal característica a estilização, mas nesse caso também utilizado para voltar para Home.

![image](https://user-images.githubusercontent.com/28552417/188367422-45a77a64-3b32-42af-87ee-2b468b4379fd.png)

## Estruturação final do projeto

Compreendendo esses passos então é descrito como o projeto realmente é estruturado, sendo a partir desse ponto apenas organização de componentes
e responsavidade da filtragem. É exibido a seguir a arquitetura do projeto.

![image](https://user-images.githubusercontent.com/28552417/188367977-040d017d-a22a-4885-8b86-ac9998d349c6.png)


## Página Home

Sendo a home a página principal, ela compreende a maior parte dos componentes serem exibidos. Ela recebe todos os estados disponibilizados
pelo Context, sendo a Lista e Container apenas recebendo tais dados como props passados pela Home como pai destes demais componentes.
Tais tópicos serão dividos a seguir

### Categorias

O primeiro componente em destaque são os botões de filtro, como já foi explicada a incorporação do categories pelo useContext nos
capítulos acima, após isso só é realizado um map em tais categorias e um style fora de sua página de style para realizar o controle
de categoria selecionada ( outline quando selecionado e estado para seleção, se clicado quando já selecionado então deseleciona), ao 
selecionar a categoria é alterado o estado que controla tal outline e o useEffect em coordenação com o filterProduct no useContext.

![image](https://user-images.githubusercontent.com/28552417/188372405-dba80020-7e2a-4b83-b634-b632b5e15f08.png)
![image](https://user-images.githubusercontent.com/28552417/188372455-ad29114a-2d65-4355-ac65-28a089a662d3.png)
![image](https://user-images.githubusercontent.com/28552417/188373241-a073fab9-bce8-41bb-af1a-0fcdca47643f.png)


### Pesquisa

A caixa de pesquisa consiste em um input de texto que altera o estado de pesquisa também atrelado como parâmetro do filterProduct, retornando
filtragemm por nome comparando em cascata já com os produtos de categoria. Utiliza o ícone BsSearch com alteração de cor pelo Provider como
pode ser visto abaixo

![image](https://user-images.githubusercontent.com/28552417/188373126-7eb83a5e-5316-4def-9d70-7a940492d540.png)
![image](https://user-images.githubusercontent.com/28552417/188373188-3b42356e-a405-4fc0-aa4c-279ea59e461c.png)

### ProductList

A lista de Produtos consiste em uma lista com overflow para exibir os produtos, ela recebe tais dados Products[] e os organiza em
ProductContainers para cada item resultante do filteresProducts

![image](https://user-images.githubusercontent.com/28552417/188374217-f43b5930-b933-4081-aef3-07c1b202b2c0.png)

### ProductContainer

Cada item é estruturado em um Container que basicamente só exibe seu nome e sua foto respectiva e utiliza o useNavigate do react-router-dom
para redirecionar para página de detalhes especificada pelo id do produto. Fora esta funcionalidade de exibição e navegação básica foi utilizada
uma animação de transição hover.

![image](https://user-images.githubusercontent.com/28552417/188379436-5fc147ea-8838-4501-baaf-191b491bbfb1.png)
![image](https://user-images.githubusercontent.com/28552417/188379703-0aea186e-c17d-47bc-8d53-c7781f796727.png)

### Responsavidade Mobile

Foram utilizados valores adequeados nos styles para correta e responsiva exibição na versão Mobile

## ProductDetails

Sendo a segunda página da aplicação, esta compreende os detalhes do produto selecionado, esta utiliza os parametros $id de navegação e a função 
getOneProduct do Context para adquerir os dados necessários, então exibindo seu título, imagem, categoria e descrição.

![image](https://user-images.githubusercontent.com/28552417/188382352-b35f2c4e-c23c-4f87-aa0a-e75655d75d4b.png)

### Responsavidade Mobile

Foram utilizados valores adequeados nos styles para correta e responsiva exibição na versão Mobile

![image](https://user-images.githubusercontent.com/28552417/188382595-cab5d705-7934-4930-b050-9bedc46bf4e9.png)

# Conclusões finais

Foi elaborado um bom projeto com uma ótima arquitetura, responsividade e diferentes tratamentos para usuário e exibição.

# Dependências

"@emotion/react": "^11.10.4",
"@emotion/styled": "^11.10.4",
"@types/axios": "^0.14.0",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-icons": "^4.4.0",
"react-router-dom": "^6.3.0",
"styled-components": "^5.3.5"
"@types/react": "^18.0.17",
"@types/react-dom": "^18.0.6",
"@types/styled-components": "^5.1.26",
"@vitejs/plugin-react": "^2.0.1",
"typescript": "^4.6.4",
"vite": "^3.0.7"
