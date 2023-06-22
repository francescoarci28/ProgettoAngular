import { Component, OnInit } from '@angular/core';
import { Prodotto } from 'src/app/models/Prodotto';
import { ProdottoService } from 'src/app/service/prodottoService/prodotto.service';

@Component({
  selector: 'app-lista-prodotti-admin',
  templateUrl: './lista-prodotti-admin.component.html',
  styleUrls: ['./lista-prodotti-admin.component.css']
})
export class ListaProdottiAdminComponent implements OnInit{
  displayedColumns: string[] = ['nome', 'quantità', 'prezzo', 'categoria',"modifica",'elimina'];
  dataSource:any[] = [];
constructor(private prodottoService : ProdottoService ){

}
  ngOnInit(): void {
    this.getProducts();
  }
  private getProducts(){
    this.prodottoService.getProdotti().subscribe(resp =>{
      this.dataSource = resp;
    })
  }
  public deleteProduct(prodotto : Prodotto){
    console.log("Elimina prodotto", prodotto.id!);
    this.prodottoService.deleteProduct(prodotto.nome!).subscribe(resp =>{
      this.getProducts();
    })
  }
}
