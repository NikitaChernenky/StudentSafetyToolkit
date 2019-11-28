import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'app-info',
    pathMatch: 'full'
  },
  {
    path: 'contacts',
    loadChildren: () =>
      import('./contacts/contacts.module').then(m => m.ContactsPageModule)
  },
  {
    path: 'links',
    loadChildren: () =>
      import('./links/links.module').then(m => m.LinksPageModule)
  },
  {
    path: 'reminder',
    loadChildren: () =>
      import('./reminder/reminder.module').then(m => m.ReminderPageModule)
  },
  {
    path: 'risk-assessment',
    loadChildren: () =>
      import('./risk-assessment/risk-assessment.module').then(
        m => m.RiskAssessmentPageModule
      )
  },
  {
    path: 'report-incident',
    loadChildren: () =>
      import('./report-incident/report-incident.module').then(
        m => m.ReportIncidentPageModule
      )
  },
  {
    path: 'disclaimer',
    loadChildren: () =>
      import('./disclaimer/disclaimer.module').then(m => m.DisclaimerPageModule)
  },
  {
    path: 'app-info',
    loadChildren: () =>
      import('./app-info/app-info.module').then(m => m.AppInfoPageModule)
  },
  { // It did not seem to work with a routing module, so I had to do it in oldschool angular way
    path: 'incident-disclaimer-page',
    loadChildren:
      './report-incident/incident-disclaimer/incident-disclaimer.module#IncidentDisclaimerPageModule'
  },
  {
  path: 'form/:title',
  loadChildren:
    './report-incident/form/form.module#FormPageModule'
}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
