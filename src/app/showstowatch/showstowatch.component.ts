import { Component, OnInit } from '@angular/core';
import { Show } from '../show.model';
import { Router } from '@angular/router';
import { ShowService } from '../show.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-showstowatch',
  templateUrl: './showstowatch.component.html',
  styleUrls: ['./showstowatch.component.css'],
  providers: [ShowService]

})
export class ShowsToWatchComponent {
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
