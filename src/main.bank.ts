// main entry point
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BankModule } from './app/banking/bank.module';

platformBrowserDynamic().bootstrapModule(BankModule);
