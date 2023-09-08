import Home from '../../support/pages/home';
import Login from '../../support/pages/home/login';
import Cadastro from '../../support/pages/home/login/cadastrarSe';
const url = require('../../fixtures/urls.json')
var faker = require('faker-br');
const Leite = require('leite');

const nome = faker.name.firstName();
const sobrenome = faker.name.lastName();
const email = faker.internet.email(nome);
const senha = faker.internet.password();
const cpf = faker.br.cpf();
const data = "01031995";
const numero = faker.phone.phoneNumber();
const numeroWhatsapp = faker.phone.phoneNumber();


describe('Cadastro de usuarios', () => {
    context('Novo usuario se cadastrando no site da Natura', () => {
        before(() => {
            cy.visit('/');
        });
        it('Cadastrar usuario com o preenchimento de todos os campos', () => {

            cy.section('Cadastro de usuario')
            cy.step('Acesso ao home do site da Natura');
            cy.validarUrlHomeDaPagina(url.naturaHome);
            cy.step('Validar elementos importantes da página estão visiveis');
            Home.validarMenuPrincipal();
            Home.validarBarraDeFerramentas();
            Home.validarMenuCategorias();
            Home.validarDivPrincipalComComponentesDaPagina();
            Home.acessarPaginaDeLogin();

            cy.validarUrlHomeDaPagina(url.naturaLogin);
            Login.validarSeCamposDeLoginECadastroEstaoVisiveis();
            Login.clicarBotaoCadastro();

            cy.validarUrlHomeDaPagina(url.naturaCadastro);

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
            // Cadastro.clicarCriarConta();

        });
    });
});