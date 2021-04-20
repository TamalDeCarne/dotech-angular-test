import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MatPaginator, MatTableDataSource, MAT_DIALOG_DATA } from '@angular/material';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';
import { ApiTestService } from 'src/app/services/api-test.service';

@Component({
  selector: 'app-users-modal',
  templateUrl: './users-modal.component.html',
  styleUrls: ['./users-modal.component.css']
})
export class UsersModalComponent implements OnInit {

  userData : User;
  postList: any = [];
  dataSource;

  @ViewChild(MatPaginator, {static: true}) paginator : MatPaginator;

  displayedColumns : string[] = [
    'title', 
    'body'];


  constructor(
    private api: ApiTestService,
    public dialog: MatDialog,
    private dialogRef: MatDialogRef<UsersModalComponent>, 
    @Inject(MAT_DIALOG_DATA) data
  ) { 
    this.userData = data
  }

  ngOnInit() {
    console.log(this.userData);
    this.loadPosts();
  }

  loadPosts(){
    return this.api.getRow<Post>(this.userData.id, 'posts?userId=').subscribe(
    (data) => {
      this.postList = data;
      this.dataSource = new MatTableDataSource<Post>(this.postList);
      this.dataSource.paginator = this.paginator;
    }
    )
  }

}
