import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HomeService {

    private postsUrl = 'http://localhost:4000/posting';

    constructor(private http: HttpClient) {
    }

    getPostings() {
        return this.http.get<any>(this.postsUrl);
    }

    savePosting(posting) {
        return this.http.post<any>(this.postsUrl + '/new', posting); // Send Userdata to APIs posts/new Route -> New Posting added
    }
}
