import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prodotto } from 'src/app/models/Prodotto';

@Injectable({
  providedIn: 'root'
})
export class ProdottoService {
  private prodottirUrl='http://localhost:8081/prodotti';

  constructor(private Http:HttpClient) { }


  public createProduct(prodotto : any): Observable<any>{
    return this.Http.post<any>(this.prodottirUrl+"/add", prodotto);
  }

  public deleteProduct(nome: string){
    return this.Http.delete(this.prodottirUrl+"/delete?nome="+nome);
  }


  public getProdottiByContainingName(nomeContenuto:string): Observable<Prodotto[]>{
    return this.Http.get<Prodotto[]>(this.prodottirUrl+'/show/bynamecontaining?nome='+nomeContenuto);
  }
  public getProdottiByCategoria(nomeCategoria:string): Observable<Prodotto[]>{
    return this.Http.get<Prodotto[]>(this.prodottirUrl+'/show/bycategory?categoria='+nomeCategoria);

  }
  public getProdotti():Observable<Prodotto[]>{
    return this.Http.get<Prodotto[]>(this.prodottirUrl+'/show/all');
  }

  public getProdottoByNome(nome:string):Observable<Prodotto>{
    return this.Http.get<Prodotto>(this.prodottirUrl+"/show/product?nome="+nome)
  }


}
