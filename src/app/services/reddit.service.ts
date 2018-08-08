import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class RedditService {
    http: any;
    baseurl: string;

    constructor(http: Http) {
        this.http = http;
        this.baseurl = 'https://www.reddit.com/r';
    }

    getPosts(category, limit) {
        return this.http.get(this.baseurl + '/' + category + '/top.json?limit=' + limit)
            .map(res => res.json());
    }
}