import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboarddComponent } from './component/dashboardd/dashboardd.component';
import { PowerUsageComponent } from './component/power-usage/power-usage.component';
import { ExportDataComponent } from './component/export-data/export-data.component';


const routes: Routes = [
  {path: '', redirectTo: '/dashboardd', pathMatch: 'full'},
  {path: 'dashboardd', component: DashboarddComponent},
  {path: 'power-usage', component: PowerUsageComponent},
  {path: 'export-data', component: ExportDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
