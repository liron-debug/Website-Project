import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creat-account-dialog',
  templateUrl: './creat-account-dialog.component.html',
  styleUrls: ['./creat-account-dialog.component.css']
})
export class CreatAccountDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreatAccountDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public userName: string,  private router: Router) { }

  ngOnInit() {
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onLogin(): void {
    this.dialogRef.close();
    this.router.navigate(['/acount']);
  }

}
