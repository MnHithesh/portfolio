import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/materal.module';
import { ExtraComponent } from './extra.component';
import { ExtraRoutingModule } from './extra.routing';
@NgModule({
  declarations: [ExtraComponent],
  imports: [CommonModule, FormsModule, MaterialModule, ExtraRoutingModule],
  providers: [],
  bootstrap: [],
  exports: [ExtraComponent],
})
export class ExtraSectionModules {}
