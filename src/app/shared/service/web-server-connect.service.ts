import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { WebSocketService } from 'src/app/shared/service/web-socket.service';
@Injectable({
  providedIn: 'root'
})
export class WebServerConnectService {

  messages: Subject<any>;
  playerId: any;
  constructor(
    private wsService: WebSocketService
  ) {
    // tslint:disable-next-line:no-angle-bracket-type-assertion
    // this.playerId = <Subject<any>> wsService
    // .connect();
  }

  joinRoom(room) {
    this.messages.next(room);
  }
}
