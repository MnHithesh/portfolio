import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/materal.module';
import { CountSectionModules } from '../count-section/count-section.module';
import { OfferSectionComponent } from './offer-section.component';
import { OfferSectionRoutingModule } from './offer-section.routing';
@NgModule({
  declarations: [OfferSectionComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    OfferSectionRoutingModule,
    CountSectionModules,
  ],
  providers: [],
  bootstrap: [],
  exports:[OfferSectionComponent]
})
export class OfferSectionModules {}
