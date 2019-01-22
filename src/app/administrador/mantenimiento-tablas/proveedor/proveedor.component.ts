import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ProveedorService } from 'src/app/service/proveedor/proveedor.service';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {

  constructor(private proveedorService: ProveedorService) { }

  parentMessage = false;
  proveedores: ProveedorInterface[];
  ngOnInit() {
    this.getAllProveedores();
  }

  getAllProveedores(): void{
    this.proveedorService.getAllProveedores().subscribe(
      (data: ProveedorInterface[]) => {
        this.proveedores = data;
      }
    )
  }

  padre: Subject<ProveedorInterface> = new Subject();
  editProveedor(data: ProveedorInterface): void{
    this.padre.next(data);
    this.parentMessage = true;
  }
}
