import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnChanges, OnInit,
  DoCheck,
  OnDestroy {

  @Input() valorInicial: number = 10;
  [x: string]: any;

  constructor() {
    this.log('constructor');
  }

  ngOnChanges() {
    this.log('ngOnChanges');
  }

  ngOnInit() {
    this.log('ngOnInit');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }

  AfterContentChecked() {
    this.log('AfterContentChecked');
  }

  AfterViewInit() {
    this.log('AfterViewInit');
  }

  AfterViewChecked() {
    this.log('AfterViewChecked');
  }


  ngOnDestroy() {
    this.log('ngOnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
  }

}
