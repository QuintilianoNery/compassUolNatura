/// <reference types="cypress" />

import { ELEMENTOS_LOGIN } from './elements';

class Login {
    validarSeCamposDeLoginECadastroEstaoVisiveis() {
        cy.get(ELEMENTOS_LOGIN.campoLoginECadastro).should('be.visible');
        cy.get(ELEMENTOS_LOGIN.inputLogin).should('be.visible');
        cy.get(ELEMENTOS_LOGIN.inputSenha).should('be.visible');
        cy.get(ELEMENTOS_LOGIN.spanCriarConta).eq(0).should('be.visible');
    }

    clicarBotaoCadastro() {
        cy.get(ELEMENTOS_LOGIN.spanCriarConta).eq(0).should('have.text', 'Criar conta')
        cy.get(ELEMENTOS_LOGIN.spanCriarConta).eq(0).click();
    }
}

export default new Login();