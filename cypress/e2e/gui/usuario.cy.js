import Home from '../../support/pages/home';

describe('Cadastro de usuarios', () => {
    context('Novo usuario se cadastrando no site da Natura', () => {
        it('Cadastrar usuario com o preenchimento de todos os campos', () => {

            cy.section('Cadastro de usuario')
            cy.step('Acesso ao home do site da Natura');
            Home.validarUrlHomeDaPaginaNatura();

            cy.step('Validar elementos importantes da página estão visiveis');

            Home.validarMenuPrincipal();
            Home.validarBarraDeFerramentas();
            Home.validarMenuCategorias();
            Home.validarDivPrincipalComComponentesDaPagina();



        });
    });
});