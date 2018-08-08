import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'details.html',
  styles: ['details.scss']
})
export class DetailsPage {

	item: Object;
  constructor(public navCtrl: NavController, public params: NavParams) {
		this.item = params.get('item');
  }

}
