import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DatingApp';
  users:any; 

  constructor(private http:HttpClient, private accountService: AccountService) {}
  ngOnInit(){
    this.getUsers(); 
    this.SetCurrentUser(); 
   }
   SetCurrentUser() {
     const user:User= JSON.parse(localStorage.getItem('User')); 
     this.accountService.SetCurrentUser(user); 
   }
  getUsers() {
   this.http.get('http://localhost:5001/api/users').subscribe(response => {
          this.users=response; 
        },  error => {console.error()}
        )
    }
  }
  
