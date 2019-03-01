import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() featureSelected = new EventEmitter<string>()
  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
  }

  onSaveData(){
    this.dataStorageService.storeRecipes().subscribe(
      (response: Response) => {

      }
    )
  }

  onFetchData() {
    this.dataStorageService.getRecipes()
  }
}
