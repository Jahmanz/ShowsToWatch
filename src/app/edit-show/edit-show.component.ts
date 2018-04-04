import { Component, Input, OnInit } from '@angular/core';
import { ShowService } from '../show.service';

@Component({
  selector: 'app-edit-show',
  templateUrl: './edit-show.component.html',
  styleUrls: ['./edit-show.component.css'],
  providers: [ShowService]
})
export class EditShowComponent implements OnInit {
  @Input() selectedShow;

  constructor(private showService: ShowService) { }

  ngOnInit() {
  }

  beginUpdatingShow(showToUpdate){
    this.showService.updateShow(showToUpdate);
  }

  beginDeletingShow(showToDelete){
      if(confirm("Are you sure you want to delete this item from the inventory?")){
        this.showService.deleteShow(showToDelete);
      }
    }

}
