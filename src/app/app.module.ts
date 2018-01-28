import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { AppComponent } from './app.component';
import { NameparentcomponentComponent } from './nameparentcomponent/nameparentcomponent.component';
import { NamechildComponent } from './namechild/namechild.component';
import { HeroChildComponent } from './hero-child/hero-child.component';
import { VersionParentComponent } from './version-parent/version-parent.component';
import { VersionChildComponent } from './version-child/version-child.component';
import { VoteTakerComponent } from './vote-taker/vote-taker.component';
import { VoterComponent } from './voter/voter.component';
import { CountdownLocalVarParentComponent,CountdownViewChildParentComponent } from './countdown-parent/countdown-parent.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { AssignChildComponent } from './assign-child/assign-child.component';
import { AssignParentComponent } from './assign-parent/assign-parent.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroComponent } from './hero/hero.component';


@NgModule({
  declarations: [
    AppComponent,
    NameparentcomponentComponent,
    NamechildComponent,
    HeroChildComponent,
    VersionParentComponent,
    VersionChildComponent,
    VoteTakerComponent,
    VoterComponent,
    CountdownViewChildParentComponent,
    CountdownLocalVarParentComponent,
    CountdownTimerComponent,
    AssignChildComponent,
    AssignParentComponent,
    HeroDetailComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
