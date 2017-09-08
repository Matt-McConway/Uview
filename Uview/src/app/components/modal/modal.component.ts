import { Component } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { ZomatoService } from '../../services/zomato.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent extends DialogComponent<ALertModal, null> {
  title: any;
  message: string;
  constructor(dialogService: DialogService) {
    super(dialogService);
  }
}

export interface ALertModal {
  title: any;
  message: string;
}
