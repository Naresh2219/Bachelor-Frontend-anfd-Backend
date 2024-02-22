import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ItemlistComponent} from './components/itemlist/itemlist.component';

const routes: Routes = [
{ path: "dash", component: DashboardComponent },
{ path:"list", component: ItemlistComponent},
{path: "list/delete", component: ItemlistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
