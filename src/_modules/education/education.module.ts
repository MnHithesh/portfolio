import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/materal.module';
import { EducationRoutingModule } from './education.routing';
import { EducationComponent } from './education.component';
@NgModule({
  declarations: [EducationComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    EducationRoutingModule,
  ],
  providers: [],
  bootstrap: [],
  exports: [EducationComponent],
})
export class EducationSectionModules {}
