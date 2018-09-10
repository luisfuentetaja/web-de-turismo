import { Component, OnInit } from '@angular/core';
import { PersonajesService } from './../personajes.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-menupersonajes',
  templateUrl: './menupersonajes.component.html',
  styleUrls: ['./menupersonajes.component.css']
})
export class MenupersonajesComponent implements OnInit {
  personajes: any[]

  constructor(private personajesService: PersonajesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params)
      this.personajesService.getOneCategoria(params.categoria)
        .then((response) => {
          this.personajes = response.json()
          console.log(this.personajes)
        })
    })
  }
}
