import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {
    }

    canActivate(): boolean {
        if (this.authService.loggedIn()) {
            return true; // When logged in allow
        } else {
            this.router.navigate(['/login']);
            return false; // Else redirect to login
        }
    }
}
