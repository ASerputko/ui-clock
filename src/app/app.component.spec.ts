/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AlarmListComponent } from './alarm/alarm-list/alarm-list.component';
import { AlarmItemComponent } from './alarm/alarm-list/alarm-item/alarm-item.component';
import { AlarmSwitcheryComponent } from './alarm/alarm-list/alarm-switchery/alarm-switchery.component';
import { TwoDigitsPipe } from './alarm/shared/pipes/two-digits.pipe';
import { HeaderComponent } from './shared/header/header.component';

xdescribe('App: UiClock', () => {1
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TwoDigitsPipe,
        AlarmListComponent,
        AlarmItemComponent,
        AlarmSwitcheryComponent,
        HeaderComponent
      ],
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
