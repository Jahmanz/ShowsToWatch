import { Component } from '@angular/core';
import { Show } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedShow = null;

  masterShowList: Show[] = [
    new Show('Finish weekend Angular homework for Epicodus course', 3),
    new Show('Begin brainstorming possible JavaScript group projects', 2),
    new Show('Add README file to last few Angular repos on GitHub', 2)
  ];

  editShow(clickedShow) {
    this.selectedShow = clickedShow;
  }

  finishedEditing() {
   this.selectedShow = null;
 }
 addShow(newShow: Show) {
   this.masterShowList.push(newShow);
 }

}
