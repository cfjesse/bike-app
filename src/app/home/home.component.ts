import { ConfirmationService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { BikeService } from '../services/bike.service';
import { IBikeEntity, IManufacturer } from '../../interfaces/bike.interface';
import { ManufacturerService } from '../services/manufacturer.service';
import { DialogService } from 'primeng/dynamicdialog';
import { AddComponent } from '../dialog/forms/add/add.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bikeList: IBikeEntity[] = [];
  manufacturerList: IManufacturer[] = [];
  cancelReference!: IBikeEntity; 
  manufacturerKeys: { [key: string]: string } = {};

  constructor(
    private bikeService: BikeService, 
    private dropdownService: ManufacturerService,
    private confirmationService: ConfirmationService,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.bikeService.bikeList.subscribe(bikeList => this.bikeList = bikeList);
    this.dropdownService.manufacturer.subscribe(manufacturerList => {
      this.manufacturerList = manufacturerList;
      this.manufacturerList.forEach(item => {
        this.manufacturerKeys[item.id] = item.name;
      })
    });
  }

  updateBike(id:number, bikeData: IBikeEntity) {
    this.bikeService.updateBike(id, bikeData).subscribe({
      next: updatedBike => {
        const bike = this.bikeList.find(item => item.id === updatedBike.id);
        if(bike) {
          bike.frameSize = updatedBike.frameSize; 
          bike.manufacturer = updatedBike.manufacturer;
          bike.model = updatedBike.model;
          bike.price = updatedBike.price;
        }
      },
      error: (error) => this.notify(error.message)
    });
  }

  addBike(bikeData: IBikeEntity) {
    this.bikeService.insertBike(bikeData).subscribe({
      next: newBike => this.bikeList.unshift(newBike), 
      error: (error) => this.notify(error.message),
    });
  }
  
  onRowEditStart(bike: IBikeEntity): void { 
    this.cancelReference = {...bike};
  }

  onRowEditSave(bike: IBikeEntity): void { 
    console.log(`*** bike`, bike);
    this.bikeService.updateBike(bike.id, bike).subscribe({
      next: () => { 
        this.notify("Bike was was updated"); 
      },
      error: () => { 
        this.notify("Updated failed");
        const index = this.bikeList.findIndex((listItem) => listItem.id === bike.id);
        this.bikeList[index] = this.cancelReference;
      }
    })
  }

  onRowEditCancel(index: number): void { 
    this.bikeList[index] = this.cancelReference;
  }

  onRowEditDelete(id:number) {
    this.confirmationService.confirm({
      message: "Are you sure you want to delete?",
      accept:() => {
        this.bikeService.deleteBike(id).subscribe({
          next: () => this.bikeService.bikeList.subscribe(updatedList => this.bikeList = updatedList),
          error: () =>  this.notify("Delete failed")
        });
      }
    })
  }

  onAddRow(): void {
    const ref = this.dialogService.open(AddComponent, {
      header: 'Add New Bike',
      width: "50vw"
    })
  }

  onValidateRow(bike: IBikeEntity, key: string): void {
    
  }

  private notify(message: string): void {
    console.log(message);
  }
}
