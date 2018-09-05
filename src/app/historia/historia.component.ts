import { Component, OnInit } from '@angular/core';
import { HistoriaService } from './../historia.service'

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent implements OnInit {
  historias: any[]

  constructor(private historiaService: HistoriaService) { }

  ngOnInit() {
    this.historiaService.getAllProductos()
    .then((response) => {
      this.historias = response.json()
      console.log(this.historias)
    })
  }

}
