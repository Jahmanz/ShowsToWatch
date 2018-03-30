import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Show } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class ShowListComponent {
  @Input() childShowList: Show[];
  @Output() clickSender = new EventEmitter();

 filterByCompleteness: string = "incompleteShows";

  editButtonClicked(taskToEdit: Show) {
      this.clickSender.emit(taskToEdit);
    }

    onChange(optionFromMenu) {
    this.filterByCompleteness = optionFromMenu;
  }

  toggleDone(clickedShow: Show, setCompleteness: boolean) {
     clickedShow.done = setCompleteness;
   }

  priorityColor(currentShow){
    if (currentShow.priority === 3){
      return "bg-danger";
    } else if (currentShow.priority === 2) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }
}
