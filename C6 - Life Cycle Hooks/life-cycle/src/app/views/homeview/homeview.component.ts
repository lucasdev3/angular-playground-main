import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homeview',
  templateUrl: './homeview.component.html',
  styleUrls: ['./homeview.component.css']
})
export class HomeviewComponent implements OnInit {

  texto: string = "texto";

  ngOnInit(): void {
  }

}
