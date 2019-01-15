import { Component, ViewChild } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { MatChipList, MatChip } from '@angular/material';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interests-signup',
  templateUrl: './interests-signup.component.html',
  styleUrls: ['./interests-signup.component.scss']
})
export class InterestsSignupComponent {
  interestsCollectionRef: AngularFirestoreCollection;
  interest$;
  interests = [];

  selectedChips: MatChip[] = [];

  disabled = true;

  /** The chiplist */
  @ViewChild('chipList') chipList: MatChipList;

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth, private router: Router) {
    this.interestsCollectionRef = this.afs.collection('interests');
    this.interest$ = this.interestsCollectionRef.valueChanges();

    // setInterval(() => this.disabled = this.disabled ? false : true, 1000);
  }

  selectInterest(index: number) {
    const selectState = this.chipList.chips.toArray()[index];

    if (this.selectedChips.includes(selectState)) {
      this.selectedChips = this.selectedChips.filter(item => item !== selectState);
    } else {
      this.selectedChips.push(selectState);
    }

    selectState.selected = selectState.selected === false ? true : false;
    // console.log(this.chipList.selected);

    this.interestsChange();
  }

  interestsChange() {
    if (this.selectedChips.length < 3) {
      this.disabled = true;
    } else {
      this.disabled = false;
    }
  }

  setInterests() {
    const interests = this.selectedChips.map(chip => chip.value.toLowerCase());
    // console.log(interests);

    // Get the current user id
    const uid = this.afAuth.auth.currentUser.uid;

    // Push to document
    this.afs.doc(`users/${uid}`).set({
      interests
    }, {
        merge: true
      });

    // Head to welcome page
    this.router.navigate(['home', 'welcome']);

  }
}
