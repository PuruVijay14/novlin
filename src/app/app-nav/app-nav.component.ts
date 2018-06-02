import { Component, OnInit, ViewChild } from "@angular/core";
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { appearence } from "../animations/app-bar";
import { AppBarService } from "../services/app-bar.service";
import { Router } from "@angular/router";
import { MatDrawer } from "@angular/material";

@Component({
  selector: "app-nav",
  templateUrl: "./app-nav.component.html",
  styleUrls: ["./app-nav.component.scss"],
  animations: [appearence]
})
export class AppNavComponent implements OnInit {
  position = 0;
  appBarState = "hidden";
  /**Icon on navbar */
  icon = "menu";

  /** title of toolbar */
  title = "Welcome!";

  /** Tooltip text */
  tooltipText = "Site menu!";

  /** Drawer */
  @ViewChild("drawer") drawer: MatDrawer;

  constructor(private appBarService: AppBarService, private router: Router) {}

  ngOnInit() {
    this.appBarState = "visible";
    this.adaptiveNavbar();
  }

  toggleToolbar($event: Event) {
    const scroll = $event.srcElement.scrollTop;
    let scrollDirection;
    scrollDirection = scroll > this.position ? "down" : "up";

    if (scrollDirection === "down") {
      this.appBarState = "hidden";
    } else {
      this.appBarState = "visible";
    }
    /** Comes at the last of function */
    this.position = scroll;
  }

  adaptiveAction() {
    // this.appBarService.state$.subscribe(data => {
    //   switch (data.id) {
    //     case "auth":
    //       this.backToHome();
    //       break;

    //     default:
    //       this.drawer.toggle();
    //       break;
    //   }
    // });
    this.appBarService.state$.subscribe(console.log);
  }
  backToHome() {
    this.router.navigate([""]);
  }

  /** Manages the working of navbar based on its state */
  adaptiveNavbar(): void {
    this.appBarService.state$.subscribe(data => {
      switch (data.id) {
        case "auth":
          /** Menu icon --> Back icon
           * Text --> Tap the icon
           */
          this.icon = "arrow_back_rounded";
          this.title = "Click on the icon";
          this.tooltipText = "Back to home";
          break;

        case null:
          this.icon = "menu";
          this.title = "Welcome!";
          this.tooltipText = "Site Menu";
          break;
      }
    });
  }
}
