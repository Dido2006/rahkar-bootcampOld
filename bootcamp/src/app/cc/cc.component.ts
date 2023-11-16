import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cc',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cc.component.html',
  styleUrl: './cc.component.scss'
})
export class CcComponent {
  @output() Name:string= new EventEmitter();

  FName : string ="Mohsen"
  LName : string ="Bigdeli"
  ClickHandler(e:any)
  {
  
  }

}
