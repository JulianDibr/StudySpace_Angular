import {Component, OnInit} from '@angular/core';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {AuthService} from '../../../services/auth.service';

@Component({
    selector: 'app-index-register',
    templateUrl: './index-register.component.html',
    styleUrls: ['./index-register.component.css', '../index-common.css']
})
export class IndexRegisterComponent implements OnInit {
    faArrowLeft = faArrowLeft;
    registerData = {first_name: '', last_name: '', email: '', password: '', password_confirm: ''};

    constructor(private auth: AuthService) {
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
                    },
                    err => console.log(err)
                );
        }
    }
}
