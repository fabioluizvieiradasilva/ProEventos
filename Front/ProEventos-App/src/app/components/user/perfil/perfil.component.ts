import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorFields } from 'src/app/helpers/ValidatorFields';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  form!: FormGroup;



  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.validation();
  }

  private validation(): void{
    const formOptions: AbstractControlOptions = {
      validators: ValidatorFields.MustMatch('password', 'confirmPassword')
    };

    this.form = this.fb.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      occupation: ['', Validators.required],
      description: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    }, formOptions);
  }

  get f(): any {
    return this.form.controls;
  }

  onSubmit(): void{
    //vai parar aqui se o form estiver inválido
    if(this.form.invalid){return;}
  }

  //limpando o formulário
  public resetForm(event:any): void{
    event.preventDefault();
    this.form.reset();
  }

}
