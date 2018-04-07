import { Component, Input, OnInit } from '@angular/core';
import { ShowService } from '../show.service';
import { ShowstoWatchService } from '../showstowatch.service';

@Component({
  selector: 'app-edit-show',
  templateUrl: './edit-show.component.html',
  styleUrls: ['./edit-show.component.css'],
  providers: [ShowService, ShowstoWatchService]
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

export class EditShowComponent2 implements OnInit {
  @Input() selectedShow;

  constructor(private showtoWatchService: ShowstoWatchService) { }

  ngOnInit() {
  }

  beginUpdatingShow(showToUpdate){
    this.showtoWatchService.updateShow(showToUpdate);
  }

  beginDeletingShow(showToDelete){
      if(confirm("Are you sure you want to delete this item from the inventory?")){
        this.showtoWatchService.deleteShow(showToDelete);
      }
    }

}
