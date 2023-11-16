import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NewComponent } from './new/new.component';
import { outputAst } from '@angular/compiler';
import { CaComponent } from './ca/ca.component';
import { CbComponent } from './cb/cb.component';
import { CcComponent } from './cc/cc.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent,SidebarComponent,NewComponent ,CaComponent,CbComponent,CcComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  appear : boolean = true;
constructor()
{setTimeout(() => {this.appear=false
  
}, 2000);}
  title = 'bootcamp';
    Clickcounter : number = 0;
    ontype(e:any ){
      console.log(e);
     }
     onClick(e:any){
      this.Clickcounter=this.Clickcounter+1;
     }
    // @input in1(e:any) 
    ngOnDestroy(){
    console.log("bye");
    // @output out1(e:any)
    
    
  }
    
}
