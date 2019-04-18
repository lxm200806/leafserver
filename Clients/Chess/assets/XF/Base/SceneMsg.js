var SceneMsg = function(name, loaded){
    this.name = name;
    this.loaded = loaded;
}

SceneMsg.prototype = {
    Change(name, loaded) {
        this.name = name;
        this.loaded = loaded;
    },
}

module.exports = SceneMsg;
