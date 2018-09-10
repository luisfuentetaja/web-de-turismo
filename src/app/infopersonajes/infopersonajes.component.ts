import { Component, OnInit } from '@angular/core';
import { PersonajesService } from './../personajes.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-infopersonajes',
  templateUrl: './infopersonajes.component.html',
  styleUrls: ['./infopersonajes.component.css']
})
export class InfopersonajesComponent implements OnInit {
  personaje: any[]

  constructor(private personajesService: PersonajesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params)
      this.personajesService.getOne(params.id)
        .then((response) => {
          this.personaje = response.json()[0]
          console.log(this.personaje)
        })
    })
    
  }

}