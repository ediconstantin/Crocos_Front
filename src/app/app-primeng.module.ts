import { NgModule } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { TabMenuModule } from 'primeng/tabmenu';
import { AccordionModule } from 'primeng/accordion';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SplitButtonModule } from 'primeng/splitbutton';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PickListModule } from 'primeng/picklist';
import { DialogModule } from 'primeng/dialog';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToastModule } from 'primeng/toast';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CheckboxModule } from 'primeng/checkbox';
import { TooltipModule } from 'primeng/tooltip';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
import {CarouselModule} from 'primeng/carousel';
import {ChartModule} from 'primeng/chart';
import {TabViewModule} from 'primeng/tabview';

const sharedImportExport = [
  DropdownModule,
  ButtonModule,
  MenubarModule,
  TabMenuModule,
  AccordionModule,
  PanelMenuModule,
  SplitButtonModule,
  CardModule,
  InputTextModule,
  TableModule,
  FileUploadModule,
  InputTextareaModule,
  RadioButtonModule,
  PickListModule,
  DialogModule,
  SelectButtonModule,
  ToastModule,
  BlockUIModule,
  ProgressSpinnerModule,
  CheckboxModule,
  TooltipModule,
  MessagesModule,
  MessageModule,
  ConfirmDialogModule,
  CalendarModule,
  MultiSelectModule,
  CarouselModule,
  ChartModule,
  TabViewModule
];

@NgModule({
  imports: [...sharedImportExport],
  exports: [...sharedImportExport],
  providers: [],
  declarations: []
})
export class PrimengModule { }
