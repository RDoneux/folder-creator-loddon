import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/utils.service';

@Component({
  selector: 'app-deadline-interface',
  templateUrl: './deadline-interface.component.html',
  styleUrls: ['./deadline-interface.component.scss'],
})
export class DeadlineInterfaceComponent implements OnInit {
  @Input() deadline: string;
  @Input() path: string;

  public formattedDate: string;

  constructor(private utils: UtilsService, private http: HttpClient) {}

  ngOnInit(): void {
    this.formattedDate = this.utils.reverseDate(
      this.utils.replaceAll(this.deadline, ['/'], '-')
    );
  }

  handleDateChange() {
    const formData: FormData = new FormData();

    formData.append('date', this.formattedDate);
    formData.append('path', this.path);

    this.http
      .post('http://localhost:8080/updateDate', formData)
      .subscribe((data) => {});
  }
}
