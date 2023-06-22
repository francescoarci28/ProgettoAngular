import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Carrello } from '../models/Carrello';
import { ProdottoNelCarrello } from '../models/ProdottoNelCarrello';
import { CarrelloService } from '../service/carrelloService/carrello.service';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent implements  OnChanges{
  public prodottiCarrello: ProdottoNelCarrello[] = [];
  public getCarrello?: Carrello;
  public prezzoTotale = 0;
  @Input() isOpen = false;
  constructor(private carrelloService : CarrelloService){

  }


  private requestCart(){
    this.carrelloService.getCarrelloListaProdotti().subscribe(resp=>{
      this.prezzoTotale = 0;
      this.prodottiCarrello = resp;
      this.prodottiCarrello.forEach(el =>{
        this.prezzoTotale += el.prezzo*el.quantitaRichiesta;
      })

    });
  }
  ngOnChanges () {
    if(!this.isOpen) return;
    this.requestCart()

  }

  public rimoviDalCarrello(id:number){
    this.carrelloService.rimuoviDalCarrello(id).subscribe(resp=>{
      this.requestCart()

    });
  }

  public confermaAcquisti(){
    this.carrelloService.acquistaCarrello().subscribe(r=>{
      this.requestCart();
      alert("HAI SPESO BENE I TUOI: "+r+"€");
    });
  }

  public aggiornaProdotti(){
    this.carrelloService.aggiornaProdotti().subscribe(rs=>{
        this.requestCart()
      })

  }

}
