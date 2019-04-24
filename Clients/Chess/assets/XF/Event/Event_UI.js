var Event_UI = cc.Enum({

    Event_None              : 0,

    Canvas_ShowLogin        : -1,
    Canvas_ShowMain        : -1,
    Canvas_ShowFight        : -1,
    
    Login_LoginLayer_Active      : -1, //设置开始面板的显示
    Login_ShowRegPanel     : -1, //设置注册面板的显示

    Main_CreateRoomButton_Active  : -1,
    Main_BackRoomButton_Active   : -1,

    Fight_ShowMatchingPanel      : -1,
    Fight_ShowReadyPanel         : -1,
    Fight_ShowGrabLandlordPanel  : -1,

    Fight_ResetGameStartUI      : -1,
    Fight_ResetTurn             : -1,

    SHOW_MAIN_TOP_HUB       : -1,
    ROOM_PANEL_ACTIVE       : -1, //创建房间面板



    SHOW_MAIN_INFO_HUB      : -1, //

    SHOW_PLAYER_PANEL       : -1,

    SHOW_QUICKMATCH_PANEL   : -1,


    //Fight
    ShowSelf                : -1,                 
    ENTER_ROOM              : -1,
    OUT_ROOM                : -1,
    READY                   : -1,

    _Actor_GamerEnterRoom_Ntt               : -1,
    _Actor_GamersInRoom_Ntt                 : -1,
    _Actor_GamerExitRoom_Ntt                : -1,
    _Actor_GamerReconnect_Ntt               : -1,
    _Actor_GameStart_Ntt                    : -1,
    _Actor_GamerReady_Ntt                   : -1,
    _Actor_AuthorityGrabLandlord_Ntt        : -1,
    _Actor_GamerGrabLandlordSelect_Ntt      : -1,
    _Actor_AuthorityPlayCard_Ntt            : -1,
    _Actor_SetMultiples_Ntt                 : -1,
    _Actor_SetLandlord_Ntt                  : -1,
    _Actor_Gameover_Ntt                     : -1,


    
    TIP_BAR            : 99998,
    PROMPT_MSG              : 99999,
})
module.exports = Event_UI; 