import { Component, OnInit, ViewChild } from '@angular/core';
import { AllCommunityModules } from '@ag-grid-community/all-modules';
import { AgGridAngular } from '@ag-grid-community/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  rowSelection = "multiple";

  constructor() {

    // this.dataService.getData()
    //   .subscribe((response: any) => {
    //     this.rowData = response
    //     console.log(response);
    //   })
  }

  ngOnInit() {
  }


  columnDefs = [
    { headerName: 'ID', field: 'id', sortable: true, checkboxSelection: true },
    { headerName: 'Name', field: 'name', sortable: true },
    { headerName: 'Price', field: 'price', sortable: true }
  ];

  rowData = [
    { id: 'APL', name: 'Apple', price: 300 },
    { id: 'AMZ', name: 'Amazon', price: 400 },
    { id: 'GGL', name: 'Google', price: 500 }
  ];


  modules = AllCommunityModules;

  @ViewChild('agGrid', { static: false }) agGrid: AgGridAngular;
  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    const selectedDataStringPresentation = selectedData.map(node => node.make + ' ' + node.model).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }

}
