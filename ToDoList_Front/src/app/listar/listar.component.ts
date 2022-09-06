import { Component, OnInit } from '@angular/core';
import { Objeto} from './listar.interface';
import { ListarService } from './listar.service';
import { NGXLogger } from "ngx-logger";

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  
  obj: Objeto ;
  objs: Objeto[];

  constructor(
    private objService: ListarService,
    private logger: NGXLogger,
    ) {
      logger.partialUpdateConfig({ context: 'ListarComponent' });
   
   }

  ngOnInit(): void {
    
  }
  logWithContext(): void {
    this.logger.error('Logging from CustomInstanceComponent');
    this.objService.logWithContext();
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
  onUptObjeto(event: Objeto) {
    this.objService.updateObjeto(event).subscribe(
      data => {
        this.obj = Object.assign({}, this.obj, event);
        this.listObj();
      }
    );
  }

  ondltObjeto(event: Objeto) {
    this.objService.deleteObjeto(event).subscribe(
      data => {
        this.obj = Object.assign({}, this.obj, event);
        this.listObj();
      }
    );
  }
  
}
