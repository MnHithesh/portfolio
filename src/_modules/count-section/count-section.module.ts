import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/materal.module';
import { CountSectionComponent } from './count-section.component';
import { CountSectionRoutingModule } from './count-section.routing';
@NgModule({
  declarations: [CountSectionComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    CountSectionRoutingModule,
  ],
  providers: [],
  bootstrap: [],
  exports:[CountSectionComponent]
})
export class CountSectionModules {}
