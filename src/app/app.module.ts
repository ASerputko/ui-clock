import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AlarmComponent } from './alarm/alarm.component';
import { AlarmListComponent } from './alarm/alarm-list/alarm-list.component';
import { AlarmItemComponent } from './alarm/alarm-item/alarm-item.component';
import { AlarmItemComponent } from './alarm/alarm-list/alarm-item/alarm-item.component';
import { LabelFormComponent } from './alarm/label-form/label-form.component';
import { AlarmFormComponent } from './alarm/alarm-form/alarm-form.component';
import { RepeatListComponent } from './alarm/repeat-list/repeat-list.component';
import { SoundListComponent } from './alarm/sound-list/sound-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AlarmComponent,
    AlarmListComponent,
    AlarmItemComponent,
    AlarmItemComponent,
    LabelFormComponent,
    AlarmFormComponent,
    RepeatListComponent,
    SoundListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
