import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CarrelloComponent } from './carrello/carrello.component';
import { DettaglioProdottoComponent } from './dettaglio-prodotto/dettaglio-prodotto.component';
import { LoggedComponent } from './logged/logged.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TestataComponent } from './testata/testata.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ListaProdottiComponent } from './lista-prodotti/lista-prodotti.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { UtenteComponent } from './utente/utente.component';
import { CommonModule } from '@angular/common';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { APP_INITIALIZER } from '@angular/core';
import { ListaProdottiAdminComponent } from './admin/lista-prodotti-admin/lista-prodotti-admin.component';
import { AggiungiProdottiAdminComponent } from './admin/aggiungi-prodotti-admin/aggiungi-prodotti-admin.component';
import {MatTableModule} from '@angular/material/table';




function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        realm: 'ecommerce',
        url: 'http://localhost:8080',
        clientId: 'demo-angular'
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html'
      }
    });
}


@NgModule({
  declarations: [
    AppComponent,
    CarrelloComponent,
    DettaglioProdottoComponent,
    LoggedComponent,
    HomepageComponent,
    TestataComponent,
    SidenavComponent,
    ListaProdottiComponent,
    RegistrazioneComponent,
    UtenteComponent,
    ListaProdottiAdminComponent,
    AggiungiProdottiAdminComponent,

  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonToggleModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    HttpClientModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    KeycloakAngularModule,
    MatTableModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initializeKeycloak,
    multi: true,
    deps: [KeycloakService]
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
