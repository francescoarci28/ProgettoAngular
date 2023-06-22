import { Component, OnInit } from '@angular/core';
import { Prodotto } from '../models/Prodotto';
import { ProdottoService } from '../service/prodottoService/prodotto.service';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { CarrelloService } from '../service/carrelloService/carrello.service';
import { SidebarControllerService } from '../service/sidenavController/sidebar-controller.service';
import { AuthService } from '../service/auth/auth.service';

@Component({
  selector: 'app-lista-prodotti',
  templateUrl: './lista-prodotti.component.html',
  styleUrls: ['./lista-prodotti.component.css']
})
export class ListaProdottiComponent implements OnInit {
  nomeCategoria: string | null = null;
  constructor(private authService: AuthService,private router: Router,private prodottiService: ProdottoService, private route: ActivatedRoute, private carrelloService: CarrelloService, private sideNavService : SidebarControllerService) {

  }
  ngOnInit(): void {

    this.route.paramMap.subscribe( paramMap => {
      this.nomeCategoria = paramMap.get('nome');
      if(this.router.url.includes("cerca")){
        this.prodottiService.getProdottiByContainingName(this.nomeCategoria!).subscribe(resp => {
          this.prodotti = resp;
          console.log(this.nomeCategoria)
          this.pagine = this.setContatorePagine();
          this.elementiTotali = this.prodotti.length;
          this.setPagina(1);
        })

      }else if (this.nomeCategoria) {
        this.prodottiService.getProdottiByCategoria(this.nomeCategoria).subscribe(resp => {
          this.prodotti = resp;
          console.log(this.nomeCategoria)
          this.pagine = this.setContatorePagine();
          this.elementiTotali = this.prodotti.length;
          this.setPagina(1);

        })
      } else {
        this.prodottiService.getProdotti().subscribe(resp => {
          this.prodotti = resp;

          this.pagine = this.setContatorePagine();
          this.elementiTotali = this.prodotti.length;
          this.setPagina(1);
        });

      }



    })


  }


  prodotti: any[] = [];
  prodottiHome: any[] = [];


  pagine = 0;
  pagina = 1;
  prodottiPerPagina = 8;
  elementiTotali = 0;
  public setPagina(pagina: number) {
    this.pagina = pagina;
    this.prodottiHome = this.prodotti.slice((this.pagina - 1) * this.prodottiPerPagina, this.pagina * this.prodottiPerPagina);
  }
  public setContatorePagine() {
    return Math.ceil(this.prodotti.length / this.prodottiPerPagina);
  }

  public setPaginaPaginator(event: PageEvent) {
    this.setPagina(event.pageIndex + 1);
  }

  public aggiungiAlCarrello(prodotto: Prodotto) {
    if(this.authService.isLogged)
    this.carrelloService.aggiungiAlCarrello(prodotto,1).subscribe(resp =>{
      this.sideNavService.sidebarStatusCart = true;
    });
  }


}
