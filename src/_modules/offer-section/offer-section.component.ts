import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-offer-section',
  templateUrl: './offer-section.component.html',
  styleUrls: ['./offer-section.component.sass']
})
export class OfferSectionComponent {
@Input() list!: any;
}
