import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.sass']
})
export class EducationComponent  implements OnInit {
  @Input() educationDetails!: any;
  constructor() {}

  ngOnInit(): void {}
  
}
