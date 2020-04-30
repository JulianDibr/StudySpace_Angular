import {Component, OnInit} from '@angular/core';
import {HomeService} from '../../../services/home.service';

@Component({
    selector: 'app-new-posting',
    templateUrl: './new-posting.component.html',
    styleUrls: ['./new-posting.component.css']
})
export class NewPostingComponent implements OnInit {
    postingData = {content: '', user_id: '1', location_type: '1', location_id: '1'};

    constructor(private home: HomeService) {
    }

    ngOnInit() {
    }

    savePosting() {
        this.home.savePosting(this.postingData)
            .subscribe(
                res => {
                    console.log(res);
                    // TODO: Reload
                },
                err => console.log(err)
            );
    }
}
