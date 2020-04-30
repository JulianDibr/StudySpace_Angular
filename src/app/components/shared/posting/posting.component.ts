import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-posting',
    templateUrl: './posting.component.html',
    styleUrls: ['./posting.component.css']
})
export class PostingComponent implements OnInit {
    @Input() posting: any;

    constructor() {
    }

    ngOnInit() {
    }

    upvotePosting() {
    }

    downvotePosting() {
    }
}
