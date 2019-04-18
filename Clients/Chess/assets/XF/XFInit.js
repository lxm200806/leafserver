
window.G = {}

var AreaCode = require('AreaCode');
var Event_UI = require('Event_UI');
var Event_Scene = require('Event_Scene');

var SceneMsg = require('SceneMsg');
var SocketPackage = require('SocketPackage');

G.AreaCode = AreaCode;
G.Event_UI = Event_UI;
G.Event_Scene = Event_Scene;

G.SceneMsg = SceneMsg;
G.SocketPackage = SocketPackage;

var protofiles = [
    "resources/proto/ChessOuterMessage.proto",
];

var XFInit = cc.Class({
    extends: require('Base'),

    statics: {
        Instance: null,
    },

    Init: function () {
        XFInit.Instance = this;

        let pbkiller = require('../../pbkiller/src/pbkiller');
        pbkiller.root = 'proto';
        G.PB =pbkiller.loadAll();

        G.UIManager = require('UIManager');
        G.SceneManager = require('SceneManager');
        G.NetManager = require('NetManager');
        this.node.addComponent(G.UIManager);
        this.node.addComponent(G.SceneManager);
        this.node.addComponent(G.NetManager);

        G.GameModel = require("GameModel");
        this.node.addComponent(G.GameModel);
        G.GameModel = G.GameModel.Instance;

        G.Opcode = require('ChessOuterOpcode')
    },

    Dispatch: function(areaCode, eventCode, message){
        switch (areaCode) {
            case G.AreaCode.UI:
                G.UIManager.Instance.Execute(eventCode, message);
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