import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/user-management/user-management.component';
import { UserService } from 'src/app/user.service';
import { UtilsService } from 'src/app/utils.service';

@Component({
  selector: 'app-assigned-tag',
  templateUrl: './assigned-tag.component.html',
  styleUrls: ['./assigned-tag.component.scss'],
})
export class AssignedTagComponent implements OnInit {
  @Input() name: string;
  @Input() coursePath: string;
  @Input() fullsize: string;

  public assignedUser: User;
  public searchText: string;

  private showModal = false;
  public showingList: boolean = false;

  public unassignedBackground = 'rgb(0,0,0)';
  public unassignedColour = 'rgb(255,255,255)'

  users;
  listShow: User[];

  constructor(private http: HttpClient, private utils: UtilsService) {}

  ngOnInit(): void {
    this.http.get('http://localhost:8080/users').subscribe((data) => {
      this.users = data;
      this.users = this.users.users;
      this.listShow = this.users;

      this.users.forEach((user: User) => {
        if (user.name == this.name) {
          this.assignedUser = user;
        }
      });
    });
  }

  setAssigned(event) {
    this.name = event.target.outerText;
    this.users.forEach((user: User) => {
      if (user.name == this.name) {
        this.assignedUser = user;
      }
    });

    const formData: FormData = new FormData();

    formData.append('username', this.assignedUser.name);
    formData.append('coursePath', this.coursePath);

    this.http
      .post('http://localhost:8080/assignee', formData)
      .subscribe((data) => {});
  }

  filterList() {
    this.listShow = [];
    this.users.forEach((user: User) => {
      if (this.utils.contains(user.name, this.searchText)) {
        this.listShow.push(user);
      }
    });
  }

  showList() {
    this.showingList = true;
  }
  hideList() {
    this.showingList = false;
  }
}
