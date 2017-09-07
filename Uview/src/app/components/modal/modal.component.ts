import { Component } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent extends DialogComponent<ALertModal, null> implements ALertModal {
  title: string;
  message: string;
  constructor(dialogService: DialogService) {
    super(dialogService);
  }
}

export interface ALertModal {
  title: string;
  message: string;
}
