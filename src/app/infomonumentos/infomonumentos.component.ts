import { Component, OnInit } from '@angular/core';
import { MonumentosService } from './../monumentos.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-infomonumentos',
  templateUrl: './infomonumentos.component.html',
  styleUrls: ['./infomonumentos.component.css']
})
export class InfomonumentosComponent implements OnInit {
  monumento: any[]

  constructor(private monumentosService: MonumentosService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params)
      this.monumentosService.getOne(params.id)
        .then((response) => {
          this.monumento = response.json()[0]
          console.log(this.monumento)
        })
    })
    
  }

}