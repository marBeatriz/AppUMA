import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecloutingPage } from './reclouting.page';

const routes: Routes = [
  {
    path: '',
    component: RecloutingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecloutingPageRoutingModule {}
