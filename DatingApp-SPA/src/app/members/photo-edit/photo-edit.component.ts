import { Photo } from './../../_models/photo';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo-edit',
  templateUrl: './photo-edit.component.html',
  styleUrls: ['./photo-edit.component.css']
})
export class PhotoEditComponent implements OnInit {
  @Input() photos: Photo[];

  constructor() { }

  ngOnInit() {
  }

}
