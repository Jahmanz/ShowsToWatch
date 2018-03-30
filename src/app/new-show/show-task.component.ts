import { Component, Output, EventEmitter } from '@angular/core';
import { Show } from '../models/task.model';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewShowComponent {
  @Output() sendShow = new EventEmitter();

  submitForm(description: string, priority: string) {
    let newShow: Show = new Show(description, parseInt(priority));
    this.sendShow.emit(newShow);

  }
}
