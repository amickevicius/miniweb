import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-customer-letter',
  templateUrl: './customer-letter.component.html',
  styleUrls: ['./customer-letter.component.scss']
})
export class CustomerLetterComponent implements OnInit {
  // gauti duomenim is pagrindinio komponento
  @Input() customLetter: string | undefined;
  // siusti duomenim i pagrindini komponenta
  @Output() selectCustomLetter = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onMouseEnter(): void {
    this.selectCustomLetter.emit(this.customLetter?.toLowerCase());
  }
}
