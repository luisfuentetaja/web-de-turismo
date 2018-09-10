import { Component, OnInit } from '@angular/core';
import { NaturalezaService } from './../naturaleza.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-infonaturaleza',
  templateUrl: './infonaturaleza.component.html',
  styleUrls: ['./infonaturaleza.component.css']
})
export class InfonaturalezaComponent implements OnInit {
  naturaleza: any[]

  constructor(private naturalezaService: NaturalezaService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params)
      this.naturalezaService.getOne(params.id)
        .then((response) => {
          this.naturaleza = response.json()[0]
          console.log(this.naturaleza)
        })
    })
  }
}