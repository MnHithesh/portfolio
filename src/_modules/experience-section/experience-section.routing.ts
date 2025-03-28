import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceSectionComponent } from './experience-section.component';

const routes: Routes = [
  {
    path: '',
    component: ExperienceSectionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExperienceSectionRoutingModule {}
