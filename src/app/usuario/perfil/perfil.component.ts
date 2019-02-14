import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VecinoService } from 'src/app/service/vecino/vecino.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private login: LoginService, private sql: VecinoService) { }

  usuario: VecinoInterface;
  formularioPerfil: FormGroup;

  ngOnInit() {
    this.usuario = this.login.vecino;

    this.formularioPerfil = new FormGroup({
      id: new FormControl({value: '', disabled: true}),
      nombre: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required]),
      numero: new FormControl('', [Validators.required]),
      nif: new FormControl('', [Validators.required]),
      iban: new FormControl('', [Validators.required]),
      porcentaje_participacion: new FormControl('', [Validators.required]),
      comunidad: new FormControl({value: '', disabled: true}, [Validators.required]),
      email: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      id_tipovecino: new FormControl({value: '', disabled: true}, [Validators.required]),
      poblacion: new FormControl({value: '', disabled: true}, [Validators.required]),
      login: new FormControl('', [Validators.required]),
      pass: new FormControl()
    })

    this.putDataForm()
  }

  putDataForm() {
    this.formularioPerfil.patchValue({
      id: this.login.vecino.id,
      nombre: this.login.vecino.nombre,
      direccion: this.login.vecino.direccion,
      numero: this.login.vecino.numero,
      porcentaje_participacion: this.login.vecino.porcentaje_participacion,
      nif: this.login.vecino.nif,
      iban: this.login.vecino.iban,
      comunidad: this.login.vecino.comunidad,
      email: this.login.vecino.email,
      telefono: this.login.vecino.telefono,
      id_tipovecino: this.login.vecino.id_tipovecino,
      poblacion: this.login.vecino.poblacion,
      login: this.login.vecino.login,
      pass: this.login.vecino.pass
    })
  }

  editar() {
    console.log(this.formularioPerfil.value)
    this.sql.updateProfile(this.formularioPerfil.value).subscribe()
  }

}
