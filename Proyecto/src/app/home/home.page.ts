import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
nombre: string = '';
  precio: number = 0;
 cantidad: number = 0;

 // username: string = '';
  //password: string = '';
 // credencialesCorrectas = false;
  login: any;
  isChecked = false;
  disableButton = true;
  isShow = true;
  //punto dos productos
  products = [
    { nombre: 'Arroz', precio: 120000, cantidad: 3 },
    { nombre: 'Cereal', precio: 80000, cantidad: 2 },
    { nombre: 'Jabon', precio: 50000, cantidad: 0 },
    { nombre: 'Aceite', precio: 260000, cantidad: 4 },
    { nombre: 'Papas', precio: 90000, cantidad: 7 },
    { nombre: 'Azucar', precio: 6000, cantidad: 4 },
    { nombre: 'Leche', precio: 150000, cantidad: 1 },
    { nombre: 'Maiz', precio: 6530000, cantidad: 6 },
    { nombre: 'Crema', precio: 1000, cantidad: 6 },
    { nombre: 'Cepillo', precio: 520000, cantidad: 0},
    { nombre: 'Gelatina', precio: 500, cantidad: 9 },
    { nombre: 'Avena', precio: 4000, cantidad: 7},
    { nombre: 'Lentejas', precio: 50000, cantidad: 3 },
    { nombre: 'Arveja', precio: 25000, cantidad: 0 },
    { nombre: 'Papel', precio: 6500, cantidad: 3 },
    { nombre: 'Salsa', precio: 47900, cantidad: 0 },
    { nombre: 'Panela', precio: 70500, cantidad: 8 },
    { nombre: 'Pan', precio: 630000, cantidad: 3 },
    { nombre: 'Gaseosa', precio: 86000, cantidad: 3 },
    { nombre: 'Cafe', precio: 923000, cantidad: 7 }


  ];

  getRowClass(values: any) {

    if (values.precio >= 100000 && values.cantidad >= 1) {
      return 'blue-row';
    } else if (values.precio > 0 && values.precio < 100000 && values.cantidad >= 1) {
      return 'green-row';
    } else if (values.cantidad <= 0) {
      return 'red-row';
    }
    return '';

}

public valuesDetail(values: any) {
    console.log(values);
}



  people = [
  { name: 'Bob', age: 30 },
   { name: 'Charlie', age: 22 },
  { name: 'Andres', age: 55 },
    { name: 'Paula', age: 44 },
    { name: 'Laura', age: 77 },
 ];
 // alertController: any;

 //  PUNTO UNO ESTA EN VERDE

 // async iniciarSesion() {

   // if (this.username === 'Mahia barrios' && this.password === '123') {

   //   this.credencialesCorrectas = true;

   //   const alert = await this.alertController.create({

    //      header: 'Éxito',
    //      message: 'Inicio de sesión exitoso',
       //   buttons: ['OK'],
       //   cssClass: 'success-alert'

   //   });

     // await alert.present();

    //} else {

    //  this.credencialesCorrectas = false;

       //const alert = await this.alertController.create({

        //  header: 'Error',
        //  message: 'Usuario y/o contraseña incorrectos',
        //  buttons: ['OK'],
         // cssClass: 'error-alert'

       // });

      //  await alert.present();

  //  }
 // }

 // getButtonColor() {
 //   return this.credencialesCorrectas ? 'success' : 'danger';
 // }

  constructor(private router: Router, private navCtrl: NavController, alertController: AlertController) {}


   public showMessage() {
    alert('Se presionó el botón');
  }

  public clickCheck() {
    this.isChecked = !this.isChecked;
    this.disableButton = this.isChecked ? false : true;
  }

  public show() {
    this.isShow = !this.isShow;
  }

  public productDetail(product: string, position: number) {
    console.log(
      'Producto ' + product + '  se encuentra en la posición ' + position
    );
  }

  public personDetail(person: any) {
    console.log(person);
  }

  /*   navigate() {vscode-file://vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-sandbox/workbench/workbench.html
      this.router.navigate(['/detail'])
    } */

 /* goToDetailPage(itemId: number) {
    this.navCtrl.navigateForward('/detail', {
      queryParams: {
        itemId: itemId,*/
     // },
    //});

    /*     const params: NavigationExtras = {
          queryParams: { id: 123, name: 'Ejemplo' }
        };
        this.router.navigate(['/detail'], params);
     */
//  }
}
