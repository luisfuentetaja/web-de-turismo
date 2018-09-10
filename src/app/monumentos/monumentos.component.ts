import { Component, OnInit } from '@angular/core';
import { MonumentosService } from './../monumentos.service'

@Component({
  selector: 'app-monumentos',
  templateUrl: './monumentos.component.html',
  styleUrls: ['./monumentos.component.css']
})
export class MonumentosComponent implements OnInit {
  monumentos: any[]

  constructor(private monumentosService: MonumentosService) { }

  ngOnInit() {
    this.monumentosService.getAllCategorias()
    .then((response) => {
      this.monumentos = response.json()
      console.log(this.monumentos)
    })
  }

}
