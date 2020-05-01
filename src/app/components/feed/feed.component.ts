import {Component, OnInit} from '@angular/core';
import {HomeService} from '../../services/home.service';

@Component({
    selector: 'app-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
    //TODO: Get array of all relevant postings ==> save to array
    postings = [];

    constructor(private home: HomeService) {
    }

    ngOnInit() {
        this.home.getPostings().subscribe(data => this.postings = data);
    }

}
