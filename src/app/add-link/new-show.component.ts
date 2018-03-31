import { Component, Output, EventEmitter } from '@angular/core';
import { Show } from '../models/show.model';

@Component({
  selector: 'app-new-show',
  templateUrl: './new-show.component.html',
  styleUrls: ['./new-show.component.css']
})
export class NewShowComponent {
  @Output() sendShow = new EventEmitter();

  submitForm(description: string, priority: string) {
    let newShow: Show = new Show(description, parseInt(priority));
    this.sendShow.emit(newShow);

  }
}
