import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

import { environment } from 'src/environments/environment';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  private socket;

  constructor() { }

  connect(): Subject<MessageEvent> {
    this.socket = io('http://54.173.194.223:8080');

    // tslint:disable-next-line:prefer-const
    let observable = new Observable(observer => {
      this.socket.on('room', (data) => {
        console.log('recieved a message');
        observer.next(data);
      });
      return() => {
        this.socket.disconnect();
      };
    });

    // tslint:disable-next-line:prefer-const
    let observer = {
      // tslint:disable-next-line:ban-types
      next: (data: Object) => {
        this.socket.emit('room', JSON.stringify(data));
      }
    };
    return Subject.create(observer, observable);
  }
}
