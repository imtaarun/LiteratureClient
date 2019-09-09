import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from 'src/app/shared/service/home-service.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Turn } from 'src/app/shared/dto/turn-dto';
import * as io from 'socket.io-client';
import { Deal } from "src/app/shared/dto/deal-dto";
import { Router } from "@angular/router";

@Component({
  selector: 'app-game-dashboard',
  templateUrl: './game-dashboard.component.html',
  styleUrls: ['./game-dashboard.component.css']
})
export class GameDashboardComponent implements OnInit {
  init = false;
  gameData: any;
  userid: number;
  turn: Turn;
  even: any;   // score
  odd: any;    // score
  message: any;
  deal = false;
  dealItems = [];
  playersTurn = [];
  playerName = '';
  playerCards = [];
  playerTurn = false;
  playerData: {
    id: 0;
    name: '';
    cards: [0];
    turn: false;
  };
  cards1 = [
    'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H9', 'H10', 'HK', 'HQ', 'HJ', 'HA'
  ];
  cards2 = [
    'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D9', 'D10', 'DK', 'DQ', 'DJ', 'DA'
  ];
  cards3 = [
    'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S9', 'S10', 'SK', 'SQ', 'SJ', 'SA'
  ];
  cards4 = [
    'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C9', 'C10', 'CK', 'CQ', 'CJ', 'CA'
  ];
  socket = io('http://localhost:3000');
  form = new FormGroup({
    card: new FormControl('', Validators.required),
    opponent: new FormControl('', Validators.required)
  });

  friendform = new FormGroup({
    card: new FormControl('', Validators.required),
    friend: new FormControl('', Validators.required)
  });

  constructor(
    private homeService: HomeServiceService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activeRoute.params.subscribe(params => {
      this.userid = params['id'];
    });
    this.socket.on('event', (data) => {
      this.message = data.msg;
      this.init = false;
      this.ngOnInit();
    });
  }

  fetchPlayerInfo(data) {
    if (this.userid == 1 ) {
      this.playerData = data.p1;
    } else if (this.userid == 2 ) {
      this.playerData = data.p2;
    } else if (this.userid == 3 ) {
      this.playerData = data.p3;
    } else if (this.userid == 4 ) {
      this.playerData = data.p4;
    } else if (this.userid == 5 ) {
      this.playerData = data.p5;
    } else if (this.userid == 6) {
      this.playerData = data.p6;
    } else {
      console.log('user not found');
    }
    this.playerCards = this.playerData.cards;
    this.playerName = this.playerData.name;
    this.playerTurn = this.playerData.turn;
    console.log(data);

  }

  fetchTurnInfo(data) {

    console.log(data.p1.turn);

    this.playersTurn[0] = data.p1.turn;
    this.playersTurn[1] = data.p2.turn;
    this.playersTurn[2] = data.p3.turn;
    this.playersTurn[3] = data.p4.turn;
    this.playersTurn[4] = data.p5.turn;
    this.playersTurn[5] = data.p6.turn;
    console.log(this.playersTurn);
  }

  fetchScore(data) {
    this.odd = data.points.team1;
    this.even = data.points.team2;
  }

  gameOver(data) {
    if (data.points.team1 + data.points.team2 == 8) {
      if (data.points.team1 > data.points.team2) {
        this.router.navigate([+this.userid + '/game/gameover/ODD']);
      } else {
        this.router.navigate([+this.userid + '/game/gameover/EVEN']);
      }
    }
  }

  ngOnInit() {
    this.homeService.getCards().subscribe(
      data => {
        this.gameData = data;
        this.deal = false;
        this.fetchPlayerInfo(data);
        this.fetchTurnInfo(data);
        this.fetchScore(data);
        this.gameOver(data);
        this.dealItems = [];
        this.init = true;
    });
  }

  askFriend() {
    this.homeService.askFriend(new Turn(this.friendform.value.card, this.friendform.value.friend, this.userid)).subscribe(
      data => {
        this.init = false;
        this.ngOnInit();
      }
    );
  }

  onSubmit() {
    this.homeService.performTurn(new Turn(this.form.value.card, this.form.value.opponent, this.userid)).subscribe(
      data => {
        this.init = false;
        this.ngOnInit();
      }
    );
  }

  makeDeal() {
    this.deal = true;
  }
  closeDeal() {
    this.deal = false;
    this.dealItems = [];
  }

  itemChecker(list, item) {
    for (const i in list) {
      if (list[i] == item) {
        return false;
      }
    }
    return true;
  }
  button(item: any) {
    if((this.deal) && (this.dealItems.length < 6) && (this.itemChecker(this.dealItems, item))) {
      this.dealItems.push(item);
    }
  }

  removingButton(item: any) {
    const index = this.dealItems.indexOf(item);
    if (index > -1) {
       this.dealItems.splice(index, 1);
    }
  }

  dealChecker() {
    this.homeService.deal(new Deal(this.dealItems, this.userid)).subscribe(
      data => {
        this.init = false;
        this.ngOnInit();
      }
    );
  }
}
