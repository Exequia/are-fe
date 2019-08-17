import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { ExperienceModule } from './experience/experience.module';
import { StudiesModule } from './studies/studies.module';

// /* SERVICES */
// import { MessageService } from './message/services/message.service';
// import { UsersService } from './services/users.service';

/* COMPONENTS */
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomeComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ExperienceModule,
    StudiesModule
  ],
  providers: [
    // MessageService,
    // UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
