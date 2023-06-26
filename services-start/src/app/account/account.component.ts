import { Component, EventEmitter, Input } from '@angular/core';
import { LoggingService } from '../shared/logging.service';
import { AccountService } from '../shared/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(
    private loggingService: LoggingService,
    private accountService: AccountService
  ){

    //OR
    //this.loggingService = inject(LoggingService);

  }

  onSetTo(status: string) {
    // this.statusChanged.emit({id: this.id, newStatus: status});
    // this.loggingService.logStatusChange(status);
    this.accountService.updateStatus(this.id, status)

    this.accountService.statusUpdated.emit(status);
  }
}
