
window.G = {}

var AreaCode = require('AreaCode');
var UI_Event = require('UI_Event');
var Game_Event = require('Game_Event');
var Scene_Event = require('Scene_Event');
var Net_Event = require('Net_Event');

G.AreaCode = AreaCode;
G.UI_Event = UI_Event;
G.Game_Event = Game_Event;
G.Scene_Event = Scene_Event;
G.Net_Event = Net_Event;
cc.xf = {}
cc.xf.UI_Event = UI_Event;
cc.xf.Game_Event = Game_Event;
cc.xf.Scene_Event = Scene_Event;
cc.xf.Net_Event = Net_Event;

var SceneMsg = require('SceneMsg');
var SocketPackage = require('SocketPackage');

G.SceneMsg = SceneMsg;
G.SocketPackage = SocketPackage;

var protofiles = [
    "resources/proto/ChessOuterMessage.proto",
];

var XFInit = cc.Class({
    extends: require('CBase'),

    statics: {
        Instance: null,
    },

    XFInit() {
        XFInit.Instance = this;
		
		// let pbkiller = require('../../pbkiller/src/pbkiller');
        // pbkiller.root = 'proto';
        // G.PB =pbkiller.loadAll();
		
		
        G.UIManager = require('UIManager');
        G.GameManager = require('GameManager');
        G.SceneManager = require('SceneManager');
        G.NetManager = require('NetManager');

        cc.xf.netMgr = G.NetManager;
		
        this.node.addComponent(G.UIManager);
        this.node.addComponent(G.SceneManager);
        this.node.addComponent(G.NetManager);

        G.GameModel = require("GameModel");
        this.node.addComponent(G.GameModel);
        G.GameModel = G.GameModel.Instance;

        G.Opcode = require('ChessOuterOpcode');
        cc.xf.Opcode = G.Opcode;

        let protocol = require('protocol');
        cc.xf.msg = protocol.msg;
		
    },

    Dispatch: function(areaCode, eventCode, message){
        switch (areaCode) {
            case G.AreaCode.UI:
                G.UIManager.Instance.Execute(eventCode, message);
                break;
			case G.AreaCode.Game:
                G.GameManager.Instance.Execute(eventCode, message);
                break;	
            case G.AreaCode.Scene:
                G.SceneManager.Instance.Execute(eventCode, message);
                break;
            case G.AreaCode.Net:
                G.NetManager.Instance.Execute(eventCode, message);
                break;
            default:
                break;
        }
    }

});


cc.log("build XFInit successfull");