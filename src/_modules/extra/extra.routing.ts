import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtraComponent } from './extra.component';

const routes: Routes = [
  {
    path: '',
    component: ExtraComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExtraRoutingModule {}
