import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-index-register',
    templateUrl: './index-register.component.html',
    styleUrls: ['./index-register.component.css', '../index-common.css']
})
export class IndexRegisterComponent implements OnInit {
    registerData = {first_name: '', last_name: '', email: '', password: '', password_confirm: ''};

    constructor(private auth: AuthService, private router: Router) {
    }

    ngOnInit() {
    }

    registerUser() {
        if (this.registerData.password !== this.registerData.password_confirm) {
            console.log('Unmatched PW');
        } else {
            this.auth.registerUser(this.registerData)
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
}
