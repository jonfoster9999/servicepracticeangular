import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private userService: UserService,
  			  private router: Router 
  			  ) {}

  loggedIn = this.userService.loggedIn;

  ngOnInit () {
  	this.userService.getStatus() 
  		.then((result) => {
  			console.log(result)
  		})

  	this.userService.changeStatus.subscribe(
  		(status) => {
  			this.loggedIn = status;
  		}
  		)
  }

  onNavigate(place) {
  	this.router.navigate([place])
  }
}
