import {Component, Input, OnInit} from '@angular/core';
import * as moment from 'moment/moment';

@Component({
    selector: 'app-posting',
    templateUrl: './posting.component.html',
    styleUrls: ['./posting.component.css']
})
export class PostingComponent implements OnInit {
    @Input() posting: any;

    ngOnInit() {
        this.posting.createdAt = moment(this.posting.createdAt).format('LLL');
    }

    upvotePosting() {
    }

    downvotePosting() {
    }

    showComments() {
    }
}
