import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-arriba',
  templateUrl: './button-arriba.component.html',
  styleUrls: ['./button-arriba.component.less']
})
export class ButtonArribaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

function irArriba(){
window.addEventListener('scroll', () => {
var scroll = document.documentElement.scrollTop;

var botonArriba = document.getElementById('botonArriba');

if (scroll > 500){
  botonArriba!.style.right = 20 + "px"; 
} else { botonArriba!.style.right = -100 + "px"; "500"
}
})
}

irArriba();