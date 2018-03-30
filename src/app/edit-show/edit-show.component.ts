import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Show } from '../models/show.model';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditShowComponent {
  @Input() childSelectedShow: Show;
  @Output() clickedDone = new EventEmitter();

  finishedEditing() {
    this.clickedDone.emit();
  }
}
