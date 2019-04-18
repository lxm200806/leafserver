cc.Class({
    extends: cc.Component,
    
    Init(){
        console.error('Init must emplated:' + this.name);
    },

    Execute(eventCode, message){
        console.error('Execute must emplated:' + this.name);
    },

    Dispatch(areaCode, eventCode, message){
        console.error('Dispatch must emplated:' + this.name);
    },
    
    //////////////////////////////////
    ////系统方法不能被子类覆盖
    /////////////////////////////////
    onLoad(){
        this.Init();
    },

    onDestroy(){

    }
});
