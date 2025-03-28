import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LandingComponent } from './landing.component';
import { MaterialModule } from 'src/materal.module';
import { LandingRoutingModule } from './landing.routing';
import { CountSectionModules } from '../count-section/count-section.module';
import { OfferSectionModules } from '../offer-section/offer-section.module';
import { ExperienceSectionModules } from '../experience-section/experience-section.module';
import { EducationSectionModules } from '../education/education.module';
import { ExtraSectionModules } from '../extra/extra.module';
@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    LandingRoutingModule,
    CountSectionModules,
    OfferSectionModules,
    ExperienceSectionModules,
    EducationSectionModules,
    ExtraSectionModules
  ],
  providers: [],
  bootstrap: [],
})
export class LandingModules {}
