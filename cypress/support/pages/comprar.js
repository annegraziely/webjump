import { ELEMENTS } from './comprarElements';
import TelaLogin from './login';


const elements = require('./comprarElements').ELEMENTS;

class TelaComprar {
    
    acessarPagina(){
        
        cy.visit('https://magento2-demo.magebit.com');
    }
    logarCliente(email,senha){
        TelaLogin.clicarLinkSign();
        TelaLogin.preencherEmail(email);
        TelaLogin.preencherSenha(senha);
        TelaLogin.clicarSingIn();
    }

    buscarProduto(produto){
        cy.get(elements.campoSearch).type(produto);
    }
    clicarSearch(){
        cy.get(elements.botaoSearch).click();
    }
    clicarProduto(){
        cy.get('[alt="Driven Backpack"]').click();
    }
    clicarBotaoAddToCart(){
        cy.get(elements.botaoAddToCart).click();
    }
    clicarCarrinhoCompras(){
        cy.get(elements.carrinhoCompras).click();
    }
    clicarProceedCheckout(){
        cy.get(elements.botaoProceedCheckout).click();
    }
    preencherCampoStreetAddress(){
        cy.xpath(elements.campoStreetAddress).type('Rua Itaguara 14');
    }
    clicarCountry(){
        cy.get('select').eq(0).select('Brazil');
    }
    clicarState(){
        cy.get('select').eq(1).select('Amazonas');
    }
    preencherCity(){
        cy.xpath(elements.campoCity).type('Manaus');
    }
    preencherPostalCode(){
        cy.xpath(elements.campoPostalCode).type('69097-128');
    }
    preencherPhoneNumber(){
        cy.xpath(elements.campoPhoneNumber).type('92982672065');
    }
    clicarBotaoNext(){
        cy.xpath(elements.botaoNext).click();
    }
    preencherEmail(){
        cy.xpath(elements.campoEmail).type('comprador@compras.com');
    }
    preencherFirstNome(){
        cy.xpath(elements.campoFirstName).type('Anne');
    }
    preencherLastNome(){
        cy.xpath(elements.campoLastName).type('Luz');
    }
    clicarPlaceOrder(){
        cy.xpath(elements.botaoPlaceOrder).click();
    }


    
}

export default new TelaComprar();