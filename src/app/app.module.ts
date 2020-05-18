import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationInsightsModule, AppInsightsService } from '@markpieszak/ng-application-insights'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { UserService } from './users/user.service';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ApplicationInsightsModule.forRoot({
      instrumentationKey: '92670480-bd0c-4612-897e-71c18c4d6722'
    }),
    HttpClientModule,
  ],
  exports: [
    RouterModule
  ],
  providers: [UserService, AppInsightsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
