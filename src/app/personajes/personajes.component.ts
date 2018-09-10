import { Component, OnInit } from '@angular/core';
import { PersonajesService } from './../personajes.service'

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  personajes: any[]

  constructor(private personajesService: PersonajesService) { }

  ngOnInit() {
    this.personajesService.getAllCategorias()
    .then((response) => {
      this.personajes = response.json()
      console.log(this.personajes)
    })
  }

}