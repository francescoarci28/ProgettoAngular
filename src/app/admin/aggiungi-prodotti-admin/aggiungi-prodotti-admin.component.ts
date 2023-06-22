import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ProdottoService } from 'src/app/service/prodottoService/prodotto.service';

@Component({
  selector: 'app-aggiungi-prodotti-admin',
  templateUrl: './aggiungi-prodotti-admin.component.html',
  styleUrls: ['./aggiungi-prodotti-admin.component.css']
})
export class AggiungiProdottiAdminComponent {

  public gruppoForm  = new FormGroup({
    nome: new FormControl(''),
    qta: new FormControl<number>(0),
    descrizione: new FormControl(''),
    prezzo: new FormControl<number>(0),
    categoria : new FormControl('')
  });

  constructor(private route: ActivatedRoute, private prodottoService: ProdottoService ){


    const nome = this.route.snapshot.paramMap.get('nome');

    if(nome){
      this.prodottoService.getProdottoByNome(nome).subscribe(resp =>{
        this.gruppoForm.patchValue({
          nome: resp.nome,
          qta: resp.qta,
          descrizione:resp.descrizione,
          prezzo: resp.prezzo,
          categoria: resp.categoria
        })
      });
      console.log(nome)
    }


  }
public onSave(){
  this.prodottoService.createProduct(this.gruppoForm.value!).subscribe(resp=>{

    console.log(resp);
  });
}
}
