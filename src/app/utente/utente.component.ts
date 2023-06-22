import { Component, OnInit } from '@angular/core';
import { AccountService } from '../service/accountService/account.service';
import { AuthService } from '../service/auth/auth.service';
import { AcquistoService } from '../service/acquistoService/acquisto.service';

@Component({
  selector: 'app-utente',
  templateUrl: './utente.component.html',
  styleUrls: ['./utente.component.css']
})
export class UtenteComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'prezzo',"quantità","data"];
  dataSource:any[] = [];


  constructor(public auth: AuthService, private accountService: AccountService, private acquistiService: AcquistoService) {

  }
  ngOnInit() {
    if (!this.auth.isLogged)
      this.login()
    else{
      this.getAcquisti()
    }
  }

  private getAcquisti(){
    this.acquistiService.getAcquisti().subscribe(resp =>{

      this.dataSource =resp.map((el:any) =>{
        el.data = this.renderDate(el.data)
        return el;
      });
    })
  }
  private login() {
    this.auth.getUserInfo().then(r => {
      this.accountService.registrazione(r.username!).subscribe((resp: any) => {
        console.log(resp)
        this.auth.userID = +resp.id!;
        this.auth.isLogged = true;
        this.auth.username =  r.username!;
        this.auth.getRoles()

        this.getAcquisti()

      });
    })
  }
  renderDate(data:number){
    const date = new Date(data);
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
  }
}
