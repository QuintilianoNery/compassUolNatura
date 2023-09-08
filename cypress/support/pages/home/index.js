/// <reference types="cypress" />

import { ELEMENTOS_HOME } from './elements';

class HomePage {
    validarMenuPrincipal() {
        cy.get(ELEMENTOS_HOME.menuPrincipal).should('be.visible');
    }

    validarBarraDeFerramentas() {
        cy.get(ELEMENTOS_HOME.barraDeFerramentas).should('be.visible');
    }

    validarMenuCategorias() {
        cy.get(ELEMENTOS_HOME.menuCategorias).should('be.visible');
    }

    validarDivPrincipalComComponentesDaPagina() {
        cy.get(ELEMENTOS_HOME.divPrincipalComponentesPagina).should('be.visible');
    }

    acessarPaginaDeLogin() {
        cy.get(ELEMENTOS_HOME.minhaContaEntrar).click()
    }
}

export default new HomePage();