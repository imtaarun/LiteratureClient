import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebServerConnectService } from 'src/app/shared/service/web-server-connect.service';
import * as io from 'socket.io-client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-room',
  templateUrl: './game-room.component.html',
  styleUrls: ['./game-room.component.css']
})
export class GameRoomComponent implements OnInit {
  userid: string;
  playerId: string;
  firtTime = true;
  socket = io('http://localhost:3000');

  constructor(
    private activeRoute: ActivatedRoute,
    private roomService: WebServerConnectService,
    private router: Router
  ) {
      this.activeRoute.params.subscribe(params => {this.userid = params['id'];
    });
  }


  ngOnInit() {
  }

  join() {
    this.socket.emit('room', this.userid);
    this.socket.on('room', (data) => {
      console.log('recieved a message --> ' + data.number);
      if (this.firtTime) {
        this.playerId = data.number;
        this.firtTime = false;
      }
    });
    this.socket.on('start', (data) => {
      // shuffle  -----  to be done
      if (data.bool) {
        this.router.navigate(['/' + this.playerId + '/game']);
      }
    });
  }
}
