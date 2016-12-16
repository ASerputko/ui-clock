import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';

class Alarm {
  id:number;
  label:string;
  hours:number;
  minutes:number;
  active:boolean;
}

let ALARMS = [
  {
    id: 1,
    label: 'Alarm',
    hours: 9,
    minutes: 30,
    active: true
  },
  {
    id: 2,
    label: 'Alarm',
    hours: 10,
    minutes: 0,
    active: false
  },
  {
    id: 3,
    label: 'Alarm',
    hours: 10,
    minutes: 30,
    active: true
  },
  {
    id: 4,
    label: 'Alarm',
    hours: 10,
    minutes: 30,
    active: true
  },
  {
    id: 5,
    label: 'Alarm',
    hours: 11,
    minutes: 0,
    active: true
  },
  {
    id: 6,
    label: 'Alarm',
    hours: 11,
    minutes: 30,
    active: false
  },
  {
    id: 7,
    label: 'Alarm',
    hours: 12,
    minutes: 0,
    active: true
  },
  {
    id: 8,
    label: 'Alarm',
    hours: 12,
    minutes: 30,
    active: true
  }
];

@Component({
  selector: 'clock-alarm-list',
  templateUrl: './alarm-list.component.html',
  styleUrls: ['./alarm-list.component.css']
})
export class AlarmListComponent implements OnInit {

  private alarms: Alarm[] = ALARMS;
  private editMode: boolean = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  /**
   * Activate or deactivate alarm.
   */
  switchHandler(data) {
    console.log(data);
    console.log(this.alarms);
  }

  /**
   * Handle right button click of header.
   * Navigate to Create Alarm page.
   */
  addAlarm() {
    this.router.navigate([`/alarms/add`]);
  }

  updateEditMode(editMode: boolean) {
    this.editMode = editMode;
  }

  editAlarm(alarm: Alarm) {
    this.router.navigate([`/alarms/${alarm.id}/edit`]);
  }
}
