import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { DwaComponent }     from './dwa/dwa-component';
import { DwoComponent }     from './dwo/dwo-component';
import { SimulationsComponent }     from './simulations/simulations-component';
import { DwaService } from './dwa/dwa.service';

@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dwa',
        pathMatch: 'full'
      },{
        path: 'dwa',
        component: DwaComponent
      },{
        path: 'dwo',
        component: DwoComponent
      },{
        path: 'simulations',
        component: SimulationsComponent
      }
    ])
  ],
  declarations: [ AppComponent, DwaComponent, DwoComponent, SimulationsComponent ],
  providers: [ DwaService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
