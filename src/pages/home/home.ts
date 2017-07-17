import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { KingsService } from '../../app/services/kings.service';

import * as _ from 'underscore';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styles: [`ion-content { }`]
})
export class HomePage implements OnInit {
  public kings: any[];
  public selectedKing: any;

  constructor(public navCtrl: NavController, private kingsService: KingsService) {}

  ngOnInit() {
    this.kingsService.getKings().subscribe((kings) => {
      this.kings = kings;
      this.selectKing(1);
    });
  }

  selectKing(kingNo) {
    let king = _.find(this.kings, (king) => {
      return (king.kingNumber == kingNo);
    });
    this.selectedKing = (king) ? king : this.selectedKing;
  }

  nextKing() {
    let no = this.selectedKing.kingNumber + 1;
    this.selectKing(no);
  }

  prevKing() {
    let no = this.selectedKing.kingNumber - 1;
    this.selectKing(no);
  }

  scroll(event) {
    switch(event.offsetDirection) {
      case 2:
        this.nextKing();
        break;
      case 4:
        this.prevKing();
        break;
    }
  }

}
