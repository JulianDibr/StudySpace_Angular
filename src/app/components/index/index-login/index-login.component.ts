import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-index-login',
    templateUrl: './index-login.component.html',
    styleUrls: ['./index-login.component.css', '../index-common.css']
})
export class IndexLoginComponent implements OnInit {
    loginData = {email: '', password: ''};

    constructor(private auth: AuthService, private router: Router) {
    }

    ngOnInit() {
    }

    loginUser() {
        this.auth.loginUser(this.loginData)
            .subscribe(
                res => {
                    console.log(res);
                    localStorage.setItem('token', res.token);
                    this.router.navigate(['/home']);
                },
                err => console.log(err)
            );
    }
}
