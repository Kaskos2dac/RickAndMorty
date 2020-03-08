import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../Core/Model/Character.model';

@Component({
  selector: 'app-card-character',
  templateUrl: './card-character.component.html',
  styleUrls: ['./card-character.component.scss']
})
export class CardCharacterComponent implements OnInit {

  @Input() character: Character;

  constructor() { }

  ngOnInit() {
  }

}
