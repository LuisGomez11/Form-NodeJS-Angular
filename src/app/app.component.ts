import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  name = 'Luis Alberto Gomez';

  public formulario: FormGroup;

  nombre:String;
  correo:String;
  telefono:String;

  constructor(private formBuilder: FormBuilder){}

  public ngOnInit(){
    this.formulario = this.formBuilder.group({
      nombre:'',
      correo:'',
      telefono:''
    });
  }

  public onSubmit(formValue: any){
    this.nombre = formValue.nombre;
    this.correo = formValue.correo;
    this.telefono = formValue.telefono;
  }

}
