/// <reference types="cypress" />

import { ELEMENTOS_HOME } from './elements';

class HomePage {
    validarUrlHomeDaPaginaNatura() {
        // cy.get(ELEMENTOS_HOME.iconUser).click()
        cy.visit('/');
        cy.url().should('contain', 'natura.com.br');
    }

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
}

export default new HomePage();