import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "../../Servicios/heroes.service";




@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  heroes: any[] = [];
  termino: string;
  constructor( private activatedRoute:ActivatedRoute,
               private _herosService: HeroesService,
               ) { 

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.termino= params['termino'];
    this.heroes = this._herosService.buscarHeroes(params ['termino']);

    
    });
  }

  


}
