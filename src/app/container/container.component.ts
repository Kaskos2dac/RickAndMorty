import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../Core/Services/character.service';
import { Character } from '../Core/Model/Character.model';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  characters: Character[] = [];

  constructor(
    private characterService: CharacterService
  ) { }

  ngOnInit() {
    this.fetchCharacters();
  }

  fetchCharacters() {
    this.characterService.getCharacter().subscribe(character => {
      this.characters = character as Character[];
      console.log(this.characters);
    });
  }

}
