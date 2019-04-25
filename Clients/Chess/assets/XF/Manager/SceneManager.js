var SceneManager = cc.Class({
    extends: require("ManagerBase"),

    Execute: function(eventCode, sceneMsg){
        switch (eventCode) {
            case G.Scene_Event.LOADING_SCENE:
                this.LoadingScene(sceneMsg);
                break;
            case G.Scene_Event.LOAD_SCENE_LOGIN:
                var msg = new SceneMsg('Login');
                this.Dispatch(G.AreaCode.Scene, G.Scene_Event.LOADING_SCENE, msg);
                break;
            case G.Scene_Event.LOAD_SCENE_MAIN:
                var msg = new SceneMsg('Main');
                this.Dispatch(G.AreaCode.Scene, G.Scene_Event.LOADING_SCENE, msg);
                break;
            case G.Scene_Event.LOAD_SCENE_FIGHT:
                var msg = new SceneMsg('Fight');
                this.Dispatch(G.AreaCode.Scene, G.Scene_Event.LOADING_SCENE, msg);
                break;
            default:
                break;
        }
    },

    XFInit() {
        G.SceneManager.Instance = this;

    },

    LoadingScene: function(sceneMsg){
        cc.director.preloadScene(sceneMsg.name, function(err){
            if(!err){
                cc.director.loadScene(sceneMsg.name, function(err){
                    sceneMsg.loaded(err);
                });
            }else{
                sceneMsg.loaded(err);
            }
        });
    },

});

module.exports = SceneManager;
