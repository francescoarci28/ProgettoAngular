import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KeycloakAuthGuard } from 'keycloak-angular';
import { AggiungiProdottiAdminComponent } from './admin/aggiungi-prodotti-admin/aggiungi-prodotti-admin.component';
import { ListaProdottiAdminComponent } from './admin/lista-prodotti-admin/lista-prodotti-admin.component';
import { DettaglioProdottoComponent } from './dettaglio-prodotto/dettaglio-prodotto.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListaProdottiComponent } from './lista-prodotti/lista-prodotti.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { AuthGuard } from './service/auth/auth.guard';
import { UtenteComponent } from './utente/utente.component';


const routes: Routes = [{
  path: "", component: ListaProdottiComponent
},
{

  path: "categoria/:nome", component: ListaProdottiComponent
}, {
  path: "prodotto/:nome", component: DettaglioProdottoComponent
}, {
  path:"cerca/:nome",component:ListaProdottiComponent
},{
  path: "registrazione", component: RegistrazioneComponent
},
{
  path: "utente", component: UtenteComponent, canActivate: [AuthGuard]
},
{
  path: "admin/prodotto/aggiungi", component: AggiungiProdottiAdminComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_ADMIN"] }
},
{
  path: "admin/prodotto/modifica/:nome", component: AggiungiProdottiAdminComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_ADMIN"] }
}
,{
  path: "admin/prodotto/lista", component: ListaProdottiAdminComponent, canActivate: [AuthGuard], data: { roles: ["ROLE_ADMIN"] }
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
