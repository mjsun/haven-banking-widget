// main entry point
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BankModule } from './app/banking/bank.module';
import { BeneModule } from './app/beneficiary/bene.module';

platformBrowserDynamic().bootstrapModule(BankModule);
platformBrowserDynamic().bootstrapModule(BeneModule);
