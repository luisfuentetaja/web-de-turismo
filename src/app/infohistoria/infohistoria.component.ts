import { Component, OnInit } from '@angular/core';
import { HistoriaService } from './../historia.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';


@Component({
  selector: 'app-infohistoria',
  templateUrl: './infohistoria.component.html',
  styleUrls: ['./infohistoria.component.css']
})
export class InfohistoriaComponent implements OnInit {
  historia: any[]

  constructor(private historiaService: HistoriaService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params)
      this.historiaService.getOne(params.id)
        .then((response) => {
          this.historia = response.json()[0]
          console.log(this.historia)
        })
    })
    
  }

}