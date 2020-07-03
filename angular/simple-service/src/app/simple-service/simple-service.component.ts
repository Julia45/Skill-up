import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-simple-service',
  templateUrl: './simple-service.component.html',
  styleUrls: ['./simple-service.component.scss'],
  providers: [DataServiceService]
})
export class SimpleServiceComponent implements OnInit {

  itemsSource: string[]

  constructor(private dataService: DataServiceService ) { }

  ngOnInit(): void {
    this.itemsSource = this.dataService.getData()
  }

}
