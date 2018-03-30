import {Pipe, PipeTransform} from '@angular/core';
import {Show} from './models/task.model';

@Pipe({
  name: "completeness",
  pure: false
})


export class CompletenessPipe implements PipeTransform {
  transform(input: Show[], desiredCompleteness) {
    var output: Show[] = [];
    if(desiredCompleteness === "incompleteShows") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].done === false) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCompleteness === "completedShows") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].done === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
