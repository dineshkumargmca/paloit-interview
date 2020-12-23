import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { HttpClientModule } from '@angular/common/http';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    CheckboxModule,
    DropdownModule,
    DataViewModule,
    ButtonModule,
    MenubarModule,
    PanelModule,
    HttpClientModule,
    ProgressSpinnerModule,
    AutoCompleteModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    CheckboxModule,
    DropdownModule,
    DataViewModule,
    ButtonModule,
    MenubarModule,
    PanelModule,
    HttpClientModule,
    ProgressSpinnerModule,
    AutoCompleteModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
