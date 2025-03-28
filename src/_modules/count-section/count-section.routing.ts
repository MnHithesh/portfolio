import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountSectionComponent } from './count-section.component';

const routes: Routes = [
  {
    path: '',
    component: CountSectionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountSectionRoutingModule {}
