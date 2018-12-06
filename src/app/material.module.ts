import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule } from "@angular/material";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [],
  imports: [MatInputModule, MatIconModule, MatCheckboxModule, MatButtonModule, MatToolbarModule, MatSelectModule],
  exports: [MatInputModule, MatIconModule, MatCheckboxModule, MatButtonModule, MatToolbarModule, MatSelectModule],
})
export class MaterialModule { }
