import { EventEmitter } from '@angular/core';

export class UserService {
	loggedIn = false;

	logIn () {
		this.loggedIn = true;
	}

	logOut () {
		this.loggedIn = false;
	}

	getStatus () {
		return new Promise((resolve, reject) => {
			setTimeout( () => {
				resolve(this.loggedIn)
			}, 2000)
		})
	}

	changeStatus = new EventEmitter<any>() ;
}