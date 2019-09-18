import { Component, OnInit } from '@angular/core';
import { FormBuilder, 
	      FormGroup, 
        Validators } from '@angular/forms';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  clienteForm: FormGroup;
  submitted = false;

  constructor(
    private fb:FormBuilder
  ) { 
    this.clienteForm = this.fb.group({
      entero: ['', Validators.required],
      nombres: ['aaaaa', Validators.required],
      apellidos: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(6)]],
      confirmPass: ['', [Validators.required,Validators.minLength(6)]],     
    },{
      validator: validarPass('pass', 'confirmPass')
    });
  }

  ngOnInit() {
  }

  get f() { return this.clienteForm.controls; }

  onSubmit(){
    this.submitted=true;
    console.log(this.clienteForm.value);
  }

}

export function validarPass(campo1: string, campo2: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[campo1];
      const controlConfirm = formGroup.controls[campo2];

      if (controlConfirm.errors && !controlConfirm.errors.mustMatch) {
          // si tiene otros errores se regresa
          return;
      }

      // manda error al campo
      if (control.value !== controlConfirm.value) {
          controlConfirm.setErrors({ validarPass: true });
      } else {
          controlConfirm.setErrors(null);
      }
  }
}
