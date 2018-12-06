import { Injectable } from '@angular/core';
// import * as Twit from 'twit';
// import { config } from "../twitter.config";
import {Observable} from "rxjs";
// import * as TwitterProxy from 'twitter-proxy';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import { TwitterResponse } from "./twitter.response";
import {TwitterData} from "./twitter.data";
import {EditView} from "../edit-view/edit.view";

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  portMakeSchool = 'http://localhost:7890/1.1/statuses/user_timeline.json?count=30&screen_name=makeschool';
  portNewsyCombinator = 'http://localhost:7890/1.1/statuses/user_timeline.json?count=30&screen_name=newsycombinator';
  portYCombinator = 'http://localhost:7890/1.1/statuses/user_timeline.json?count=30&screen_name=ycombinator';
  constructor(private httpClient: HttpClient) { }

  getTweets(editView: EditView): Observable<TwitterResponse[]> {
    return this.httpClient.post<TwitterResponse[]>('http://localhost:3000/api/get-tweets', editView);
      // .pipe(map(data => {
      //   console.log(data);
      //   return data
      // }));
  }

  // getMakeSchool():Observable<TwitterData[]> {
  //   return this.httpClient.get<TwitterResponse>('http://localhost:3000/api/make-school')
  //     .pipe( map(twitterRes => {
  //       if (twitterRes && twitterRes.data) {
  //         return twitterRes.data
  //       }else {
  //         return undefined
  //       }
  //     }));
  // }
  //
  // getNewsyCombinator(): Observable<TwitterData[]> {
  //   return this.httpClient.get<TwitterResponse>('http://localhost:3000/api/news-ycombinator')
  //     .pipe( map(twitterRes => {
  //       if (twitterRes && twitterRes.data) {
  //         return twitterRes.data
  //       }else {
  //         return undefined
  //       }
  //     }));
  // }
  //
  // getYCombinator(): Observable<TwitterData[]> {
  //   return this.httpClient.get<TwitterResponse>('http://localhost:3000/api/ycombinator')
  //     .pipe( map(twitterRes => {
  //       if (twitterRes && twitterRes.data) {
  //         return twitterRes.data
  //       }else {
  //         return undefined
  //       }
  //     }));
  // }


}
