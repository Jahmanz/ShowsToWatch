import { Component, OnInit } from '@angular/core';
import { ShowService } from '../show.service';
import { Show } from '../show.model';

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

  submitForm(title: string, network: string, description: string) {
    var newShow: Show = new Show(title, network, description);
    this.showService.addShow(newShow);
  }

}
