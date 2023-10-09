import { Routes } from '@angular/router';
import {HomePageComponent} from "../pages/home-page/home-page.component";
import {NotFoundComponent} from "../pages/not-found/not-found.component";
import {PaymentsPageComponent} from "../pages/payments-page/payments-page.component";
import {HistoryPageComponent} from "../pages/history-page/history-page.component";

export const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'payments', component: PaymentsPageComponent },
  { path: 'history', component: HistoryPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent}
];
