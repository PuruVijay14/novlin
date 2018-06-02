import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";
export const appearence = [
  trigger("appearence", [
    state(
      "hidden",
      style({
        transform: "translateY(100%)"
      })
    ),
    state(
      "visible",
      style({
        transform: "translateY(0)"
      })
    ),
    transition(
      "hidden => visible",
      animate("200ms cubic-bezier(0.0, 0.0, 0.2, 1)")
    ),
    transition(
      "visible => hidden",
      animate("100ms cubic-bezier(0.4, 0.0, 1, 1)")
    )
  ])
];
