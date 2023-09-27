# webjump

Passo para instalação do Cypress
->nvm install 16.13.1
->npm cypress install
->npx cypress --version
Cypress package version: 13.2.0
Cypress binary version: 13.2.0
Electron version: 25.8.0
Bundled Node version:
18.15.0
->npm install -D cypress-xpath
Passo para abrir o cypress
->npx cypress open

No diretório cypress->e2e estão as principais Suítes de testes
1- comprarTest
2- createAccountTest
3- loginTest
No diretório fixtures->acessos.json
Está a massa de dados que foi utilizado em todos os testes, dados repetitivos.
No diretório support->pages
Está todos os elementos e funcionalidades utilizada nos testes

DESCRIÇÃO DOS PRINCIPAIS CASOS DE TESTES
1- comprarTest (se refere a tela que envolve toda a rotina de comprar um produto
Nesta página possui dois testes específicos:
describe('Rotina para inserir produto ao carrinho e finalizar uma compra')
describe('Rotina para finalizar uma compra')
it('Adicionando produtos ao carrinho')
Pre-condições
1- Estar na página: https://magento2-demo.magebit.com
Passos:
1- Clique no botão "Sign In"
2- No campo Email e Password digite credenciais válidas
3- Clique no botão "Sign In"
4- No campo "Search entire store here..." digite "backpack" e Pressione Enter
5- Na listagem clique no primeiro produto
6- Clique no botão "Add to Cart"
7- Clique no ícone do carrinho de compras
8- Clique no botão "Proceed to Checkout"
9-Preencha os campos obrigatórios: Street Address, Country, State/Province, City, Zip/Postal Code, Phone Number
10- Clique no botão "Next"
11- Clique no botão "Place Order"
Resultado Esperado:
Deve ser exibido uma notificação "Thank you for your purchase!"

