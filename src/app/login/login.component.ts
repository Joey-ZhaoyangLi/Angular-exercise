import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = { username: '', password: '', remember: false };

  constructor(public dialogRef: MatDialogRef<LoginComponent>) { }

  onSubmit() {
    console.log('User: ', this.user);
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
