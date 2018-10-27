import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OverviewComponent} from './components/overview/overview.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {ListResolver} from './services/list.resolver';
import {HttpClientModule} from '@angular/common/http';
import {DetailsComponent} from './components/details/details.component';
import {ItemResolver} from './services/item.resolver';
import {DelayComponent} from './components/details/delay/delay.component';
import {DelayResolver} from './services/delay.resolver';
import {PartialResolver} from './services/partial.resolver';
import {PartialComponent} from './components/details/partial/partial.component';
import {MatrjoschkaComponent} from './components/details/matrjoschka/matrjoschka.component';
import {MatrjoschkaResolver} from './services/matrjoschka.resolver';

const routes: Routes = [
  {
    path: 'overview', component: OverviewComponent, resolve: {
      list: ListResolver
    }
  },
  {
    path: 'details/:id', component: DetailsComponent, resolve: {
      item: ItemResolver
    }, children: [
      {
        path: 'delay', component: DelayComponent, resolve: {
          item: DelayResolver
        }
      },
      {
        path: 'partial', component: PartialComponent, resolve: {
          item: PartialResolver
        }
      },
      {
        path: 'matrjoschka', component: MatrjoschkaComponent, resolve: {
          item: MatrjoschkaResolver
        }
      }
    ]
  },
  {path: '', pathMatch: 'full', redirectTo: 'overview'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [
    ListResolver,
    ItemResolver,
    DelayResolver,
    PartialResolver,
    MatrjoschkaResolver
  ]
})
export class AppRoutingModule {
}
