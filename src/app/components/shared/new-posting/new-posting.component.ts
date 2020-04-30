import {Component, OnInit} from '@angular/core';
import {HomeService} from '../../../services/home.service';
import {AuthService} from '../../../services/auth.service';

@Component({
    selector: 'app-new-posting',
    templateUrl: './new-posting.component.html',
    styleUrls: ['./new-posting.component.css']
})
export class NewPostingComponent implements OnInit {
    postingData = {content: '', user_id: '', location_type: '1', location_id: '1'};

    constructor(private home: HomeService, private auth: AuthService) {
    }

    ngOnInit() {
    }

    clearPosting() {
        //TODO: Clear file inputs etc when ready
        this.postingData.content = '';
    }

    savePosting() {
        if (this.postingData.content !== '') {
            this.home.savePosting(this.postingData)
                .subscribe(
                    res => {
                        console.log(res);
                    },
                    err => console.log(err)
                );
            window.location.reload();
        } else {
            //TODO: add error
            console.log("Post darf nicht leer sein, Error einfügen")
        }
    }
}
