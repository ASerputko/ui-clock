import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'clock-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() clickRightButton = new EventEmitter<boolean>();
  @Output() clickLeftButton = new EventEmitter<boolean>();

  private editMode: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  addAlarm() {
    console.log('TODO: add alarm');
    this.clickRightButton.emit();
  }

  editAlarm() {
    this.editMode = true;
    this.clickLeftButton.emit(this.editMode);
  }

  doneEditingAlarm() {
    this.editMode = false;
    this.clickLeftButton.emit(this.editMode);
  }
}
