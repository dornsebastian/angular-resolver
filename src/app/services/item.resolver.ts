import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Country} from '../entities/country.entity';

@Injectable()
export class ItemResolver implements Resolve<Country> {

  constructor(private http: HttpClient, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Country> {
    const id = route.params['id'];
    return this.http.get<Country>(`https://restcountries.eu/rest/v2/alpha/${id}?fields=alpha3Code;name;capital;population`).pipe(
      map((item: Object) => Country.fromJson(item))
    ).pipe(
      catchError(error => {
        console.log(error);
        this.router.navigateByUrl('/page-not-found');
        return of(undefined);
      })
    );
  }
}
