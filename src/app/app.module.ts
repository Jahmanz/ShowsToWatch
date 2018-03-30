import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule }  from '@angular/forms';
import { ShowListComponent } from './task-list/task-list.component';
import { EditShowComponent } from './edit-task/edit-task.component';
import { NewShowComponent } from './new-task/new-task.component';
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
