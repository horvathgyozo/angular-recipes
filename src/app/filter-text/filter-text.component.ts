import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'filter-text',
  templateUrl: './filter-text.component.html',
  styleUrls: ['./filter-text.component.css']
})
export class FilterTextComponent implements OnInit {

  @Input('value') text: string = "";
  @Output() filterChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onFilterChange(value) {
    this.text = value;
    this.filterChange.emit(value);
  }

}
