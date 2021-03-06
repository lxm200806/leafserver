cc.Class({
    extends: require('UIBase'),

    properties: {
        matchingPanelPrefab: cc.Prefab,
        readyPanelPrefab: cc.Prefab,
        grabLandlordPrefab: cc.Prefab,
    },

    XFInit() {
        this.InitData();

        this.BindUI(G.UI_Event.Canvas_ShowFight);
        this.BindUI(G.UI_Event.Fight_ShowMatchingPanel);
        this.BindUI(G.UI_Event.Fight_ShowReadyPanel);
        this.BindUI(G.UI_Event.Fight_ShowGrabLandlordPanel);
    },

    Execute(eventCode, message){
        switch (eventCode) {
            case G.UI_Event.Canvas_ShowFight:
                this.ClosePanel(message);
                break;
            case G.UI_Event.Fight_ShowMatchingPanel:
                this.ShowPanelWithMessage(this.matchingPanelPrefab, message)
            break;
            case G.UI_Event.Fight_ShowReadyPanel:
                this.ShowPanelWithMessage(this.readyPanelPrefab, message)
                break;
            case G.UI_Event.Fight_ShowGrabLandlordPanel:
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
