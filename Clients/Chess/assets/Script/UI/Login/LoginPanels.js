cc.Class({
    extends: require('UIBase'),

    properties: {
        regPanelPrefab: cc.Prefab,
    },

    Init: function () {
        this.InitData();

        this.Bind(G.Event_UI.Canvas_ShowLogin);
        this.Bind(G.Event_UI.Login_ShowRegPanel);
    },

    Execute(eventCode, message){
        switch (eventCode) {
            case G.Event_UI.Canvas_ShowLogin:
                this.ClosePanel(message);
                break;
            case G.Event_UI.Login_ShowRegPanel:
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
