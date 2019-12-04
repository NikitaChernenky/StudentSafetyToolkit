import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectSeverityPage } from './select-severity.page';

const routes: Routes = [
  {
    path: '',
    component: SelectSeverityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectSeverityPageRoutingModule {}
