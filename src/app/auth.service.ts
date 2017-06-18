import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';


@Injectable()
export class Auth implements CanActivate {

	constructor(private userService: UserService,
		        private router: Router 
		        ) {}
	
	canActivate() {
		return this.userService.getStatus()
			.then((result) => {
				if (result == true) {
					return true
				} else {
					this.router.navigate(['error'])
					return false
				}

			})
	}
}