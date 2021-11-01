import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  query = '';
  @Output() submitted = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  getQueryString(event: Event) {
    const target = event.target as HTMLInputElement;
    this.query = target.value;
  }

  onSubmit(event: Event) {
    //event.stopPropagation();
    event.preventDefault();
    this.submitted.emit(this.query);
  }
}
