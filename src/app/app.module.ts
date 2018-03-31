import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule }  from '@angular/forms';
import { ShowListComponent } from './show-list/show-list.component';
import { EditShowComponent } from './edit-show/edit-show.component';
import { NewShowComponent } from './new-show/new-show.component';
import { CompletenessPipe } from './completeness.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ShowListComponent,
    EditShowComponent,
    NewShowComponent,
    CompletenessPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
