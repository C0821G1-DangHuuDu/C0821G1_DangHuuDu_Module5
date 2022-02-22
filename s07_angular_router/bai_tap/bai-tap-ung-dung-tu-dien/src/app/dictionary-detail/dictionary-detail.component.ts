import { Component, OnInit } from '@angular/core';
import {DictionaryService} from '../dictionary.service';
import {ActivatedRoute} from '@angular/router';
import {IWord} from '../iword';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {

  wordDetail: IWord;

  constructor(private dictionaryService: DictionaryService,
              private activatedRoute: ActivatedRoute) {
    const wordFind = this.activatedRoute.snapshot.params.word;
    this.wordDetail = this.dictionaryService.findByWord(wordFind);
  }

  ngOnInit(): void {
  }

}
