import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent {

  public gruppoForm  = new FormGroup({
    nome: new FormControl(''),
    cognome: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    numeroDiTelefono : new FormControl(''),
    indirizzo: new FormControl(''),
    username: new FormControl('')
});
public onRegistratione(){
  console.log(this.gruppoForm.value);
}
}
