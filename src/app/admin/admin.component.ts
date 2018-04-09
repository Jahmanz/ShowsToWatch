import { Component, OnInit } from '@angular/core';
import { ShowService } from '../show.service';
import { ShowstoWatchService } from '../showstowatch.service';
import { Show } from '../show.model';
import { Show2 } from '../show.model';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ShowService]
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

@Component({
  selector: 'app2-admin',
  templateUrl: './admin2.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ShowstoWatchService]
})

export class AdminComponent2 implements OnInit {

  constructor(private showtoWatchService: ShowstoWatchService) { }

  ngOnInit() {
  }

  submitForm2(title: string, network: string, description: string, youtube: string) {
    var newShow: Show2 = new Show2(title, network, description, youtube);
    this.showtoWatchService.addShowToWatch(newShow);
  }
}
