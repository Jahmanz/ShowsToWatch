import { Injectable } from '@angular/core';
import { Show2 } from './show.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ShowstoWatchService {
  showstowatch: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.showstowatch = database.list('showstowatch');

  }

  getShowsToWatch(){
    return this.showstowatch;
  }

  addShowToWatch(newShow: Show2) {
    this.showstowatch.push(newShow);
  }

  getShowById(showId: string){
    return this.database.object('/showstowatch/' + showId);
  }

  updateShow(localUpdatedShow){
    var showEntryInFirebase = this.getShowById(localUpdatedShow.$key);
    showEntryInFirebase.update({title: localUpdatedShow.title,
                                network: localUpdatedShow.network,
                                description: localUpdatedShow.description,
                                trailer: localUpdatedShow.youtube});
  }
  deleteShow(localShowToDelete){
      var showEntryInFirebase = this.getShowById(localShowToDelete.$key);
      showEntryInFirebase.remove();
    }

}
