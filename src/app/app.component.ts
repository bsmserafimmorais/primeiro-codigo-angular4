import { Component } from '@angular/core';

import {Student} from './student/student.model';

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	
	students: Student[] = [
			 { name: 'luke', isJedi: true, temple: 'coruscant'},
			 { name: 'leia', isJedi: false},
			 { name: 'han', isJedi: false}
  ]
}
