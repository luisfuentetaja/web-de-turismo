import { Component, OnInit } from '@angular/core';
import { NaturalezaService } from './../naturaleza.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-menunaturaleza',
  templateUrl: './menunaturaleza.component.html',
  styleUrls: ['./menunaturaleza.component.css']
})
export class MenunaturalezaComponent implements OnInit {
  naturaleza: any[]

  constructor(private naturalezaService: NaturalezaService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params)
      this.naturalezaService.getOneCategoria(params.categoria)
        .then((response) => {
          this.naturaleza = response.json()
          console.log(this.naturaleza)
        })
    })
  }
}
