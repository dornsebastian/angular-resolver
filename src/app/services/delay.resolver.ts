import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable()
export class DelayResolver implements Resolve<string[]> {

  constructor() {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string[]> {
    return of(['a', 'b', 'c', 'd', 'e']).pipe(
      delay(1500)
    );
  }
}
