

var Enums = {};

Enums.RoomState = cc.Enum({
    None            : 0,
    Idle            : -1,
    Ready           : -1,
    Palying        : -1,
    Over            : -1,
});

Enums.GameState = cc.Enum({
    None            : 0,
    Idle            : -1,
    Ready           : -1,
    Palying        : -1,
    Over            : -1,
});

Enums.SeatState = cc.Enum({
    None        : 0,
    Idle        : -1,
    Ready       : -1,
    Palying     : -1,
})



module.exports = Enums;