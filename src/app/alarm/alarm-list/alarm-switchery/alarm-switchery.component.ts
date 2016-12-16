import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'clock-alarm-switchery',
  templateUrl: './alarm-switchery.component.html',
  styleUrls: ['./alarm-switchery.component.css']
})
export class AlarmSwitcheryComponent implements OnInit {

  @Input() active: boolean;

  constructor() { }

  ngOnInit() {
  }

}
