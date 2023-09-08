/// <reference types="cypress" />

import { ELEMENTOS_CADASTRO } from './elements';

class CadastrarSe {
    digitarPrimeiroNome(nome) {
        cy.get(ELEMENTOS_CADASTRO.inputPrimeiroNome).type(nome);
    }

    digitarSobrenome(sobrenome) {
        cy.get(ELEMENTOS_CADASTRO.inputSobrenome).type(sobrenome);
    }

    digitarEmail(email) {
        cy.get(ELEMENTOS_CADASTRO.inputEmail).type(email);
    }

    digitarSenha(senha) {
        cy.get(ELEMENTOS_CADASTRO.inputSenha).type(senha);
    }

    digitarConfirmacaoSenha(senha) {
        cy.get(ELEMENTOS_CADASTRO.inputConfirmacaoSenha).type(senha, { log: false });
    }

    digitarCpf(cpf) {
        cy.get(ELEMENTOS_CADASTRO.inputCpf).type(cpf);
    }

    digitarDataNascimento(data) {
        cy.get(ELEMENTOS_CADASTRO.inputDataNascimento).type(data);
    }

    clicarGenero() {
        cy.get(ELEMENTOS_CADASTRO.inputClick).eq(1).click();
    }

    clicarQueroReceberViaSMS() {
        cy.get(ELEMENTOS_CADASTRO.inputClick).eq(4).click();
    }

    digitarNumeroCelular(numero) {
        cy.get(ELEMENTOS_CADASTRO.inputNumeroCelular).type(numero);
    }

    clicarQueroReceberViaWhatsapp() {
        cy.get(ELEMENTOS_CADASTRO.inputClick).eq(5).click();
    }

    digitarNumeroWhatsapp(numeroWhastapp) {
        cy.get(ELEMENTOS_CADASTRO.inputNumeroWhatsapp).type(numeroWhastapp);
    }


    clicarFornecerMinhasInformacoes() {
        cy.get(ELEMENTOS_CADASTRO.inputClick).eq(6).click();
    }

    clicarConfirmarMaisDe18Anos() {
        cy.get(ELEMENTOS_CADASTRO.inputClick).eq(7).click();
    }

    clicarCriarConta() {
        cy.get(ELEMENTOS_CADASTRO.inputCriarConta).click();
    }
}

export default new CadastrarSe();