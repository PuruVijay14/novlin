import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UnivProgress {
  constructor() {}

  progressState$ = new BehaviorSubject({
    id: null,
    payload: null
  });
}
