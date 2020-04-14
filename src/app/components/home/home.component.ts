import {Component, OnInit} from '@angular/core';
import {HomeService} from '../../services/home.service';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {AuthService} from '../../services/auth.service';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    faSignOutAlt = faSignOutAlt;
    posts = [];

    constructor(private homeService: HomeService, private router: Router, private authService: AuthService) {
    }

    ngOnInit() {
        this.homeService.getPosts()
            .subscribe(
                res => this.posts = res,
                err => {
                    if (err instanceof HttpErrorResponse) {
                        if (err.status === 401) {
                            this.router.navigate(['/login']);
                        }
                    }
                }
            );
    }

}
