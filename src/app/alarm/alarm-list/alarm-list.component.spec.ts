/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AlarmListComponent } from './alarm-list.component';
import { AlarmItemComponent } from './alarm-item/alarm-item.component';
import { AlarmSwitcheryComponent } from './alarm-switchery/alarm-switchery.component';
import { TwoDigitsPipe } from '../shared/pipes/two-digits.pipe';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';

xdescribe('AlarmListComponent', () => {
  let component: AlarmListComponent;
  let fixture: ComponentFixture<AlarmListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AlarmListComponent,
        AlarmItemComponent,
        AlarmSwitcheryComponent,
        TwoDigitsPipe,
        HeaderComponent,
        FooterComponent
      ],
      imports: [
        RouterModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
