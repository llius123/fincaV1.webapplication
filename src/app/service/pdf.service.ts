
import { Injectable, EventEmitter } from '@angular/core';
import * as jsPDF from 'src/assets/jspdf.debug.js';
import { GeneralService } from './general/general.service';

@Injectable({
  providedIn: 'root'
})

export class PdfService {

  constructor(private general: GeneralService) { }

  newPdf(data: FacturaProveedorInterface) {
    var doc = new jsPDF();
    //Titulos
    doc.setFontStyle("italic");
    
    //Rectangulo base imponible
    doc.rect(2, 40, 206, 100); 
    
    //Tipo de Factura
    doc.setFontSize(10);
    doc.setFontStyle("bold");
    doc.text("Factura de tipo:", 5, 25);
    doc.setFontSize(10);
    doc.setFontStyle("normal");
    doc.text(`${data.tipofactura.descripcion}`, 50, 25);
    //Fecha
    doc.setFontSize(10);
    doc.setFontStyle("bold");
    doc.text("Fecha:", 135,25)
    doc.setFontSize(10);
    doc.setFontStyle("normal");
    doc.text(`${this.general.miliToDate(data.fecha_registro)}`, 155,25)
    
    //General
    doc.setFontSize(10);
    doc.setFontStyle("bold");
    doc.text("Base imponible general", 5,45)
    doc.text("Tipo iva general", 85,45)
    doc.text("Cuota iva general", 165,45)
    doc.line(5, 48, 45, 48);
    doc.line(85, 48, 112, 48);
    doc.line(165, 48, 195, 48);
    doc.setFontStyle("normal");
    doc.text(`${data.base_imponible1}`, 20,55)
    doc.text(`${data.tipo_iva1}`, 95,55)
    doc.text(`${data.cuota_iva1}`, 180,55)

    // //Reducido
    doc.setFontSize(10);
    doc.setFontStyle("bold");
    doc.text("Base imponible reducido", 5,65)
    doc.text("Tipo iva reducido", 85,65)
    doc.text("Cuota iva reducido", 165,65)
    doc.line(5, 68, 45, 68);
    doc.line(85, 68, 112, 68);
    doc.line(165, 68, 195, 68);
    doc.setFontStyle("normal");
    doc.text(`${data.base_imponible2}`, 20,75)
    doc.text(`${data.tipo_iva2}`, 95,75)
    doc.text(`${data.cuota_iva2}`, 180,75)
    
    // //SuperReducido
    doc.setFontSize(10);
    doc.setFontStyle("bold");
    doc.text("Base imponible superreducido", 5,85)
    doc.text("Tipo iva superreducido", 85,85)
    doc.text("Cuota iva superreducido", 165,85)
    doc.line(5, 88, 57, 88);
    doc.line(85, 88, 125, 88);
    doc.line(165, 88, 207, 88);
    doc.setFontStyle("normal");
    doc.text(`${data.base_imponible3}`, 20,95)
    doc.text(`${data.tipo_iva3}`, 95,95)
    doc.text(`${data.cuota_iva3}`, 180,95)
    
    // //Base imponible 0
    doc.setFontSize(10);
    doc.setFontStyle("bold");
    doc.text("Base imponible 0", 5,105)
    doc.line(5, 108, 34, 108);
    doc.setFontStyle("normal");
    doc.text(`${data.base_imponible0}`, 20,115)
    
    // //Total
    doc.setFontSize(15);
    doc.setFontStyle("bold");
    doc.text("Total:", 145,115)
    doc.setFontStyle("normal");
    doc.text(`${data.total} €`, 175,115)
    
    // //Rectangulo total
    doc.rect(140, 108, 60, 10); 
    
    
    // //Comunidad/Proveedor
    doc.setFontSize(10);
    doc.setFontStyle("bold");
    doc.text("Comunidad: ", 5,175)
    doc.text("Porveedor: ", 115,175)
    doc.setFontStyle("normal");
    doc.text(`${data.comunidad.direccion}`, 40,175)
    doc.text(`${data.comunidad.direccion}`, 140,175)
    
    //Comunidad/Proveedor
    doc.rect(2, 160, 206, 30); 
    doc.save('factura.pdf')
  }

}