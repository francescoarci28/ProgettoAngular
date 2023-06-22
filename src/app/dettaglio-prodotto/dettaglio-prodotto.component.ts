import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Prodotto } from '../models/Prodotto';
import { ProdottoService } from '../service/prodottoService/prodotto.service';
import { CarrelloService } from '../service/carrelloService/carrello.service';
import { SidebarControllerService } from '../service/sidenavController/sidebar-controller.service';
import { AuthService } from '../service/auth/auth.service';

@Component({
  selector: 'app-dettaglio-prodotto',
  templateUrl: './dettaglio-prodotto.component.html',
  styleUrls: ['./dettaglio-prodotto.component.css']
})
export class DettaglioProdottoComponent implements OnInit {
  public prodotto?: Prodotto;
  public nome?: string;
  public quantita_selezionata = 1;
  constructor(private authService: AuthService,private prodottoService: ProdottoService, private route: ActivatedRoute,private carrelloService: CarrelloService, private sideNavService : SidebarControllerService
  ) {
  }
  ngOnInit() {
    this.nome = this.route.snapshot.paramMap.get('nome')!;

    this.prodottoService.getProdottoByNome(this.nome).subscribe(resp => { this.prodotto = resp; console.log(resp) });


  }

  public diminuisci_quantita() {

    this.quantita_selezionata = this.quantita_selezionata == 1 ? 1 : this.quantita_selezionata - 1;
  }
  public aumenta_quantita() {

    this.quantita_selezionata = this.quantita_selezionata == this.prodotto!.qta ? this.prodotto!.qta : this.quantita_selezionata + 1;
  }
  public acquistaProdotto(){
    if(this.authService.isLogged)
    this.carrelloService.aggiungiAlCarrello(this.prodotto!,this.quantita_selezionata).subscribe(resp =>{
      this.sideNavService.sidebarStatusCart = true;
    });

  }
}
