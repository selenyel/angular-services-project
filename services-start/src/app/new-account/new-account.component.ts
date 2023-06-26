import { Component } from '@angular/core';
import { LoggingService } from '../shared/logging.service';
import { AccountComponent } from '../account/account.component';
import { AccountService } from '../shared/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
//providers for our new logging.service

export class NewAccountComponent {
  //@Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  //we will inform angular that we need this service
  constructor(
    private loggingService: LoggingService,
    private accountService: AccountService
  ){

    //OR
    //this.loggingService = inject(LoggingService);


    this.accountService.statusUpdated.subscribe(
      (status: string) => alert('Cross Component Communication\n\n Alerted by : new-account \n Got status from : accounts.service \n Sent by : account \n Status: '+ status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    

    
    //console.log('A server status changed, new status: ' + accountStatus);
    // OR
    // const service = new LoggingService();
    // service.logStatusChange(accountStatus);
    // OR
    // this.loggingService.logStatusChange(accountStatus);
    this.accountService.addAccount(accountName,accountStatus);
  }
}
