import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  @Input() title: string = "";
  @Input() subtitle?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
