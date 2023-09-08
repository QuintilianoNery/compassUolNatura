/// <reference types="cypress" />

import { ELEMENTOS_CADASTRO } from './elements';

class CadastrarSe {
    digitarPrimeiroNome(nome) {
        cy.wait(2000)
        cy.get(ELEMENTOS_CADASTRO.inputPrimeiroNome).type(nome);
    }

    digitarSobrenome(sobrenome) {
        cy.wait(2000)
        cy.get(ELEMENTOS_CADASTRO.inputSobrenome).should('be.visible')
        cy.get(ELEMENTOS_CADASTRO.inputSobrenome).type(sobrenome);
    }

    digitarEmail(email) {
        cy.get(ELEMENTOS_CADASTRO.inputEmail).should('be.visible')
        cy.get(ELEMENTOS_CADASTRO.inputEmail).type(email);
    }

    digitarSenha(senha) {
        cy.get(ELEMENTOS_CADASTRO.inputSenha).should('be.visible')
        cy.get(ELEMENTOS_CADASTRO.inputSenha).type(senha);
    }

    digitarConfirmacaoSenha(senha) {
        cy.get(ELEMENTOS_CADASTRO.inputConfirmacaoSenha).should('be.visible')
        cy.get(ELEMENTOS_CADASTRO.inputConfirmacaoSenha).type(senha, { log: false });
    }

    digitarCpf(cpf) {
        cy.get(ELEMENTOS_CADASTRO.inputCpf).should('be.visible')
        cy.get(ELEMENTOS_CADASTRO.inputCpf).type(cpf);
    }

    digitarDataNascimento(data) {
        cy.wait(200)
        cy.get(ELEMENTOS_CADASTRO.inputDataNascimento).should('be.visible');
        cy.get(ELEMENTOS_CADASTRO.inputDataNascimento).type(data);
    }

    clicarGenero() {
        cy.get(ELEMENTOS_CADASTRO.inputClick).should('be.visible');
        cy.get(ELEMENTOS_CADASTRO.inputGenero).eq(1).click();
    }

    clicarQueroReceberViaSMS() {
        cy.get(ELEMENTOS_CADASTRO.inputQueroReceberViaSMS).should('be.visible');
        cy.get(ELEMENTOS_CADASTRO.inputQueroReceberViaSMS).click();
    }

    digitarNumeroCelular(numero) {
        cy.get(ELEMENTOS_CADASTRO.inputNumeroCelular).should('be.visible');
        cy.get(ELEMENTOS_CADASTRO.inputNumeroCelular).type(numero);
    }

    clicarQueroReceberViaWhatsapp() {
        cy.get(ELEMENTOS_CADASTRO.inputQueroReceberViaWhatsapp).should('be.visible');
        cy.get(ELEMENTOS_CADASTRO.inputQueroReceberViaWhatsapp).click();
    }

    digitarNumeroWhatsapp(numeroWhastapp) {
        cy.get(ELEMENTOS_CADASTRO.inputNumeroWhatsapp).should('be.visible');
        cy.get(ELEMENTOS_CADASTRO.inputNumeroWhatsapp).type(numeroWhastapp);
    }


    clicarFornecerMinhasInformacoes() {
        cy.get(ELEMENTOS_CADASTRO.inputFornecerMinhasInformacoes).should('be.visible');
        cy.get(ELEMENTOS_CADASTRO.inputFornecerMinhasInformacoes).click();
    }

    clicarConfirmarMaisDe18Anos() {
        cy.get(ELEMENTOS_CADASTRO.inputConfirmarMaisDe18Anos).should('be.visible');
        cy.get(ELEMENTOS_CADASTRO.inputConfirmarMaisDe18Anos).click();
    }

    clicarCriarConta() {
        cy.get(ELEMENTOS_CADASTRO.inputCriarConta).should('be.visible');
        cy.get(ELEMENTOS_CADASTRO.inputCriarConta).eq(2).click();
    }
}

export default new CadastrarSe();