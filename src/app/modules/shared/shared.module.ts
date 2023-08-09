import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';

import { ToastModule } from 'primeng/toast';

const modules = [
  TableModule,
  ToolbarModule,
  InputNumberModule,
  DropdownModule,
  ButtonModule, 
  DialogModule,
  InputTextModule,
  ConfirmDialogModule,
  DynamicDialogModule,
  ToastModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...modules
  ],
  exports: [
    ...modules
  ],
  providers: [
    DialogService,
    MessageService
  ]
})
export class SharedModule { }
