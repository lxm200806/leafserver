
cc.Class({
    extends: require('UIBase'),

    properties: {
        loginPrefab: cc.Prefab,
        mainPrefab: cc.Prefab,
        fightPrefab: cc.Prefab,
    },

    XFInit(){
        this.InitData();

        this.BindUI(G.UI_Event.Canvas_ShowLogin);
        this.BindUI(G.UI_Event.Canvas_ShowMain);
        this.BindUI(G.UI_Event.Canvas_ShowFight);
    },

    Execute(eventCode, message){
        switch (eventCode) {
            case G.UI_Event.Canvas_ShowLogin:
                this.On_Canvas_ShowLogin(message);
                break;
            case G.UI_Event.Canvas_ShowMain:
                this.On_Canvas_ShowMain(message);
                break;
            case G.UI_Event.Canvas_ShowFight:
                this.On_Canvas_ShowFight(message);
                break;
            default:
                break;
        }
    },

    InitData(){
        this.m_LoginCanvas = cc.find('LoginCanvas', this.node);
        this.m_LoginCanvas.isFind = true;
        this.m_MainCanvas = cc.find('MainCanvas', this.node);
        this.m_MainCanvas.isFind = true;
        this.m_FightCanvas = cc.find('FightCanvas', this.node);
        this.m_FightCanvas.isFind = true;
    },

    On_Canvas_ShowLogin(message){
        if(message){
            var panel = this.GetInstantiate(this.loginPrefab);
            this.PopPanelWithTarget(panel, this.m_LoginCanvas);
        }
    },

    On_Canvas_ShowMain(message){
        if(message){
            var panel = this.GetInstantiate(this.mainPrefab);
            this.PopPanelWithTarget(panel, this.m_MainCanvas);
        }
    },

    On_Canvas_ShowFight(message){
        if(message){
            var panel = this.GetInstantiate(this.fightPrefab);
            this.PopPanelWithTarget(panel, this.m_FightCanvas);
        }
    },



});
