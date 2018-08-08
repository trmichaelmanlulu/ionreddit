import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { RedditService } from './../../app/services/reddit.service';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'reddits',
  templateUrl: 'reddits.html',
  styles: ['reddits.scss']
})
export class RedditsPage {

  items: Object;
  category: any;
  limit: any;
  loader: any;

  constructor(public navCtrl: NavController, private redditService: RedditService, public params: NavParams, public loadingCtrl: LoadingController) {
    
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.loader = this.loadingCtrl.create({
      spinner: 'ios'
    });
    this.loader.present();

    this.getDefaults();
    this.getPosts(this.category, this.limit);
  }

  getPosts(category, limit) {
    this.redditService.getPosts(category, limit).subscribe(res => {
      this.items = res.data.children;
      this.loader.dismiss();
    });
  }

  viewItem(item) {
    this.navCtrl.push(DetailsPage, {
      item: item
    });
  }

  getDefaults() {
    if(localStorage.getItem('category') !== null) {
      this.category = localStorage.getItem('category');
    } else {
      this.category = 'sports';
    }

    if(localStorage.getItem('limit') !== null) {
      this.limit = localStorage.getItem('limit');
    } else {
      this.limit = 10;
    }
  }

  changeCategory() {
    this.getPosts(this.category, this.limit);
  }
}
