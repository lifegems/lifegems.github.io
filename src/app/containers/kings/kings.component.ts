import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavController, Slides } from 'ionic-angular';
import { KingsListModal } from '../../components/kings-list/kings-list.modal';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import * as KingsActions from '../../actions/kings.actions';
import * as kingsState from '../../reducers/kings.reducer';

@Component({
  selector: 'page-home',
  templateUrl: 'kings.html'
})
export class KingsComponent implements OnInit {
  public kings$: Store<kingsState.KingsState[]>;
  public selectedKing$: Store<number>;
  public showPriests$: Store<boolean>;
  public showProphets$: Store<boolean>;
  public showSons$: Store<boolean>;
  @ViewChild(Slides) slides: Slides;

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
      this.slides.slideTo(kingNumber - 1);
    });
  }

  nextKing() {
    this.store.dispatch(new KingsActions.NextAction());
    this.slides.slideNext();
  }

  prevKing() {
    this.store.dispatch(new KingsActions.PrevAction());
    this.slides.slidePrev();
  }

  updateKingNumber(event) {
    this.store.dispatch(new KingsActions.SetKingAction(event.realIndex + 1));
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
