import { Component, OnInit } from '@angular/core';
import { Objeto} from './listar.interface';
//import { PersonViewerComponent } from './person-viewer.component';
import { ListarService } from './listar.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  
  obj!: Objeto ;
  objs!: Objeto[];

  constructor(private objService: ListarService) { }

  ngOnInit(): void {
    this.listObj();
  }

  private listObj() {
    this.objService.getObjeto().subscribe((data: Objeto[]) => this.objs = data, error => console.log("error en get Objetos", error));
  }

  onAddObjeto(event: Objeto) {
    this.objService.createObjeto(event).subscribe(
      data => {
        this.obj = Object.assign({}, this.obj, event);
        this.listObj();
      }
    );
  }
}
