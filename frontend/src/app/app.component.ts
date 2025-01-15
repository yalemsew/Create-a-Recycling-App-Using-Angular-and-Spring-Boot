import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  public term : string | undefined
  public isTokenThere : boolean

  constructor(private router: Router) {
    console.log("Token:  " + localStorage.getItem('token'));
    this.isTokenThere = localStorage.getItem('token') != null
  }

// Task 15 : Write search function here
  search () {
    this.router.navigate(["/shop", this.term]).then(() => window.location.reload())
  }
}

