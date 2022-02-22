import { Component, OnInit } from '@angular/core';
import {IWord} from '../iword';
import {DictionaryService} from '../dictionary.service';

@Component({
  selector: 'app-dictinary-page',
  templateUrl: './dictinary-page.component.html',
  styleUrls: ['./dictinary-page.component.css']
})
export class DictinaryPageComponent implements OnInit {
  listWord: Array<IWord>;
  constructor(private dictionaryService: DictionaryService) {
    this.listWord = dictionaryService.getListWord();
  }

  ngOnInit(): void {
  }

}
