import { Injectable } from '@angular/core';
import {IWord} from './iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor() { }
  public listWords: Array<IWord>;
  getListWord(): IWord[]{
    this.listWords = [
    {word: 'one', mean: 'một'},
    {word: 'two', mean: 'hai'},
    {word: 'three', mean: 'ba'},
    {word: 'four', mean: 'bốn'},
    {word: 'five', mean: 'năm'},
    {word: 'six', mean: 'sáu'},
    {word: 'seven', mean: 'bảy'},
  ];
    return this.listWords;
  }
  findByWord(wordFind: string): IWord{
    return this.getListWord().find(word => word.word === wordFind);
  }
}
