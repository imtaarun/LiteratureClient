export class Turn {
    selectedCard: any;
    selectedOpponent: any;
    playerId: any;

    constructor(card, oppo, player) {
        this.selectedCard = card;
        this.selectedOpponent = oppo;
        this.playerId = player;
    }
}
