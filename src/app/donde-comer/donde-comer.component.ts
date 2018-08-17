import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-donde-comer',
  templateUrl: './donde-comer.component.html',
  styleUrls: ['./donde-comer.component.css']
})
export class DondeComerComponent implements OnInit {

private fragment: string;

constructor(private route: ActivatedRoute) { }

ngOnInit() {
  this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
}

ngAfterViewInit(): void {
  try {
    document.querySelector('#' + this.fragment).scrollIntoView();
  } catch (e) { }
}
}
