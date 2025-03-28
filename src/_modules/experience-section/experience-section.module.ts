import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/materal.module';
import { CountSectionModules } from '../count-section/count-section.module';
import { OfferSectionModules } from '../offer-section/offer-section.module';
import { ExperienceSectionComponent } from './experience-section.component';
import { ExperienceSectionRoutingModule } from './experience-section.routing';
@NgModule({
  declarations: [ExperienceSectionComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ExperienceSectionRoutingModule,
    CountSectionModules,
    OfferSectionModules,
  ],
  providers: [],
  bootstrap: [],
  exports: [ExperienceSectionComponent],
})
export class ExperienceSectionModules {}
