import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent implements OnInit {
  users;

  userName: string;

  displayModal: boolean;

  constructor(private http: HttpClient) {
    this.getUsers();
  }

  ngOnInit(): void {}

  getUsers() {
    this.http.get('http://localhost:8080/users').subscribe((data) => {
      this.users = data;
      const usersData: User[] = this.users.users;
      this.users = usersData;
    });
  }

  addUser() {
    var formData: FormData = new FormData();

    formData.append('name', this.userName);

    this.http
      .post('http://localhost:8080/addUser', formData)
      .subscribe((data) => {});

    this.closeModal();
    window.location.reload();
  }

  closeModal() {
    this.displayModal = false;
  }

  showModal() {
    this.displayModal = true;
  }
}

export interface User {
  name: string;
  colour: string;
  initials: string;
}
