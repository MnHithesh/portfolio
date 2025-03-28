import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-section',
  templateUrl: './count-section.component.html',
  styleUrls: ['./count-section.component.sass']
})

export class CountSectionComponent  implements OnInit {
@Input() icon!: string;
@Input() count!: number;
@Input() description!: string;

constructor() { }

  ngOnInit() {
  }
}
