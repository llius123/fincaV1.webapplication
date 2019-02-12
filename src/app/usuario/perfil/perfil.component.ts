import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private login: LoginService) { }

  usuario: VecinoInterface;
  formularioPerfil: FormGroup;

  comunidadGuardada: ComunidadInterface;

  ngOnInit() {
    this.usuario = this.login.vecino;

    this.formularioPerfil = new FormGroup({
      id: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required]),
      numero: new FormControl('', [Validators.required]),
      nif: new FormControl('', [Validators.required]),
      iban: new FormControl('', [Validators.required]),
      porcentaje_participacion: new FormControl('', [Validators.required]),
      id_comunidad: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      id_tipovecino: new FormControl('', [Validators.required]),
      cod_poblacion: new FormControl('', [Validators.required]),
      login: new FormControl('', [Validators.required]),
      pass: new FormControl('', [Validators.required])
    })

    this.putDataForm()
  }

  putDataForm() {
    this.formularioPerfil.patchValue({
      id: this.usuario.id,
      nombre: this.usuario.nombre,
      direccion: this.usuario.direccion,
      numero: this.usuario.numero,
      nif: this.usuario.nif,
      iban: this.usuario.iban,
      porcentaje_participacion: this.usuario.porcentaje_participacion,
      id_comunidad: this.usuario.comunidad.nombre,
      email: this.usuario.email,
      telefono: this.usuario.telefono,
      id_tipovecino: this.usuario.id_tipovecino,
      cod_poblacion: this.usuario.poblacion.descripcion,
      login: this.usuario.login,
      pass: this.usuario.pass
    })
  }

}
