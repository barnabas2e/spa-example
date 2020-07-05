
import { Component, OnInit } from '@angular/core';
import { ContentService } from '../shared/services/content.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  page: Object;

  constructor(
    private contentService: ContentService,
    private route: ActivatedRoute
    ) { }
  
  ngOnInit(): void {
    const pageData = this.route.snapshot.data['page'];
    this.page = this.contentService.pages[pageData];
  }
}
