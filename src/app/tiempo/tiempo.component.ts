import { Component, OnInit } from '@angular/core';
import { TiempoService } from '../tiempo.service';

@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.component.html',
  styleUrls: ['./tiempo.component.css']
})
export class TiempoComponent implements OnInit {

  constructor(private tiemposervice: TiempoService) { }

  ngOnInit( ) {
    this.tiemposervice.peticiontiempoGet()
  }

}
