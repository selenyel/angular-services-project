import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../shared/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
//providers for our new logging.service

export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  //we will inform angular that we need this service
  constructor(private loggingService: LoggingService){

    //OR
    //this.loggingService = inject(LoggingService);

  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    

    
    //console.log('A server status changed, new status: ' + accountStatus);
    // OR
    // const service = new LoggingService();
    // service.logStatusChange(accountStatus);
    // OR
    this.loggingService.logStatusChange(accountStatus);
  }
}
