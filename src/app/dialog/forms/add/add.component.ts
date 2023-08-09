import { ManufacturerService } from './../../../services/manufacturer.service';
import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { IBaseBikeEntity, IManufacturer } from 'src/interfaces/bike.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  
  private manufacturerKeys: { [key: string]: string } = {};
  manufacturerList: IManufacturer[] = [];
  bike: IBaseBikeEntity = {
    model: '',
    frameSize: 8,
    manufacturer: 1,
    price: 0
  };
  
  constructor(
    public ref: DynamicDialogRef, 
    public config: DynamicDialogConfig,
    private dropdownService: ManufacturerService
  ) { }

  ngOnInit(): void {

   
    this.dropdownService.manufacturer.subscribe(manufacturerList => {
         this.manufacturerList = manufacturerList;
         this.manufacturerList.forEach(item => {
           this.manufacturerKeys[item.id] = item.name;
         })
       });
      
  }


  onSave(): void {

  }
}
