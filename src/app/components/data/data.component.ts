import { Component, OnInit } from '@angular/core';
import { PostServiceService } from 'src/app/services/post-service.service';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent implements OnInit {
  data: any;
  constructor(private postData: PostServiceService) {}

  ngOnInit(): void {
    this.postData.getPosts().subscribe((resualt) => {
      console.log('resualt', resualt);
      this.data = resualt;
    });
  }
}
