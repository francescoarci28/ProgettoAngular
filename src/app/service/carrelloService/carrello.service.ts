import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prodotto } from 'src/app/models/Prodotto';
import { ProdottoNelCarrello } from 'src/app/models/ProdottoNelCarrello';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CarrelloService {
  private isLogged: boolean = true;
  private carrelloUri = 'http://localhost:8081/carrello';
  private username: string = "";


  constructor(private http: HttpClient, private authService: AuthService) { }


  public acquistaCarrello():Observable<number>{
    return this.http.post<number>(this.carrelloUri+"/acquista?username="+this.authService.username,{});
  }
  public rimuoviDalCarrello(id: number): Observable<any> {
    return this.http.delete(this.carrelloUri + "/delete?id=" + id + "&username=" + this.authService.username);
  }
  public aggiungiAlCarrello(prod: Prodotto, qta: number): Observable<ProdottoNelCarrello> {
    let body = {
      id: 1,
      nome: prod.nome,
      username: this.authService.username,
      quantitaRichiesta: qta,
      prezzo: prod.prezzo
    }
    return this.http.post<ProdottoNelCarrello>(this.carrelloUri + '/add', body);
  }

  public getCarrelloListaProdotti(): Observable<ProdottoNelCarrello[]> {
    return this.http.get<ProdottoNelCarrello[]>(this.carrelloUri + "?id=" + this.authService.userID);
  }

  public aggiornaProdotti():Observable<ProdottoNelCarrello[]>{
    return this.http.get<ProdottoNelCarrello[]>(this.carrelloUri+'/aggiornaprezzi'+'?username='+this.authService.username);
  }
}
