import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Show } from '../models/show.model';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent {
  @Input() childShowList: Show[];
  @Output() clickSender = new EventEmitter();

 filterByCompleteness: string = "incompleteShows";

  editButtonClicked(showToEdit: Show) {
      this.clickSender.emit(showToEdit);
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
