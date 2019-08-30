import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboarddComponent } from './component/dashboardd/dashboardd.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PowerUsageComponent } from './component/power-usage/power-usage.component';
import { ExportDataComponent } from './component/export-data/export-data.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboarddComponent,
    PowerUsageComponent,
    ExportDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
