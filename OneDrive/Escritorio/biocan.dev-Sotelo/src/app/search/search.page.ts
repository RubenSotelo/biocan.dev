import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor(
    private router: Router,
    public alertController: AlertController) { }

  ngOnInit() {
    this.buscar()
  }
  val:any;

  buscar(){
    let alert1 = this.alertController.create({
      message: 'Ingrese Id',
      buttons:['Buscar', 'Canselar']
    });
    
  }
  editar(){
    }

  eliminar(){
    this.router.navigate(["inicio"], {
      replaceUrl: true,
    })
  }
  estado(){
    this.router.navigate(["sensores"], {
      replaceUrl: true,
    })
  }

}
