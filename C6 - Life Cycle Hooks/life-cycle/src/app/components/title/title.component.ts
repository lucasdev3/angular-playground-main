import { AfterContentInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges, AfterContentInit, OnDestroy {

  @Input() title: string = '';

  constructor() {
    console.log(`Constructor: ${this.title}`)
  }
  
  ngOnInit(): void {
    console.log(`OnInit: ${this.title}`)
    this.title = 'Title changed';
    console.log(`OnInit: ${this.title}`)
  }

  ngOnChanges(): void {
    console.log(`OnChanges: ${this.title}`)
  }

  ngAfterContentInit(): void {
    console.log(`afterContentInit: ${this.title}`)
    this.title = 'Title changed 2';
    console.log(`afterContentInit: ${this.title}`)
  }

  ngOnDestroy(): void {
    console.log(`ngOnDestroy: ${this.title}`)
  }


}
