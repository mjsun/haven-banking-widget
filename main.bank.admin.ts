// main entry point
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BankAdminModule } from './app/banking-widget/admin-widget/bankWidgetAdmin.module';

platformBrowserDynamic().bootstrapModule(BankAdminModule);
