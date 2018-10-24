import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, DocumentData } from "@angular/fire/firestore"
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

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
    this.interest$ = this.interestsCollectionRef.valueChanges()/* .forEach(data => data.forEach(interest => this.interests.push(interest))); */
    console.log(this.interests);
  }

  ngOnInit() {
  }

}
