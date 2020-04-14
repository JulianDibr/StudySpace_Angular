import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HomeService {

    private postsUrl = 'http://localhost:4000/posts';

    constructor(private http: HttpClient) {
    }

    getPosts() {
        return this.http.get<any>(this.postsUrl);
    }
}
