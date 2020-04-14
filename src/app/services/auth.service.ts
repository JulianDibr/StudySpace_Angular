import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
    private backendURL = 'http://localhost:4000/user';

    constructor(private http: HttpClient, private router: Router) {
    }

    registerUser(user) {
        return this.http.post<any>(this.backendURL + '/register', user); // Send Userdata to APIs register Route -> New User registered
    }

    loginUser(user) {
        return this.http.post<any>(this.backendURL + '/login', user);
    }

    logoutUser() {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    }

    loggedIn() {
        return !!localStorage.getItem('token'); // return: true or false
    }

    getToken() {
        return localStorage.getItem('token');
    }
}
