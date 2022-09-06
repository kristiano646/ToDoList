import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './listar/listar.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LoggerModule, NgxLoggerLevel } from "ngx-logger";

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoggerModule.forRoot({
      serverLoggingUrl: '/api/logs',
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.ERROR
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
