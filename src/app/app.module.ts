import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeComponent } from './components/resume/resume.component';
import { AsideComponent } from './components/aside/aside.component';
import { MainComponent } from './components/main/main.component';
import { TitleModule } from './directives/title/title.module';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    AsideComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TitleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
