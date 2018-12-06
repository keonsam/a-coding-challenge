import { Component, OnInit } from '@angular/core';
import {TwitterService} from "../twitter/twitter.service";
import {EditView} from "../edit-view/edit.view";
import {TwitterResponse} from "../twitter/twitter.response";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  domData: TwitterResponse[] = [];
  editView: EditView;

  constructor(private twitter: TwitterService) {
  }

  ngOnInit() {
    this.editView = JSON.parse(localStorage.getItem('keonTwitterApp'));
    this.getTweets(this.editView);
  }

  getTweets(editView: EditView) {
    this.twitter.getTweets(editView)
      .subscribe( data => {
        this.domData = data;
      });
  }


}
