import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';


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
  imports: [RouterModule.forRoot(appRoutes,{enableTracing:true})],
  exports:[RouterModule]
})
export class AppRoutingModule { }


