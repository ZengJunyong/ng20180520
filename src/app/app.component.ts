import { Component } from '@angular/core';

console.log('Step 3: In component, match the tag, render the page');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
