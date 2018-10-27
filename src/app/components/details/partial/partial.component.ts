import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-partial',
  templateUrl: './partial.component.html',
  styleUrls: ['./partial.component.scss']
})
export class PartialComponent implements OnInit {

  constructor(public activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
  }

}
