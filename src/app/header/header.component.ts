import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }


  onLogin() {
  	this.userService.logIn();
  	this.userService.getStatus()
  		.then((answer) => {
  			this.userService.changeStatus.emit(answer)
  		})
  }

  onLogout() {
  	this.userService.logOut();
  	this.userService.changeStatus.emit(this.userService.loggedIn);
  	console.log(this.userService.loggedIn)
  }

}
