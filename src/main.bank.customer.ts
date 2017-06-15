// main entry point
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BankCustomerModule } from './app/banking-widget/customer-widget/bankWidgetCus.module';

platformBrowserDynamic().bootstrapModule(BankCustomerModule);
