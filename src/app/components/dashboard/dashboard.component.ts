import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public ipAddress = '';
  public responseJSON = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  sendRequest(): void {
    if (this.ipAddress) {
      this.http.get<any>('http://' + this.ipAddress + '/inno-stable-ng').subscribe(
        (res) => {
          this.responseJSON = res;
        },
        (error) => {
          console.error('Error retrieving data:', error);
        }
      );
    }
  }

  btnDisabled(): boolean {
    return this.ipAddress.length < 7;
  }

}
