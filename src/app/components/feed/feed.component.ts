import {Component, OnInit} from '@angular/core';
import {HomeService} from '../../services/home.service';

@Component({
    selector: 'app-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
    //TODO: Get array of all relevant postings ==> save to array
    postings = [
/*        {
            user_name: 'Test Person',
            location: 'Allgemein',
            content: 'Hier ist ein Post :o',
            voting: '3',
            users_vote: '0',
            timestamp: '30.04.2020, 14:20'
        },
        {
            user_name: 'Julian Dibrani',
            location: 'Allgemein',
            content: 'Das funktioniert einfach :o',
            voting: '420',
            users_vote: '2',
            timestamp: '30.04.2020, 04:20'
        }*/
    ];

    constructor(private home: HomeService) {
    }

    ngOnInit() {
        this.home.getPostings().subscribe(data => this.postings = data);
    }

}
