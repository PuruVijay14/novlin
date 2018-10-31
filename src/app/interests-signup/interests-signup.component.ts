import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { MatChipList } from '@angular/material';

@Component({
  selector: 'app-interests-signup',
  templateUrl: './interests-signup.component.html',
  styleUrls: ['./interests-signup.component.scss']
})
export class InterestsSignupComponent {
  interestsCollectionRef: AngularFirestoreCollection;
  interest$;
  interests = [];

  /** The chiplist */
  @ViewChild('chipList') chipList: MatChipList;

  constructor(private afs: AngularFirestore) {
    this.interestsCollectionRef = this.afs.collection('interests');
    this.interest$ = this.interestsCollectionRef.valueChanges();
  }

  selectInterest($event, index: number) {
    const selectState = this.chipList.chips.toArray()[index];
    selectState.selected = selectState.selected === false ? true : false;
  }

}
