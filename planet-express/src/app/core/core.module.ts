import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './views/app.component';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './views/landing/landing.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TimerComponent } from './views/landing/timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    TimerComponent,
  ],
  imports: [CommonModule, RouterModule],
  providers: [],
  exports: [AppComponent],
})
export class CoreModule {}
