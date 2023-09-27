import Busca from '../support/pages/createAccount'

const dados = require('../fixtures/acessos.json');    
describe('Cadastro de Usuário', () => {

     beforeEach(() => {
         Busca.acessarPagina();
  
   })
       it('Preencher corretamente todos os campos de criação de usuário', () => {
  
          Busca.criacaoUsuario(dados.name,dados.LastName,dados.email,dados.password,dados.password);
          cy.contains('Thank you for registering with Main Website Store.').should('be.visible');
                 
         })
         
    })
  
    