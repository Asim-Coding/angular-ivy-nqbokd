import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes : Routes = [
  {path: 'crisis', component:CrisisListComponent},
  {path:'hero', component:HeroListComponent},
 { path: '',  redirectTo: '/hero', pathMatch: 'full' },
 { path: '**', component: PageNotFoundComponent }
]


@NgModule({
  imports: [ BrowserModule, FormsModule,RouterModule.forRoot(appRoutes,{enableTracing:true})],
  declarations: [ AppComponent, HelloComponent,CrisisListComponent,HeroListComponent,PageNotFoundComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


