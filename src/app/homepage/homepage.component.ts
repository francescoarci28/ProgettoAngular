import { Component, OnInit } from '@angular/core';
import { Prodotto } from '../models/Prodotto';
import { ProdottoService } from '../service/prodottoService/prodotto.service';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  constructor(private prodottiService : ProdottoService, private route:ActivatedRoute){

  }
  ngOnInit(): void {
    this.prodottiService.getProdotti().subscribe(resp=>{
      this.prodotti = resp;
      console.log(this.prodotti)
      this.pagine = this.setContatorePagine();
      this.elementiTotali = this.prodotti.length;
      this.setPagina(1);

    });

  }


  prodotti: any[] = [];
  prodottiHome : any[] = [];


  pagine = 0;
  pagina = 1;
  prodottiPerPagina = 8;
  elementiTotali = 0;
  public setPagina(pagina: number) {
    this.pagina = pagina;
    this.prodottiHome = this.prodotti.slice((this.pagina - 1) * this.prodottiPerPagina, this.pagina * this.prodottiPerPagina);
  }
  public setContatorePagine(){
    return Math.ceil(this.prodotti.length / this.prodottiPerPagina);
  }

  public setPaginaPaginator(event:PageEvent){
    this.setPagina(event.pageIndex + 1);
  }

  public aggiungiAlCarrello(prodotto:Prodotto){

    console.log(prodotto,prodotto.id);
  }


}
