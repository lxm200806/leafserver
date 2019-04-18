var ST = {};


ST.UserInfo = function(){
    this.UserID = 0;
    this.PlayerID = 0;
    this.NickName = '';
    this.Money = 0;
};

ST.GamerInfo = function(){
    ST.UserInfo.call(this);
    this.SeatID = 0xff;
    this.Ready = false;
}



