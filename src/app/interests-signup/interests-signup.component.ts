import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";

@Component({
  selector: 'app-interests-signup',
  templateUrl: './interests-signup.component.html',
  styleUrls: ['./interests-signup.component.scss']
})
export class InterestsSignupComponent implements OnInit {
  interestsCollectionRef: AngularFirestoreCollection;
  interest$;
  interests = [];

  constructor(private afs: AngularFirestore) {
    this.interestsCollectionRef = this.afs.collection('interests');
    this.interest$ = this.interestsCollectionRef.valueChanges();
    console.log(this.interests);
  }

  ngOnInit() {
  }

}
