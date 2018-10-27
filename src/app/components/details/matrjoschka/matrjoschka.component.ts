import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
import {of} from 'rxjs';

@Component({
  selector: 'app-matrjoschka',
  templateUrl: './matrjoschka.component.html',
  styleUrls: ['./matrjoschka.component.scss']
})
export class MatrjoschkaComponent implements OnInit {

  loading = true;

  constructor(public activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activatedRoute.snapshot.data.item.subscribe(
      () => {
      },
      () => this.loading = false,
      () => this.loading = false,
    );
  }

}
