import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AppBarService {
  state$ = new BehaviorSubject({
    id: null,
    payload: null
  });
  constructor() {}
}
