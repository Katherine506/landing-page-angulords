import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";

export const routes: Routes = [
  {
    path: "ladingpage",
    component: AppComponent,
  },
  {
    path: "",
    redirectTo: "ladingpage",
    pathMatch: "full",
  },
];
