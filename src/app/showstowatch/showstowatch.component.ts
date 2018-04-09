import { Component, OnInit } from '@angular/core';
import { Show2 } from '../show.model';
import { Router } from '@angular/router';
import { ShowstoWatchService } from '../showstowatch.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-showstowatch',
  templateUrl: './showstowatch.component.html',
  styleUrls: ['./showstowatch.component.css'],
  providers: [ShowstoWatchService]

})
export class ShowsToWatchComponent implements OnInit {
  showstowatch: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private showToWatchService: ShowstoWatchService){}

  ngOnInit(){
  this.showstowatch = this.showToWatchService.getShowsToWatch();

}

  goToDetailPage(clickedShow) {
    this.router.navigate(['showstowatch', clickedShow.$key]);
  };
}
