import { Component, OnInit } from "@angular/core";
import { NavigationStart, Router } from "@angular/router";
import { apparation } from "../animations/fab";
import { FabService } from "../services/fab.service";

@Component({
  selector: "app-fab",
  templateUrl: "./fab.component.html",
  styleUrls: ["./fab.component.scss"],
  animations: [...apparation]
})
export class FabComponent implements OnInit {
  constructor(private fabService: FabService, private router: Router) {}

  /** Animation state */
  state = "disapparated";

  ngOnInit() {
    this.state = "disapparated";
    this.adaptiveView();
  }

  private toggleApparationState() {
    this.state = this.state === "apparated" ? "disapparated" : "apparated";
  }

  adaptiveView() {
    let url;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        url = event.url;

        switch (url) {
          case "/createusername":
            this.state = "apparated";
            break;

          default:
            this.state = "disapparated";
            break;
        }
      }
    });
  }

  chameleonAction() {
    return this.fabService.fabState$.subscribe(data => {
      switch (data.id) {
        case "auth:enter":
        // Create username with NodeJS
        break;
      }
    });
  }
}
