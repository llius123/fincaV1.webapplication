import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ProveedorService } from 'src/app/service/proveedor/proveedor.service';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css'],
  providers: [MessageService]
})
export class ProveedorComponent implements OnInit {

  constructor(private proveedorService: ProveedorService, private messageService: MessageService) {
    proveedorService.reloadProveedores.subscribe(
      data => this.getAllProveedores()
    )
  }

  parentMessage = false;
  proveedores: ProveedorInterface[];
  ngOnInit() {
    this.getAllProveedores();
  }

  getAllProveedores(): void {
    this.proveedorService.getAll().subscribe(
      (data: ProveedorInterface[]) => {
        this.proveedores = data;
      }
    )
  }
  deleteProveedor(data: ProveedorInterface): void {
    this.proveedorService.delete(data).subscribe(
      (data: any) => {
        this.showTooltip('success', '', `${data.msg}`)
        this.getAllProveedores();
      },
      error => this.showTooltip('error', '', `${error.msg}`)
    )
  }

  padre: Subject<ProveedorInterface> = new Subject();
  editProveedor(data: ProveedorInterface): void {
    this.padre.next(data);
    this.parentMessage = true;
  }

  showTooltip(type: string, title: string, desc: string) {
    this.messageService.add({
      severity: `${type}`,
      summary: `${title}`,
      detail: `${desc}`
    })
  }
}
