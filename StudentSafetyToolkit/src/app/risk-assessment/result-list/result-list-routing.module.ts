import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultListPage } from './result-list.page';

const routes: Routes = [
  {
    path: '',
    component: ResultListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultListPageRoutingModule {}
