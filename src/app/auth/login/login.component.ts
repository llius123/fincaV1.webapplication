import { Component, OnInit, Input } from "@angular/core";
import { LoginService } from "src/app/service/login/login.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() { }

  login(login: string, pass: string) {
    this.loginService
      .login(login, pass)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['admin']);
      },
        error => {
        });
  }
}
