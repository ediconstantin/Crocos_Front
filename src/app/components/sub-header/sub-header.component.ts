import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {

  tabItems: MenuItem[] = [
    {
      label: 'EDIT DRAFT'
    },
    {
      label: 'VALIDATE DRAFT'
    },
    {
      label: 'PUBLISH DRAFT'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
