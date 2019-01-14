import { Component, OnInit, Input } from "@angular/core";
import { LoginService } from "src/app/service/login/login.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private route: Router) {}

  ngOnInit() {}

  login(login: string, pass: string) {
    this.loginService
      .login(login, pass)
      .subscribe(data => {
        this.loginService.check().subscribe((vecino: VecinoBean) => { this.loginService.setLoggedUser(vecino); })
        this.route.navigate(['admin']);
      },
      error => {
      });
  }
}
