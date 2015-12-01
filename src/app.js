
var MenuLayer = cc.Layer.extend({
    ctor : function() {
        this._super();
    },
    init : function () {
        this._super();

        var winSize = cc.director.getWinSize();
        var centerPos = cc.p(winSize.width / 2, winSize.height / 2);
        var spriteBg = new cc.Sprite(res.helloBG_png);
        spriteBg.setPositionX(centerPos);
        this.addChild(spriteBg);

        cc.MenuItemFont.setFontSize(60);

        var menuItemPlay = new cc.MenuItemSprite(
            new cc.Sprite(res.start_n_png),
            new cc.Sprite(res.start_s_png),
            this.onPlay(),
            this
        );

        var menu = cc.Menu.create(menuItemPlay);
        menu.setPosition(centerPos);
        this.addChild(menu);
    },
    onPlay : function() {
        cc.log("==onPlay Clicked");
        cc.director.runScene(new PlayScene());
    }
});

var MenuScene = cc.Scene.extend({
    onEnter:function() {
        this._super();
        var layer = new MenuLayer();
        layer.init();
        this.addChild(layer);
    }
});

