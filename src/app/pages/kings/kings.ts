import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { KingsService } from '../../services/kings.service';
import { KingsListModal } from './kings-list/kings-list.modal';
import { Store } from '@ngrx/store';
import * as KingsActions from '../../actions/kings.actions';
import { KingsState } from '../../reducers/kings.reducer';

import * as _ from 'underscore';

@Component({
  selector: 'page-home',
  templateUrl: 'kings.html',
  styles: [`ion-content { }`]
})
export class KingsPage implements OnInit {
  public kings: any[];
  public selectedKing: any;

  public nextKingName: string;
  public prevKingName: string;

  public showSons: boolean = false;
  public showPriests: boolean = false;
  public showProphets: boolean = false;

  public kingsStore: any;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private kingsService: KingsService, private store: Store<KingsState>) {
    this.kingsStore = this.store.select('kings');
    this.store.dispatch(new KingsActions.NextAction());
  }

  ngOnInit() {
    this.kingsService.getKings().subscribe((kings) => {
      this.kings = kings;
      let king = this.getKing(1);
      this.selectedKing = (king) ? king : this.selectedKing;
      this.getPrevKingName();
      this.getNextKingName();
    });
  }

  getKing(kingNo) {
    let king = _.find(this.kings, (king) => {
      return (king.kingNumber == kingNo);
    });
    return king;
  }

  showKingsListModal() {
    let modal = this.modalCtrl.create(KingsListModal, {kings: this.kings, selectedKing: this.selectedKing});
    modal.present();
    modal.onDidDismiss((king) => {
      this.selectedKing = king;
      this.getPrevKingName();
      this.getNextKingName();
    });
  }

  nextKing() {
    let no = this.selectedKing.kingNumber + 1;
    let king = this.getKing(no);
    this.selectedKing = (king) ? king : this.selectedKing;
    this.getNextKingName();
    this.getPrevKingName();
  }

  prevKing() {
    let no = this.selectedKing.kingNumber - 1;
    let king = this.getKing(no);
    this.selectedKing = (king) ? king : this.selectedKing;
    this.getNextKingName();
    this.getPrevKingName();
  }

  getNextKingName() {
    let no = this.selectedKing.kingNumber + 1;
    let king = this.getKing(no);
    this.nextKingName = (king) ? king.kingNamePlain : null;
  }

  getPrevKingName() {
    let no = this.selectedKing.kingNumber - 1;
    let king = this.getKing(no);
    this.prevKingName = (king) ? king.kingNamePlain : null;
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

  toggleSons() {
    this.showSons = !this.showSons;
  }

  togglePriests() {
    this.showPriests = !this.showPriests;
  }

  toggleProphets() {
    this.showProphets = !this.showProphets;
  }

}
