import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {interval, Observable} from 'rxjs';
import {scan, take} from 'rxjs/operators';

@Injectable()
export class PartialResolver implements Resolve<number[]> {

  constructor() {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<number[]> {

    return interval(50).pipe(
      take(30),
      scan((acc: number[], x: number) => {
        return acc.concat([x]);
      }, [])
    );
  }
}
