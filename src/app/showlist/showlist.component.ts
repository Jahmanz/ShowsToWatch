import { Component, OnInit } from '@angular/core';
import { Show } from '../show.model';
import { Router } from '@angular/router';
import { ShowService } from '../show.service';
import { ShowstoWatchService } from '../showstowatch.service';

import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-showlist',
  templateUrl: './showlist.component.html',
  styleUrls: ['./showlist.component.css'],
  providers: [ShowService]
})

export class ShowlistComponent implements OnInit {
  shows: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private showService: ShowService){}

  ngOnInit(){
  this.shows = this.showService.getShows();

}

  goToDetailPage(clickedShow) {
    this.router.navigate(['shows', clickedShow.$key]);
  };
}

@Component({
  selector: 'app-showstowatch',
  templateUrl: './showlist.component.html',
  styleUrls: ['./showlist.component.css'],
  providers: [ShowstoWatchService]
})

export class ShowlistComponent2 implements OnInit {
  showstowatch: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private showService: ShowService){}

  ngOnInit(){
  this.showstowatch = this.showService.getShows();

}

  goToDetailPage(clickedShow) {
    this.router.navigate(['showstowatch', clickedShow.$key]);
  };
}
