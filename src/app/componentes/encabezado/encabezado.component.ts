import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.less']
})
export class EncabezadoComponent implements OnInit {
miPorfolio:any;
  constructor(private datosPorfolio: PorfolioService) { }
  title: string= 'Argentina Programa - #Yo programo';

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe (data => {
      console.log(data);
      this.miPorfolio-data;
    });
  }

}
