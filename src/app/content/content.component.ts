import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, OnDestroy {
  private foo: any;

  constructor(private http: HttpClient) {
    console.log('constructed');
  }

  async ngOnInit() {
    this.foo = await this.http.get('https://raw.githubusercontent.com/json-iterator/test-data/master/large-file.json').toPromise();
    console.log('inited');
  }

  ngOnDestroy() {
    console.log('destroyed');
  }
}
