cc.Class({
    extends: require('UIBase'),

    properties: {
        matchingPanelPrefab: cc.Prefab,
        readyPanelPrefab: cc.Prefab,
        grabLandlordPrefab: cc.Prefab,
    },

    Init: function () {
        this.InitData();

        this.Bind(G.Event_UI.Canvas_ShowFight);
        this.Bind(G.Event_UI.Fight_ShowMatchingPanel);
        this.Bind(G.Event_UI.Fight_ShowReadyPanel);
        this.Bind(G.Event_UI.Fight_ShowGrabLandlordPanel);
    },

    Execute(eventCode, message){
        switch (eventCode) {
            case G.Event_UI.Canvas_ShowFight:
                this.ClosePanel(message);
                break;
            case G.Event_UI.Fight_ShowMatchingPanel:
                this.ShowPanelWithMessage(this.matchingPanelPrefab, message)
            break;
            case G.Event_UI.Fight_ShowReadyPanel:
                this.ShowPanelWithMessage(this.readyPanelPrefab, message)
                break;
            case G.Event_UI.Fight_ShowGrabLandlordPanel:
                this.ShowPanelWithMessage(this.grabLandlordPrefab, message);
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

    ShowPanelWithMessage(prefab, message){
        if(message){
            var panel = this.GetInstantiate(prefab);
            this.PopPanel(panel);
        }
    },

    PopPanel(panel){
        this.PopPanelWithTarget(panel, this.m_PopNode);
    }


});
