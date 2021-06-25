import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ErrorService } from '@services/error.service';
import { Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit, OnDestroy {
  notDestroy$ = new Subject();
  modalRef: BsModalRef;
  errorMessage: string;
  @ViewChild('template') template: TemplateRef<any>;

  constructor(
    private errorServ: ErrorService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
  this.checkError();
  }

  checkError(): void {
    this.errorServ.errorSource.pipe(
      takeUntil(this.notDestroy$),
      switchMap(res => res)
    ).subscribe(res => {
      if (res) {
        this.errorMessage = res;
        this.openModal(this.template);
      }
    });
  }

  openModal(template: TemplateRef<any>): void {
    if (!this.modalService.getModalsCount()) {
      this.modalRef = this.modalService.show(template);
    }
  }

  ngOnDestroy(): void {
    this.notDestroy$.complete();
  }

}
