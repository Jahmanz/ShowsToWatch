import { Component, OnInit } from '@angular/core';
import { ShowService } from '../show.service';
import { ShowstoWatchService } from '../showstowatch.service';
import { Show } from '../show.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ShowService, ShowstoWatchService]
})

export class AdminComponent implements OnInit {

  constructor(private showService: ShowService) { }

  ngOnInit() {
  }

  submitForm(title: string, network: string, description: string, youtube: string) {
    var newShow: Show = new Show(title, network, description, youtube);
    this.showService.addShow(newShow);
  }
}

export class AdminComponent2 implements OnInit {

  constructor(private showtoWatchService: ShowstoWatchService) { }

  ngOnInit() {
  }

  submitForm(title: string, network: string, description: string, youtube: string) {
    var newShow: Show = new Show(title, network, description, youtube);
    this.showtoWatchService.addShowToWatch(newShow);
  }
}
