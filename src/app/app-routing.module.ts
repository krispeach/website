import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { GeorgeComponent } from './george/george.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TshirtComponent } from './tshirt/tshirt.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'contact', component: ContactComponent },
  { path:'george', component: GeorgeComponent },
  { path:'tshirt', component: TshirtComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
