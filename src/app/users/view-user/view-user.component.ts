import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  userId !:number;
  userDetails : any ; 

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {
    
   }

  ngOnInit(): void {
    this.userId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.userId);
    this.userService.viewUser(this.userId).subscribe(Data =>{ this.userDetails=Data })
  }

}
