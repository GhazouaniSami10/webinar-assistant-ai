import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;
  username : String
  password :String
  constructor( public router: Router) { }

  ngOnInit() {
  }
  login(){

       this.username =  (document.getElementById('eml') as HTMLInputElement).value;
       this.password = (document.getElementById('psswd') as HTMLInputElement).value;
       if ( this.username == "admin" && this.password == "admin") {
        this.router.navigate(['/landing']);
       }
       else {
         alert(" incorrect username or password")
       }

  }
}
