import TelaComprar from '../support/pages/comprar'

const dados = require('../fixtures/acessos.json');    
describe('Rotina para inserir produto ao carrinho e finalizar uma compra', () => {

     beforeEach(() => {
        TelaComprar.acessarPagina();
            
        
   })
       it('Adicionando produtos ao carrinho', () => {
            
            TelaComprar.logarCliente(dados.email,dados.senha);

            TelaComprar.buscarProduto('backpack{enter}');
            //TelaComprar.clicarSearch();
            TelaComprar.clicarProduto();
            TelaComprar.clicarBotaoAddToCart();
            cy.contains('You added Driven Backpack to your shopping cart.').should('be.visible');
            
         })
  

    })
  
describe('Rotina para finalizar uma compra', () => {

    beforeEach(() => {
        TelaComprar.acessarPagina();

    })
        it('Adicionando item ao carrinho e finalizando compra', () => {
            TelaComprar.buscarProduto('backpack{enter}');
            //TelaComprar.clicarSearch();
            TelaComprar.clicarProduto();
            TelaComprar.clicarBotaoAddToCart();
            cy.wait(4060);
            TelaComprar.clicarCarrinhoCompras();
            
            TelaComprar.clicarProceedCheckout();
            cy.wait(9000);
            TelaComprar.preencherEmail();
            TelaComprar.preencherFirstNome();
            TelaComprar.preencherLastNome();
            TelaComprar.preencherCampoStreetAddress();
            TelaComprar.clicarCountry();
            TelaComprar.clicarState();
            TelaComprar.preencherCity();
            TelaComprar.preencherPostalCode();
            TelaComprar.preencherPhoneNumber();
            cy.wait(3000);
            TelaComprar.clicarBotaoNext();
            TelaComprar.clicarPlaceOrder()

            cy.contains('Thank you for your purchase!').should('be.visible');

        })

})