import { APIconnectService } from './../apiconnect.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  listData = [];
  displayedColumns: string[] = ['FoodName', 'Comment', 'Action'];
  dataSource = [];
  constructor(private api: APIconnectService) {}

  ngOnInit(): void {
    this.api.getFood().subscribe((res: any) => {
      console.log(res);
      this.listData = res;
      this.dataSource = this.listData;
    });
  }

  actEdit(i, id) {
    console.log(i);
    i.foodName = prompt('Enter new food name :', i.foodName);
    i.comment = prompt('Enter new comment :', i.comment);
    this.api.editFood(i, id).subscribe(
      (res: any) => {
        alert('Update Success');
      },
      (error) => {
        console.error(error);
      }
    );
  }

  actDelete(i, id) {
    console.log(i);
    this.listData.splice(i, 1);
    this.api.deleteFood(i, id).subscribe(() => {
      alert('Delete Success');
      this.api.getFood().subscribe((res: any) => {
        console.log(res);
        this.listData = res;
        this.dataSource = this.listData;
      });
    });
  }
}
