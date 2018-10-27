import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {interval, Observable, of} from 'rxjs';
import {catchError, map, retryWhen, scan, take} from 'rxjs/operators';
import {genericRetryStrategy} from './generic-retry-strategy';

@Injectable()
export class MatrjoschkaResolver implements Resolve<Observable<number[]>> {

  constructor(private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Observable<number[]>> {
    const observable = interval(50).pipe(
      take(20),
      map(x => {
          if (x === 19) {
            throw x;
          } else {
            return x;
          }
        }
      ),
      scan((acc: number[], x: number) => {
        return acc.concat([x]);
      }, []),
      retryWhen(genericRetryStrategy({
          scalingDuration: 2000,
          excludedStatusCodes: [500]
        })
      ),
      catchError(error => {
          this.router.navigateByUrl('/page-not-found');
          return of(error);
        }
      )
    );
    return of(observable);
  }
}
