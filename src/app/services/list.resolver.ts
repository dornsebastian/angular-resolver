import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {CountryListItem} from '../entities/country-list-item.entity';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable()
export class ListResolver implements Resolve<CountryListItem[]> {

  constructor(private http: HttpClient, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CountryListItem[]> {
    return this.http.get<CountryListItem[]>('https://restcountries.eu/rest/v2/all?fields=alpha3Code;name;population').pipe(
      map((list: Object[]) => list.map(item => CountryListItem.fromJson(item)))
    ).pipe(
      catchError(error => {
        this.router.navigateByUrl('/page-not-found');
        return of(undefined);
      })
    );
  }
}
