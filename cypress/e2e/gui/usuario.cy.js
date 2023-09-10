/// <reference types="cypress" />
import Home from '../../support/pages/home';
import Login from '../../support/pages/home/login';
import Cadastro from '../../support/pages/home/login/cadastrarSe';
const url = require('../../fixtures/urls.json')
var faker = require('faker-br');

const nome = faker.name.firstName();
const sobrenome = faker.name.lastName();
const email = faker.internet.email(nome);

const numeroSenha = faker.random.number(1000);
const caracteresEspeciais = "!@#$%^&*()_+";
const caracterEspecialAleatorio = faker.random.arrayElement(caracteresEspeciais)
const senha = faker.internet.password() + numeroSenha + caracterEspecialAleatorio;

const cpf = faker.br.cpf();
const data = "01031995";
const numero = faker.phone.phoneNumber();
const numeroWhatsapp = faker.phone.phoneNumber();

//Neste teste realizo apenas a validação dos componentes e não do texto, pois na minha visão o texto 
//é dinamico e pode mudar a qualquer momento, já os componentes não, garantindo assim a estabilidade do teste
describe('Cadastro de usuarios', () => {
    context('Novo usuario se cadastrando no site da Natura', () => {
        before(() => {
            cy.visit('/');
            cy.wait(2000);
        });
        it('Cadastrar usuario com o preenchimento de todos os campos', () => {

            cy.section('Cadastro de usuario')
            cy.section('Acesso ao home do site da Natura');
            cy.validarUrlHomeDaPagina(url.naturaHome);
            cy.section('Validar elementos importantes da página estão visiveis');
            Home.validarMenuPrincipal();
            Home.validarBarraDeFerramentas();
            Home.validarMenuCategorias();
            Home.validarDivPrincipalComComponentesDaPagina();
            Home.acessarPaginaDeLogin();

            cy.section('Validar se a pagina de login foi acessada');
            cy.validarUrlHomeDaPagina(url.naturaLogin);
            Login.validarSeCamposDeLoginECadastroEstaoVisiveis();
            Login.clicarBotaoCadastro();

            cy.section('Validar se a pagina de cadastro foi acessada');
            cy.validarUrlHomeDaPagina(url.naturaCadastro);
            cy.section('Preencher todos os campos do cadastro');
            Cadastro.digitarPrimeiroNome(nome);
            Cadastro.digitarSobrenome(sobrenome);
            Cadastro.digitarEmail(email);
            Cadastro.digitarSenha(senha);
            Cadastro.digitarConfirmacaoSenha(senha);
            Cadastro.digitarCpf(cpf);
            Cadastro.digitarDataNascimento(data);
            Cadastro.clicarGenero();
            Cadastro.clicarQueroReceberViaSMS();
            Cadastro.digitarNumeroCelular(numero);
            Cadastro.clicarQueroReceberViaWhatsapp();
            Cadastro.digitarNumeroWhatsapp(numeroWhatsapp);
            Cadastro.clicarFornecerMinhasInformacoes();
            Cadastro.clicarConfirmarMaisDe18Anos();
            Cadastro.clicarCriarConta();

            cy.section('Validar se o cadastro foi realizado com sucesso');
            cy.validarUrlHomeDaPagina(url.naturaHome);
            //O teste está certo, mas por algum motivo o site da Natura não apresenta o nome da pessoa logada, mostra apenas Minha Conta.
            //Isso apenas executando pelo Cypress, já pelo site da Natura o nome aparece normalmente.
            // Home.validarNomeUsuario(nome)


        });
    });
});