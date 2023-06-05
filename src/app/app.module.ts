import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeComponent } from './components/resume/resume.component';
import { AsideComponent } from './components/aside/aside.component';
import { MainComponent } from './components/main/main.component';
import { TitleModule } from './directives/title/title.module';
import { ModalFormModule } from './components/modal-form/modal-form.module';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    AsideComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TitleModule,
    ModalFormModule,
  ],
  providers: [DialogService, DynamicDialogRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
