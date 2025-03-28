import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfferSectionComponent } from './offer-section.component';

const routes: Routes = [
  {
    path: '',
    component: OfferSectionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfferSectionRoutingModule {}
