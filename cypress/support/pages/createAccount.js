import { ELEMENTS } from './createAccountElements';

const el = require('./createAccountElements').ELEMENTS;

class Cadastro {
    acessarPagina(){
        cy.visit('https://magento2-demo.magebit.com');
    }
    clicarLinkCreateAnAccount(){
        cy.contains(el.linkCreateAccount).click();
    }
    preencherCampoFirstName(Fname){
        cy.get(el.campoFirstName).type(Fname);

    }
    preencherCampoLastName(Lname){
        cy.get(el.campoLastName).type(Lname);
    }
    preencherCampoEmail(email){
        cy.get(el.campoEmail).type(email);
    }
    preencherCampoPassword(password){
        cy.get(el.campoPassword).type(password);
    }
    preencherCampoConfirmPassword(confirmationPassword){
        cy.get(el.campoConfirmPassword).type(confirmationPassword);
    }
    submeterCreateAnAccount(){
        cy.contains('button','Create an Account').click();
    }

    criacaoUsuario(Fname, Lname, email,password,confirmPassword){
    this.clicarLinkCreateAnAccount();
    this.preencherCampoFirstName(Fname);
    this.preencherCampoLastName(Lname);
    this.preencherCampoEmail(email)
    this.preencherCampoPassword(password);
    this.preencherCampoConfirmPassword(confirmPassword);
    this.submeterCreateAnAccount();

    }
    
}

export default new Cadastro();