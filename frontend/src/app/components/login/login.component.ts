import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users-service';
import { Router } from '@angular/router';

interface Token {
  token: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string | undefined;
  public password: string | undefined;
  public error: string | undefined;

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.router.navigateByUrl('/account');
    }
  }

  logIn() {
    this.error = '';

    this.usersService.login(this.username, this.password).subscribe((token: Token) => {
      localStorage.setItem('token', token.token);
      this.router.navigateByUrl('/account').then(() => window.location.reload());
    }, (error: ErrorEvent) => {
      console.log(error);
      this.error = 'Invalid login credentials';
    });
  }
}
