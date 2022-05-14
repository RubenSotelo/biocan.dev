import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  registrar(){
    this.router.navigate(["registro"], {
      replaceUrl: true,
    })
  }
  buscar(){
    this.router.navigate(["search"], {
      replaceUrl: true,
    })
  }

}
