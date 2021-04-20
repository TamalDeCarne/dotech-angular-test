import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatTableDataSource } from '@angular/material';
import { User } from 'src/app/models/user';
import { ApiTestService } from 'src/app/services/api-test.service';
import { UsersModalComponent } from '../users-modal/users-modal.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userList: any = [];

  displayedColumns : string[] = [
    'username', 'email', 'phone', 'website', 'acciones'
  ]

  dataSource;

  constructor(private api: ApiTestService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers(){
    return this.api.getRows<User>('users').subscribe(
      (data: {}) => {
        this.userList = data;
        this.dataSource = new MatTableDataSource<User>(this.userList);
      }
    )
  }

  seeUser(user){
    const dialogconfig = new MatDialogConfig();
    dialogconfig.data = user;

    const dialogRef = this.dialog.open(UsersModalComponent, dialogconfig);
  }

}
