import { Component, Input } from '@angular/core';
import { ModalFormComponent } from '../modal-form/modal-form.component';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DialogService } from 'primeng/dynamicdialog';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {
  @Input() mySkills: {
    tech: string,
    details: string,
  }[] = [];

  constructor(
    private dialogService: DialogService,
    private platformLocation: PlatformLocation,
    public ref: DynamicDialogRef,
  ){}

  seeDetails(item: any){
    this.ref = this.dialogService.open(ModalFormComponent, {
      contentStyle: { overflow: 'auto', padding: '30px', 'border-radius': '10px', 'background-color': '#fff', 'box-shadow': 'rgba(0, 0, 0, 0.35) 0px 5px 15px'},
      showHeader: false,
      modal: true,
      dismissableMask: true,
      style: {
        minWidth: '300px',
        maxWidth: '500px',
      },
      data: {
        item: item,
      }
    });
  }
}
