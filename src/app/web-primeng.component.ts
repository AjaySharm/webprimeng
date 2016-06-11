import { Component } from '@angular/core';
import {Button} from 'primeng/primeng';
import {InputText} from 'primeng/primeng';
import {DataTable} from 'primeng/primeng';
import {Column,TabView,TabPanel} from 'primeng/primeng';

@Component({
  moduleId: module.id,
  selector: 'web-primeng-app',
  templateUrl: 'web-primeng.component.html',
  styleUrls: ['web-primeng.component.css'],
  directives : [Button,InputText,DataTable,Column, TabView,TabPanel]
  
})
export class WebPrimengAppComponent {
  title = 'web-primeng works!';
  
}
