cc.Class({
    extends: require('UIBase'),

    properties: {
        regPanelPrefab: cc.Prefab,
    },

    XFInit() {
        this.InitData();

        this.BindUI(G.UI_Event.Canvas_ShowLogin);
        this.BindUI(G.UI_Event.Login_ShowRegPanel);
    },

    Execute(eventCode, message){
        switch (eventCode) {
            case G.UI_Event.Canvas_ShowLogin:
                this.ClosePanel(message);
                break;
            case G.UI_Event.Login_ShowRegPanel:
                this.On_Login_ShowRegPanel(message);
                break;
        
            default:
                break;
        }
    },

    InitData(){
        var children = this.node.children;
        children.forEach(element => {
            element.active = true;
        });

        this.m_PopNode = cc.find('PopNode', this.node);
    },

    On_Login_ShowRegPanel(message){
        if(message){
            var panel = this.GetInstantiate(this.regPanelPrefab);
            this.PopPanel(panel);
        }
    },


    PopPanel(panel){
        this.PopPanelWithTarget(panel, this.m_PopNode);
    }


});
