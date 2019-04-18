cc.Class({
    extends: require('UIBase'),

    properties: {
    },

    Init: function () {
        this.InitData();

        this.Bind(G.Event_UI.Canvas_ShowMain);
    },

    Execute(eventCode, message){
        switch (eventCode) {
            case G.Event_UI.Canvas_ShowMain:
                this.ClosePanel(message);
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

    PopPanel(panel){
        this.PopPanelWithTarget(panel, this.m_PopNode);
    }


});
