import TelaLogin from '../support/pages/login'

describe('Login de Usuário', () => {

     beforeEach(() => {
        TelaLogin.acessarPagina();
           
  
   })
       it('Preencher corretamente todos os campos para o login do usuário', () => {
            const dados = require('../fixtures/acessos.json');
            TelaLogin.clicarLinkSign();
            TelaLogin.preencherEmail(dados.email);
            TelaLogin.preencherSenha(dados.senha);
            TelaLogin.clicarSingIn();
          
            cy.contains('Welcome, Thiago Luz!').should('be.visible');
                 
         })
  

    })
  
    