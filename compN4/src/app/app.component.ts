import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'compN4';

  //atributos de tarea
  nombre: string = '';
  desc: string = '';
  completada: boolean = false;
 
  //lista de tarea
  arrTarrea: any = [];
  //borrar tarea
  borrar(item: any) {
    let pos = 0;
    for (let i = 0; i < this.arrTarrea.length; i++) {
      if (this.arrTarrea[i] == item) {
        pos = i;
      }
    }
    this.arrTarrea.splice(pos, 1);
  }
  //cambiar tarea a completada
  estaCompletada(item: any) {
    let artSelecionado=[];
    artSelecionado.push({
      nombre: item.nombre,
      desc: item.desc,
      completada: false,
    });
    for (let i = 0; i < this.arrTarrea.length; i++) {
      if (artSelecionado[0].nombre == this.arrTarrea[i].nombre) {
        this.arrTarrea[i].completada = true;      
      }
    }  
  }
  //añade una Tarea nueva
  agregarTarea($event: any) {
    this.arrTarrea.push({
      nombre: $event.nombre,
      desc: $event.desc,
      completada: false,
    });
  }
}
