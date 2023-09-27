import { ELEMENTS } from './createAccountElements';

const elements = require('./loginElements').ELEMENTS;

class TelaLogin {
    acessarPagina(){
        cy.visit('https://magento2-demo.magebit.com');
    }
    clicarLinkSign(){
        cy.contains(elements.linkSign).click();
    }
    preencherEmail(email){
        cy.get(elements.campoEmail).type(email);
    }
    preencherSenha(senha){
        cy.get(elements.campoSenha).type(senha);
    }
    clicarSingIn(){
        cy.get(elements.botaoSign).click();
    }
}

export default new TelaLogin();