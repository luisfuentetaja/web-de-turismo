import { Component, OnInit } from '@angular/core';
import { NaturalezaService } from './../naturaleza.service'

@Component({
  selector: 'app-naturaleza',
  templateUrl: './naturaleza.component.html',
  styleUrls: ['./naturaleza.component.css']
})
export class NaturalezaComponent implements OnInit {
  naturaleza: any[]

  constructor(private monumentosService: NaturalezaService) { }

  ngOnInit() {
    this.monumentosService.getAllCategorias()
    .then((response) => {
      this.naturaleza = response.json()
      console.log(this.naturaleza)
    })
  }

}