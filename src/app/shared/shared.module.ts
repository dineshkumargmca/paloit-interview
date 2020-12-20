import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CheckboxModule,
    DropdownModule,
    DataViewModule,
    ButtonModule,
    MenubarModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    CheckboxModule,
    DropdownModule,
    DataViewModule,
    ButtonModule,
    MenubarModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
