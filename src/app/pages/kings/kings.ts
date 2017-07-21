import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { KingsListModal } from './kings-list/kings-list.modal';
import { Store } from '@ngrx/store';
import * as KingsActions from '../../actions/kings.actions';
import * as kingsState from '../../reducers/kings.reducer';

@Component({
  selector: 'page-home',
  templateUrl: 'kings.html'
})
export class KingsPage implements OnInit {
  public kings$: Store<kingsState.KingsState[]>;
  public selectedKing$: Store<number>;
  public showPriests$: Store<boolean>;
  public showProphets$: Store<boolean>;
  public showSons$: Store<boolean>;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private store: Store<kingsState.KingsState>) {
    this.kings$ = this.store.select(kingsState.getKings);
    this.selectedKing$ = this.store.select(kingsState.getSelectedKing);
    this.showPriests$ = this.store.select(kingsState.getShowPriests);
    this.showProphets$ = this.store.select(kingsState.getShowProphets);
    this.showSons$ = this.store.select(kingsState.getShowSons);
  }

  ngOnInit() {
    this.store.dispatch(new KingsActions.InitKingsAction());
  }

  showKingsListModal() {
    let modal = this.modalCtrl.create(KingsListModal, {kings: this.kings$, selectedKing: this.selectedKing$});
    modal.present();
    modal.onDidDismiss((kingNumber) => {
      this.store.dispatch(new KingsActions.SetKingAction(kingNumber));
    });
  }

  nextKing() {
    this.store.dispatch(new KingsActions.NextAction());
  }

  prevKing() {
    this.store.dispatch(new KingsActions.PrevAction());
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
    this.store.dispatch(new KingsActions.ToggleSonsAction());
  }

  togglePriests() {
    this.store.dispatch(new KingsActions.TogglePriestsAction());
  }

  toggleProphets() {
    this.store.dispatch(new KingsActions.ToggleProphetsAction());
  }

}
