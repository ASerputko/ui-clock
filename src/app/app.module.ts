import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AlarmListComponent } from './alarm/alarm-list/alarm-list.component';
import { AlarmItemComponent } from './alarm/alarm-list/alarm-item/alarm-item.component';
import { AlarmSwitcheryComponent } from './alarm/alarm-list/alarm-switchery/alarm-switchery.component';
import { TwoDigitsPipe } from './alarm/shared/pipes/two-digits.pipe';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AlarmFormComponent } from './alarm/alarm-form/alarm-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TwoDigitsPipe,
    AlarmListComponent,
    AlarmItemComponent,
    AlarmSwitcheryComponent,
    HeaderComponent,
    FooterComponent,
    AlarmFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'alarms',
        component: AlarmListComponent
      },
      {
        path: 'alarms/add',
        component: AlarmFormComponent
      },
      {
        path: 'alarms/:alarmId/edit',
        component: AlarmFormComponent
      },
      {
        path: '',
        redirectTo: '/alarms',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
