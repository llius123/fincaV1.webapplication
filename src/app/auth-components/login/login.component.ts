import { HttpHeaders } from "@angular/common/http";
import { Component, OnInit, Input } from "@angular/core";
import { LoginService } from "../../service/login/login.service";
import { Router, ActivatedRoute } from "@angular/router";
import * as anime from "src/assets/anime.min.js";
import { NgModel, FormGroup, FormControl, Validators } from "@angular/forms";
import { isUndefined } from "util";
import { MessageService } from "primeng/components/common/messageservice";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.login_form = new FormGroup({
      titulo_usuario: new FormControl("", [
        Validators.required,
        Validators.minLength(1),
        Validators.nullValidator
      ]),
      titulo_contrasenya: new FormControl("", [
        Validators.required,
        Validators.minLength(1),
        Validators.nullValidator
      ])
    });
    anime({
      targets: ["#titulo_usuario", "#titulo_contrasenya"],
      translateY: +15
    });
  }

  login_form: FormGroup;
  //Como el captcha de forma local no funciona lo dejo validado para siempre y cuando lo despliegue solo tengo que borrar el contenidp de lavariable reCaptcha
  reCaptcha: string = "validado";

  vecinotest;

  login() {
    if (!isUndefined(this.reCaptcha)) {
      this.loginService
        .login(
          this.login_form.get("titulo_usuario").value,
          this.login_form.get("titulo_contrasenya").value
        )
        .subscribe(
          data => {
            this.loginService.check().subscribe((vecino: VecinoInterface) => {
              this.loginService.setvecino(vecino);
              if (vecino.id_tipovecino.id == 1) {
                this.router.navigate(["admin/inicio"]);
              } else {
                this.router.navigate(["usuario/inicio"]);
              }
            });
          },
          error => {
            this.showTooltip("error", "", "Error al iniciar sesion");
          }
        );
    } else {
      this.showTooltip("error", "", "Haz el Captcha!");
    }
  }

  login2(usu: string, pass: string) {
    this.loginService.login(usu, pass).subscribe(
      data => {
        this.loginService.check().subscribe((vecino: VecinoInterface) => {
          this.loginService.setvecino(vecino);
          if (vecino.id_tipovecino.id == 1) {
            this.router.navigate(["admin/inicio"]);
          } else {
            this.router.navigate(["usuario/inicio"]);
          }
        });
      },
      error => {
        this.showTooltip("error", "", "Error al iniciar sesion");
      }
    );
  }

  focusIn(target: string) {
    anime({
      targets: target,
      translateY: -10,
      translateX: -25,
      color: "#9E4F6E",
      scale: 0.7
    });
  }
  focusOut(target: string) {
    switch (target) {
      case "#titulo_usuario":
        console.log(this.login_form.get("titulo_usuario").valid, target);
        if (!this.login_form.get("titulo_usuario").valid) {
          anime({
            targets: target,
            translateY: +7,
            translateX: 0,
            color: "#000000",
            scale: 1
          });
        }
        break;
      case "#titulo_contrasenya":
        if (!this.login_form.get("titulo_contrasenya").valid) {
          anime({
            targets: target,
            translateY: +7,
            translateX: 0,
            color: "#000000",
            scale: 1
          });
        }
        break;
    }
  }

  animationEnter(target: string) {
    anime({
      targets: `${target}`,
      translateX: [
        { value: 60, duration: 1500, delay: 500 },
        { value: 0, duration: 1000, delay: 500 }
      ],
      translateY: [
        { value: -17, duration: 1000 },
        { value: 17, duration: 1000, delay: 500 },
        { value: 0, duration: 500, delay: 500 }
      ]
    });
  }
  showResponse(data) {
    this.reCaptcha = data.response;
  }

  showTooltip(type: string, title: string, desc: string) {
    this.messageService.add({
      severity: `${type}`,
      summary: `${title}`,
      detail: `${desc}`
    });
  }
}
