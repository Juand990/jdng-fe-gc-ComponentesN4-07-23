import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-tarea',
  templateUrl: './form-tarea.component.html',
  styleUrls: ['./form-tarea.component.css'],
})
export class FormTareaComponent {

  //Listas del app.component
  @Input() data: any = [];
  //agregar lista (plus) al app.component
  @Output() plus = new EventEmitter<any>();

  constructor() {}

  //evento para agregar
  agregar() {
    this.plus.emit(this.data);    
  }
}
