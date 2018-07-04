import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FabService {
  constructor() {}

  fabState$ = new BehaviorSubject({
    id: null,
    payload: null
  });
}
