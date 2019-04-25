/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.msg = (function() {

    /**
     * Namespace msg.
     * @exports msg
     * @namespace
     */
    var msg = {};

    /**
     * CSuits enum.
     * @name msg.CSuits
     * @enum {string}
     * @property {number} CSuits_NULL=0 CSuits_NULL value
     * @property {number} Club=1 Club value
     * @property {number} Diamond=2 Diamond value
     * @property {number} Heart=3 Heart value
     * @property {number} Spad=4 Spad value
     */
    msg.CSuits = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "CSuits_NULL"] = 0;
        values[valuesById[1] = "Club"] = 1;
        values[valuesById[2] = "Diamond"] = 2;
        values[valuesById[3] = "Heart"] = 3;
        values[valuesById[4] = "Spad"] = 4;
        return values;
    })();

    /**
     * CWeight enum.
     * @name msg.CWeight
     * @enum {string}
     * @property {number} CWeight_NULl=0 CWeight_NULl value
     * @property {number} Three=3 Three value
     * @property {number} Four=4 Four value
     * @property {number} Five=5 Five value
     * @property {number} Six=6 Six value
     * @property {number} Seven=7 Seven value
     * @property {number} Eight=8 Eight value
     * @property {number} Nine=9 Nine value
     * @property {number} Ten=10 Ten value
     * @property {number} Jack=11 Jack value
     * @property {number} Queen=12 Queen value
     * @property {number} King=13 King value
     * @property {number} One=14 One value
     * @property {number} Two=15 Two value
     * @property {number} SJoker=16 SJoker value
     * @property {number} LJoker=17 LJoker value
     */
    msg.CWeight = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "CWeight_NULl"] = 0;
        values[valuesById[3] = "Three"] = 3;
        values[valuesById[4] = "Four"] = 4;
        values[valuesById[5] = "Five"] = 5;
        values[valuesById[6] = "Six"] = 6;
        values[valuesById[7] = "Seven"] = 7;
        values[valuesById[8] = "Eight"] = 8;
        values[valuesById[9] = "Nine"] = 9;
        values[valuesById[10] = "Ten"] = 10;
        values[valuesById[11] = "Jack"] = 11;
        values[valuesById[12] = "Queen"] = 12;
        values[valuesById[13] = "King"] = 13;
        values[valuesById[14] = "One"] = 14;
        values[valuesById[15] = "Two"] = 15;
        values[valuesById[16] = "SJoker"] = 16;
        values[valuesById[17] = "LJoker"] = 17;
        return values;
    })();

    msg.CCard = (function() {

        /**
         * Properties of a CCard.
         * @memberof msg
         * @interface ICCard
         * @property {msg.CWeight|null} [CardWeight] CCard CardWeight
         * @property {msg.CSuits|null} [CardSuits] CCard CardSuits
         */

        /**
         * Constructs a new CCard.
         * @memberof msg
         * @classdesc Represents a CCard.
         * @implements ICCard
         * @constructor
         * @param {msg.ICCard=} [properties] Properties to set
         */
        function CCard(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CCard CardWeight.
         * @member {msg.CWeight} CardWeight
         * @memberof msg.CCard
         * @instance
         */
        CCard.prototype.CardWeight = 0;

        /**
         * CCard CardSuits.
         * @member {msg.CSuits} CardSuits
         * @memberof msg.CCard
         * @instance
         */
        CCard.prototype.CardSuits = 0;

        /**
         * Creates a new CCard instance using the specified properties.
         * @function create
         * @memberof msg.CCard
         * @static
         * @param {msg.ICCard=} [properties] Properties to set
         * @returns {msg.CCard} CCard instance
         */
        CCard.create = function create(properties) {
            return new CCard(properties);
        };

        /**
         * Encodes the specified CCard message. Does not implicitly {@link msg.CCard.verify|verify} messages.
         * @function encode
         * @memberof msg.CCard
         * @static
         * @param {msg.ICCard} message CCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.CardWeight != null && message.hasOwnProperty("CardWeight"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.CardWeight);
            if (message.CardSuits != null && message.hasOwnProperty("CardSuits"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.CardSuits);
            return writer;
        };

        /**
         * Encodes the specified CCard message, length delimited. Does not implicitly {@link msg.CCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.CCard
         * @static
         * @param {msg.ICCard} message CCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CCard message from the specified reader or buffer.
         * @function decode
         * @memberof msg.CCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.CCard} CCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.CCard();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.CardWeight = reader.int32();
                    break;
                case 2:
                    message.CardSuits = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.CCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.CCard} CCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CCard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CCard message.
         * @function verify
         * @memberof msg.CCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CCard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.CardWeight != null && message.hasOwnProperty("CardWeight"))
                switch (message.CardWeight) {
                default:
                    return "CardWeight: enum value expected";
                case 0:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                    break;
                }
            if (message.CardSuits != null && message.hasOwnProperty("CardSuits"))
                switch (message.CardSuits) {
                default:
                    return "CardSuits: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            return null;
        };

        /**
         * Creates a CCard message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.CCard
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.CCard} CCard
         */
        CCard.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.CCard)
                return object;
            var message = new $root.msg.CCard();
            switch (object.CardWeight) {
            case "CWeight_NULl":
            case 0:
                message.CardWeight = 0;
                break;
            case "Three":
            case 3:
                message.CardWeight = 3;
                break;
            case "Four":
            case 4:
                message.CardWeight = 4;
                break;
            case "Five":
            case 5:
                message.CardWeight = 5;
                break;
            case "Six":
            case 6:
                message.CardWeight = 6;
                break;
            case "Seven":
            case 7:
                message.CardWeight = 7;
                break;
            case "Eight":
            case 8:
                message.CardWeight = 8;
                break;
            case "Nine":
            case 9:
                message.CardWeight = 9;
                break;
            case "Ten":
            case 10:
                message.CardWeight = 10;
                break;
            case "Jack":
            case 11:
                message.CardWeight = 11;
                break;
            case "Queen":
            case 12:
                message.CardWeight = 12;
                break;
            case "King":
            case 13:
                message.CardWeight = 13;
                break;
            case "One":
            case 14:
                message.CardWeight = 14;
                break;
            case "Two":
            case 15:
                message.CardWeight = 15;
                break;
            case "SJoker":
            case 16:
                message.CardWeight = 16;
                break;
            case "LJoker":
            case 17:
                message.CardWeight = 17;
                break;
            }
            switch (object.CardSuits) {
            case "CSuits_NULL":
            case 0:
                message.CardSuits = 0;
                break;
            case "Club":
            case 1:
                message.CardSuits = 1;
                break;
            case "Diamond":
            case 2:
                message.CardSuits = 2;
                break;
            case "Heart":
            case 3:
                message.CardSuits = 3;
                break;
            case "Spad":
            case 4:
                message.CardSuits = 4;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a CCard message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.CCard
         * @static
         * @param {msg.CCard} message CCard
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CCard.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.CardWeight = options.enums === String ? "CWeight_NULl" : 0;
                object.CardSuits = options.enums === String ? "CSuits_NULL" : 0;
            }
            if (message.CardWeight != null && message.hasOwnProperty("CardWeight"))
                object.CardWeight = options.enums === String ? $root.msg.CWeight[message.CardWeight] : message.CardWeight;
            if (message.CardSuits != null && message.hasOwnProperty("CardSuits"))
                object.CardSuits = options.enums === String ? $root.msg.CSuits[message.CardSuits] : message.CardSuits;
            return object;
        };

        /**
         * Converts this CCard to JSON.
         * @function toJSON
         * @memberof msg.CCard
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CCard.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CCard;
    })();

    /**
     * CIdentity enum.
     * @name msg.CIdentity
     * @enum {string}
     * @property {number} CIdentity_NULL=0 CIdentity_NULL value
     * @property {number} Farmer=1 Farmer value
     * @property {number} Landlord=2 Landlord value
     */
    msg.CIdentity = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "CIdentity_NULL"] = 0;
        values[valuesById[1] = "Farmer"] = 1;
        values[valuesById[2] = "Landlord"] = 2;
        return values;
    })();

    msg.C2R_Login_Req = (function() {

        /**
         * Properties of a C2R_Login_Req.
         * @memberof msg
         * @interface IC2R_Login_Req
         * @property {string|null} [Account] C2R_Login_Req Account
         * @property {string|null} [Password] C2R_Login_Req Password
         */

        /**
         * Constructs a new C2R_Login_Req.
         * @memberof msg
         * @classdesc Represents a C2R_Login_Req.
         * @implements IC2R_Login_Req
         * @constructor
         * @param {msg.IC2R_Login_Req=} [properties] Properties to set
         */
        function C2R_Login_Req(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C2R_Login_Req Account.
         * @member {string} Account
         * @memberof msg.C2R_Login_Req
         * @instance
         */
        C2R_Login_Req.prototype.Account = "";

        /**
         * C2R_Login_Req Password.
         * @member {string} Password
         * @memberof msg.C2R_Login_Req
         * @instance
         */
        C2R_Login_Req.prototype.Password = "";

        /**
         * Creates a new C2R_Login_Req instance using the specified properties.
         * @function create
         * @memberof msg.C2R_Login_Req
         * @static
         * @param {msg.IC2R_Login_Req=} [properties] Properties to set
         * @returns {msg.C2R_Login_Req} C2R_Login_Req instance
         */
        C2R_Login_Req.create = function create(properties) {
            return new C2R_Login_Req(properties);
        };

        /**
         * Encodes the specified C2R_Login_Req message. Does not implicitly {@link msg.C2R_Login_Req.verify|verify} messages.
         * @function encode
         * @memberof msg.C2R_Login_Req
         * @static
         * @param {msg.IC2R_Login_Req} message C2R_Login_Req message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2R_Login_Req.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Account != null && message.hasOwnProperty("Account"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Account);
            if (message.Password != null && message.hasOwnProperty("Password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Password);
            return writer;
        };

        /**
         * Encodes the specified C2R_Login_Req message, length delimited. Does not implicitly {@link msg.C2R_Login_Req.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.C2R_Login_Req
         * @static
         * @param {msg.IC2R_Login_Req} message C2R_Login_Req message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2R_Login_Req.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2R_Login_Req message from the specified reader or buffer.
         * @function decode
         * @memberof msg.C2R_Login_Req
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.C2R_Login_Req} C2R_Login_Req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2R_Login_Req.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.C2R_Login_Req();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Account = reader.string();
                    break;
                case 2:
                    message.Password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a C2R_Login_Req message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.C2R_Login_Req
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.C2R_Login_Req} C2R_Login_Req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2R_Login_Req.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2R_Login_Req message.
         * @function verify
         * @memberof msg.C2R_Login_Req
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2R_Login_Req.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Account != null && message.hasOwnProperty("Account"))
                if (!$util.isString(message.Account))
                    return "Account: string expected";
            if (message.Password != null && message.hasOwnProperty("Password"))
                if (!$util.isString(message.Password))
                    return "Password: string expected";
            return null;
        };

        /**
         * Creates a C2R_Login_Req message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.C2R_Login_Req
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.C2R_Login_Req} C2R_Login_Req
         */
        C2R_Login_Req.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.C2R_Login_Req)
                return object;
            var message = new $root.msg.C2R_Login_Req();
            if (object.Account != null)
                message.Account = String(object.Account);
            if (object.Password != null)
                message.Password = String(object.Password);
            return message;
        };

        /**
         * Creates a plain object from a C2R_Login_Req message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.C2R_Login_Req
         * @static
         * @param {msg.C2R_Login_Req} message C2R_Login_Req
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        C2R_Login_Req.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Account = "";
                object.Password = "";
            }
            if (message.Account != null && message.hasOwnProperty("Account"))
                object.Account = message.Account;
            if (message.Password != null && message.hasOwnProperty("Password"))
                object.Password = message.Password;
            return object;
        };

        /**
         * Converts this C2R_Login_Req to JSON.
         * @function toJSON
         * @memberof msg.C2R_Login_Req
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        C2R_Login_Req.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C2R_Login_Req;
    })();

    msg.R2C_Login_Ack = (function() {

        /**
         * Properties of a R2C_Login_Ack.
         * @memberof msg
         * @interface IR2C_Login_Ack
         * @property {number|null} [Error] R2C_Login_Ack Error
         * @property {string|null} [Message] R2C_Login_Ack Message
         * @property {number|Long|null} [Key] R2C_Login_Ack Key
         * @property {string|null} [Address] R2C_Login_Ack Address
         */

        /**
         * Constructs a new R2C_Login_Ack.
         * @memberof msg
         * @classdesc Represents a R2C_Login_Ack.
         * @implements IR2C_Login_Ack
         * @constructor
         * @param {msg.IR2C_Login_Ack=} [properties] Properties to set
         */
        function R2C_Login_Ack(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * R2C_Login_Ack Error.
         * @member {number} Error
         * @memberof msg.R2C_Login_Ack
         * @instance
         */
        R2C_Login_Ack.prototype.Error = 0;

        /**
         * R2C_Login_Ack Message.
         * @member {string} Message
         * @memberof msg.R2C_Login_Ack
         * @instance
         */
        R2C_Login_Ack.prototype.Message = "";

        /**
         * R2C_Login_Ack Key.
         * @member {number|Long} Key
         * @memberof msg.R2C_Login_Ack
         * @instance
         */
        R2C_Login_Ack.prototype.Key = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * R2C_Login_Ack Address.
         * @member {string} Address
         * @memberof msg.R2C_Login_Ack
         * @instance
         */
        R2C_Login_Ack.prototype.Address = "";

        /**
         * Creates a new R2C_Login_Ack instance using the specified properties.
         * @function create
         * @memberof msg.R2C_Login_Ack
         * @static
         * @param {msg.IR2C_Login_Ack=} [properties] Properties to set
         * @returns {msg.R2C_Login_Ack} R2C_Login_Ack instance
         */
        R2C_Login_Ack.create = function create(properties) {
            return new R2C_Login_Ack(properties);
        };

        /**
         * Encodes the specified R2C_Login_Ack message. Does not implicitly {@link msg.R2C_Login_Ack.verify|verify} messages.
         * @function encode
         * @memberof msg.R2C_Login_Ack
         * @static
         * @param {msg.IR2C_Login_Ack} message R2C_Login_Ack message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        R2C_Login_Ack.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Key != null && message.hasOwnProperty("Key"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.Key);
            if (message.Address != null && message.hasOwnProperty("Address"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Address);
            if (message.Error != null && message.hasOwnProperty("Error"))
                writer.uint32(/* id 90, wireType 0 =*/720).int32(message.Error);
            if (message.Message != null && message.hasOwnProperty("Message"))
                writer.uint32(/* id 91, wireType 2 =*/730).string(message.Message);
            return writer;
        };

        /**
         * Encodes the specified R2C_Login_Ack message, length delimited. Does not implicitly {@link msg.R2C_Login_Ack.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.R2C_Login_Ack
         * @static
         * @param {msg.IR2C_Login_Ack} message R2C_Login_Ack message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        R2C_Login_Ack.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a R2C_Login_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof msg.R2C_Login_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.R2C_Login_Ack} R2C_Login_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        R2C_Login_Ack.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.R2C_Login_Ack();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 90:
                    message.Error = reader.int32();
                    break;
                case 91:
                    message.Message = reader.string();
                    break;
                case 1:
                    message.Key = reader.int64();
                    break;
                case 2:
                    message.Address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a R2C_Login_Ack message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.R2C_Login_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.R2C_Login_Ack} R2C_Login_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        R2C_Login_Ack.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a R2C_Login_Ack message.
         * @function verify
         * @memberof msg.R2C_Login_Ack
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        R2C_Login_Ack.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Error != null && message.hasOwnProperty("Error"))
                if (!$util.isInteger(message.Error))
                    return "Error: integer expected";
            if (message.Message != null && message.hasOwnProperty("Message"))
                if (!$util.isString(message.Message))
                    return "Message: string expected";
            if (message.Key != null && message.hasOwnProperty("Key"))
                if (!$util.isInteger(message.Key) && !(message.Key && $util.isInteger(message.Key.low) && $util.isInteger(message.Key.high)))
                    return "Key: integer|Long expected";
            if (message.Address != null && message.hasOwnProperty("Address"))
                if (!$util.isString(message.Address))
                    return "Address: string expected";
            return null;
        };

        /**
         * Creates a R2C_Login_Ack message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.R2C_Login_Ack
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.R2C_Login_Ack} R2C_Login_Ack
         */
        R2C_Login_Ack.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.R2C_Login_Ack)
                return object;
            var message = new $root.msg.R2C_Login_Ack();
            if (object.Error != null)
                message.Error = object.Error | 0;
            if (object.Message != null)
                message.Message = String(object.Message);
            if (object.Key != null)
                if ($util.Long)
                    (message.Key = $util.Long.fromValue(object.Key)).unsigned = false;
                else if (typeof object.Key === "string")
                    message.Key = parseInt(object.Key, 10);
                else if (typeof object.Key === "number")
                    message.Key = object.Key;
                else if (typeof object.Key === "object")
                    message.Key = new $util.LongBits(object.Key.low >>> 0, object.Key.high >>> 0).toNumber();
            if (object.Address != null)
                message.Address = String(object.Address);
            return message;
        };

        /**
         * Creates a plain object from a R2C_Login_Ack message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.R2C_Login_Ack
         * @static
         * @param {msg.R2C_Login_Ack} message R2C_Login_Ack
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        R2C_Login_Ack.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Key = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Key = options.longs === String ? "0" : 0;
                object.Address = "";
                object.Error = 0;
                object.Message = "";
            }
            if (message.Key != null && message.hasOwnProperty("Key"))
                if (typeof message.Key === "number")
                    object.Key = options.longs === String ? String(message.Key) : message.Key;
                else
                    object.Key = options.longs === String ? $util.Long.prototype.toString.call(message.Key) : options.longs === Number ? new $util.LongBits(message.Key.low >>> 0, message.Key.high >>> 0).toNumber() : message.Key;
            if (message.Address != null && message.hasOwnProperty("Address"))
                object.Address = message.Address;
            if (message.Error != null && message.hasOwnProperty("Error"))
                object.Error = message.Error;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            return object;
        };

        /**
         * Converts this R2C_Login_Ack to JSON.
         * @function toJSON
         * @memberof msg.R2C_Login_Ack
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        R2C_Login_Ack.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return R2C_Login_Ack;
    })();

    msg.C2R_Register_Req = (function() {

        /**
         * Properties of a C2R_Register_Req.
         * @memberof msg
         * @interface IC2R_Register_Req
         * @property {string|null} [Account] C2R_Register_Req Account
         * @property {string|null} [Password] C2R_Register_Req Password
         */

        /**
         * Constructs a new C2R_Register_Req.
         * @memberof msg
         * @classdesc Represents a C2R_Register_Req.
         * @implements IC2R_Register_Req
         * @constructor
         * @param {msg.IC2R_Register_Req=} [properties] Properties to set
         */
        function C2R_Register_Req(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C2R_Register_Req Account.
         * @member {string} Account
         * @memberof msg.C2R_Register_Req
         * @instance
         */
        C2R_Register_Req.prototype.Account = "";

        /**
         * C2R_Register_Req Password.
         * @member {string} Password
         * @memberof msg.C2R_Register_Req
         * @instance
         */
        C2R_Register_Req.prototype.Password = "";

        /**
         * Creates a new C2R_Register_Req instance using the specified properties.
         * @function create
         * @memberof msg.C2R_Register_Req
         * @static
         * @param {msg.IC2R_Register_Req=} [properties] Properties to set
         * @returns {msg.C2R_Register_Req} C2R_Register_Req instance
         */
        C2R_Register_Req.create = function create(properties) {
            return new C2R_Register_Req(properties);
        };

        /**
         * Encodes the specified C2R_Register_Req message. Does not implicitly {@link msg.C2R_Register_Req.verify|verify} messages.
         * @function encode
         * @memberof msg.C2R_Register_Req
         * @static
         * @param {msg.IC2R_Register_Req} message C2R_Register_Req message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2R_Register_Req.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Account != null && message.hasOwnProperty("Account"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Account);
            if (message.Password != null && message.hasOwnProperty("Password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Password);
            return writer;
        };

        /**
         * Encodes the specified C2R_Register_Req message, length delimited. Does not implicitly {@link msg.C2R_Register_Req.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.C2R_Register_Req
         * @static
         * @param {msg.IC2R_Register_Req} message C2R_Register_Req message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2R_Register_Req.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2R_Register_Req message from the specified reader or buffer.
         * @function decode
         * @memberof msg.C2R_Register_Req
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.C2R_Register_Req} C2R_Register_Req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2R_Register_Req.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.C2R_Register_Req();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Account = reader.string();
                    break;
                case 2:
                    message.Password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a C2R_Register_Req message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.C2R_Register_Req
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.C2R_Register_Req} C2R_Register_Req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2R_Register_Req.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2R_Register_Req message.
         * @function verify
         * @memberof msg.C2R_Register_Req
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2R_Register_Req.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Account != null && message.hasOwnProperty("Account"))
                if (!$util.isString(message.Account))
                    return "Account: string expected";
            if (message.Password != null && message.hasOwnProperty("Password"))
                if (!$util.isString(message.Password))
                    return "Password: string expected";
            return null;
        };

        /**
         * Creates a C2R_Register_Req message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.C2R_Register_Req
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.C2R_Register_Req} C2R_Register_Req
         */
        C2R_Register_Req.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.C2R_Register_Req)
                return object;
            var message = new $root.msg.C2R_Register_Req();
            if (object.Account != null)
                message.Account = String(object.Account);
            if (object.Password != null)
                message.Password = String(object.Password);
            return message;
        };

        /**
         * Creates a plain object from a C2R_Register_Req message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.C2R_Register_Req
         * @static
         * @param {msg.C2R_Register_Req} message C2R_Register_Req
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        C2R_Register_Req.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Account = "";
                object.Password = "";
            }
            if (message.Account != null && message.hasOwnProperty("Account"))
                object.Account = message.Account;
            if (message.Password != null && message.hasOwnProperty("Password"))
                object.Password = message.Password;
            return object;
        };

        /**
         * Converts this C2R_Register_Req to JSON.
         * @function toJSON
         * @memberof msg.C2R_Register_Req
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        C2R_Register_Req.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C2R_Register_Req;
    })();

    msg.R2C_Register_Ack = (function() {

        /**
         * Properties of a R2C_Register_Ack.
         * @memberof msg
         * @interface IR2C_Register_Ack
         * @property {number|null} [Error] R2C_Register_Ack Error
         * @property {string|null} [Message] R2C_Register_Ack Message
         */

        /**
         * Constructs a new R2C_Register_Ack.
         * @memberof msg
         * @classdesc Represents a R2C_Register_Ack.
         * @implements IR2C_Register_Ack
         * @constructor
         * @param {msg.IR2C_Register_Ack=} [properties] Properties to set
         */
        function R2C_Register_Ack(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * R2C_Register_Ack Error.
         * @member {number} Error
         * @memberof msg.R2C_Register_Ack
         * @instance
         */
        R2C_Register_Ack.prototype.Error = 0;

        /**
         * R2C_Register_Ack Message.
         * @member {string} Message
         * @memberof msg.R2C_Register_Ack
         * @instance
         */
        R2C_Register_Ack.prototype.Message = "";

        /**
         * Creates a new R2C_Register_Ack instance using the specified properties.
         * @function create
         * @memberof msg.R2C_Register_Ack
         * @static
         * @param {msg.IR2C_Register_Ack=} [properties] Properties to set
         * @returns {msg.R2C_Register_Ack} R2C_Register_Ack instance
         */
        R2C_Register_Ack.create = function create(properties) {
            return new R2C_Register_Ack(properties);
        };

        /**
         * Encodes the specified R2C_Register_Ack message. Does not implicitly {@link msg.R2C_Register_Ack.verify|verify} messages.
         * @function encode
         * @memberof msg.R2C_Register_Ack
         * @static
         * @param {msg.IR2C_Register_Ack} message R2C_Register_Ack message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        R2C_Register_Ack.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Error != null && message.hasOwnProperty("Error"))
                writer.uint32(/* id 90, wireType 0 =*/720).int32(message.Error);
            if (message.Message != null && message.hasOwnProperty("Message"))
                writer.uint32(/* id 91, wireType 2 =*/730).string(message.Message);
            return writer;
        };

        /**
         * Encodes the specified R2C_Register_Ack message, length delimited. Does not implicitly {@link msg.R2C_Register_Ack.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.R2C_Register_Ack
         * @static
         * @param {msg.IR2C_Register_Ack} message R2C_Register_Ack message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        R2C_Register_Ack.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a R2C_Register_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof msg.R2C_Register_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.R2C_Register_Ack} R2C_Register_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        R2C_Register_Ack.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.R2C_Register_Ack();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 90:
                    message.Error = reader.int32();
                    break;
                case 91:
                    message.Message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a R2C_Register_Ack message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.R2C_Register_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.R2C_Register_Ack} R2C_Register_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        R2C_Register_Ack.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a R2C_Register_Ack message.
         * @function verify
         * @memberof msg.R2C_Register_Ack
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        R2C_Register_Ack.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Error != null && message.hasOwnProperty("Error"))
                if (!$util.isInteger(message.Error))
                    return "Error: integer expected";
            if (message.Message != null && message.hasOwnProperty("Message"))
                if (!$util.isString(message.Message))
                    return "Message: string expected";
            return null;
        };

        /**
         * Creates a R2C_Register_Ack message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.R2C_Register_Ack
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.R2C_Register_Ack} R2C_Register_Ack
         */
        R2C_Register_Ack.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.R2C_Register_Ack)
                return object;
            var message = new $root.msg.R2C_Register_Ack();
            if (object.Error != null)
                message.Error = object.Error | 0;
            if (object.Message != null)
                message.Message = String(object.Message);
            return message;
        };

        /**
         * Creates a plain object from a R2C_Register_Ack message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.R2C_Register_Ack
         * @static
         * @param {msg.R2C_Register_Ack} message R2C_Register_Ack
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        R2C_Register_Ack.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Error = 0;
                object.Message = "";
            }
            if (message.Error != null && message.hasOwnProperty("Error"))
                object.Error = message.Error;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            return object;
        };

        /**
         * Converts this R2C_Register_Ack to JSON.
         * @function toJSON
         * @memberof msg.R2C_Register_Ack
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        R2C_Register_Ack.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return R2C_Register_Ack;
    })();

    msg.C2G_LoginGate_Req = (function() {

        /**
         * Properties of a C2G_LoginGate_Req.
         * @memberof msg
         * @interface IC2G_LoginGate_Req
         * @property {number|Long|null} [Key] C2G_LoginGate_Req Key
         */

        /**
         * Constructs a new C2G_LoginGate_Req.
         * @memberof msg
         * @classdesc Represents a C2G_LoginGate_Req.
         * @implements IC2G_LoginGate_Req
         * @constructor
         * @param {msg.IC2G_LoginGate_Req=} [properties] Properties to set
         */
        function C2G_LoginGate_Req(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C2G_LoginGate_Req Key.
         * @member {number|Long} Key
         * @memberof msg.C2G_LoginGate_Req
         * @instance
         */
        C2G_LoginGate_Req.prototype.Key = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new C2G_LoginGate_Req instance using the specified properties.
         * @function create
         * @memberof msg.C2G_LoginGate_Req
         * @static
         * @param {msg.IC2G_LoginGate_Req=} [properties] Properties to set
         * @returns {msg.C2G_LoginGate_Req} C2G_LoginGate_Req instance
         */
        C2G_LoginGate_Req.create = function create(properties) {
            return new C2G_LoginGate_Req(properties);
        };

        /**
         * Encodes the specified C2G_LoginGate_Req message. Does not implicitly {@link msg.C2G_LoginGate_Req.verify|verify} messages.
         * @function encode
         * @memberof msg.C2G_LoginGate_Req
         * @static
         * @param {msg.IC2G_LoginGate_Req} message C2G_LoginGate_Req message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2G_LoginGate_Req.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Key != null && message.hasOwnProperty("Key"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.Key);
            return writer;
        };

        /**
         * Encodes the specified C2G_LoginGate_Req message, length delimited. Does not implicitly {@link msg.C2G_LoginGate_Req.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.C2G_LoginGate_Req
         * @static
         * @param {msg.IC2G_LoginGate_Req} message C2G_LoginGate_Req message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2G_LoginGate_Req.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2G_LoginGate_Req message from the specified reader or buffer.
         * @function decode
         * @memberof msg.C2G_LoginGate_Req
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.C2G_LoginGate_Req} C2G_LoginGate_Req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2G_LoginGate_Req.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.C2G_LoginGate_Req();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Key = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a C2G_LoginGate_Req message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.C2G_LoginGate_Req
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.C2G_LoginGate_Req} C2G_LoginGate_Req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2G_LoginGate_Req.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2G_LoginGate_Req message.
         * @function verify
         * @memberof msg.C2G_LoginGate_Req
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2G_LoginGate_Req.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Key != null && message.hasOwnProperty("Key"))
                if (!$util.isInteger(message.Key) && !(message.Key && $util.isInteger(message.Key.low) && $util.isInteger(message.Key.high)))
                    return "Key: integer|Long expected";
            return null;
        };

        /**
         * Creates a C2G_LoginGate_Req message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.C2G_LoginGate_Req
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.C2G_LoginGate_Req} C2G_LoginGate_Req
         */
        C2G_LoginGate_Req.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.C2G_LoginGate_Req)
                return object;
            var message = new $root.msg.C2G_LoginGate_Req();
            if (object.Key != null)
                if ($util.Long)
                    (message.Key = $util.Long.fromValue(object.Key)).unsigned = false;
                else if (typeof object.Key === "string")
                    message.Key = parseInt(object.Key, 10);
                else if (typeof object.Key === "number")
                    message.Key = object.Key;
                else if (typeof object.Key === "object")
                    message.Key = new $util.LongBits(object.Key.low >>> 0, object.Key.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a C2G_LoginGate_Req message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.C2G_LoginGate_Req
         * @static
         * @param {msg.C2G_LoginGate_Req} message C2G_LoginGate_Req
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        C2G_LoginGate_Req.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Key = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Key = options.longs === String ? "0" : 0;
            if (message.Key != null && message.hasOwnProperty("Key"))
                if (typeof message.Key === "number")
                    object.Key = options.longs === String ? String(message.Key) : message.Key;
                else
                    object.Key = options.longs === String ? $util.Long.prototype.toString.call(message.Key) : options.longs === Number ? new $util.LongBits(message.Key.low >>> 0, message.Key.high >>> 0).toNumber() : message.Key;
            return object;
        };

        /**
         * Converts this C2G_LoginGate_Req to JSON.
         * @function toJSON
         * @memberof msg.C2G_LoginGate_Req
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        C2G_LoginGate_Req.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C2G_LoginGate_Req;
    })();

    msg.G2C_LoginGate_Ack = (function() {

        /**
         * Properties of a G2C_LoginGate_Ack.
         * @memberof msg
         * @interface IG2C_LoginGate_Ack
         * @property {number|null} [Error] G2C_LoginGate_Ack Error
         * @property {string|null} [Message] G2C_LoginGate_Ack Message
         * @property {number|Long|null} [PlayerID] G2C_LoginGate_Ack PlayerID
         * @property {number|Long|null} [UserID] G2C_LoginGate_Ack UserID
         */

        /**
         * Constructs a new G2C_LoginGate_Ack.
         * @memberof msg
         * @classdesc Represents a G2C_LoginGate_Ack.
         * @implements IG2C_LoginGate_Ack
         * @constructor
         * @param {msg.IG2C_LoginGate_Ack=} [properties] Properties to set
         */
        function G2C_LoginGate_Ack(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * G2C_LoginGate_Ack Error.
         * @member {number} Error
         * @memberof msg.G2C_LoginGate_Ack
         * @instance
         */
        G2C_LoginGate_Ack.prototype.Error = 0;

        /**
         * G2C_LoginGate_Ack Message.
         * @member {string} Message
         * @memberof msg.G2C_LoginGate_Ack
         * @instance
         */
        G2C_LoginGate_Ack.prototype.Message = "";

        /**
         * G2C_LoginGate_Ack PlayerID.
         * @member {number|Long} PlayerID
         * @memberof msg.G2C_LoginGate_Ack
         * @instance
         */
        G2C_LoginGate_Ack.prototype.PlayerID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * G2C_LoginGate_Ack UserID.
         * @member {number|Long} UserID
         * @memberof msg.G2C_LoginGate_Ack
         * @instance
         */
        G2C_LoginGate_Ack.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new G2C_LoginGate_Ack instance using the specified properties.
         * @function create
         * @memberof msg.G2C_LoginGate_Ack
         * @static
         * @param {msg.IG2C_LoginGate_Ack=} [properties] Properties to set
         * @returns {msg.G2C_LoginGate_Ack} G2C_LoginGate_Ack instance
         */
        G2C_LoginGate_Ack.create = function create(properties) {
            return new G2C_LoginGate_Ack(properties);
        };

        /**
         * Encodes the specified G2C_LoginGate_Ack message. Does not implicitly {@link msg.G2C_LoginGate_Ack.verify|verify} messages.
         * @function encode
         * @memberof msg.G2C_LoginGate_Ack
         * @static
         * @param {msg.IG2C_LoginGate_Ack} message G2C_LoginGate_Ack message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        G2C_LoginGate_Ack.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.PlayerID != null && message.hasOwnProperty("PlayerID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.PlayerID);
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.UserID);
            if (message.Error != null && message.hasOwnProperty("Error"))
                writer.uint32(/* id 90, wireType 0 =*/720).int32(message.Error);
            if (message.Message != null && message.hasOwnProperty("Message"))
                writer.uint32(/* id 91, wireType 2 =*/730).string(message.Message);
            return writer;
        };

        /**
         * Encodes the specified G2C_LoginGate_Ack message, length delimited. Does not implicitly {@link msg.G2C_LoginGate_Ack.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.G2C_LoginGate_Ack
         * @static
         * @param {msg.IG2C_LoginGate_Ack} message G2C_LoginGate_Ack message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        G2C_LoginGate_Ack.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a G2C_LoginGate_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof msg.G2C_LoginGate_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.G2C_LoginGate_Ack} G2C_LoginGate_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        G2C_LoginGate_Ack.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.G2C_LoginGate_Ack();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 90:
                    message.Error = reader.int32();
                    break;
                case 91:
                    message.Message = reader.string();
                    break;
                case 1:
                    message.PlayerID = reader.int64();
                    break;
                case 2:
                    message.UserID = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a G2C_LoginGate_Ack message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.G2C_LoginGate_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.G2C_LoginGate_Ack} G2C_LoginGate_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        G2C_LoginGate_Ack.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a G2C_LoginGate_Ack message.
         * @function verify
         * @memberof msg.G2C_LoginGate_Ack
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        G2C_LoginGate_Ack.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Error != null && message.hasOwnProperty("Error"))
                if (!$util.isInteger(message.Error))
                    return "Error: integer expected";
            if (message.Message != null && message.hasOwnProperty("Message"))
                if (!$util.isString(message.Message))
                    return "Message: string expected";
            if (message.PlayerID != null && message.hasOwnProperty("PlayerID"))
                if (!$util.isInteger(message.PlayerID) && !(message.PlayerID && $util.isInteger(message.PlayerID.low) && $util.isInteger(message.PlayerID.high)))
                    return "PlayerID: integer|Long expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            return null;
        };

        /**
         * Creates a G2C_LoginGate_Ack message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.G2C_LoginGate_Ack
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.G2C_LoginGate_Ack} G2C_LoginGate_Ack
         */
        G2C_LoginGate_Ack.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.G2C_LoginGate_Ack)
                return object;
            var message = new $root.msg.G2C_LoginGate_Ack();
            if (object.Error != null)
                message.Error = object.Error | 0;
            if (object.Message != null)
                message.Message = String(object.Message);
            if (object.PlayerID != null)
                if ($util.Long)
                    (message.PlayerID = $util.Long.fromValue(object.PlayerID)).unsigned = false;
                else if (typeof object.PlayerID === "string")
                    message.PlayerID = parseInt(object.PlayerID, 10);
                else if (typeof object.PlayerID === "number")
                    message.PlayerID = object.PlayerID;
                else if (typeof object.PlayerID === "object")
                    message.PlayerID = new $util.LongBits(object.PlayerID.low >>> 0, object.PlayerID.high >>> 0).toNumber();
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = false;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a G2C_LoginGate_Ack message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.G2C_LoginGate_Ack
         * @static
         * @param {msg.G2C_LoginGate_Ack} message G2C_LoginGate_Ack
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        G2C_LoginGate_Ack.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.PlayerID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.PlayerID = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
                object.Error = 0;
                object.Message = "";
            }
            if (message.PlayerID != null && message.hasOwnProperty("PlayerID"))
                if (typeof message.PlayerID === "number")
                    object.PlayerID = options.longs === String ? String(message.PlayerID) : message.PlayerID;
                else
                    object.PlayerID = options.longs === String ? $util.Long.prototype.toString.call(message.PlayerID) : options.longs === Number ? new $util.LongBits(message.PlayerID.low >>> 0, message.PlayerID.high >>> 0).toNumber() : message.PlayerID;
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber() : message.UserID;
            if (message.Error != null && message.hasOwnProperty("Error"))
                object.Error = message.Error;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            return object;
        };

        /**
         * Converts this G2C_LoginGate_Ack to JSON.
         * @function toJSON
         * @memberof msg.G2C_LoginGate_Ack
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        G2C_LoginGate_Ack.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return G2C_LoginGate_Ack;
    })();

    msg.C2G_GetUserInfo_Req = (function() {

        /**
         * Properties of a C2G_GetUserInfo_Req.
         * @memberof msg
         * @interface IC2G_GetUserInfo_Req
         * @property {number|Long|null} [UserID] C2G_GetUserInfo_Req UserID
         */

        /**
         * Constructs a new C2G_GetUserInfo_Req.
         * @memberof msg
         * @classdesc Represents a C2G_GetUserInfo_Req.
         * @implements IC2G_GetUserInfo_Req
         * @constructor
         * @param {msg.IC2G_GetUserInfo_Req=} [properties] Properties to set
         */
        function C2G_GetUserInfo_Req(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C2G_GetUserInfo_Req UserID.
         * @member {number|Long} UserID
         * @memberof msg.C2G_GetUserInfo_Req
         * @instance
         */
        C2G_GetUserInfo_Req.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new C2G_GetUserInfo_Req instance using the specified properties.
         * @function create
         * @memberof msg.C2G_GetUserInfo_Req
         * @static
         * @param {msg.IC2G_GetUserInfo_Req=} [properties] Properties to set
         * @returns {msg.C2G_GetUserInfo_Req} C2G_GetUserInfo_Req instance
         */
        C2G_GetUserInfo_Req.create = function create(properties) {
            return new C2G_GetUserInfo_Req(properties);
        };

        /**
         * Encodes the specified C2G_GetUserInfo_Req message. Does not implicitly {@link msg.C2G_GetUserInfo_Req.verify|verify} messages.
         * @function encode
         * @memberof msg.C2G_GetUserInfo_Req
         * @static
         * @param {msg.IC2G_GetUserInfo_Req} message C2G_GetUserInfo_Req message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2G_GetUserInfo_Req.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.UserID);
            return writer;
        };

        /**
         * Encodes the specified C2G_GetUserInfo_Req message, length delimited. Does not implicitly {@link msg.C2G_GetUserInfo_Req.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.C2G_GetUserInfo_Req
         * @static
         * @param {msg.IC2G_GetUserInfo_Req} message C2G_GetUserInfo_Req message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2G_GetUserInfo_Req.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2G_GetUserInfo_Req message from the specified reader or buffer.
         * @function decode
         * @memberof msg.C2G_GetUserInfo_Req
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.C2G_GetUserInfo_Req} C2G_GetUserInfo_Req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2G_GetUserInfo_Req.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.C2G_GetUserInfo_Req();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a C2G_GetUserInfo_Req message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.C2G_GetUserInfo_Req
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.C2G_GetUserInfo_Req} C2G_GetUserInfo_Req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2G_GetUserInfo_Req.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2G_GetUserInfo_Req message.
         * @function verify
         * @memberof msg.C2G_GetUserInfo_Req
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2G_GetUserInfo_Req.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            return null;
        };

        /**
         * Creates a C2G_GetUserInfo_Req message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.C2G_GetUserInfo_Req
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.C2G_GetUserInfo_Req} C2G_GetUserInfo_Req
         */
        C2G_GetUserInfo_Req.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.C2G_GetUserInfo_Req)
                return object;
            var message = new $root.msg.C2G_GetUserInfo_Req();
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = false;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a C2G_GetUserInfo_Req message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.C2G_GetUserInfo_Req
         * @static
         * @param {msg.C2G_GetUserInfo_Req} message C2G_GetUserInfo_Req
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        C2G_GetUserInfo_Req.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber() : message.UserID;
            return object;
        };

        /**
         * Converts this C2G_GetUserInfo_Req to JSON.
         * @function toJSON
         * @memberof msg.C2G_GetUserInfo_Req
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        C2G_GetUserInfo_Req.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C2G_GetUserInfo_Req;
    })();

    msg.G2C_GetUserInfo_Ack = (function() {

        /**
         * Properties of a G2C_GetUserInfo_Ack.
         * @memberof msg
         * @interface IG2C_GetUserInfo_Ack
         * @property {number|null} [Error] G2C_GetUserInfo_Ack Error
         * @property {string|null} [Message] G2C_GetUserInfo_Ack Message
         * @property {string|null} [NickName] G2C_GetUserInfo_Ack NickName
         * @property {number|Long|null} [Money] G2C_GetUserInfo_Ack Money
         */

        /**
         * Constructs a new G2C_GetUserInfo_Ack.
         * @memberof msg
         * @classdesc Represents a G2C_GetUserInfo_Ack.
         * @implements IG2C_GetUserInfo_Ack
         * @constructor
         * @param {msg.IG2C_GetUserInfo_Ack=} [properties] Properties to set
         */
        function G2C_GetUserInfo_Ack(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * G2C_GetUserInfo_Ack Error.
         * @member {number} Error
         * @memberof msg.G2C_GetUserInfo_Ack
         * @instance
         */
        G2C_GetUserInfo_Ack.prototype.Error = 0;

        /**
         * G2C_GetUserInfo_Ack Message.
         * @member {string} Message
         * @memberof msg.G2C_GetUserInfo_Ack
         * @instance
         */
        G2C_GetUserInfo_Ack.prototype.Message = "";

        /**
         * G2C_GetUserInfo_Ack NickName.
         * @member {string} NickName
         * @memberof msg.G2C_GetUserInfo_Ack
         * @instance
         */
        G2C_GetUserInfo_Ack.prototype.NickName = "";

        /**
         * G2C_GetUserInfo_Ack Money.
         * @member {number|Long} Money
         * @memberof msg.G2C_GetUserInfo_Ack
         * @instance
         */
        G2C_GetUserInfo_Ack.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new G2C_GetUserInfo_Ack instance using the specified properties.
         * @function create
         * @memberof msg.G2C_GetUserInfo_Ack
         * @static
         * @param {msg.IG2C_GetUserInfo_Ack=} [properties] Properties to set
         * @returns {msg.G2C_GetUserInfo_Ack} G2C_GetUserInfo_Ack instance
         */
        G2C_GetUserInfo_Ack.create = function create(properties) {
            return new G2C_GetUserInfo_Ack(properties);
        };

        /**
         * Encodes the specified G2C_GetUserInfo_Ack message. Does not implicitly {@link msg.G2C_GetUserInfo_Ack.verify|verify} messages.
         * @function encode
         * @memberof msg.G2C_GetUserInfo_Ack
         * @static
         * @param {msg.IG2C_GetUserInfo_Ack} message G2C_GetUserInfo_Ack message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        G2C_GetUserInfo_Ack.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.NickName != null && message.hasOwnProperty("NickName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.NickName);
            if (message.Money != null && message.hasOwnProperty("Money"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.Money);
            if (message.Error != null && message.hasOwnProperty("Error"))
                writer.uint32(/* id 90, wireType 0 =*/720).int32(message.Error);
            if (message.Message != null && message.hasOwnProperty("Message"))
                writer.uint32(/* id 91, wireType 2 =*/730).string(message.Message);
            return writer;
        };

        /**
         * Encodes the specified G2C_GetUserInfo_Ack message, length delimited. Does not implicitly {@link msg.G2C_GetUserInfo_Ack.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.G2C_GetUserInfo_Ack
         * @static
         * @param {msg.IG2C_GetUserInfo_Ack} message G2C_GetUserInfo_Ack message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        G2C_GetUserInfo_Ack.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a G2C_GetUserInfo_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof msg.G2C_GetUserInfo_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.G2C_GetUserInfo_Ack} G2C_GetUserInfo_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        G2C_GetUserInfo_Ack.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.G2C_GetUserInfo_Ack();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 90:
                    message.Error = reader.int32();
                    break;
                case 91:
                    message.Message = reader.string();
                    break;
                case 1:
                    message.NickName = reader.string();
                    break;
                case 4:
                    message.Money = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a G2C_GetUserInfo_Ack message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.G2C_GetUserInfo_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.G2C_GetUserInfo_Ack} G2C_GetUserInfo_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        G2C_GetUserInfo_Ack.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a G2C_GetUserInfo_Ack message.
         * @function verify
         * @memberof msg.G2C_GetUserInfo_Ack
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        G2C_GetUserInfo_Ack.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Error != null && message.hasOwnProperty("Error"))
                if (!$util.isInteger(message.Error))
                    return "Error: integer expected";
            if (message.Message != null && message.hasOwnProperty("Message"))
                if (!$util.isString(message.Message))
                    return "Message: string expected";
            if (message.NickName != null && message.hasOwnProperty("NickName"))
                if (!$util.isString(message.NickName))
                    return "NickName: string expected";
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (!$util.isInteger(message.Money) && !(message.Money && $util.isInteger(message.Money.low) && $util.isInteger(message.Money.high)))
                    return "Money: integer|Long expected";
            return null;
        };

        /**
         * Creates a G2C_GetUserInfo_Ack message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.G2C_GetUserInfo_Ack
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.G2C_GetUserInfo_Ack} G2C_GetUserInfo_Ack
         */
        G2C_GetUserInfo_Ack.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.G2C_GetUserInfo_Ack)
                return object;
            var message = new $root.msg.G2C_GetUserInfo_Ack();
            if (object.Error != null)
                message.Error = object.Error | 0;
            if (object.Message != null)
                message.Message = String(object.Message);
            if (object.NickName != null)
                message.NickName = String(object.NickName);
            if (object.Money != null)
                if ($util.Long)
                    (message.Money = $util.Long.fromValue(object.Money)).unsigned = false;
                else if (typeof object.Money === "string")
                    message.Money = parseInt(object.Money, 10);
                else if (typeof object.Money === "number")
                    message.Money = object.Money;
                else if (typeof object.Money === "object")
                    message.Money = new $util.LongBits(object.Money.low >>> 0, object.Money.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a G2C_GetUserInfo_Ack message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.G2C_GetUserInfo_Ack
         * @static
         * @param {msg.G2C_GetUserInfo_Ack} message G2C_GetUserInfo_Ack
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        G2C_GetUserInfo_Ack.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.NickName = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Money = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Money = options.longs === String ? "0" : 0;
                object.Error = 0;
                object.Message = "";
            }
            if (message.NickName != null && message.hasOwnProperty("NickName"))
                object.NickName = message.NickName;
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (typeof message.Money === "number")
                    object.Money = options.longs === String ? String(message.Money) : message.Money;
                else
                    object.Money = options.longs === String ? $util.Long.prototype.toString.call(message.Money) : options.longs === Number ? new $util.LongBits(message.Money.low >>> 0, message.Money.high >>> 0).toNumber() : message.Money;
            if (message.Error != null && message.hasOwnProperty("Error"))
                object.Error = message.Error;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            return object;
        };

        /**
         * Converts this G2C_GetUserInfo_Ack to JSON.
         * @function toJSON
         * @memberof msg.G2C_GetUserInfo_Ack
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        G2C_GetUserInfo_Ack.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return G2C_GetUserInfo_Ack;
    })();

    msg.C2G_StartMatch_Req = (function() {

        /**
         * Properties of a C2G_StartMatch_Req.
         * @memberof msg
         * @interface IC2G_StartMatch_Req
         */

        /**
         * Constructs a new C2G_StartMatch_Req.
         * @memberof msg
         * @classdesc Represents a C2G_StartMatch_Req.
         * @implements IC2G_StartMatch_Req
         * @constructor
         * @param {msg.IC2G_StartMatch_Req=} [properties] Properties to set
         */
        function C2G_StartMatch_Req(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new C2G_StartMatch_Req instance using the specified properties.
         * @function create
         * @memberof msg.C2G_StartMatch_Req
         * @static
         * @param {msg.IC2G_StartMatch_Req=} [properties] Properties to set
         * @returns {msg.C2G_StartMatch_Req} C2G_StartMatch_Req instance
         */
        C2G_StartMatch_Req.create = function create(properties) {
            return new C2G_StartMatch_Req(properties);
        };

        /**
         * Encodes the specified C2G_StartMatch_Req message. Does not implicitly {@link msg.C2G_StartMatch_Req.verify|verify} messages.
         * @function encode
         * @memberof msg.C2G_StartMatch_Req
         * @static
         * @param {msg.IC2G_StartMatch_Req} message C2G_StartMatch_Req message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2G_StartMatch_Req.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified C2G_StartMatch_Req message, length delimited. Does not implicitly {@link msg.C2G_StartMatch_Req.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.C2G_StartMatch_Req
         * @static
         * @param {msg.IC2G_StartMatch_Req} message C2G_StartMatch_Req message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2G_StartMatch_Req.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2G_StartMatch_Req message from the specified reader or buffer.
         * @function decode
         * @memberof msg.C2G_StartMatch_Req
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.C2G_StartMatch_Req} C2G_StartMatch_Req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2G_StartMatch_Req.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.C2G_StartMatch_Req();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a C2G_StartMatch_Req message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.C2G_StartMatch_Req
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.C2G_StartMatch_Req} C2G_StartMatch_Req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2G_StartMatch_Req.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2G_StartMatch_Req message.
         * @function verify
         * @memberof msg.C2G_StartMatch_Req
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2G_StartMatch_Req.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a C2G_StartMatch_Req message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.C2G_StartMatch_Req
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.C2G_StartMatch_Req} C2G_StartMatch_Req
         */
        C2G_StartMatch_Req.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.C2G_StartMatch_Req)
                return object;
            return new $root.msg.C2G_StartMatch_Req();
        };

        /**
         * Creates a plain object from a C2G_StartMatch_Req message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.C2G_StartMatch_Req
         * @static
         * @param {msg.C2G_StartMatch_Req} message C2G_StartMatch_Req
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        C2G_StartMatch_Req.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this C2G_StartMatch_Req to JSON.
         * @function toJSON
         * @memberof msg.C2G_StartMatch_Req
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        C2G_StartMatch_Req.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C2G_StartMatch_Req;
    })();

    msg.G2C_StartMatch_Ack = (function() {

        /**
         * Properties of a G2C_StartMatch_Ack.
         * @memberof msg
         * @interface IG2C_StartMatch_Ack
         * @property {number|null} [Error] G2C_StartMatch_Ack Error
         * @property {string|null} [Message] G2C_StartMatch_Ack Message
         */

        /**
         * Constructs a new G2C_StartMatch_Ack.
         * @memberof msg
         * @classdesc Represents a G2C_StartMatch_Ack.
         * @implements IG2C_StartMatch_Ack
         * @constructor
         * @param {msg.IG2C_StartMatch_Ack=} [properties] Properties to set
         */
        function G2C_StartMatch_Ack(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * G2C_StartMatch_Ack Error.
         * @member {number} Error
         * @memberof msg.G2C_StartMatch_Ack
         * @instance
         */
        G2C_StartMatch_Ack.prototype.Error = 0;

        /**
         * G2C_StartMatch_Ack Message.
         * @member {string} Message
         * @memberof msg.G2C_StartMatch_Ack
         * @instance
         */
        G2C_StartMatch_Ack.prototype.Message = "";

        /**
         * Creates a new G2C_StartMatch_Ack instance using the specified properties.
         * @function create
         * @memberof msg.G2C_StartMatch_Ack
         * @static
         * @param {msg.IG2C_StartMatch_Ack=} [properties] Properties to set
         * @returns {msg.G2C_StartMatch_Ack} G2C_StartMatch_Ack instance
         */
        G2C_StartMatch_Ack.create = function create(properties) {
            return new G2C_StartMatch_Ack(properties);
        };

        /**
         * Encodes the specified G2C_StartMatch_Ack message. Does not implicitly {@link msg.G2C_StartMatch_Ack.verify|verify} messages.
         * @function encode
         * @memberof msg.G2C_StartMatch_Ack
         * @static
         * @param {msg.IG2C_StartMatch_Ack} message G2C_StartMatch_Ack message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        G2C_StartMatch_Ack.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Error != null && message.hasOwnProperty("Error"))
                writer.uint32(/* id 90, wireType 0 =*/720).int32(message.Error);
            if (message.Message != null && message.hasOwnProperty("Message"))
                writer.uint32(/* id 91, wireType 2 =*/730).string(message.Message);
            return writer;
        };

        /**
         * Encodes the specified G2C_StartMatch_Ack message, length delimited. Does not implicitly {@link msg.G2C_StartMatch_Ack.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.G2C_StartMatch_Ack
         * @static
         * @param {msg.IG2C_StartMatch_Ack} message G2C_StartMatch_Ack message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        G2C_StartMatch_Ack.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a G2C_StartMatch_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof msg.G2C_StartMatch_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.G2C_StartMatch_Ack} G2C_StartMatch_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        G2C_StartMatch_Ack.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.G2C_StartMatch_Ack();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 90:
                    message.Error = reader.int32();
                    break;
                case 91:
                    message.Message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a G2C_StartMatch_Ack message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.G2C_StartMatch_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.G2C_StartMatch_Ack} G2C_StartMatch_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        G2C_StartMatch_Ack.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a G2C_StartMatch_Ack message.
         * @function verify
         * @memberof msg.G2C_StartMatch_Ack
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        G2C_StartMatch_Ack.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Error != null && message.hasOwnProperty("Error"))
                if (!$util.isInteger(message.Error))
                    return "Error: integer expected";
            if (message.Message != null && message.hasOwnProperty("Message"))
                if (!$util.isString(message.Message))
                    return "Message: string expected";
            return null;
        };

        /**
         * Creates a G2C_StartMatch_Ack message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.G2C_StartMatch_Ack
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.G2C_StartMatch_Ack} G2C_StartMatch_Ack
         */
        G2C_StartMatch_Ack.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.G2C_StartMatch_Ack)
                return object;
            var message = new $root.msg.G2C_StartMatch_Ack();
            if (object.Error != null)
                message.Error = object.Error | 0;
            if (object.Message != null)
                message.Message = String(object.Message);
            return message;
        };

        /**
         * Creates a plain object from a G2C_StartMatch_Ack message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.G2C_StartMatch_Ack
         * @static
         * @param {msg.G2C_StartMatch_Ack} message G2C_StartMatch_Ack
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        G2C_StartMatch_Ack.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Error = 0;
                object.Message = "";
            }
            if (message.Error != null && message.hasOwnProperty("Error"))
                object.Error = message.Error;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            return object;
        };

        /**
         * Converts this G2C_StartMatch_Ack to JSON.
         * @function toJSON
         * @memberof msg.G2C_StartMatch_Ack
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        G2C_StartMatch_Ack.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return G2C_StartMatch_Ack;
    })();

    msg.C2G_ReturnLobby_Ntt = (function() {

        /**
         * Properties of a C2G_ReturnLobby_Ntt.
         * @memberof msg
         * @interface IC2G_ReturnLobby_Ntt
         */

        /**
         * Constructs a new C2G_ReturnLobby_Ntt.
         * @memberof msg
         * @classdesc Represents a C2G_ReturnLobby_Ntt.
         * @implements IC2G_ReturnLobby_Ntt
         * @constructor
         * @param {msg.IC2G_ReturnLobby_Ntt=} [properties] Properties to set
         */
        function C2G_ReturnLobby_Ntt(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new C2G_ReturnLobby_Ntt instance using the specified properties.
         * @function create
         * @memberof msg.C2G_ReturnLobby_Ntt
         * @static
         * @param {msg.IC2G_ReturnLobby_Ntt=} [properties] Properties to set
         * @returns {msg.C2G_ReturnLobby_Ntt} C2G_ReturnLobby_Ntt instance
         */
        C2G_ReturnLobby_Ntt.create = function create(properties) {
            return new C2G_ReturnLobby_Ntt(properties);
        };

        /**
         * Encodes the specified C2G_ReturnLobby_Ntt message. Does not implicitly {@link msg.C2G_ReturnLobby_Ntt.verify|verify} messages.
         * @function encode
         * @memberof msg.C2G_ReturnLobby_Ntt
         * @static
         * @param {msg.IC2G_ReturnLobby_Ntt} message C2G_ReturnLobby_Ntt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2G_ReturnLobby_Ntt.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified C2G_ReturnLobby_Ntt message, length delimited. Does not implicitly {@link msg.C2G_ReturnLobby_Ntt.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.C2G_ReturnLobby_Ntt
         * @static
         * @param {msg.IC2G_ReturnLobby_Ntt} message C2G_ReturnLobby_Ntt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2G_ReturnLobby_Ntt.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2G_ReturnLobby_Ntt message from the specified reader or buffer.
         * @function decode
         * @memberof msg.C2G_ReturnLobby_Ntt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.C2G_ReturnLobby_Ntt} C2G_ReturnLobby_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2G_ReturnLobby_Ntt.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.C2G_ReturnLobby_Ntt();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a C2G_ReturnLobby_Ntt message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.C2G_ReturnLobby_Ntt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.C2G_ReturnLobby_Ntt} C2G_ReturnLobby_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2G_ReturnLobby_Ntt.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2G_ReturnLobby_Ntt message.
         * @function verify
         * @memberof msg.C2G_ReturnLobby_Ntt
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2G_ReturnLobby_Ntt.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a C2G_ReturnLobby_Ntt message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.C2G_ReturnLobby_Ntt
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.C2G_ReturnLobby_Ntt} C2G_ReturnLobby_Ntt
         */
        C2G_ReturnLobby_Ntt.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.C2G_ReturnLobby_Ntt)
                return object;
            return new $root.msg.C2G_ReturnLobby_Ntt();
        };

        /**
         * Creates a plain object from a C2G_ReturnLobby_Ntt message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.C2G_ReturnLobby_Ntt
         * @static
         * @param {msg.C2G_ReturnLobby_Ntt} message C2G_ReturnLobby_Ntt
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        C2G_ReturnLobby_Ntt.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this C2G_ReturnLobby_Ntt to JSON.
         * @function toJSON
         * @memberof msg.C2G_ReturnLobby_Ntt
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        C2G_ReturnLobby_Ntt.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C2G_ReturnLobby_Ntt;
    })();

    msg.C2G_CreateRoom_Req = (function() {

        /**
         * Properties of a C2G_CreateRoom_Req.
         * @memberof msg
         * @interface IC2G_CreateRoom_Req
         * @property {number|null} [Error] C2G_CreateRoom_Req Error
         * @property {string|null} [Message] C2G_CreateRoom_Req Message
         * @property {number|Long|null} [UserID] C2G_CreateRoom_Req UserID
         */

        /**
         * Constructs a new C2G_CreateRoom_Req.
         * @memberof msg
         * @classdesc Represents a C2G_CreateRoom_Req.
         * @implements IC2G_CreateRoom_Req
         * @constructor
         * @param {msg.IC2G_CreateRoom_Req=} [properties] Properties to set
         */
        function C2G_CreateRoom_Req(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * C2G_CreateRoom_Req Error.
         * @member {number} Error
         * @memberof msg.C2G_CreateRoom_Req
         * @instance
         */
        C2G_CreateRoom_Req.prototype.Error = 0;

        /**
         * C2G_CreateRoom_Req Message.
         * @member {string} Message
         * @memberof msg.C2G_CreateRoom_Req
         * @instance
         */
        C2G_CreateRoom_Req.prototype.Message = "";

        /**
         * C2G_CreateRoom_Req UserID.
         * @member {number|Long} UserID
         * @memberof msg.C2G_CreateRoom_Req
         * @instance
         */
        C2G_CreateRoom_Req.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new C2G_CreateRoom_Req instance using the specified properties.
         * @function create
         * @memberof msg.C2G_CreateRoom_Req
         * @static
         * @param {msg.IC2G_CreateRoom_Req=} [properties] Properties to set
         * @returns {msg.C2G_CreateRoom_Req} C2G_CreateRoom_Req instance
         */
        C2G_CreateRoom_Req.create = function create(properties) {
            return new C2G_CreateRoom_Req(properties);
        };

        /**
         * Encodes the specified C2G_CreateRoom_Req message. Does not implicitly {@link msg.C2G_CreateRoom_Req.verify|verify} messages.
         * @function encode
         * @memberof msg.C2G_CreateRoom_Req
         * @static
         * @param {msg.IC2G_CreateRoom_Req} message C2G_CreateRoom_Req message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2G_CreateRoom_Req.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.UserID);
            if (message.Error != null && message.hasOwnProperty("Error"))
                writer.uint32(/* id 90, wireType 0 =*/720).int32(message.Error);
            if (message.Message != null && message.hasOwnProperty("Message"))
                writer.uint32(/* id 91, wireType 2 =*/730).string(message.Message);
            return writer;
        };

        /**
         * Encodes the specified C2G_CreateRoom_Req message, length delimited. Does not implicitly {@link msg.C2G_CreateRoom_Req.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.C2G_CreateRoom_Req
         * @static
         * @param {msg.IC2G_CreateRoom_Req} message C2G_CreateRoom_Req message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        C2G_CreateRoom_Req.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a C2G_CreateRoom_Req message from the specified reader or buffer.
         * @function decode
         * @memberof msg.C2G_CreateRoom_Req
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.C2G_CreateRoom_Req} C2G_CreateRoom_Req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2G_CreateRoom_Req.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.C2G_CreateRoom_Req();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 90:
                    message.Error = reader.int32();
                    break;
                case 91:
                    message.Message = reader.string();
                    break;
                case 1:
                    message.UserID = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a C2G_CreateRoom_Req message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.C2G_CreateRoom_Req
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.C2G_CreateRoom_Req} C2G_CreateRoom_Req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        C2G_CreateRoom_Req.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a C2G_CreateRoom_Req message.
         * @function verify
         * @memberof msg.C2G_CreateRoom_Req
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        C2G_CreateRoom_Req.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Error != null && message.hasOwnProperty("Error"))
                if (!$util.isInteger(message.Error))
                    return "Error: integer expected";
            if (message.Message != null && message.hasOwnProperty("Message"))
                if (!$util.isString(message.Message))
                    return "Message: string expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            return null;
        };

        /**
         * Creates a C2G_CreateRoom_Req message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.C2G_CreateRoom_Req
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.C2G_CreateRoom_Req} C2G_CreateRoom_Req
         */
        C2G_CreateRoom_Req.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.C2G_CreateRoom_Req)
                return object;
            var message = new $root.msg.C2G_CreateRoom_Req();
            if (object.Error != null)
                message.Error = object.Error | 0;
            if (object.Message != null)
                message.Message = String(object.Message);
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = false;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a C2G_CreateRoom_Req message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.C2G_CreateRoom_Req
         * @static
         * @param {msg.C2G_CreateRoom_Req} message C2G_CreateRoom_Req
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        C2G_CreateRoom_Req.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
                object.Error = 0;
                object.Message = "";
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber() : message.UserID;
            if (message.Error != null && message.hasOwnProperty("Error"))
                object.Error = message.Error;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            return object;
        };

        /**
         * Converts this C2G_CreateRoom_Req to JSON.
         * @function toJSON
         * @memberof msg.C2G_CreateRoom_Req
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        C2G_CreateRoom_Req.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return C2G_CreateRoom_Req;
    })();

    msg.G2C_CreateRoom_Ack = (function() {

        /**
         * Properties of a G2C_CreateRoom_Ack.
         * @memberof msg
         * @interface IG2C_CreateRoom_Ack
         */

        /**
         * Constructs a new G2C_CreateRoom_Ack.
         * @memberof msg
         * @classdesc Represents a G2C_CreateRoom_Ack.
         * @implements IG2C_CreateRoom_Ack
         * @constructor
         * @param {msg.IG2C_CreateRoom_Ack=} [properties] Properties to set
         */
        function G2C_CreateRoom_Ack(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new G2C_CreateRoom_Ack instance using the specified properties.
         * @function create
         * @memberof msg.G2C_CreateRoom_Ack
         * @static
         * @param {msg.IG2C_CreateRoom_Ack=} [properties] Properties to set
         * @returns {msg.G2C_CreateRoom_Ack} G2C_CreateRoom_Ack instance
         */
        G2C_CreateRoom_Ack.create = function create(properties) {
            return new G2C_CreateRoom_Ack(properties);
        };

        /**
         * Encodes the specified G2C_CreateRoom_Ack message. Does not implicitly {@link msg.G2C_CreateRoom_Ack.verify|verify} messages.
         * @function encode
         * @memberof msg.G2C_CreateRoom_Ack
         * @static
         * @param {msg.IG2C_CreateRoom_Ack} message G2C_CreateRoom_Ack message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        G2C_CreateRoom_Ack.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified G2C_CreateRoom_Ack message, length delimited. Does not implicitly {@link msg.G2C_CreateRoom_Ack.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.G2C_CreateRoom_Ack
         * @static
         * @param {msg.IG2C_CreateRoom_Ack} message G2C_CreateRoom_Ack message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        G2C_CreateRoom_Ack.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a G2C_CreateRoom_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof msg.G2C_CreateRoom_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.G2C_CreateRoom_Ack} G2C_CreateRoom_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        G2C_CreateRoom_Ack.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.G2C_CreateRoom_Ack();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a G2C_CreateRoom_Ack message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.G2C_CreateRoom_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.G2C_CreateRoom_Ack} G2C_CreateRoom_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        G2C_CreateRoom_Ack.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a G2C_CreateRoom_Ack message.
         * @function verify
         * @memberof msg.G2C_CreateRoom_Ack
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        G2C_CreateRoom_Ack.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a G2C_CreateRoom_Ack message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.G2C_CreateRoom_Ack
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.G2C_CreateRoom_Ack} G2C_CreateRoom_Ack
         */
        G2C_CreateRoom_Ack.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.G2C_CreateRoom_Ack)
                return object;
            return new $root.msg.G2C_CreateRoom_Ack();
        };

        /**
         * Creates a plain object from a G2C_CreateRoom_Ack message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.G2C_CreateRoom_Ack
         * @static
         * @param {msg.G2C_CreateRoom_Ack} message G2C_CreateRoom_Ack
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        G2C_CreateRoom_Ack.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this G2C_CreateRoom_Ack to JSON.
         * @function toJSON
         * @memberof msg.G2C_CreateRoom_Ack
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        G2C_CreateRoom_Ack.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return G2C_CreateRoom_Ack;
    })();

    msg.G2C_PlayerDisconnect_Ntt = (function() {

        /**
         * Properties of a G2C_PlayerDisconnect_Ntt.
         * @memberof msg
         * @interface IG2C_PlayerDisconnect_Ntt
         */

        /**
         * Constructs a new G2C_PlayerDisconnect_Ntt.
         * @memberof msg
         * @classdesc Represents a G2C_PlayerDisconnect_Ntt.
         * @implements IG2C_PlayerDisconnect_Ntt
         * @constructor
         * @param {msg.IG2C_PlayerDisconnect_Ntt=} [properties] Properties to set
         */
        function G2C_PlayerDisconnect_Ntt(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new G2C_PlayerDisconnect_Ntt instance using the specified properties.
         * @function create
         * @memberof msg.G2C_PlayerDisconnect_Ntt
         * @static
         * @param {msg.IG2C_PlayerDisconnect_Ntt=} [properties] Properties to set
         * @returns {msg.G2C_PlayerDisconnect_Ntt} G2C_PlayerDisconnect_Ntt instance
         */
        G2C_PlayerDisconnect_Ntt.create = function create(properties) {
            return new G2C_PlayerDisconnect_Ntt(properties);
        };

        /**
         * Encodes the specified G2C_PlayerDisconnect_Ntt message. Does not implicitly {@link msg.G2C_PlayerDisconnect_Ntt.verify|verify} messages.
         * @function encode
         * @memberof msg.G2C_PlayerDisconnect_Ntt
         * @static
         * @param {msg.IG2C_PlayerDisconnect_Ntt} message G2C_PlayerDisconnect_Ntt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        G2C_PlayerDisconnect_Ntt.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified G2C_PlayerDisconnect_Ntt message, length delimited. Does not implicitly {@link msg.G2C_PlayerDisconnect_Ntt.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.G2C_PlayerDisconnect_Ntt
         * @static
         * @param {msg.IG2C_PlayerDisconnect_Ntt} message G2C_PlayerDisconnect_Ntt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        G2C_PlayerDisconnect_Ntt.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a G2C_PlayerDisconnect_Ntt message from the specified reader or buffer.
         * @function decode
         * @memberof msg.G2C_PlayerDisconnect_Ntt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.G2C_PlayerDisconnect_Ntt} G2C_PlayerDisconnect_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        G2C_PlayerDisconnect_Ntt.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.G2C_PlayerDisconnect_Ntt();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a G2C_PlayerDisconnect_Ntt message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.G2C_PlayerDisconnect_Ntt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.G2C_PlayerDisconnect_Ntt} G2C_PlayerDisconnect_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        G2C_PlayerDisconnect_Ntt.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a G2C_PlayerDisconnect_Ntt message.
         * @function verify
         * @memberof msg.G2C_PlayerDisconnect_Ntt
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        G2C_PlayerDisconnect_Ntt.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a G2C_PlayerDisconnect_Ntt message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.G2C_PlayerDisconnect_Ntt
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.G2C_PlayerDisconnect_Ntt} G2C_PlayerDisconnect_Ntt
         */
        G2C_PlayerDisconnect_Ntt.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.G2C_PlayerDisconnect_Ntt)
                return object;
            return new $root.msg.G2C_PlayerDisconnect_Ntt();
        };

        /**
         * Creates a plain object from a G2C_PlayerDisconnect_Ntt message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.G2C_PlayerDisconnect_Ntt
         * @static
         * @param {msg.G2C_PlayerDisconnect_Ntt} message G2C_PlayerDisconnect_Ntt
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        G2C_PlayerDisconnect_Ntt.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this G2C_PlayerDisconnect_Ntt to JSON.
         * @function toJSON
         * @memberof msg.G2C_PlayerDisconnect_Ntt
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        G2C_PlayerDisconnect_Ntt.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return G2C_PlayerDisconnect_Ntt;
    })();

    msg.Actor_GamerReady_Ntt = (function() {

        /**
         * Properties of an Actor_GamerReady_Ntt.
         * @memberof msg
         * @interface IActor_GamerReady_Ntt
         * @property {number|Long|null} [UserID] Actor_GamerReady_Ntt UserID
         */

        /**
         * Constructs a new Actor_GamerReady_Ntt.
         * @memberof msg
         * @classdesc Represents an Actor_GamerReady_Ntt.
         * @implements IActor_GamerReady_Ntt
         * @constructor
         * @param {msg.IActor_GamerReady_Ntt=} [properties] Properties to set
         */
        function Actor_GamerReady_Ntt(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Actor_GamerReady_Ntt UserID.
         * @member {number|Long} UserID
         * @memberof msg.Actor_GamerReady_Ntt
         * @instance
         */
        Actor_GamerReady_Ntt.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Actor_GamerReady_Ntt instance using the specified properties.
         * @function create
         * @memberof msg.Actor_GamerReady_Ntt
         * @static
         * @param {msg.IActor_GamerReady_Ntt=} [properties] Properties to set
         * @returns {msg.Actor_GamerReady_Ntt} Actor_GamerReady_Ntt instance
         */
        Actor_GamerReady_Ntt.create = function create(properties) {
            return new Actor_GamerReady_Ntt(properties);
        };

        /**
         * Encodes the specified Actor_GamerReady_Ntt message. Does not implicitly {@link msg.Actor_GamerReady_Ntt.verify|verify} messages.
         * @function encode
         * @memberof msg.Actor_GamerReady_Ntt
         * @static
         * @param {msg.IActor_GamerReady_Ntt} message Actor_GamerReady_Ntt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Actor_GamerReady_Ntt.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.UserID);
            return writer;
        };

        /**
         * Encodes the specified Actor_GamerReady_Ntt message, length delimited. Does not implicitly {@link msg.Actor_GamerReady_Ntt.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.Actor_GamerReady_Ntt
         * @static
         * @param {msg.IActor_GamerReady_Ntt} message Actor_GamerReady_Ntt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Actor_GamerReady_Ntt.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Actor_GamerReady_Ntt message from the specified reader or buffer.
         * @function decode
         * @memberof msg.Actor_GamerReady_Ntt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.Actor_GamerReady_Ntt} Actor_GamerReady_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Actor_GamerReady_Ntt.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.Actor_GamerReady_Ntt();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Actor_GamerReady_Ntt message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.Actor_GamerReady_Ntt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.Actor_GamerReady_Ntt} Actor_GamerReady_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Actor_GamerReady_Ntt.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Actor_GamerReady_Ntt message.
         * @function verify
         * @memberof msg.Actor_GamerReady_Ntt
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Actor_GamerReady_Ntt.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            return null;
        };

        /**
         * Creates an Actor_GamerReady_Ntt message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.Actor_GamerReady_Ntt
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.Actor_GamerReady_Ntt} Actor_GamerReady_Ntt
         */
        Actor_GamerReady_Ntt.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.Actor_GamerReady_Ntt)
                return object;
            var message = new $root.msg.Actor_GamerReady_Ntt();
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = false;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an Actor_GamerReady_Ntt message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.Actor_GamerReady_Ntt
         * @static
         * @param {msg.Actor_GamerReady_Ntt} message Actor_GamerReady_Ntt
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Actor_GamerReady_Ntt.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber() : message.UserID;
            return object;
        };

        /**
         * Converts this Actor_GamerReady_Ntt to JSON.
         * @function toJSON
         * @memberof msg.Actor_GamerReady_Ntt
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Actor_GamerReady_Ntt.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Actor_GamerReady_Ntt;
    })();

    msg.Actor_GamerGrabLandlordSelect_Ntt = (function() {

        /**
         * Properties of an Actor_GamerGrabLandlordSelect_Ntt.
         * @memberof msg
         * @interface IActor_GamerGrabLandlordSelect_Ntt
         * @property {number|Long|null} [UserID] Actor_GamerGrabLandlordSelect_Ntt UserID
         * @property {boolean|null} [IsGrab] Actor_GamerGrabLandlordSelect_Ntt IsGrab
         */

        /**
         * Constructs a new Actor_GamerGrabLandlordSelect_Ntt.
         * @memberof msg
         * @classdesc Represents an Actor_GamerGrabLandlordSelect_Ntt.
         * @implements IActor_GamerGrabLandlordSelect_Ntt
         * @constructor
         * @param {msg.IActor_GamerGrabLandlordSelect_Ntt=} [properties] Properties to set
         */
        function Actor_GamerGrabLandlordSelect_Ntt(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Actor_GamerGrabLandlordSelect_Ntt UserID.
         * @member {number|Long} UserID
         * @memberof msg.Actor_GamerGrabLandlordSelect_Ntt
         * @instance
         */
        Actor_GamerGrabLandlordSelect_Ntt.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Actor_GamerGrabLandlordSelect_Ntt IsGrab.
         * @member {boolean} IsGrab
         * @memberof msg.Actor_GamerGrabLandlordSelect_Ntt
         * @instance
         */
        Actor_GamerGrabLandlordSelect_Ntt.prototype.IsGrab = false;

        /**
         * Creates a new Actor_GamerGrabLandlordSelect_Ntt instance using the specified properties.
         * @function create
         * @memberof msg.Actor_GamerGrabLandlordSelect_Ntt
         * @static
         * @param {msg.IActor_GamerGrabLandlordSelect_Ntt=} [properties] Properties to set
         * @returns {msg.Actor_GamerGrabLandlordSelect_Ntt} Actor_GamerGrabLandlordSelect_Ntt instance
         */
        Actor_GamerGrabLandlordSelect_Ntt.create = function create(properties) {
            return new Actor_GamerGrabLandlordSelect_Ntt(properties);
        };

        /**
         * Encodes the specified Actor_GamerGrabLandlordSelect_Ntt message. Does not implicitly {@link msg.Actor_GamerGrabLandlordSelect_Ntt.verify|verify} messages.
         * @function encode
         * @memberof msg.Actor_GamerGrabLandlordSelect_Ntt
         * @static
         * @param {msg.IActor_GamerGrabLandlordSelect_Ntt} message Actor_GamerGrabLandlordSelect_Ntt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Actor_GamerGrabLandlordSelect_Ntt.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.UserID);
            if (message.IsGrab != null && message.hasOwnProperty("IsGrab"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.IsGrab);
            return writer;
        };

        /**
         * Encodes the specified Actor_GamerGrabLandlordSelect_Ntt message, length delimited. Does not implicitly {@link msg.Actor_GamerGrabLandlordSelect_Ntt.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.Actor_GamerGrabLandlordSelect_Ntt
         * @static
         * @param {msg.IActor_GamerGrabLandlordSelect_Ntt} message Actor_GamerGrabLandlordSelect_Ntt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Actor_GamerGrabLandlordSelect_Ntt.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Actor_GamerGrabLandlordSelect_Ntt message from the specified reader or buffer.
         * @function decode
         * @memberof msg.Actor_GamerGrabLandlordSelect_Ntt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.Actor_GamerGrabLandlordSelect_Ntt} Actor_GamerGrabLandlordSelect_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Actor_GamerGrabLandlordSelect_Ntt.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.Actor_GamerGrabLandlordSelect_Ntt();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int64();
                    break;
                case 2:
                    message.IsGrab = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Actor_GamerGrabLandlordSelect_Ntt message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.Actor_GamerGrabLandlordSelect_Ntt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.Actor_GamerGrabLandlordSelect_Ntt} Actor_GamerGrabLandlordSelect_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Actor_GamerGrabLandlordSelect_Ntt.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Actor_GamerGrabLandlordSelect_Ntt message.
         * @function verify
         * @memberof msg.Actor_GamerGrabLandlordSelect_Ntt
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Actor_GamerGrabLandlordSelect_Ntt.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            if (message.IsGrab != null && message.hasOwnProperty("IsGrab"))
                if (typeof message.IsGrab !== "boolean")
                    return "IsGrab: boolean expected";
            return null;
        };

        /**
         * Creates an Actor_GamerGrabLandlordSelect_Ntt message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.Actor_GamerGrabLandlordSelect_Ntt
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.Actor_GamerGrabLandlordSelect_Ntt} Actor_GamerGrabLandlordSelect_Ntt
         */
        Actor_GamerGrabLandlordSelect_Ntt.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.Actor_GamerGrabLandlordSelect_Ntt)
                return object;
            var message = new $root.msg.Actor_GamerGrabLandlordSelect_Ntt();
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = false;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber();
            if (object.IsGrab != null)
                message.IsGrab = Boolean(object.IsGrab);
            return message;
        };

        /**
         * Creates a plain object from an Actor_GamerGrabLandlordSelect_Ntt message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.Actor_GamerGrabLandlordSelect_Ntt
         * @static
         * @param {msg.Actor_GamerGrabLandlordSelect_Ntt} message Actor_GamerGrabLandlordSelect_Ntt
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Actor_GamerGrabLandlordSelect_Ntt.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
                object.IsGrab = false;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber() : message.UserID;
            if (message.IsGrab != null && message.hasOwnProperty("IsGrab"))
                object.IsGrab = message.IsGrab;
            return object;
        };

        /**
         * Converts this Actor_GamerGrabLandlordSelect_Ntt to JSON.
         * @function toJSON
         * @memberof msg.Actor_GamerGrabLandlordSelect_Ntt
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Actor_GamerGrabLandlordSelect_Ntt.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Actor_GamerGrabLandlordSelect_Ntt;
    })();

    msg.Actor_GamerPlayCard_Req = (function() {

        /**
         * Properties of an Actor_GamerPlayCard_Req.
         * @memberof msg
         * @interface IActor_GamerPlayCard_Req
         * @property {Array.<msg.ICCard>|null} [Cards] Actor_GamerPlayCard_Req Cards
         */

        /**
         * Constructs a new Actor_GamerPlayCard_Req.
         * @memberof msg
         * @classdesc Represents an Actor_GamerPlayCard_Req.
         * @implements IActor_GamerPlayCard_Req
         * @constructor
         * @param {msg.IActor_GamerPlayCard_Req=} [properties] Properties to set
         */
        function Actor_GamerPlayCard_Req(properties) {
            this.Cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Actor_GamerPlayCard_Req Cards.
         * @member {Array.<msg.ICCard>} Cards
         * @memberof msg.Actor_GamerPlayCard_Req
         * @instance
         */
        Actor_GamerPlayCard_Req.prototype.Cards = $util.emptyArray;

        /**
         * Creates a new Actor_GamerPlayCard_Req instance using the specified properties.
         * @function create
         * @memberof msg.Actor_GamerPlayCard_Req
         * @static
         * @param {msg.IActor_GamerPlayCard_Req=} [properties] Properties to set
         * @returns {msg.Actor_GamerPlayCard_Req} Actor_GamerPlayCard_Req instance
         */
        Actor_GamerPlayCard_Req.create = function create(properties) {
            return new Actor_GamerPlayCard_Req(properties);
        };

        /**
         * Encodes the specified Actor_GamerPlayCard_Req message. Does not implicitly {@link msg.Actor_GamerPlayCard_Req.verify|verify} messages.
         * @function encode
         * @memberof msg.Actor_GamerPlayCard_Req
         * @static
         * @param {msg.IActor_GamerPlayCard_Req} message Actor_GamerPlayCard_Req message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Actor_GamerPlayCard_Req.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Cards != null && message.Cards.length)
                for (var i = 0; i < message.Cards.length; ++i)
                    $root.msg.CCard.encode(message.Cards[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Actor_GamerPlayCard_Req message, length delimited. Does not implicitly {@link msg.Actor_GamerPlayCard_Req.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.Actor_GamerPlayCard_Req
         * @static
         * @param {msg.IActor_GamerPlayCard_Req} message Actor_GamerPlayCard_Req message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Actor_GamerPlayCard_Req.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Actor_GamerPlayCard_Req message from the specified reader or buffer.
         * @function decode
         * @memberof msg.Actor_GamerPlayCard_Req
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.Actor_GamerPlayCard_Req} Actor_GamerPlayCard_Req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Actor_GamerPlayCard_Req.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.Actor_GamerPlayCard_Req();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Cards && message.Cards.length))
                        message.Cards = [];
                    message.Cards.push($root.msg.CCard.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Actor_GamerPlayCard_Req message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.Actor_GamerPlayCard_Req
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.Actor_GamerPlayCard_Req} Actor_GamerPlayCard_Req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Actor_GamerPlayCard_Req.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Actor_GamerPlayCard_Req message.
         * @function verify
         * @memberof msg.Actor_GamerPlayCard_Req
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Actor_GamerPlayCard_Req.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Cards != null && message.hasOwnProperty("Cards")) {
                if (!Array.isArray(message.Cards))
                    return "Cards: array expected";
                for (var i = 0; i < message.Cards.length; ++i) {
                    var error = $root.msg.CCard.verify(message.Cards[i]);
                    if (error)
                        return "Cards." + error;
                }
            }
            return null;
        };

        /**
         * Creates an Actor_GamerPlayCard_Req message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.Actor_GamerPlayCard_Req
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.Actor_GamerPlayCard_Req} Actor_GamerPlayCard_Req
         */
        Actor_GamerPlayCard_Req.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.Actor_GamerPlayCard_Req)
                return object;
            var message = new $root.msg.Actor_GamerPlayCard_Req();
            if (object.Cards) {
                if (!Array.isArray(object.Cards))
                    throw TypeError(".msg.Actor_GamerPlayCard_Req.Cards: array expected");
                message.Cards = [];
                for (var i = 0; i < object.Cards.length; ++i) {
                    if (typeof object.Cards[i] !== "object")
                        throw TypeError(".msg.Actor_GamerPlayCard_Req.Cards: object expected");
                    message.Cards[i] = $root.msg.CCard.fromObject(object.Cards[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an Actor_GamerPlayCard_Req message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.Actor_GamerPlayCard_Req
         * @static
         * @param {msg.Actor_GamerPlayCard_Req} message Actor_GamerPlayCard_Req
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Actor_GamerPlayCard_Req.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Cards = [];
            if (message.Cards && message.Cards.length) {
                object.Cards = [];
                for (var j = 0; j < message.Cards.length; ++j)
                    object.Cards[j] = $root.msg.CCard.toObject(message.Cards[j], options);
            }
            return object;
        };

        /**
         * Converts this Actor_GamerPlayCard_Req to JSON.
         * @function toJSON
         * @memberof msg.Actor_GamerPlayCard_Req
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Actor_GamerPlayCard_Req.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Actor_GamerPlayCard_Req;
    })();

    msg.Actor_GamerPlayCard_Ack = (function() {

        /**
         * Properties of an Actor_GamerPlayCard_Ack.
         * @memberof msg
         * @interface IActor_GamerPlayCard_Ack
         * @property {number|null} [Error] Actor_GamerPlayCard_Ack Error
         * @property {string|null} [Message] Actor_GamerPlayCard_Ack Message
         */

        /**
         * Constructs a new Actor_GamerPlayCard_Ack.
         * @memberof msg
         * @classdesc Represents an Actor_GamerPlayCard_Ack.
         * @implements IActor_GamerPlayCard_Ack
         * @constructor
         * @param {msg.IActor_GamerPlayCard_Ack=} [properties] Properties to set
         */
        function Actor_GamerPlayCard_Ack(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Actor_GamerPlayCard_Ack Error.
         * @member {number} Error
         * @memberof msg.Actor_GamerPlayCard_Ack
         * @instance
         */
        Actor_GamerPlayCard_Ack.prototype.Error = 0;

        /**
         * Actor_GamerPlayCard_Ack Message.
         * @member {string} Message
         * @memberof msg.Actor_GamerPlayCard_Ack
         * @instance
         */
        Actor_GamerPlayCard_Ack.prototype.Message = "";

        /**
         * Creates a new Actor_GamerPlayCard_Ack instance using the specified properties.
         * @function create
         * @memberof msg.Actor_GamerPlayCard_Ack
         * @static
         * @param {msg.IActor_GamerPlayCard_Ack=} [properties] Properties to set
         * @returns {msg.Actor_GamerPlayCard_Ack} Actor_GamerPlayCard_Ack instance
         */
        Actor_GamerPlayCard_Ack.create = function create(properties) {
            return new Actor_GamerPlayCard_Ack(properties);
        };

        /**
         * Encodes the specified Actor_GamerPlayCard_Ack message. Does not implicitly {@link msg.Actor_GamerPlayCard_Ack.verify|verify} messages.
         * @function encode
         * @memberof msg.Actor_GamerPlayCard_Ack
         * @static
         * @param {msg.IActor_GamerPlayCard_Ack} message Actor_GamerPlayCard_Ack message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Actor_GamerPlayCard_Ack.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Error != null && message.hasOwnProperty("Error"))
                writer.uint32(/* id 90, wireType 0 =*/720).int32(message.Error);
            if (message.Message != null && message.hasOwnProperty("Message"))
                writer.uint32(/* id 91, wireType 2 =*/730).string(message.Message);
            return writer;
        };

        /**
         * Encodes the specified Actor_GamerPlayCard_Ack message, length delimited. Does not implicitly {@link msg.Actor_GamerPlayCard_Ack.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.Actor_GamerPlayCard_Ack
         * @static
         * @param {msg.IActor_GamerPlayCard_Ack} message Actor_GamerPlayCard_Ack message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Actor_GamerPlayCard_Ack.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Actor_GamerPlayCard_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof msg.Actor_GamerPlayCard_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.Actor_GamerPlayCard_Ack} Actor_GamerPlayCard_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Actor_GamerPlayCard_Ack.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.Actor_GamerPlayCard_Ack();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 90:
                    message.Error = reader.int32();
                    break;
                case 91:
                    message.Message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Actor_GamerPlayCard_Ack message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.Actor_GamerPlayCard_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.Actor_GamerPlayCard_Ack} Actor_GamerPlayCard_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Actor_GamerPlayCard_Ack.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Actor_GamerPlayCard_Ack message.
         * @function verify
         * @memberof msg.Actor_GamerPlayCard_Ack
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Actor_GamerPlayCard_Ack.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Error != null && message.hasOwnProperty("Error"))
                if (!$util.isInteger(message.Error))
                    return "Error: integer expected";
            if (message.Message != null && message.hasOwnProperty("Message"))
                if (!$util.isString(message.Message))
                    return "Message: string expected";
            return null;
        };

        /**
         * Creates an Actor_GamerPlayCard_Ack message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.Actor_GamerPlayCard_Ack
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.Actor_GamerPlayCard_Ack} Actor_GamerPlayCard_Ack
         */
        Actor_GamerPlayCard_Ack.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.Actor_GamerPlayCard_Ack)
                return object;
            var message = new $root.msg.Actor_GamerPlayCard_Ack();
            if (object.Error != null)
                message.Error = object.Error | 0;
            if (object.Message != null)
                message.Message = String(object.Message);
            return message;
        };

        /**
         * Creates a plain object from an Actor_GamerPlayCard_Ack message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.Actor_GamerPlayCard_Ack
         * @static
         * @param {msg.Actor_GamerPlayCard_Ack} message Actor_GamerPlayCard_Ack
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Actor_GamerPlayCard_Ack.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Error = 0;
                object.Message = "";
            }
            if (message.Error != null && message.hasOwnProperty("Error"))
                object.Error = message.Error;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            return object;
        };

        /**
         * Converts this Actor_GamerPlayCard_Ack to JSON.
         * @function toJSON
         * @memberof msg.Actor_GamerPlayCard_Ack
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Actor_GamerPlayCard_Ack.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Actor_GamerPlayCard_Ack;
    })();

    msg.Actor_GamerPlayCard_Ntt = (function() {

        /**
         * Properties of an Actor_GamerPlayCard_Ntt.
         * @memberof msg
         * @interface IActor_GamerPlayCard_Ntt
         * @property {number|Long|null} [UserID] Actor_GamerPlayCard_Ntt UserID
         * @property {Array.<msg.ICCard>|null} [Cards] Actor_GamerPlayCard_Ntt Cards
         */

        /**
         * Constructs a new Actor_GamerPlayCard_Ntt.
         * @memberof msg
         * @classdesc Represents an Actor_GamerPlayCard_Ntt.
         * @implements IActor_GamerPlayCard_Ntt
         * @constructor
         * @param {msg.IActor_GamerPlayCard_Ntt=} [properties] Properties to set
         */
        function Actor_GamerPlayCard_Ntt(properties) {
            this.Cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Actor_GamerPlayCard_Ntt UserID.
         * @member {number|Long} UserID
         * @memberof msg.Actor_GamerPlayCard_Ntt
         * @instance
         */
        Actor_GamerPlayCard_Ntt.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Actor_GamerPlayCard_Ntt Cards.
         * @member {Array.<msg.ICCard>} Cards
         * @memberof msg.Actor_GamerPlayCard_Ntt
         * @instance
         */
        Actor_GamerPlayCard_Ntt.prototype.Cards = $util.emptyArray;

        /**
         * Creates a new Actor_GamerPlayCard_Ntt instance using the specified properties.
         * @function create
         * @memberof msg.Actor_GamerPlayCard_Ntt
         * @static
         * @param {msg.IActor_GamerPlayCard_Ntt=} [properties] Properties to set
         * @returns {msg.Actor_GamerPlayCard_Ntt} Actor_GamerPlayCard_Ntt instance
         */
        Actor_GamerPlayCard_Ntt.create = function create(properties) {
            return new Actor_GamerPlayCard_Ntt(properties);
        };

        /**
         * Encodes the specified Actor_GamerPlayCard_Ntt message. Does not implicitly {@link msg.Actor_GamerPlayCard_Ntt.verify|verify} messages.
         * @function encode
         * @memberof msg.Actor_GamerPlayCard_Ntt
         * @static
         * @param {msg.IActor_GamerPlayCard_Ntt} message Actor_GamerPlayCard_Ntt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Actor_GamerPlayCard_Ntt.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.UserID);
            if (message.Cards != null && message.Cards.length)
                for (var i = 0; i < message.Cards.length; ++i)
                    $root.msg.CCard.encode(message.Cards[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Actor_GamerPlayCard_Ntt message, length delimited. Does not implicitly {@link msg.Actor_GamerPlayCard_Ntt.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.Actor_GamerPlayCard_Ntt
         * @static
         * @param {msg.IActor_GamerPlayCard_Ntt} message Actor_GamerPlayCard_Ntt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Actor_GamerPlayCard_Ntt.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Actor_GamerPlayCard_Ntt message from the specified reader or buffer.
         * @function decode
         * @memberof msg.Actor_GamerPlayCard_Ntt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.Actor_GamerPlayCard_Ntt} Actor_GamerPlayCard_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Actor_GamerPlayCard_Ntt.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.Actor_GamerPlayCard_Ntt();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int64();
                    break;
                case 2:
                    if (!(message.Cards && message.Cards.length))
                        message.Cards = [];
                    message.Cards.push($root.msg.CCard.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Actor_GamerPlayCard_Ntt message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.Actor_GamerPlayCard_Ntt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.Actor_GamerPlayCard_Ntt} Actor_GamerPlayCard_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Actor_GamerPlayCard_Ntt.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Actor_GamerPlayCard_Ntt message.
         * @function verify
         * @memberof msg.Actor_GamerPlayCard_Ntt
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Actor_GamerPlayCard_Ntt.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            if (message.Cards != null && message.hasOwnProperty("Cards")) {
                if (!Array.isArray(message.Cards))
                    return "Cards: array expected";
                for (var i = 0; i < message.Cards.length; ++i) {
                    var error = $root.msg.CCard.verify(message.Cards[i]);
                    if (error)
                        return "Cards." + error;
                }
            }
            return null;
        };

        /**
         * Creates an Actor_GamerPlayCard_Ntt message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.Actor_GamerPlayCard_Ntt
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.Actor_GamerPlayCard_Ntt} Actor_GamerPlayCard_Ntt
         */
        Actor_GamerPlayCard_Ntt.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.Actor_GamerPlayCard_Ntt)
                return object;
            var message = new $root.msg.Actor_GamerPlayCard_Ntt();
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = false;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber();
            if (object.Cards) {
                if (!Array.isArray(object.Cards))
                    throw TypeError(".msg.Actor_GamerPlayCard_Ntt.Cards: array expected");
                message.Cards = [];
                for (var i = 0; i < object.Cards.length; ++i) {
                    if (typeof object.Cards[i] !== "object")
                        throw TypeError(".msg.Actor_GamerPlayCard_Ntt.Cards: object expected");
                    message.Cards[i] = $root.msg.CCard.fromObject(object.Cards[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an Actor_GamerPlayCard_Ntt message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.Actor_GamerPlayCard_Ntt
         * @static
         * @param {msg.Actor_GamerPlayCard_Ntt} message Actor_GamerPlayCard_Ntt
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Actor_GamerPlayCard_Ntt.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Cards = [];
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber() : message.UserID;
            if (message.Cards && message.Cards.length) {
                object.Cards = [];
                for (var j = 0; j < message.Cards.length; ++j)
                    object.Cards[j] = $root.msg.CCard.toObject(message.Cards[j], options);
            }
            return object;
        };

        /**
         * Converts this Actor_GamerPlayCard_Ntt to JSON.
         * @function toJSON
         * @memberof msg.Actor_GamerPlayCard_Ntt
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Actor_GamerPlayCard_Ntt.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Actor_GamerPlayCard_Ntt;
    })();

    msg.Actor_GamerPrompt_Req = (function() {

        /**
         * Properties of an Actor_GamerPrompt_Req.
         * @memberof msg
         * @interface IActor_GamerPrompt_Req
         */

        /**
         * Constructs a new Actor_GamerPrompt_Req.
         * @memberof msg
         * @classdesc Represents an Actor_GamerPrompt_Req.
         * @implements IActor_GamerPrompt_Req
         * @constructor
         * @param {msg.IActor_GamerPrompt_Req=} [properties] Properties to set
         */
        function Actor_GamerPrompt_Req(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Actor_GamerPrompt_Req instance using the specified properties.
         * @function create
         * @memberof msg.Actor_GamerPrompt_Req
         * @static
         * @param {msg.IActor_GamerPrompt_Req=} [properties] Properties to set
         * @returns {msg.Actor_GamerPrompt_Req} Actor_GamerPrompt_Req instance
         */
        Actor_GamerPrompt_Req.create = function create(properties) {
            return new Actor_GamerPrompt_Req(properties);
        };

        /**
         * Encodes the specified Actor_GamerPrompt_Req message. Does not implicitly {@link msg.Actor_GamerPrompt_Req.verify|verify} messages.
         * @function encode
         * @memberof msg.Actor_GamerPrompt_Req
         * @static
         * @param {msg.IActor_GamerPrompt_Req} message Actor_GamerPrompt_Req message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Actor_GamerPrompt_Req.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified Actor_GamerPrompt_Req message, length delimited. Does not implicitly {@link msg.Actor_GamerPrompt_Req.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.Actor_GamerPrompt_Req
         * @static
         * @param {msg.IActor_GamerPrompt_Req} message Actor_GamerPrompt_Req message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Actor_GamerPrompt_Req.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Actor_GamerPrompt_Req message from the specified reader or buffer.
         * @function decode
         * @memberof msg.Actor_GamerPrompt_Req
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.Actor_GamerPrompt_Req} Actor_GamerPrompt_Req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Actor_GamerPrompt_Req.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.Actor_GamerPrompt_Req();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Actor_GamerPrompt_Req message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.Actor_GamerPrompt_Req
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.Actor_GamerPrompt_Req} Actor_GamerPrompt_Req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Actor_GamerPrompt_Req.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Actor_GamerPrompt_Req message.
         * @function verify
         * @memberof msg.Actor_GamerPrompt_Req
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Actor_GamerPrompt_Req.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an Actor_GamerPrompt_Req message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.Actor_GamerPrompt_Req
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.Actor_GamerPrompt_Req} Actor_GamerPrompt_Req
         */
        Actor_GamerPrompt_Req.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.Actor_GamerPrompt_Req)
                return object;
            return new $root.msg.Actor_GamerPrompt_Req();
        };

        /**
         * Creates a plain object from an Actor_GamerPrompt_Req message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.Actor_GamerPrompt_Req
         * @static
         * @param {msg.Actor_GamerPrompt_Req} message Actor_GamerPrompt_Req
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Actor_GamerPrompt_Req.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this Actor_GamerPrompt_Req to JSON.
         * @function toJSON
         * @memberof msg.Actor_GamerPrompt_Req
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Actor_GamerPrompt_Req.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Actor_GamerPrompt_Req;
    })();

    msg.Actor_GamerPrompt_Ack = (function() {

        /**
         * Properties of an Actor_GamerPrompt_Ack.
         * @memberof msg
         * @interface IActor_GamerPrompt_Ack
         * @property {number|null} [Error] Actor_GamerPrompt_Ack Error
         * @property {string|null} [Message] Actor_GamerPrompt_Ack Message
         * @property {Array.<msg.ICCard>|null} [Cards] Actor_GamerPrompt_Ack Cards
         */

        /**
         * Constructs a new Actor_GamerPrompt_Ack.
         * @memberof msg
         * @classdesc Represents an Actor_GamerPrompt_Ack.
         * @implements IActor_GamerPrompt_Ack
         * @constructor
         * @param {msg.IActor_GamerPrompt_Ack=} [properties] Properties to set
         */
        function Actor_GamerPrompt_Ack(properties) {
            this.Cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Actor_GamerPrompt_Ack Error.
         * @member {number} Error
         * @memberof msg.Actor_GamerPrompt_Ack
         * @instance
         */
        Actor_GamerPrompt_Ack.prototype.Error = 0;

        /**
         * Actor_GamerPrompt_Ack Message.
         * @member {string} Message
         * @memberof msg.Actor_GamerPrompt_Ack
         * @instance
         */
        Actor_GamerPrompt_Ack.prototype.Message = "";

        /**
         * Actor_GamerPrompt_Ack Cards.
         * @member {Array.<msg.ICCard>} Cards
         * @memberof msg.Actor_GamerPrompt_Ack
         * @instance
         */
        Actor_GamerPrompt_Ack.prototype.Cards = $util.emptyArray;

        /**
         * Creates a new Actor_GamerPrompt_Ack instance using the specified properties.
         * @function create
         * @memberof msg.Actor_GamerPrompt_Ack
         * @static
         * @param {msg.IActor_GamerPrompt_Ack=} [properties] Properties to set
         * @returns {msg.Actor_GamerPrompt_Ack} Actor_GamerPrompt_Ack instance
         */
        Actor_GamerPrompt_Ack.create = function create(properties) {
            return new Actor_GamerPrompt_Ack(properties);
        };

        /**
         * Encodes the specified Actor_GamerPrompt_Ack message. Does not implicitly {@link msg.Actor_GamerPrompt_Ack.verify|verify} messages.
         * @function encode
         * @memberof msg.Actor_GamerPrompt_Ack
         * @static
         * @param {msg.IActor_GamerPrompt_Ack} message Actor_GamerPrompt_Ack message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Actor_GamerPrompt_Ack.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Cards != null && message.Cards.length)
                for (var i = 0; i < message.Cards.length; ++i)
                    $root.msg.CCard.encode(message.Cards[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.Error != null && message.hasOwnProperty("Error"))
                writer.uint32(/* id 90, wireType 0 =*/720).int32(message.Error);
            if (message.Message != null && message.hasOwnProperty("Message"))
                writer.uint32(/* id 91, wireType 2 =*/730).string(message.Message);
            return writer;
        };

        /**
         * Encodes the specified Actor_GamerPrompt_Ack message, length delimited. Does not implicitly {@link msg.Actor_GamerPrompt_Ack.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.Actor_GamerPrompt_Ack
         * @static
         * @param {msg.IActor_GamerPrompt_Ack} message Actor_GamerPrompt_Ack message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Actor_GamerPrompt_Ack.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Actor_GamerPrompt_Ack message from the specified reader or buffer.
         * @function decode
         * @memberof msg.Actor_GamerPrompt_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.Actor_GamerPrompt_Ack} Actor_GamerPrompt_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Actor_GamerPrompt_Ack.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.Actor_GamerPrompt_Ack();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 90:
                    message.Error = reader.int32();
                    break;
                case 91:
                    message.Message = reader.string();
                    break;
                case 1:
                    if (!(message.Cards && message.Cards.length))
                        message.Cards = [];
                    message.Cards.push($root.msg.CCard.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Actor_GamerPrompt_Ack message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.Actor_GamerPrompt_Ack
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.Actor_GamerPrompt_Ack} Actor_GamerPrompt_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Actor_GamerPrompt_Ack.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Actor_GamerPrompt_Ack message.
         * @function verify
         * @memberof msg.Actor_GamerPrompt_Ack
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Actor_GamerPrompt_Ack.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Error != null && message.hasOwnProperty("Error"))
                if (!$util.isInteger(message.Error))
                    return "Error: integer expected";
            if (message.Message != null && message.hasOwnProperty("Message"))
                if (!$util.isString(message.Message))
                    return "Message: string expected";
            if (message.Cards != null && message.hasOwnProperty("Cards")) {
                if (!Array.isArray(message.Cards))
                    return "Cards: array expected";
                for (var i = 0; i < message.Cards.length; ++i) {
                    var error = $root.msg.CCard.verify(message.Cards[i]);
                    if (error)
                        return "Cards." + error;
                }
            }
            return null;
        };

        /**
         * Creates an Actor_GamerPrompt_Ack message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.Actor_GamerPrompt_Ack
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.Actor_GamerPrompt_Ack} Actor_GamerPrompt_Ack
         */
        Actor_GamerPrompt_Ack.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.Actor_GamerPrompt_Ack)
                return object;
            var message = new $root.msg.Actor_GamerPrompt_Ack();
            if (object.Error != null)
                message.Error = object.Error | 0;
            if (object.Message != null)
                message.Message = String(object.Message);
            if (object.Cards) {
                if (!Array.isArray(object.Cards))
                    throw TypeError(".msg.Actor_GamerPrompt_Ack.Cards: array expected");
                message.Cards = [];
                for (var i = 0; i < object.Cards.length; ++i) {
                    if (typeof object.Cards[i] !== "object")
                        throw TypeError(".msg.Actor_GamerPrompt_Ack.Cards: object expected");
                    message.Cards[i] = $root.msg.CCard.fromObject(object.Cards[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an Actor_GamerPrompt_Ack message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.Actor_GamerPrompt_Ack
         * @static
         * @param {msg.Actor_GamerPrompt_Ack} message Actor_GamerPrompt_Ack
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Actor_GamerPrompt_Ack.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Cards = [];
            if (options.defaults) {
                object.Error = 0;
                object.Message = "";
            }
            if (message.Cards && message.Cards.length) {
                object.Cards = [];
                for (var j = 0; j < message.Cards.length; ++j)
                    object.Cards[j] = $root.msg.CCard.toObject(message.Cards[j], options);
            }
            if (message.Error != null && message.hasOwnProperty("Error"))
                object.Error = message.Error;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            return object;
        };

        /**
         * Converts this Actor_GamerPrompt_Ack to JSON.
         * @function toJSON
         * @memberof msg.Actor_GamerPrompt_Ack
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Actor_GamerPrompt_Ack.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Actor_GamerPrompt_Ack;
    })();

    msg.Actor_GamerDontPlay_Ntt = (function() {

        /**
         * Properties of an Actor_GamerDontPlay_Ntt.
         * @memberof msg
         * @interface IActor_GamerDontPlay_Ntt
         * @property {number|Long|null} [UserID] Actor_GamerDontPlay_Ntt UserID
         */

        /**
         * Constructs a new Actor_GamerDontPlay_Ntt.
         * @memberof msg
         * @classdesc Represents an Actor_GamerDontPlay_Ntt.
         * @implements IActor_GamerDontPlay_Ntt
         * @constructor
         * @param {msg.IActor_GamerDontPlay_Ntt=} [properties] Properties to set
         */
        function Actor_GamerDontPlay_Ntt(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Actor_GamerDontPlay_Ntt UserID.
         * @member {number|Long} UserID
         * @memberof msg.Actor_GamerDontPlay_Ntt
         * @instance
         */
        Actor_GamerDontPlay_Ntt.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Actor_GamerDontPlay_Ntt instance using the specified properties.
         * @function create
         * @memberof msg.Actor_GamerDontPlay_Ntt
         * @static
         * @param {msg.IActor_GamerDontPlay_Ntt=} [properties] Properties to set
         * @returns {msg.Actor_GamerDontPlay_Ntt} Actor_GamerDontPlay_Ntt instance
         */
        Actor_GamerDontPlay_Ntt.create = function create(properties) {
            return new Actor_GamerDontPlay_Ntt(properties);
        };

        /**
         * Encodes the specified Actor_GamerDontPlay_Ntt message. Does not implicitly {@link msg.Actor_GamerDontPlay_Ntt.verify|verify} messages.
         * @function encode
         * @memberof msg.Actor_GamerDontPlay_Ntt
         * @static
         * @param {msg.IActor_GamerDontPlay_Ntt} message Actor_GamerDontPlay_Ntt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Actor_GamerDontPlay_Ntt.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.UserID);
            return writer;
        };

        /**
         * Encodes the specified Actor_GamerDontPlay_Ntt message, length delimited. Does not implicitly {@link msg.Actor_GamerDontPlay_Ntt.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.Actor_GamerDontPlay_Ntt
         * @static
         * @param {msg.IActor_GamerDontPlay_Ntt} message Actor_GamerDontPlay_Ntt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Actor_GamerDontPlay_Ntt.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Actor_GamerDontPlay_Ntt message from the specified reader or buffer.
         * @function decode
         * @memberof msg.Actor_GamerDontPlay_Ntt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.Actor_GamerDontPlay_Ntt} Actor_GamerDontPlay_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Actor_GamerDontPlay_Ntt.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.Actor_GamerDontPlay_Ntt();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Actor_GamerDontPlay_Ntt message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.Actor_GamerDontPlay_Ntt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.Actor_GamerDontPlay_Ntt} Actor_GamerDontPlay_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Actor_GamerDontPlay_Ntt.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Actor_GamerDontPlay_Ntt message.
         * @function verify
         * @memberof msg.Actor_GamerDontPlay_Ntt
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Actor_GamerDontPlay_Ntt.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            return null;
        };

        /**
         * Creates an Actor_GamerDontPlay_Ntt message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.Actor_GamerDontPlay_Ntt
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.Actor_GamerDontPlay_Ntt} Actor_GamerDontPlay_Ntt
         */
        Actor_GamerDontPlay_Ntt.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.Actor_GamerDontPlay_Ntt)
                return object;
            var message = new $root.msg.Actor_GamerDontPlay_Ntt();
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = false;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an Actor_GamerDontPlay_Ntt message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.Actor_GamerDontPlay_Ntt
         * @static
         * @param {msg.Actor_GamerDontPlay_Ntt} message Actor_GamerDontPlay_Ntt
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Actor_GamerDontPlay_Ntt.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber() : message.UserID;
            return object;
        };

        /**
         * Converts this Actor_GamerDontPlay_Ntt to JSON.
         * @function toJSON
         * @memberof msg.Actor_GamerDontPlay_Ntt
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Actor_GamerDontPlay_Ntt.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Actor_GamerDontPlay_Ntt;
    })();

    msg.Actor_Trusteeship_Ntt = (function() {

        /**
         * Properties of an Actor_Trusteeship_Ntt.
         * @memberof msg
         * @interface IActor_Trusteeship_Ntt
         * @property {number|Long|null} [UserID] Actor_Trusteeship_Ntt UserID
         * @property {boolean|null} [isTrusteeship] Actor_Trusteeship_Ntt isTrusteeship
         */

        /**
         * Constructs a new Actor_Trusteeship_Ntt.
         * @memberof msg
         * @classdesc Represents an Actor_Trusteeship_Ntt.
         * @implements IActor_Trusteeship_Ntt
         * @constructor
         * @param {msg.IActor_Trusteeship_Ntt=} [properties] Properties to set
         */
        function Actor_Trusteeship_Ntt(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Actor_Trusteeship_Ntt UserID.
         * @member {number|Long} UserID
         * @memberof msg.Actor_Trusteeship_Ntt
         * @instance
         */
        Actor_Trusteeship_Ntt.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Actor_Trusteeship_Ntt isTrusteeship.
         * @member {boolean} isTrusteeship
         * @memberof msg.Actor_Trusteeship_Ntt
         * @instance
         */
        Actor_Trusteeship_Ntt.prototype.isTrusteeship = false;

        /**
         * Creates a new Actor_Trusteeship_Ntt instance using the specified properties.
         * @function create
         * @memberof msg.Actor_Trusteeship_Ntt
         * @static
         * @param {msg.IActor_Trusteeship_Ntt=} [properties] Properties to set
         * @returns {msg.Actor_Trusteeship_Ntt} Actor_Trusteeship_Ntt instance
         */
        Actor_Trusteeship_Ntt.create = function create(properties) {
            return new Actor_Trusteeship_Ntt(properties);
        };

        /**
         * Encodes the specified Actor_Trusteeship_Ntt message. Does not implicitly {@link msg.Actor_Trusteeship_Ntt.verify|verify} messages.
         * @function encode
         * @memberof msg.Actor_Trusteeship_Ntt
         * @static
         * @param {msg.IActor_Trusteeship_Ntt} message Actor_Trusteeship_Ntt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Actor_Trusteeship_Ntt.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.UserID);
            if (message.isTrusteeship != null && message.hasOwnProperty("isTrusteeship"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isTrusteeship);
            return writer;
        };

        /**
         * Encodes the specified Actor_Trusteeship_Ntt message, length delimited. Does not implicitly {@link msg.Actor_Trusteeship_Ntt.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.Actor_Trusteeship_Ntt
         * @static
         * @param {msg.IActor_Trusteeship_Ntt} message Actor_Trusteeship_Ntt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Actor_Trusteeship_Ntt.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Actor_Trusteeship_Ntt message from the specified reader or buffer.
         * @function decode
         * @memberof msg.Actor_Trusteeship_Ntt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.Actor_Trusteeship_Ntt} Actor_Trusteeship_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Actor_Trusteeship_Ntt.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.Actor_Trusteeship_Ntt();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int64();
                    break;
                case 2:
                    message.isTrusteeship = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Actor_Trusteeship_Ntt message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.Actor_Trusteeship_Ntt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.Actor_Trusteeship_Ntt} Actor_Trusteeship_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Actor_Trusteeship_Ntt.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Actor_Trusteeship_Ntt message.
         * @function verify
         * @memberof msg.Actor_Trusteeship_Ntt
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Actor_Trusteeship_Ntt.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            if (message.isTrusteeship != null && message.hasOwnProperty("isTrusteeship"))
                if (typeof message.isTrusteeship !== "boolean")
                    return "isTrusteeship: boolean expected";
            return null;
        };

        /**
         * Creates an Actor_Trusteeship_Ntt message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.Actor_Trusteeship_Ntt
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.Actor_Trusteeship_Ntt} Actor_Trusteeship_Ntt
         */
        Actor_Trusteeship_Ntt.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.Actor_Trusteeship_Ntt)
                return object;
            var message = new $root.msg.Actor_Trusteeship_Ntt();
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = false;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber();
            if (object.isTrusteeship != null)
                message.isTrusteeship = Boolean(object.isTrusteeship);
            return message;
        };

        /**
         * Creates a plain object from an Actor_Trusteeship_Ntt message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.Actor_Trusteeship_Ntt
         * @static
         * @param {msg.Actor_Trusteeship_Ntt} message Actor_Trusteeship_Ntt
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Actor_Trusteeship_Ntt.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
                object.isTrusteeship = false;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber() : message.UserID;
            if (message.isTrusteeship != null && message.hasOwnProperty("isTrusteeship"))
                object.isTrusteeship = message.isTrusteeship;
            return object;
        };

        /**
         * Converts this Actor_Trusteeship_Ntt to JSON.
         * @function toJSON
         * @memberof msg.Actor_Trusteeship_Ntt
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Actor_Trusteeship_Ntt.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Actor_Trusteeship_Ntt;
    })();

    msg.CGamerInfo = (function() {

        /**
         * Properties of a CGamerInfo.
         * @memberof msg
         * @interface ICGamerInfo
         * @property {number|Long|null} [UserID] CGamerInfo UserID
         * @property {string|null} [NickName] CGamerInfo NickName
         * @property {number|Long|null} [Money] CGamerInfo Money
         * @property {number|null} [SeatID] CGamerInfo SeatID
         * @property {boolean|null} [IsReady] CGamerInfo IsReady
         * @property {boolean|null} [IsOffline] CGamerInfo IsOffline
         */

        /**
         * Constructs a new CGamerInfo.
         * @memberof msg
         * @classdesc Represents a CGamerInfo.
         * @implements ICGamerInfo
         * @constructor
         * @param {msg.ICGamerInfo=} [properties] Properties to set
         */
        function CGamerInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CGamerInfo UserID.
         * @member {number|Long} UserID
         * @memberof msg.CGamerInfo
         * @instance
         */
        CGamerInfo.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CGamerInfo NickName.
         * @member {string} NickName
         * @memberof msg.CGamerInfo
         * @instance
         */
        CGamerInfo.prototype.NickName = "";

        /**
         * CGamerInfo Money.
         * @member {number|Long} Money
         * @memberof msg.CGamerInfo
         * @instance
         */
        CGamerInfo.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CGamerInfo SeatID.
         * @member {number} SeatID
         * @memberof msg.CGamerInfo
         * @instance
         */
        CGamerInfo.prototype.SeatID = 0;

        /**
         * CGamerInfo IsReady.
         * @member {boolean} IsReady
         * @memberof msg.CGamerInfo
         * @instance
         */
        CGamerInfo.prototype.IsReady = false;

        /**
         * CGamerInfo IsOffline.
         * @member {boolean} IsOffline
         * @memberof msg.CGamerInfo
         * @instance
         */
        CGamerInfo.prototype.IsOffline = false;

        /**
         * Creates a new CGamerInfo instance using the specified properties.
         * @function create
         * @memberof msg.CGamerInfo
         * @static
         * @param {msg.ICGamerInfo=} [properties] Properties to set
         * @returns {msg.CGamerInfo} CGamerInfo instance
         */
        CGamerInfo.create = function create(properties) {
            return new CGamerInfo(properties);
        };

        /**
         * Encodes the specified CGamerInfo message. Does not implicitly {@link msg.CGamerInfo.verify|verify} messages.
         * @function encode
         * @memberof msg.CGamerInfo
         * @static
         * @param {msg.ICGamerInfo} message CGamerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGamerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.UserID);
            if (message.NickName != null && message.hasOwnProperty("NickName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.NickName);
            if (message.Money != null && message.hasOwnProperty("Money"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.Money);
            if (message.SeatID != null && message.hasOwnProperty("SeatID"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.SeatID);
            if (message.IsReady != null && message.hasOwnProperty("IsReady"))
                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.IsReady);
            if (message.IsOffline != null && message.hasOwnProperty("IsOffline"))
                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.IsOffline);
            return writer;
        };

        /**
         * Encodes the specified CGamerInfo message, length delimited. Does not implicitly {@link msg.CGamerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.CGamerInfo
         * @static
         * @param {msg.ICGamerInfo} message CGamerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGamerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CGamerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof msg.CGamerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.CGamerInfo} CGamerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGamerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.CGamerInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int64();
                    break;
                case 2:
                    message.NickName = reader.string();
                    break;
                case 3:
                    message.Money = reader.int64();
                    break;
                case 10:
                    message.SeatID = reader.int32();
                    break;
                case 11:
                    message.IsReady = reader.bool();
                    break;
                case 12:
                    message.IsOffline = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CGamerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.CGamerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.CGamerInfo} CGamerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGamerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CGamerInfo message.
         * @function verify
         * @memberof msg.CGamerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CGamerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            if (message.NickName != null && message.hasOwnProperty("NickName"))
                if (!$util.isString(message.NickName))
                    return "NickName: string expected";
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (!$util.isInteger(message.Money) && !(message.Money && $util.isInteger(message.Money.low) && $util.isInteger(message.Money.high)))
                    return "Money: integer|Long expected";
            if (message.SeatID != null && message.hasOwnProperty("SeatID"))
                if (!$util.isInteger(message.SeatID))
                    return "SeatID: integer expected";
            if (message.IsReady != null && message.hasOwnProperty("IsReady"))
                if (typeof message.IsReady !== "boolean")
                    return "IsReady: boolean expected";
            if (message.IsOffline != null && message.hasOwnProperty("IsOffline"))
                if (typeof message.IsOffline !== "boolean")
                    return "IsOffline: boolean expected";
            return null;
        };

        /**
         * Creates a CGamerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.CGamerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.CGamerInfo} CGamerInfo
         */
        CGamerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.CGamerInfo)
                return object;
            var message = new $root.msg.CGamerInfo();
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = false;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber();
            if (object.NickName != null)
                message.NickName = String(object.NickName);
            if (object.Money != null)
                if ($util.Long)
                    (message.Money = $util.Long.fromValue(object.Money)).unsigned = false;
                else if (typeof object.Money === "string")
                    message.Money = parseInt(object.Money, 10);
                else if (typeof object.Money === "number")
                    message.Money = object.Money;
                else if (typeof object.Money === "object")
                    message.Money = new $util.LongBits(object.Money.low >>> 0, object.Money.high >>> 0).toNumber();
            if (object.SeatID != null)
                message.SeatID = object.SeatID | 0;
            if (object.IsReady != null)
                message.IsReady = Boolean(object.IsReady);
            if (object.IsOffline != null)
                message.IsOffline = Boolean(object.IsOffline);
            return message;
        };

        /**
         * Creates a plain object from a CGamerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.CGamerInfo
         * @static
         * @param {msg.CGamerInfo} message CGamerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CGamerInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
                object.NickName = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Money = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Money = options.longs === String ? "0" : 0;
                object.SeatID = 0;
                object.IsReady = false;
                object.IsOffline = false;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber() : message.UserID;
            if (message.NickName != null && message.hasOwnProperty("NickName"))
                object.NickName = message.NickName;
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (typeof message.Money === "number")
                    object.Money = options.longs === String ? String(message.Money) : message.Money;
                else
                    object.Money = options.longs === String ? $util.Long.prototype.toString.call(message.Money) : options.longs === Number ? new $util.LongBits(message.Money.low >>> 0, message.Money.high >>> 0).toNumber() : message.Money;
            if (message.SeatID != null && message.hasOwnProperty("SeatID"))
                object.SeatID = message.SeatID;
            if (message.IsReady != null && message.hasOwnProperty("IsReady"))
                object.IsReady = message.IsReady;
            if (message.IsOffline != null && message.hasOwnProperty("IsOffline"))
                object.IsOffline = message.IsOffline;
            return object;
        };

        /**
         * Converts this CGamerInfo to JSON.
         * @function toJSON
         * @memberof msg.CGamerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CGamerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CGamerInfo;
    })();

    msg.CGamerCards = (function() {

        /**
         * Properties of a CGamerCards.
         * @memberof msg
         * @interface ICGamerCards
         * @property {Array.<msg.ICCard>|null} [GamerCards] CGamerCards GamerCards
         */

        /**
         * Constructs a new CGamerCards.
         * @memberof msg
         * @classdesc Represents a CGamerCards.
         * @implements ICGamerCards
         * @constructor
         * @param {msg.ICGamerCards=} [properties] Properties to set
         */
        function CGamerCards(properties) {
            this.GamerCards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CGamerCards GamerCards.
         * @member {Array.<msg.ICCard>} GamerCards
         * @memberof msg.CGamerCards
         * @instance
         */
        CGamerCards.prototype.GamerCards = $util.emptyArray;

        /**
         * Creates a new CGamerCards instance using the specified properties.
         * @function create
         * @memberof msg.CGamerCards
         * @static
         * @param {msg.ICGamerCards=} [properties] Properties to set
         * @returns {msg.CGamerCards} CGamerCards instance
         */
        CGamerCards.create = function create(properties) {
            return new CGamerCards(properties);
        };

        /**
         * Encodes the specified CGamerCards message. Does not implicitly {@link msg.CGamerCards.verify|verify} messages.
         * @function encode
         * @memberof msg.CGamerCards
         * @static
         * @param {msg.ICGamerCards} message CGamerCards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGamerCards.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GamerCards != null && message.GamerCards.length)
                for (var i = 0; i < message.GamerCards.length; ++i)
                    $root.msg.CCard.encode(message.GamerCards[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CGamerCards message, length delimited. Does not implicitly {@link msg.CGamerCards.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.CGamerCards
         * @static
         * @param {msg.ICGamerCards} message CGamerCards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CGamerCards.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CGamerCards message from the specified reader or buffer.
         * @function decode
         * @memberof msg.CGamerCards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.CGamerCards} CGamerCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGamerCards.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.CGamerCards();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.GamerCards && message.GamerCards.length))
                        message.GamerCards = [];
                    message.GamerCards.push($root.msg.CCard.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CGamerCards message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.CGamerCards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.CGamerCards} CGamerCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CGamerCards.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CGamerCards message.
         * @function verify
         * @memberof msg.CGamerCards
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CGamerCards.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GamerCards != null && message.hasOwnProperty("GamerCards")) {
                if (!Array.isArray(message.GamerCards))
                    return "GamerCards: array expected";
                for (var i = 0; i < message.GamerCards.length; ++i) {
                    var error = $root.msg.CCard.verify(message.GamerCards[i]);
                    if (error)
                        return "GamerCards." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CGamerCards message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.CGamerCards
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.CGamerCards} CGamerCards
         */
        CGamerCards.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.CGamerCards)
                return object;
            var message = new $root.msg.CGamerCards();
            if (object.GamerCards) {
                if (!Array.isArray(object.GamerCards))
                    throw TypeError(".msg.CGamerCards.GamerCards: array expected");
                message.GamerCards = [];
                for (var i = 0; i < object.GamerCards.length; ++i) {
                    if (typeof object.GamerCards[i] !== "object")
                        throw TypeError(".msg.CGamerCards.GamerCards: object expected");
                    message.GamerCards[i] = $root.msg.CCard.fromObject(object.GamerCards[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a CGamerCards message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.CGamerCards
         * @static
         * @param {msg.CGamerCards} message CGamerCards
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CGamerCards.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.GamerCards = [];
            if (message.GamerCards && message.GamerCards.length) {
                object.GamerCards = [];
                for (var j = 0; j < message.GamerCards.length; ++j)
                    object.GamerCards[j] = $root.msg.CCard.toObject(message.GamerCards[j], options);
            }
            return object;
        };

        /**
         * Converts this CGamerCards to JSON.
         * @function toJSON
         * @memberof msg.CGamerCards
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CGamerCards.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CGamerCards;
    })();

    msg.Actor_GamerEnterRoom_Ntt = (function() {

        /**
         * Properties of an Actor_GamerEnterRoom_Ntt.
         * @memberof msg
         * @interface IActor_GamerEnterRoom_Ntt
         * @property {msg.ICGamerInfo|null} [Gamer] Actor_GamerEnterRoom_Ntt Gamer
         */

        /**
         * Constructs a new Actor_GamerEnterRoom_Ntt.
         * @memberof msg
         * @classdesc Represents an Actor_GamerEnterRoom_Ntt.
         * @implements IActor_GamerEnterRoom_Ntt
         * @constructor
         * @param {msg.IActor_GamerEnterRoom_Ntt=} [properties] Properties to set
         */
        function Actor_GamerEnterRoom_Ntt(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Actor_GamerEnterRoom_Ntt Gamer.
         * @member {msg.ICGamerInfo|null|undefined} Gamer
         * @memberof msg.Actor_GamerEnterRoom_Ntt
         * @instance
         */
        Actor_GamerEnterRoom_Ntt.prototype.Gamer = null;

        /**
         * Creates a new Actor_GamerEnterRoom_Ntt instance using the specified properties.
         * @function create
         * @memberof msg.Actor_GamerEnterRoom_Ntt
         * @static
         * @param {msg.IActor_GamerEnterRoom_Ntt=} [properties] Properties to set
         * @returns {msg.Actor_GamerEnterRoom_Ntt} Actor_GamerEnterRoom_Ntt instance
         */
        Actor_GamerEnterRoom_Ntt.create = function create(properties) {
            return new Actor_GamerEnterRoom_Ntt(properties);
        };

        /**
         * Encodes the specified Actor_GamerEnterRoom_Ntt message. Does not implicitly {@link msg.Actor_GamerEnterRoom_Ntt.verify|verify} messages.
         * @function encode
         * @memberof msg.Actor_GamerEnterRoom_Ntt
         * @static
         * @param {msg.IActor_GamerEnterRoom_Ntt} message Actor_GamerEnterRoom_Ntt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Actor_GamerEnterRoom_Ntt.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Gamer != null && message.hasOwnProperty("Gamer"))
                $root.msg.CGamerInfo.encode(message.Gamer, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Actor_GamerEnterRoom_Ntt message, length delimited. Does not implicitly {@link msg.Actor_GamerEnterRoom_Ntt.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.Actor_GamerEnterRoom_Ntt
         * @static
         * @param {msg.IActor_GamerEnterRoom_Ntt} message Actor_GamerEnterRoom_Ntt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Actor_GamerEnterRoom_Ntt.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Actor_GamerEnterRoom_Ntt message from the specified reader or buffer.
         * @function decode
         * @memberof msg.Actor_GamerEnterRoom_Ntt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.Actor_GamerEnterRoom_Ntt} Actor_GamerEnterRoom_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Actor_GamerEnterRoom_Ntt.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.Actor_GamerEnterRoom_Ntt();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Gamer = $root.msg.CGamerInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Actor_GamerEnterRoom_Ntt message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.Actor_GamerEnterRoom_Ntt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.Actor_GamerEnterRoom_Ntt} Actor_GamerEnterRoom_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Actor_GamerEnterRoom_Ntt.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Actor_GamerEnterRoom_Ntt message.
         * @function verify
         * @memberof msg.Actor_GamerEnterRoom_Ntt
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Actor_GamerEnterRoom_Ntt.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Gamer != null && message.hasOwnProperty("Gamer")) {
                var error = $root.msg.CGamerInfo.verify(message.Gamer);
                if (error)
                    return "Gamer." + error;
            }
            return null;
        };

        /**
         * Creates an Actor_GamerEnterRoom_Ntt message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.Actor_GamerEnterRoom_Ntt
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.Actor_GamerEnterRoom_Ntt} Actor_GamerEnterRoom_Ntt
         */
        Actor_GamerEnterRoom_Ntt.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.Actor_GamerEnterRoom_Ntt)
                return object;
            var message = new $root.msg.Actor_GamerEnterRoom_Ntt();
            if (object.Gamer != null) {
                if (typeof object.Gamer !== "object")
                    throw TypeError(".msg.Actor_GamerEnterRoom_Ntt.Gamer: object expected");
                message.Gamer = $root.msg.CGamerInfo.fromObject(object.Gamer);
            }
            return message;
        };

        /**
         * Creates a plain object from an Actor_GamerEnterRoom_Ntt message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.Actor_GamerEnterRoom_Ntt
         * @static
         * @param {msg.Actor_GamerEnterRoom_Ntt} message Actor_GamerEnterRoom_Ntt
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Actor_GamerEnterRoom_Ntt.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Gamer = null;
            if (message.Gamer != null && message.hasOwnProperty("Gamer"))
                object.Gamer = $root.msg.CGamerInfo.toObject(message.Gamer, options);
            return object;
        };

        /**
         * Converts this Actor_GamerEnterRoom_Ntt to JSON.
         * @function toJSON
         * @memberof msg.Actor_GamerEnterRoom_Ntt
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Actor_GamerEnterRoom_Ntt.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Actor_GamerEnterRoom_Ntt;
    })();

    msg.Actor_GamersInRoom_Ntt = (function() {

        /**
         * Properties of an Actor_GamersInRoom_Ntt.
         * @memberof msg
         * @interface IActor_GamersInRoom_Ntt
         * @property {Array.<msg.ICGamerInfo>|null} [Gamers] Actor_GamersInRoom_Ntt Gamers
         */

        /**
         * Constructs a new Actor_GamersInRoom_Ntt.
         * @memberof msg
         * @classdesc Represents an Actor_GamersInRoom_Ntt.
         * @implements IActor_GamersInRoom_Ntt
         * @constructor
         * @param {msg.IActor_GamersInRoom_Ntt=} [properties] Properties to set
         */
        function Actor_GamersInRoom_Ntt(properties) {
            this.Gamers = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Actor_GamersInRoom_Ntt Gamers.
         * @member {Array.<msg.ICGamerInfo>} Gamers
         * @memberof msg.Actor_GamersInRoom_Ntt
         * @instance
         */
        Actor_GamersInRoom_Ntt.prototype.Gamers = $util.emptyArray;

        /**
         * Creates a new Actor_GamersInRoom_Ntt instance using the specified properties.
         * @function create
         * @memberof msg.Actor_GamersInRoom_Ntt
         * @static
         * @param {msg.IActor_GamersInRoom_Ntt=} [properties] Properties to set
         * @returns {msg.Actor_GamersInRoom_Ntt} Actor_GamersInRoom_Ntt instance
         */
        Actor_GamersInRoom_Ntt.create = function create(properties) {
            return new Actor_GamersInRoom_Ntt(properties);
        };

        /**
         * Encodes the specified Actor_GamersInRoom_Ntt message. Does not implicitly {@link msg.Actor_GamersInRoom_Ntt.verify|verify} messages.
         * @function encode
         * @memberof msg.Actor_GamersInRoom_Ntt
         * @static
         * @param {msg.IActor_GamersInRoom_Ntt} message Actor_GamersInRoom_Ntt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Actor_GamersInRoom_Ntt.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Gamers != null && message.Gamers.length)
                for (var i = 0; i < message.Gamers.length; ++i)
                    $root.msg.CGamerInfo.encode(message.Gamers[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Actor_GamersInRoom_Ntt message, length delimited. Does not implicitly {@link msg.Actor_GamersInRoom_Ntt.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.Actor_GamersInRoom_Ntt
         * @static
         * @param {msg.IActor_GamersInRoom_Ntt} message Actor_GamersInRoom_Ntt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Actor_GamersInRoom_Ntt.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Actor_GamersInRoom_Ntt message from the specified reader or buffer.
         * @function decode
         * @memberof msg.Actor_GamersInRoom_Ntt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.Actor_GamersInRoom_Ntt} Actor_GamersInRoom_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Actor_GamersInRoom_Ntt.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.Actor_GamersInRoom_Ntt();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 3:
                    if (!(message.Gamers && message.Gamers.length))
                        message.Gamers = [];
                    message.Gamers.push($root.msg.CGamerInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Actor_GamersInRoom_Ntt message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.Actor_GamersInRoom_Ntt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.Actor_GamersInRoom_Ntt} Actor_GamersInRoom_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Actor_GamersInRoom_Ntt.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Actor_GamersInRoom_Ntt message.
         * @function verify
         * @memberof msg.Actor_GamersInRoom_Ntt
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Actor_GamersInRoom_Ntt.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Gamers != null && message.hasOwnProperty("Gamers")) {
                if (!Array.isArray(message.Gamers))
                    return "Gamers: array expected";
                for (var i = 0; i < message.Gamers.length; ++i) {
                    var error = $root.msg.CGamerInfo.verify(message.Gamers[i]);
                    if (error)
                        return "Gamers." + error;
                }
            }
            return null;
        };

        /**
         * Creates an Actor_GamersInRoom_Ntt message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.Actor_GamersInRoom_Ntt
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.Actor_GamersInRoom_Ntt} Actor_GamersInRoom_Ntt
         */
        Actor_GamersInRoom_Ntt.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.Actor_GamersInRoom_Ntt)
                return object;
            var message = new $root.msg.Actor_GamersInRoom_Ntt();
            if (object.Gamers) {
                if (!Array.isArray(object.Gamers))
                    throw TypeError(".msg.Actor_GamersInRoom_Ntt.Gamers: array expected");
                message.Gamers = [];
                for (var i = 0; i < object.Gamers.length; ++i) {
                    if (typeof object.Gamers[i] !== "object")
                        throw TypeError(".msg.Actor_GamersInRoom_Ntt.Gamers: object expected");
                    message.Gamers[i] = $root.msg.CGamerInfo.fromObject(object.Gamers[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an Actor_GamersInRoom_Ntt message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.Actor_GamersInRoom_Ntt
         * @static
         * @param {msg.Actor_GamersInRoom_Ntt} message Actor_GamersInRoom_Ntt
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Actor_GamersInRoom_Ntt.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Gamers = [];
            if (message.Gamers && message.Gamers.length) {
                object.Gamers = [];
                for (var j = 0; j < message.Gamers.length; ++j)
                    object.Gamers[j] = $root.msg.CGamerInfo.toObject(message.Gamers[j], options);
            }
            return object;
        };

        /**
         * Converts this Actor_GamersInRoom_Ntt to JSON.
         * @function toJSON
         * @memberof msg.Actor_GamersInRoom_Ntt
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Actor_GamersInRoom_Ntt.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Actor_GamersInRoom_Ntt;
    })();

    msg.Actor_GamerExitRoom_Ntt = (function() {

        /**
         * Properties of an Actor_GamerExitRoom_Ntt.
         * @memberof msg
         * @interface IActor_GamerExitRoom_Ntt
         * @property {number|Long|null} [UserID] Actor_GamerExitRoom_Ntt UserID
         */

        /**
         * Constructs a new Actor_GamerExitRoom_Ntt.
         * @memberof msg
         * @classdesc Represents an Actor_GamerExitRoom_Ntt.
         * @implements IActor_GamerExitRoom_Ntt
         * @constructor
         * @param {msg.IActor_GamerExitRoom_Ntt=} [properties] Properties to set
         */
        function Actor_GamerExitRoom_Ntt(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Actor_GamerExitRoom_Ntt UserID.
         * @member {number|Long} UserID
         * @memberof msg.Actor_GamerExitRoom_Ntt
         * @instance
         */
        Actor_GamerExitRoom_Ntt.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Actor_GamerExitRoom_Ntt instance using the specified properties.
         * @function create
         * @memberof msg.Actor_GamerExitRoom_Ntt
         * @static
         * @param {msg.IActor_GamerExitRoom_Ntt=} [properties] Properties to set
         * @returns {msg.Actor_GamerExitRoom_Ntt} Actor_GamerExitRoom_Ntt instance
         */
        Actor_GamerExitRoom_Ntt.create = function create(properties) {
            return new Actor_GamerExitRoom_Ntt(properties);
        };

        /**
         * Encodes the specified Actor_GamerExitRoom_Ntt message. Does not implicitly {@link msg.Actor_GamerExitRoom_Ntt.verify|verify} messages.
         * @function encode
         * @memberof msg.Actor_GamerExitRoom_Ntt
         * @static
         * @param {msg.IActor_GamerExitRoom_Ntt} message Actor_GamerExitRoom_Ntt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Actor_GamerExitRoom_Ntt.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.UserID);
            return writer;
        };

        /**
         * Encodes the specified Actor_GamerExitRoom_Ntt message, length delimited. Does not implicitly {@link msg.Actor_GamerExitRoom_Ntt.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.Actor_GamerExitRoom_Ntt
         * @static
         * @param {msg.IActor_GamerExitRoom_Ntt} message Actor_GamerExitRoom_Ntt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Actor_GamerExitRoom_Ntt.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Actor_GamerExitRoom_Ntt message from the specified reader or buffer.
         * @function decode
         * @memberof msg.Actor_GamerExitRoom_Ntt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.Actor_GamerExitRoom_Ntt} Actor_GamerExitRoom_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Actor_GamerExitRoom_Ntt.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.Actor_GamerExitRoom_Ntt();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Actor_GamerExitRoom_Ntt message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.Actor_GamerExitRoom_Ntt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.Actor_GamerExitRoom_Ntt} Actor_GamerExitRoom_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Actor_GamerExitRoom_Ntt.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Actor_GamerExitRoom_Ntt message.
         * @function verify
         * @memberof msg.Actor_GamerExitRoom_Ntt
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Actor_GamerExitRoom_Ntt.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            return null;
        };

        /**
         * Creates an Actor_GamerExitRoom_Ntt message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.Actor_GamerExitRoom_Ntt
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.Actor_GamerExitRoom_Ntt} Actor_GamerExitRoom_Ntt
         */
        Actor_GamerExitRoom_Ntt.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.Actor_GamerExitRoom_Ntt)
                return object;
            var message = new $root.msg.Actor_GamerExitRoom_Ntt();
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = false;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an Actor_GamerExitRoom_Ntt message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.Actor_GamerExitRoom_Ntt
         * @static
         * @param {msg.Actor_GamerExitRoom_Ntt} message Actor_GamerExitRoom_Ntt
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Actor_GamerExitRoom_Ntt.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber() : message.UserID;
            return object;
        };

        /**
         * Converts this Actor_GamerExitRoom_Ntt to JSON.
         * @function toJSON
         * @memberof msg.Actor_GamerExitRoom_Ntt
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Actor_GamerExitRoom_Ntt.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Actor_GamerExitRoom_Ntt;
    })();

    msg.Actor_GamerReconnect_Ntt = (function() {

        /**
         * Properties of an Actor_GamerReconnect_Ntt.
         * @memberof msg
         * @interface IActor_GamerReconnect_Ntt
         * @property {number|null} [Multiples] Actor_GamerReconnect_Ntt Multiples
         * @property {Array.<msg.ICCard>|null} [LordCards] Actor_GamerReconnect_Ntt LordCards
         * @property {Array.<msg.CIdentity>|null} [GamersIdentity] Actor_GamerReconnect_Ntt GamersIdentity
         * @property {Array.<msg.ICGamerCards>|null} [DesksCards] Actor_GamerReconnect_Ntt DesksCards
         * @property {Array.<boolean>|null} [GamerGrabLandlordState] Actor_GamerReconnect_Ntt GamerGrabLandlordState
         */

        /**
         * Constructs a new Actor_GamerReconnect_Ntt.
         * @memberof msg
         * @classdesc Represents an Actor_GamerReconnect_Ntt.
         * @implements IActor_GamerReconnect_Ntt
         * @constructor
         * @param {msg.IActor_GamerReconnect_Ntt=} [properties] Properties to set
         */
        function Actor_GamerReconnect_Ntt(properties) {
            this.LordCards = [];
            this.GamersIdentity = [];
            this.DesksCards = [];
            this.GamerGrabLandlordState = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Actor_GamerReconnect_Ntt Multiples.
         * @member {number} Multiples
         * @memberof msg.Actor_GamerReconnect_Ntt
         * @instance
         */
        Actor_GamerReconnect_Ntt.prototype.Multiples = 0;

        /**
         * Actor_GamerReconnect_Ntt LordCards.
         * @member {Array.<msg.ICCard>} LordCards
         * @memberof msg.Actor_GamerReconnect_Ntt
         * @instance
         */
        Actor_GamerReconnect_Ntt.prototype.LordCards = $util.emptyArray;

        /**
         * Actor_GamerReconnect_Ntt GamersIdentity.
         * @member {Array.<msg.CIdentity>} GamersIdentity
         * @memberof msg.Actor_GamerReconnect_Ntt
         * @instance
         */
        Actor_GamerReconnect_Ntt.prototype.GamersIdentity = $util.emptyArray;

        /**
         * Actor_GamerReconnect_Ntt DesksCards.
         * @member {Array.<msg.ICGamerCards>} DesksCards
         * @memberof msg.Actor_GamerReconnect_Ntt
         * @instance
         */
        Actor_GamerReconnect_Ntt.prototype.DesksCards = $util.emptyArray;

        /**
         * Actor_GamerReconnect_Ntt GamerGrabLandlordState.
         * @member {Array.<boolean>} GamerGrabLandlordState
         * @memberof msg.Actor_GamerReconnect_Ntt
         * @instance
         */
        Actor_GamerReconnect_Ntt.prototype.GamerGrabLandlordState = $util.emptyArray;

        /**
         * Creates a new Actor_GamerReconnect_Ntt instance using the specified properties.
         * @function create
         * @memberof msg.Actor_GamerReconnect_Ntt
         * @static
         * @param {msg.IActor_GamerReconnect_Ntt=} [properties] Properties to set
         * @returns {msg.Actor_GamerReconnect_Ntt} Actor_GamerReconnect_Ntt instance
         */
        Actor_GamerReconnect_Ntt.create = function create(properties) {
            return new Actor_GamerReconnect_Ntt(properties);
        };

        /**
         * Encodes the specified Actor_GamerReconnect_Ntt message. Does not implicitly {@link msg.Actor_GamerReconnect_Ntt.verify|verify} messages.
         * @function encode
         * @memberof msg.Actor_GamerReconnect_Ntt
         * @static
         * @param {msg.IActor_GamerReconnect_Ntt} message Actor_GamerReconnect_Ntt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Actor_GamerReconnect_Ntt.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Multiples != null && message.hasOwnProperty("Multiples"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Multiples);
            if (message.LordCards != null && message.LordCards.length)
                for (var i = 0; i < message.LordCards.length; ++i)
                    $root.msg.CCard.encode(message.LordCards[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.GamersIdentity != null && message.GamersIdentity.length) {
                writer.uint32(/* id 10, wireType 2 =*/82).fork();
                for (var i = 0; i < message.GamersIdentity.length; ++i)
                    writer.int32(message.GamersIdentity[i]);
                writer.ldelim();
            }
            if (message.DesksCards != null && message.DesksCards.length)
                for (var i = 0; i < message.DesksCards.length; ++i)
                    $root.msg.CGamerCards.encode(message.DesksCards[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.GamerGrabLandlordState != null && message.GamerGrabLandlordState.length) {
                writer.uint32(/* id 12, wireType 2 =*/98).fork();
                for (var i = 0; i < message.GamerGrabLandlordState.length; ++i)
                    writer.bool(message.GamerGrabLandlordState[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified Actor_GamerReconnect_Ntt message, length delimited. Does not implicitly {@link msg.Actor_GamerReconnect_Ntt.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.Actor_GamerReconnect_Ntt
         * @static
         * @param {msg.IActor_GamerReconnect_Ntt} message Actor_GamerReconnect_Ntt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Actor_GamerReconnect_Ntt.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Actor_GamerReconnect_Ntt message from the specified reader or buffer.
         * @function decode
         * @memberof msg.Actor_GamerReconnect_Ntt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.Actor_GamerReconnect_Ntt} Actor_GamerReconnect_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Actor_GamerReconnect_Ntt.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.Actor_GamerReconnect_Ntt();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Multiples = reader.int32();
                    break;
                case 2:
                    if (!(message.LordCards && message.LordCards.length))
                        message.LordCards = [];
                    message.LordCards.push($root.msg.CCard.decode(reader, reader.uint32()));
                    break;
                case 10:
                    if (!(message.GamersIdentity && message.GamersIdentity.length))
                        message.GamersIdentity = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.GamersIdentity.push(reader.int32());
                    } else
                        message.GamersIdentity.push(reader.int32());
                    break;
                case 11:
                    if (!(message.DesksCards && message.DesksCards.length))
                        message.DesksCards = [];
                    message.DesksCards.push($root.msg.CGamerCards.decode(reader, reader.uint32()));
                    break;
                case 12:
                    if (!(message.GamerGrabLandlordState && message.GamerGrabLandlordState.length))
                        message.GamerGrabLandlordState = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.GamerGrabLandlordState.push(reader.bool());
                    } else
                        message.GamerGrabLandlordState.push(reader.bool());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Actor_GamerReconnect_Ntt message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.Actor_GamerReconnect_Ntt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.Actor_GamerReconnect_Ntt} Actor_GamerReconnect_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Actor_GamerReconnect_Ntt.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Actor_GamerReconnect_Ntt message.
         * @function verify
         * @memberof msg.Actor_GamerReconnect_Ntt
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Actor_GamerReconnect_Ntt.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Multiples != null && message.hasOwnProperty("Multiples"))
                if (!$util.isInteger(message.Multiples))
                    return "Multiples: integer expected";
            if (message.LordCards != null && message.hasOwnProperty("LordCards")) {
                if (!Array.isArray(message.LordCards))
                    return "LordCards: array expected";
                for (var i = 0; i < message.LordCards.length; ++i) {
                    var error = $root.msg.CCard.verify(message.LordCards[i]);
                    if (error)
                        return "LordCards." + error;
                }
            }
            if (message.GamersIdentity != null && message.hasOwnProperty("GamersIdentity")) {
                if (!Array.isArray(message.GamersIdentity))
                    return "GamersIdentity: array expected";
                for (var i = 0; i < message.GamersIdentity.length; ++i)
                    switch (message.GamersIdentity[i]) {
                    default:
                        return "GamersIdentity: enum value[] expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
            }
            if (message.DesksCards != null && message.hasOwnProperty("DesksCards")) {
                if (!Array.isArray(message.DesksCards))
                    return "DesksCards: array expected";
                for (var i = 0; i < message.DesksCards.length; ++i) {
                    var error = $root.msg.CGamerCards.verify(message.DesksCards[i]);
                    if (error)
                        return "DesksCards." + error;
                }
            }
            if (message.GamerGrabLandlordState != null && message.hasOwnProperty("GamerGrabLandlordState")) {
                if (!Array.isArray(message.GamerGrabLandlordState))
                    return "GamerGrabLandlordState: array expected";
                for (var i = 0; i < message.GamerGrabLandlordState.length; ++i)
                    if (typeof message.GamerGrabLandlordState[i] !== "boolean")
                        return "GamerGrabLandlordState: boolean[] expected";
            }
            return null;
        };

        /**
         * Creates an Actor_GamerReconnect_Ntt message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.Actor_GamerReconnect_Ntt
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.Actor_GamerReconnect_Ntt} Actor_GamerReconnect_Ntt
         */
        Actor_GamerReconnect_Ntt.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.Actor_GamerReconnect_Ntt)
                return object;
            var message = new $root.msg.Actor_GamerReconnect_Ntt();
            if (object.Multiples != null)
                message.Multiples = object.Multiples | 0;
            if (object.LordCards) {
                if (!Array.isArray(object.LordCards))
                    throw TypeError(".msg.Actor_GamerReconnect_Ntt.LordCards: array expected");
                message.LordCards = [];
                for (var i = 0; i < object.LordCards.length; ++i) {
                    if (typeof object.LordCards[i] !== "object")
                        throw TypeError(".msg.Actor_GamerReconnect_Ntt.LordCards: object expected");
                    message.LordCards[i] = $root.msg.CCard.fromObject(object.LordCards[i]);
                }
            }
            if (object.GamersIdentity) {
                if (!Array.isArray(object.GamersIdentity))
                    throw TypeError(".msg.Actor_GamerReconnect_Ntt.GamersIdentity: array expected");
                message.GamersIdentity = [];
                for (var i = 0; i < object.GamersIdentity.length; ++i)
                    switch (object.GamersIdentity[i]) {
                    default:
                    case "CIdentity_NULL":
                    case 0:
                        message.GamersIdentity[i] = 0;
                        break;
                    case "Farmer":
                    case 1:
                        message.GamersIdentity[i] = 1;
                        break;
                    case "Landlord":
                    case 2:
                        message.GamersIdentity[i] = 2;
                        break;
                    }
            }
            if (object.DesksCards) {
                if (!Array.isArray(object.DesksCards))
                    throw TypeError(".msg.Actor_GamerReconnect_Ntt.DesksCards: array expected");
                message.DesksCards = [];
                for (var i = 0; i < object.DesksCards.length; ++i) {
                    if (typeof object.DesksCards[i] !== "object")
                        throw TypeError(".msg.Actor_GamerReconnect_Ntt.DesksCards: object expected");
                    message.DesksCards[i] = $root.msg.CGamerCards.fromObject(object.DesksCards[i]);
                }
            }
            if (object.GamerGrabLandlordState) {
                if (!Array.isArray(object.GamerGrabLandlordState))
                    throw TypeError(".msg.Actor_GamerReconnect_Ntt.GamerGrabLandlordState: array expected");
                message.GamerGrabLandlordState = [];
                for (var i = 0; i < object.GamerGrabLandlordState.length; ++i)
                    message.GamerGrabLandlordState[i] = Boolean(object.GamerGrabLandlordState[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from an Actor_GamerReconnect_Ntt message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.Actor_GamerReconnect_Ntt
         * @static
         * @param {msg.Actor_GamerReconnect_Ntt} message Actor_GamerReconnect_Ntt
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Actor_GamerReconnect_Ntt.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.LordCards = [];
                object.GamersIdentity = [];
                object.DesksCards = [];
                object.GamerGrabLandlordState = [];
            }
            if (options.defaults)
                object.Multiples = 0;
            if (message.Multiples != null && message.hasOwnProperty("Multiples"))
                object.Multiples = message.Multiples;
            if (message.LordCards && message.LordCards.length) {
                object.LordCards = [];
                for (var j = 0; j < message.LordCards.length; ++j)
                    object.LordCards[j] = $root.msg.CCard.toObject(message.LordCards[j], options);
            }
            if (message.GamersIdentity && message.GamersIdentity.length) {
                object.GamersIdentity = [];
                for (var j = 0; j < message.GamersIdentity.length; ++j)
                    object.GamersIdentity[j] = options.enums === String ? $root.msg.CIdentity[message.GamersIdentity[j]] : message.GamersIdentity[j];
            }
            if (message.DesksCards && message.DesksCards.length) {
                object.DesksCards = [];
                for (var j = 0; j < message.DesksCards.length; ++j)
                    object.DesksCards[j] = $root.msg.CGamerCards.toObject(message.DesksCards[j], options);
            }
            if (message.GamerGrabLandlordState && message.GamerGrabLandlordState.length) {
                object.GamerGrabLandlordState = [];
                for (var j = 0; j < message.GamerGrabLandlordState.length; ++j)
                    object.GamerGrabLandlordState[j] = message.GamerGrabLandlordState[j];
            }
            return object;
        };

        /**
         * Converts this Actor_GamerReconnect_Ntt to JSON.
         * @function toJSON
         * @memberof msg.Actor_GamerReconnect_Ntt
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Actor_GamerReconnect_Ntt.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Actor_GamerReconnect_Ntt;
    })();

    msg.Actor_GameStart_Ntt = (function() {

        /**
         * Properties of an Actor_GameStart_Ntt.
         * @memberof msg
         * @interface IActor_GameStart_Ntt
         * @property {Array.<number|Long>|null} [GamersUserID] Actor_GameStart_Ntt GamersUserID
         * @property {Array.<number>|null} [GamersCardsCount] Actor_GameStart_Ntt GamersCardsCount
         * @property {Array.<msg.ICGamerCards>|null} [GamersCards] Actor_GameStart_Ntt GamersCards
         */

        /**
         * Constructs a new Actor_GameStart_Ntt.
         * @memberof msg
         * @classdesc Represents an Actor_GameStart_Ntt.
         * @implements IActor_GameStart_Ntt
         * @constructor
         * @param {msg.IActor_GameStart_Ntt=} [properties] Properties to set
         */
        function Actor_GameStart_Ntt(properties) {
            this.GamersUserID = [];
            this.GamersCardsCount = [];
            this.GamersCards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Actor_GameStart_Ntt GamersUserID.
         * @member {Array.<number|Long>} GamersUserID
         * @memberof msg.Actor_GameStart_Ntt
         * @instance
         */
        Actor_GameStart_Ntt.prototype.GamersUserID = $util.emptyArray;

        /**
         * Actor_GameStart_Ntt GamersCardsCount.
         * @member {Array.<number>} GamersCardsCount
         * @memberof msg.Actor_GameStart_Ntt
         * @instance
         */
        Actor_GameStart_Ntt.prototype.GamersCardsCount = $util.emptyArray;

        /**
         * Actor_GameStart_Ntt GamersCards.
         * @member {Array.<msg.ICGamerCards>} GamersCards
         * @memberof msg.Actor_GameStart_Ntt
         * @instance
         */
        Actor_GameStart_Ntt.prototype.GamersCards = $util.emptyArray;

        /**
         * Creates a new Actor_GameStart_Ntt instance using the specified properties.
         * @function create
         * @memberof msg.Actor_GameStart_Ntt
         * @static
         * @param {msg.IActor_GameStart_Ntt=} [properties] Properties to set
         * @returns {msg.Actor_GameStart_Ntt} Actor_GameStart_Ntt instance
         */
        Actor_GameStart_Ntt.create = function create(properties) {
            return new Actor_GameStart_Ntt(properties);
        };

        /**
         * Encodes the specified Actor_GameStart_Ntt message. Does not implicitly {@link msg.Actor_GameStart_Ntt.verify|verify} messages.
         * @function encode
         * @memberof msg.Actor_GameStart_Ntt
         * @static
         * @param {msg.IActor_GameStart_Ntt} message Actor_GameStart_Ntt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Actor_GameStart_Ntt.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GamersUserID != null && message.GamersUserID.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.GamersUserID.length; ++i)
                    writer.int64(message.GamersUserID[i]);
                writer.ldelim();
            }
            if (message.GamersCards != null && message.GamersCards.length)
                for (var i = 0; i < message.GamersCards.length; ++i)
                    $root.msg.CGamerCards.encode(message.GamersCards[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.GamersCardsCount != null && message.GamersCardsCount.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (var i = 0; i < message.GamersCardsCount.length; ++i)
                    writer.int32(message.GamersCardsCount[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified Actor_GameStart_Ntt message, length delimited. Does not implicitly {@link msg.Actor_GameStart_Ntt.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.Actor_GameStart_Ntt
         * @static
         * @param {msg.IActor_GameStart_Ntt} message Actor_GameStart_Ntt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Actor_GameStart_Ntt.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Actor_GameStart_Ntt message from the specified reader or buffer.
         * @function decode
         * @memberof msg.Actor_GameStart_Ntt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.Actor_GameStart_Ntt} Actor_GameStart_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Actor_GameStart_Ntt.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.Actor_GameStart_Ntt();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.GamersUserID && message.GamersUserID.length))
                        message.GamersUserID = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.GamersUserID.push(reader.int64());
                    } else
                        message.GamersUserID.push(reader.int64());
                    break;
                case 3:
                    if (!(message.GamersCardsCount && message.GamersCardsCount.length))
                        message.GamersCardsCount = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.GamersCardsCount.push(reader.int32());
                    } else
                        message.GamersCardsCount.push(reader.int32());
                    break;
                case 2:
                    if (!(message.GamersCards && message.GamersCards.length))
                        message.GamersCards = [];
                    message.GamersCards.push($root.msg.CGamerCards.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Actor_GameStart_Ntt message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.Actor_GameStart_Ntt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.Actor_GameStart_Ntt} Actor_GameStart_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Actor_GameStart_Ntt.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Actor_GameStart_Ntt message.
         * @function verify
         * @memberof msg.Actor_GameStart_Ntt
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Actor_GameStart_Ntt.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GamersUserID != null && message.hasOwnProperty("GamersUserID")) {
                if (!Array.isArray(message.GamersUserID))
                    return "GamersUserID: array expected";
                for (var i = 0; i < message.GamersUserID.length; ++i)
                    if (!$util.isInteger(message.GamersUserID[i]) && !(message.GamersUserID[i] && $util.isInteger(message.GamersUserID[i].low) && $util.isInteger(message.GamersUserID[i].high)))
                        return "GamersUserID: integer|Long[] expected";
            }
            if (message.GamersCardsCount != null && message.hasOwnProperty("GamersCardsCount")) {
                if (!Array.isArray(message.GamersCardsCount))
                    return "GamersCardsCount: array expected";
                for (var i = 0; i < message.GamersCardsCount.length; ++i)
                    if (!$util.isInteger(message.GamersCardsCount[i]))
                        return "GamersCardsCount: integer[] expected";
            }
            if (message.GamersCards != null && message.hasOwnProperty("GamersCards")) {
                if (!Array.isArray(message.GamersCards))
                    return "GamersCards: array expected";
                for (var i = 0; i < message.GamersCards.length; ++i) {
                    var error = $root.msg.CGamerCards.verify(message.GamersCards[i]);
                    if (error)
                        return "GamersCards." + error;
                }
            }
            return null;
        };

        /**
         * Creates an Actor_GameStart_Ntt message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.Actor_GameStart_Ntt
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.Actor_GameStart_Ntt} Actor_GameStart_Ntt
         */
        Actor_GameStart_Ntt.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.Actor_GameStart_Ntt)
                return object;
            var message = new $root.msg.Actor_GameStart_Ntt();
            if (object.GamersUserID) {
                if (!Array.isArray(object.GamersUserID))
                    throw TypeError(".msg.Actor_GameStart_Ntt.GamersUserID: array expected");
                message.GamersUserID = [];
                for (var i = 0; i < object.GamersUserID.length; ++i)
                    if ($util.Long)
                        (message.GamersUserID[i] = $util.Long.fromValue(object.GamersUserID[i])).unsigned = false;
                    else if (typeof object.GamersUserID[i] === "string")
                        message.GamersUserID[i] = parseInt(object.GamersUserID[i], 10);
                    else if (typeof object.GamersUserID[i] === "number")
                        message.GamersUserID[i] = object.GamersUserID[i];
                    else if (typeof object.GamersUserID[i] === "object")
                        message.GamersUserID[i] = new $util.LongBits(object.GamersUserID[i].low >>> 0, object.GamersUserID[i].high >>> 0).toNumber();
            }
            if (object.GamersCardsCount) {
                if (!Array.isArray(object.GamersCardsCount))
                    throw TypeError(".msg.Actor_GameStart_Ntt.GamersCardsCount: array expected");
                message.GamersCardsCount = [];
                for (var i = 0; i < object.GamersCardsCount.length; ++i)
                    message.GamersCardsCount[i] = object.GamersCardsCount[i] | 0;
            }
            if (object.GamersCards) {
                if (!Array.isArray(object.GamersCards))
                    throw TypeError(".msg.Actor_GameStart_Ntt.GamersCards: array expected");
                message.GamersCards = [];
                for (var i = 0; i < object.GamersCards.length; ++i) {
                    if (typeof object.GamersCards[i] !== "object")
                        throw TypeError(".msg.Actor_GameStart_Ntt.GamersCards: object expected");
                    message.GamersCards[i] = $root.msg.CGamerCards.fromObject(object.GamersCards[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an Actor_GameStart_Ntt message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.Actor_GameStart_Ntt
         * @static
         * @param {msg.Actor_GameStart_Ntt} message Actor_GameStart_Ntt
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Actor_GameStart_Ntt.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.GamersUserID = [];
                object.GamersCards = [];
                object.GamersCardsCount = [];
            }
            if (message.GamersUserID && message.GamersUserID.length) {
                object.GamersUserID = [];
                for (var j = 0; j < message.GamersUserID.length; ++j)
                    if (typeof message.GamersUserID[j] === "number")
                        object.GamersUserID[j] = options.longs === String ? String(message.GamersUserID[j]) : message.GamersUserID[j];
                    else
                        object.GamersUserID[j] = options.longs === String ? $util.Long.prototype.toString.call(message.GamersUserID[j]) : options.longs === Number ? new $util.LongBits(message.GamersUserID[j].low >>> 0, message.GamersUserID[j].high >>> 0).toNumber() : message.GamersUserID[j];
            }
            if (message.GamersCards && message.GamersCards.length) {
                object.GamersCards = [];
                for (var j = 0; j < message.GamersCards.length; ++j)
                    object.GamersCards[j] = $root.msg.CGamerCards.toObject(message.GamersCards[j], options);
            }
            if (message.GamersCardsCount && message.GamersCardsCount.length) {
                object.GamersCardsCount = [];
                for (var j = 0; j < message.GamersCardsCount.length; ++j)
                    object.GamersCardsCount[j] = message.GamersCardsCount[j];
            }
            return object;
        };

        /**
         * Converts this Actor_GameStart_Ntt to JSON.
         * @function toJSON
         * @memberof msg.Actor_GameStart_Ntt
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Actor_GameStart_Ntt.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Actor_GameStart_Ntt;
    })();

    msg.Actor_AuthorityGrabLandlord_Ntt = (function() {

        /**
         * Properties of an Actor_AuthorityGrabLandlord_Ntt.
         * @memberof msg
         * @interface IActor_AuthorityGrabLandlord_Ntt
         * @property {number|Long|null} [UserID] Actor_AuthorityGrabLandlord_Ntt UserID
         */

        /**
         * Constructs a new Actor_AuthorityGrabLandlord_Ntt.
         * @memberof msg
         * @classdesc Represents an Actor_AuthorityGrabLandlord_Ntt.
         * @implements IActor_AuthorityGrabLandlord_Ntt
         * @constructor
         * @param {msg.IActor_AuthorityGrabLandlord_Ntt=} [properties] Properties to set
         */
        function Actor_AuthorityGrabLandlord_Ntt(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Actor_AuthorityGrabLandlord_Ntt UserID.
         * @member {number|Long} UserID
         * @memberof msg.Actor_AuthorityGrabLandlord_Ntt
         * @instance
         */
        Actor_AuthorityGrabLandlord_Ntt.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Actor_AuthorityGrabLandlord_Ntt instance using the specified properties.
         * @function create
         * @memberof msg.Actor_AuthorityGrabLandlord_Ntt
         * @static
         * @param {msg.IActor_AuthorityGrabLandlord_Ntt=} [properties] Properties to set
         * @returns {msg.Actor_AuthorityGrabLandlord_Ntt} Actor_AuthorityGrabLandlord_Ntt instance
         */
        Actor_AuthorityGrabLandlord_Ntt.create = function create(properties) {
            return new Actor_AuthorityGrabLandlord_Ntt(properties);
        };

        /**
         * Encodes the specified Actor_AuthorityGrabLandlord_Ntt message. Does not implicitly {@link msg.Actor_AuthorityGrabLandlord_Ntt.verify|verify} messages.
         * @function encode
         * @memberof msg.Actor_AuthorityGrabLandlord_Ntt
         * @static
         * @param {msg.IActor_AuthorityGrabLandlord_Ntt} message Actor_AuthorityGrabLandlord_Ntt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Actor_AuthorityGrabLandlord_Ntt.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.UserID);
            return writer;
        };

        /**
         * Encodes the specified Actor_AuthorityGrabLandlord_Ntt message, length delimited. Does not implicitly {@link msg.Actor_AuthorityGrabLandlord_Ntt.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.Actor_AuthorityGrabLandlord_Ntt
         * @static
         * @param {msg.IActor_AuthorityGrabLandlord_Ntt} message Actor_AuthorityGrabLandlord_Ntt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Actor_AuthorityGrabLandlord_Ntt.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Actor_AuthorityGrabLandlord_Ntt message from the specified reader or buffer.
         * @function decode
         * @memberof msg.Actor_AuthorityGrabLandlord_Ntt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.Actor_AuthorityGrabLandlord_Ntt} Actor_AuthorityGrabLandlord_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Actor_AuthorityGrabLandlord_Ntt.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.Actor_AuthorityGrabLandlord_Ntt();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Actor_AuthorityGrabLandlord_Ntt message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.Actor_AuthorityGrabLandlord_Ntt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.Actor_AuthorityGrabLandlord_Ntt} Actor_AuthorityGrabLandlord_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Actor_AuthorityGrabLandlord_Ntt.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Actor_AuthorityGrabLandlord_Ntt message.
         * @function verify
         * @memberof msg.Actor_AuthorityGrabLandlord_Ntt
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Actor_AuthorityGrabLandlord_Ntt.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            return null;
        };

        /**
         * Creates an Actor_AuthorityGrabLandlord_Ntt message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.Actor_AuthorityGrabLandlord_Ntt
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.Actor_AuthorityGrabLandlord_Ntt} Actor_AuthorityGrabLandlord_Ntt
         */
        Actor_AuthorityGrabLandlord_Ntt.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.Actor_AuthorityGrabLandlord_Ntt)
                return object;
            var message = new $root.msg.Actor_AuthorityGrabLandlord_Ntt();
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = false;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an Actor_AuthorityGrabLandlord_Ntt message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.Actor_AuthorityGrabLandlord_Ntt
         * @static
         * @param {msg.Actor_AuthorityGrabLandlord_Ntt} message Actor_AuthorityGrabLandlord_Ntt
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Actor_AuthorityGrabLandlord_Ntt.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber() : message.UserID;
            return object;
        };

        /**
         * Converts this Actor_AuthorityGrabLandlord_Ntt to JSON.
         * @function toJSON
         * @memberof msg.Actor_AuthorityGrabLandlord_Ntt
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Actor_AuthorityGrabLandlord_Ntt.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Actor_AuthorityGrabLandlord_Ntt;
    })();

    msg.Actor_AuthorityPlayCard_Ntt = (function() {

        /**
         * Properties of an Actor_AuthorityPlayCard_Ntt.
         * @memberof msg
         * @interface IActor_AuthorityPlayCard_Ntt
         * @property {number|Long|null} [UserID] Actor_AuthorityPlayCard_Ntt UserID
         * @property {boolean|null} [IsFirst] Actor_AuthorityPlayCard_Ntt IsFirst
         */

        /**
         * Constructs a new Actor_AuthorityPlayCard_Ntt.
         * @memberof msg
         * @classdesc Represents an Actor_AuthorityPlayCard_Ntt.
         * @implements IActor_AuthorityPlayCard_Ntt
         * @constructor
         * @param {msg.IActor_AuthorityPlayCard_Ntt=} [properties] Properties to set
         */
        function Actor_AuthorityPlayCard_Ntt(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Actor_AuthorityPlayCard_Ntt UserID.
         * @member {number|Long} UserID
         * @memberof msg.Actor_AuthorityPlayCard_Ntt
         * @instance
         */
        Actor_AuthorityPlayCard_Ntt.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Actor_AuthorityPlayCard_Ntt IsFirst.
         * @member {boolean} IsFirst
         * @memberof msg.Actor_AuthorityPlayCard_Ntt
         * @instance
         */
        Actor_AuthorityPlayCard_Ntt.prototype.IsFirst = false;

        /**
         * Creates a new Actor_AuthorityPlayCard_Ntt instance using the specified properties.
         * @function create
         * @memberof msg.Actor_AuthorityPlayCard_Ntt
         * @static
         * @param {msg.IActor_AuthorityPlayCard_Ntt=} [properties] Properties to set
         * @returns {msg.Actor_AuthorityPlayCard_Ntt} Actor_AuthorityPlayCard_Ntt instance
         */
        Actor_AuthorityPlayCard_Ntt.create = function create(properties) {
            return new Actor_AuthorityPlayCard_Ntt(properties);
        };

        /**
         * Encodes the specified Actor_AuthorityPlayCard_Ntt message. Does not implicitly {@link msg.Actor_AuthorityPlayCard_Ntt.verify|verify} messages.
         * @function encode
         * @memberof msg.Actor_AuthorityPlayCard_Ntt
         * @static
         * @param {msg.IActor_AuthorityPlayCard_Ntt} message Actor_AuthorityPlayCard_Ntt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Actor_AuthorityPlayCard_Ntt.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.UserID);
            if (message.IsFirst != null && message.hasOwnProperty("IsFirst"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.IsFirst);
            return writer;
        };

        /**
         * Encodes the specified Actor_AuthorityPlayCard_Ntt message, length delimited. Does not implicitly {@link msg.Actor_AuthorityPlayCard_Ntt.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.Actor_AuthorityPlayCard_Ntt
         * @static
         * @param {msg.IActor_AuthorityPlayCard_Ntt} message Actor_AuthorityPlayCard_Ntt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Actor_AuthorityPlayCard_Ntt.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Actor_AuthorityPlayCard_Ntt message from the specified reader or buffer.
         * @function decode
         * @memberof msg.Actor_AuthorityPlayCard_Ntt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.Actor_AuthorityPlayCard_Ntt} Actor_AuthorityPlayCard_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Actor_AuthorityPlayCard_Ntt.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.Actor_AuthorityPlayCard_Ntt();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int64();
                    break;
                case 2:
                    message.IsFirst = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Actor_AuthorityPlayCard_Ntt message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.Actor_AuthorityPlayCard_Ntt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.Actor_AuthorityPlayCard_Ntt} Actor_AuthorityPlayCard_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Actor_AuthorityPlayCard_Ntt.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Actor_AuthorityPlayCard_Ntt message.
         * @function verify
         * @memberof msg.Actor_AuthorityPlayCard_Ntt
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Actor_AuthorityPlayCard_Ntt.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            if (message.IsFirst != null && message.hasOwnProperty("IsFirst"))
                if (typeof message.IsFirst !== "boolean")
                    return "IsFirst: boolean expected";
            return null;
        };

        /**
         * Creates an Actor_AuthorityPlayCard_Ntt message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.Actor_AuthorityPlayCard_Ntt
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.Actor_AuthorityPlayCard_Ntt} Actor_AuthorityPlayCard_Ntt
         */
        Actor_AuthorityPlayCard_Ntt.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.Actor_AuthorityPlayCard_Ntt)
                return object;
            var message = new $root.msg.Actor_AuthorityPlayCard_Ntt();
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = false;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber();
            if (object.IsFirst != null)
                message.IsFirst = Boolean(object.IsFirst);
            return message;
        };

        /**
         * Creates a plain object from an Actor_AuthorityPlayCard_Ntt message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.Actor_AuthorityPlayCard_Ntt
         * @static
         * @param {msg.Actor_AuthorityPlayCard_Ntt} message Actor_AuthorityPlayCard_Ntt
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Actor_AuthorityPlayCard_Ntt.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
                object.IsFirst = false;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber() : message.UserID;
            if (message.IsFirst != null && message.hasOwnProperty("IsFirst"))
                object.IsFirst = message.IsFirst;
            return object;
        };

        /**
         * Converts this Actor_AuthorityPlayCard_Ntt to JSON.
         * @function toJSON
         * @memberof msg.Actor_AuthorityPlayCard_Ntt
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Actor_AuthorityPlayCard_Ntt.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Actor_AuthorityPlayCard_Ntt;
    })();

    msg.Actor_SetMultiples_Ntt = (function() {

        /**
         * Properties of an Actor_SetMultiples_Ntt.
         * @memberof msg
         * @interface IActor_SetMultiples_Ntt
         * @property {number|null} [Multiples] Actor_SetMultiples_Ntt Multiples
         */

        /**
         * Constructs a new Actor_SetMultiples_Ntt.
         * @memberof msg
         * @classdesc Represents an Actor_SetMultiples_Ntt.
         * @implements IActor_SetMultiples_Ntt
         * @constructor
         * @param {msg.IActor_SetMultiples_Ntt=} [properties] Properties to set
         */
        function Actor_SetMultiples_Ntt(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Actor_SetMultiples_Ntt Multiples.
         * @member {number} Multiples
         * @memberof msg.Actor_SetMultiples_Ntt
         * @instance
         */
        Actor_SetMultiples_Ntt.prototype.Multiples = 0;

        /**
         * Creates a new Actor_SetMultiples_Ntt instance using the specified properties.
         * @function create
         * @memberof msg.Actor_SetMultiples_Ntt
         * @static
         * @param {msg.IActor_SetMultiples_Ntt=} [properties] Properties to set
         * @returns {msg.Actor_SetMultiples_Ntt} Actor_SetMultiples_Ntt instance
         */
        Actor_SetMultiples_Ntt.create = function create(properties) {
            return new Actor_SetMultiples_Ntt(properties);
        };

        /**
         * Encodes the specified Actor_SetMultiples_Ntt message. Does not implicitly {@link msg.Actor_SetMultiples_Ntt.verify|verify} messages.
         * @function encode
         * @memberof msg.Actor_SetMultiples_Ntt
         * @static
         * @param {msg.IActor_SetMultiples_Ntt} message Actor_SetMultiples_Ntt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Actor_SetMultiples_Ntt.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Multiples != null && message.hasOwnProperty("Multiples"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Multiples);
            return writer;
        };

        /**
         * Encodes the specified Actor_SetMultiples_Ntt message, length delimited. Does not implicitly {@link msg.Actor_SetMultiples_Ntt.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.Actor_SetMultiples_Ntt
         * @static
         * @param {msg.IActor_SetMultiples_Ntt} message Actor_SetMultiples_Ntt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Actor_SetMultiples_Ntt.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Actor_SetMultiples_Ntt message from the specified reader or buffer.
         * @function decode
         * @memberof msg.Actor_SetMultiples_Ntt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.Actor_SetMultiples_Ntt} Actor_SetMultiples_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Actor_SetMultiples_Ntt.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.Actor_SetMultiples_Ntt();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Multiples = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Actor_SetMultiples_Ntt message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.Actor_SetMultiples_Ntt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.Actor_SetMultiples_Ntt} Actor_SetMultiples_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Actor_SetMultiples_Ntt.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Actor_SetMultiples_Ntt message.
         * @function verify
         * @memberof msg.Actor_SetMultiples_Ntt
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Actor_SetMultiples_Ntt.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Multiples != null && message.hasOwnProperty("Multiples"))
                if (!$util.isInteger(message.Multiples))
                    return "Multiples: integer expected";
            return null;
        };

        /**
         * Creates an Actor_SetMultiples_Ntt message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.Actor_SetMultiples_Ntt
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.Actor_SetMultiples_Ntt} Actor_SetMultiples_Ntt
         */
        Actor_SetMultiples_Ntt.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.Actor_SetMultiples_Ntt)
                return object;
            var message = new $root.msg.Actor_SetMultiples_Ntt();
            if (object.Multiples != null)
                message.Multiples = object.Multiples | 0;
            return message;
        };

        /**
         * Creates a plain object from an Actor_SetMultiples_Ntt message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.Actor_SetMultiples_Ntt
         * @static
         * @param {msg.Actor_SetMultiples_Ntt} message Actor_SetMultiples_Ntt
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Actor_SetMultiples_Ntt.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Multiples = 0;
            if (message.Multiples != null && message.hasOwnProperty("Multiples"))
                object.Multiples = message.Multiples;
            return object;
        };

        /**
         * Converts this Actor_SetMultiples_Ntt to JSON.
         * @function toJSON
         * @memberof msg.Actor_SetMultiples_Ntt
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Actor_SetMultiples_Ntt.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Actor_SetMultiples_Ntt;
    })();

    msg.Actor_SetLandlord_Ntt = (function() {

        /**
         * Properties of an Actor_SetLandlord_Ntt.
         * @memberof msg
         * @interface IActor_SetLandlord_Ntt
         * @property {number|Long|null} [UserID] Actor_SetLandlord_Ntt UserID
         * @property {Array.<msg.ICCard>|null} [LordCards] Actor_SetLandlord_Ntt LordCards
         */

        /**
         * Constructs a new Actor_SetLandlord_Ntt.
         * @memberof msg
         * @classdesc Represents an Actor_SetLandlord_Ntt.
         * @implements IActor_SetLandlord_Ntt
         * @constructor
         * @param {msg.IActor_SetLandlord_Ntt=} [properties] Properties to set
         */
        function Actor_SetLandlord_Ntt(properties) {
            this.LordCards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Actor_SetLandlord_Ntt UserID.
         * @member {number|Long} UserID
         * @memberof msg.Actor_SetLandlord_Ntt
         * @instance
         */
        Actor_SetLandlord_Ntt.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Actor_SetLandlord_Ntt LordCards.
         * @member {Array.<msg.ICCard>} LordCards
         * @memberof msg.Actor_SetLandlord_Ntt
         * @instance
         */
        Actor_SetLandlord_Ntt.prototype.LordCards = $util.emptyArray;

        /**
         * Creates a new Actor_SetLandlord_Ntt instance using the specified properties.
         * @function create
         * @memberof msg.Actor_SetLandlord_Ntt
         * @static
         * @param {msg.IActor_SetLandlord_Ntt=} [properties] Properties to set
         * @returns {msg.Actor_SetLandlord_Ntt} Actor_SetLandlord_Ntt instance
         */
        Actor_SetLandlord_Ntt.create = function create(properties) {
            return new Actor_SetLandlord_Ntt(properties);
        };

        /**
         * Encodes the specified Actor_SetLandlord_Ntt message. Does not implicitly {@link msg.Actor_SetLandlord_Ntt.verify|verify} messages.
         * @function encode
         * @memberof msg.Actor_SetLandlord_Ntt
         * @static
         * @param {msg.IActor_SetLandlord_Ntt} message Actor_SetLandlord_Ntt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Actor_SetLandlord_Ntt.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.UserID);
            if (message.LordCards != null && message.LordCards.length)
                for (var i = 0; i < message.LordCards.length; ++i)
                    $root.msg.CCard.encode(message.LordCards[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Actor_SetLandlord_Ntt message, length delimited. Does not implicitly {@link msg.Actor_SetLandlord_Ntt.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.Actor_SetLandlord_Ntt
         * @static
         * @param {msg.IActor_SetLandlord_Ntt} message Actor_SetLandlord_Ntt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Actor_SetLandlord_Ntt.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Actor_SetLandlord_Ntt message from the specified reader or buffer.
         * @function decode
         * @memberof msg.Actor_SetLandlord_Ntt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.Actor_SetLandlord_Ntt} Actor_SetLandlord_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Actor_SetLandlord_Ntt.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.Actor_SetLandlord_Ntt();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int64();
                    break;
                case 2:
                    if (!(message.LordCards && message.LordCards.length))
                        message.LordCards = [];
                    message.LordCards.push($root.msg.CCard.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Actor_SetLandlord_Ntt message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.Actor_SetLandlord_Ntt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.Actor_SetLandlord_Ntt} Actor_SetLandlord_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Actor_SetLandlord_Ntt.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Actor_SetLandlord_Ntt message.
         * @function verify
         * @memberof msg.Actor_SetLandlord_Ntt
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Actor_SetLandlord_Ntt.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            if (message.LordCards != null && message.hasOwnProperty("LordCards")) {
                if (!Array.isArray(message.LordCards))
                    return "LordCards: array expected";
                for (var i = 0; i < message.LordCards.length; ++i) {
                    var error = $root.msg.CCard.verify(message.LordCards[i]);
                    if (error)
                        return "LordCards." + error;
                }
            }
            return null;
        };

        /**
         * Creates an Actor_SetLandlord_Ntt message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.Actor_SetLandlord_Ntt
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.Actor_SetLandlord_Ntt} Actor_SetLandlord_Ntt
         */
        Actor_SetLandlord_Ntt.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.Actor_SetLandlord_Ntt)
                return object;
            var message = new $root.msg.Actor_SetLandlord_Ntt();
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = false;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber();
            if (object.LordCards) {
                if (!Array.isArray(object.LordCards))
                    throw TypeError(".msg.Actor_SetLandlord_Ntt.LordCards: array expected");
                message.LordCards = [];
                for (var i = 0; i < object.LordCards.length; ++i) {
                    if (typeof object.LordCards[i] !== "object")
                        throw TypeError(".msg.Actor_SetLandlord_Ntt.LordCards: object expected");
                    message.LordCards[i] = $root.msg.CCard.fromObject(object.LordCards[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an Actor_SetLandlord_Ntt message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.Actor_SetLandlord_Ntt
         * @static
         * @param {msg.Actor_SetLandlord_Ntt} message Actor_SetLandlord_Ntt
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Actor_SetLandlord_Ntt.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.LordCards = [];
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber() : message.UserID;
            if (message.LordCards && message.LordCards.length) {
                object.LordCards = [];
                for (var j = 0; j < message.LordCards.length; ++j)
                    object.LordCards[j] = $root.msg.CCard.toObject(message.LordCards[j], options);
            }
            return object;
        };

        /**
         * Converts this Actor_SetLandlord_Ntt to JSON.
         * @function toJSON
         * @memberof msg.Actor_SetLandlord_Ntt
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Actor_SetLandlord_Ntt.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Actor_SetLandlord_Ntt;
    })();

    msg.Actor_Gameover_Ntt = (function() {

        /**
         * Properties of an Actor_Gameover_Ntt.
         * @memberof msg
         * @interface IActor_Gameover_Ntt
         * @property {msg.CIdentity|null} [Winner] Actor_Gameover_Ntt Winner
         * @property {number|Long|null} [BasePointPerMatch] Actor_Gameover_Ntt BasePointPerMatch
         * @property {number|null} [Multiples] Actor_Gameover_Ntt Multiples
         */

        /**
         * Constructs a new Actor_Gameover_Ntt.
         * @memberof msg
         * @classdesc Represents an Actor_Gameover_Ntt.
         * @implements IActor_Gameover_Ntt
         * @constructor
         * @param {msg.IActor_Gameover_Ntt=} [properties] Properties to set
         */
        function Actor_Gameover_Ntt(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Actor_Gameover_Ntt Winner.
         * @member {msg.CIdentity} Winner
         * @memberof msg.Actor_Gameover_Ntt
         * @instance
         */
        Actor_Gameover_Ntt.prototype.Winner = 0;

        /**
         * Actor_Gameover_Ntt BasePointPerMatch.
         * @member {number|Long} BasePointPerMatch
         * @memberof msg.Actor_Gameover_Ntt
         * @instance
         */
        Actor_Gameover_Ntt.prototype.BasePointPerMatch = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Actor_Gameover_Ntt Multiples.
         * @member {number} Multiples
         * @memberof msg.Actor_Gameover_Ntt
         * @instance
         */
        Actor_Gameover_Ntt.prototype.Multiples = 0;

        /**
         * Creates a new Actor_Gameover_Ntt instance using the specified properties.
         * @function create
         * @memberof msg.Actor_Gameover_Ntt
         * @static
         * @param {msg.IActor_Gameover_Ntt=} [properties] Properties to set
         * @returns {msg.Actor_Gameover_Ntt} Actor_Gameover_Ntt instance
         */
        Actor_Gameover_Ntt.create = function create(properties) {
            return new Actor_Gameover_Ntt(properties);
        };

        /**
         * Encodes the specified Actor_Gameover_Ntt message. Does not implicitly {@link msg.Actor_Gameover_Ntt.verify|verify} messages.
         * @function encode
         * @memberof msg.Actor_Gameover_Ntt
         * @static
         * @param {msg.IActor_Gameover_Ntt} message Actor_Gameover_Ntt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Actor_Gameover_Ntt.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Winner != null && message.hasOwnProperty("Winner"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Winner);
            if (message.BasePointPerMatch != null && message.hasOwnProperty("BasePointPerMatch"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.BasePointPerMatch);
            if (message.Multiples != null && message.hasOwnProperty("Multiples"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Multiples);
            return writer;
        };

        /**
         * Encodes the specified Actor_Gameover_Ntt message, length delimited. Does not implicitly {@link msg.Actor_Gameover_Ntt.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.Actor_Gameover_Ntt
         * @static
         * @param {msg.IActor_Gameover_Ntt} message Actor_Gameover_Ntt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Actor_Gameover_Ntt.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Actor_Gameover_Ntt message from the specified reader or buffer.
         * @function decode
         * @memberof msg.Actor_Gameover_Ntt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.Actor_Gameover_Ntt} Actor_Gameover_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Actor_Gameover_Ntt.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.Actor_Gameover_Ntt();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Winner = reader.int32();
                    break;
                case 2:
                    message.BasePointPerMatch = reader.int64();
                    break;
                case 3:
                    message.Multiples = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Actor_Gameover_Ntt message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.Actor_Gameover_Ntt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.Actor_Gameover_Ntt} Actor_Gameover_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Actor_Gameover_Ntt.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Actor_Gameover_Ntt message.
         * @function verify
         * @memberof msg.Actor_Gameover_Ntt
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Actor_Gameover_Ntt.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Winner != null && message.hasOwnProperty("Winner"))
                switch (message.Winner) {
                default:
                    return "Winner: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.BasePointPerMatch != null && message.hasOwnProperty("BasePointPerMatch"))
                if (!$util.isInteger(message.BasePointPerMatch) && !(message.BasePointPerMatch && $util.isInteger(message.BasePointPerMatch.low) && $util.isInteger(message.BasePointPerMatch.high)))
                    return "BasePointPerMatch: integer|Long expected";
            if (message.Multiples != null && message.hasOwnProperty("Multiples"))
                if (!$util.isInteger(message.Multiples))
                    return "Multiples: integer expected";
            return null;
        };

        /**
         * Creates an Actor_Gameover_Ntt message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.Actor_Gameover_Ntt
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.Actor_Gameover_Ntt} Actor_Gameover_Ntt
         */
        Actor_Gameover_Ntt.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.Actor_Gameover_Ntt)
                return object;
            var message = new $root.msg.Actor_Gameover_Ntt();
            switch (object.Winner) {
            case "CIdentity_NULL":
            case 0:
                message.Winner = 0;
                break;
            case "Farmer":
            case 1:
                message.Winner = 1;
                break;
            case "Landlord":
            case 2:
                message.Winner = 2;
                break;
            }
            if (object.BasePointPerMatch != null)
                if ($util.Long)
                    (message.BasePointPerMatch = $util.Long.fromValue(object.BasePointPerMatch)).unsigned = false;
                else if (typeof object.BasePointPerMatch === "string")
                    message.BasePointPerMatch = parseInt(object.BasePointPerMatch, 10);
                else if (typeof object.BasePointPerMatch === "number")
                    message.BasePointPerMatch = object.BasePointPerMatch;
                else if (typeof object.BasePointPerMatch === "object")
                    message.BasePointPerMatch = new $util.LongBits(object.BasePointPerMatch.low >>> 0, object.BasePointPerMatch.high >>> 0).toNumber();
            if (object.Multiples != null)
                message.Multiples = object.Multiples | 0;
            return message;
        };

        /**
         * Creates a plain object from an Actor_Gameover_Ntt message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.Actor_Gameover_Ntt
         * @static
         * @param {msg.Actor_Gameover_Ntt} message Actor_Gameover_Ntt
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Actor_Gameover_Ntt.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Winner = options.enums === String ? "CIdentity_NULL" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BasePointPerMatch = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BasePointPerMatch = options.longs === String ? "0" : 0;
                object.Multiples = 0;
            }
            if (message.Winner != null && message.hasOwnProperty("Winner"))
                object.Winner = options.enums === String ? $root.msg.CIdentity[message.Winner] : message.Winner;
            if (message.BasePointPerMatch != null && message.hasOwnProperty("BasePointPerMatch"))
                if (typeof message.BasePointPerMatch === "number")
                    object.BasePointPerMatch = options.longs === String ? String(message.BasePointPerMatch) : message.BasePointPerMatch;
                else
                    object.BasePointPerMatch = options.longs === String ? $util.Long.prototype.toString.call(message.BasePointPerMatch) : options.longs === Number ? new $util.LongBits(message.BasePointPerMatch.low >>> 0, message.BasePointPerMatch.high >>> 0).toNumber() : message.BasePointPerMatch;
            if (message.Multiples != null && message.hasOwnProperty("Multiples"))
                object.Multiples = message.Multiples;
            return object;
        };

        /**
         * Converts this Actor_Gameover_Ntt to JSON.
         * @function toJSON
         * @memberof msg.Actor_Gameover_Ntt
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Actor_Gameover_Ntt.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Actor_Gameover_Ntt;
    })();

    msg.Actor_GamerMoneyLess_Ntt = (function() {

        /**
         * Properties of an Actor_GamerMoneyLess_Ntt.
         * @memberof msg
         * @interface IActor_GamerMoneyLess_Ntt
         * @property {number|Long|null} [UserID] Actor_GamerMoneyLess_Ntt UserID
         */

        /**
         * Constructs a new Actor_GamerMoneyLess_Ntt.
         * @memberof msg
         * @classdesc Represents an Actor_GamerMoneyLess_Ntt.
         * @implements IActor_GamerMoneyLess_Ntt
         * @constructor
         * @param {msg.IActor_GamerMoneyLess_Ntt=} [properties] Properties to set
         */
        function Actor_GamerMoneyLess_Ntt(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Actor_GamerMoneyLess_Ntt UserID.
         * @member {number|Long} UserID
         * @memberof msg.Actor_GamerMoneyLess_Ntt
         * @instance
         */
        Actor_GamerMoneyLess_Ntt.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Actor_GamerMoneyLess_Ntt instance using the specified properties.
         * @function create
         * @memberof msg.Actor_GamerMoneyLess_Ntt
         * @static
         * @param {msg.IActor_GamerMoneyLess_Ntt=} [properties] Properties to set
         * @returns {msg.Actor_GamerMoneyLess_Ntt} Actor_GamerMoneyLess_Ntt instance
         */
        Actor_GamerMoneyLess_Ntt.create = function create(properties) {
            return new Actor_GamerMoneyLess_Ntt(properties);
        };

        /**
         * Encodes the specified Actor_GamerMoneyLess_Ntt message. Does not implicitly {@link msg.Actor_GamerMoneyLess_Ntt.verify|verify} messages.
         * @function encode
         * @memberof msg.Actor_GamerMoneyLess_Ntt
         * @static
         * @param {msg.IActor_GamerMoneyLess_Ntt} message Actor_GamerMoneyLess_Ntt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Actor_GamerMoneyLess_Ntt.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.UserID);
            return writer;
        };

        /**
         * Encodes the specified Actor_GamerMoneyLess_Ntt message, length delimited. Does not implicitly {@link msg.Actor_GamerMoneyLess_Ntt.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.Actor_GamerMoneyLess_Ntt
         * @static
         * @param {msg.IActor_GamerMoneyLess_Ntt} message Actor_GamerMoneyLess_Ntt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Actor_GamerMoneyLess_Ntt.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Actor_GamerMoneyLess_Ntt message from the specified reader or buffer.
         * @function decode
         * @memberof msg.Actor_GamerMoneyLess_Ntt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.Actor_GamerMoneyLess_Ntt} Actor_GamerMoneyLess_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Actor_GamerMoneyLess_Ntt.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.Actor_GamerMoneyLess_Ntt();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Actor_GamerMoneyLess_Ntt message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.Actor_GamerMoneyLess_Ntt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.Actor_GamerMoneyLess_Ntt} Actor_GamerMoneyLess_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Actor_GamerMoneyLess_Ntt.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Actor_GamerMoneyLess_Ntt message.
         * @function verify
         * @memberof msg.Actor_GamerMoneyLess_Ntt
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Actor_GamerMoneyLess_Ntt.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            return null;
        };

        /**
         * Creates an Actor_GamerMoneyLess_Ntt message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.Actor_GamerMoneyLess_Ntt
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.Actor_GamerMoneyLess_Ntt} Actor_GamerMoneyLess_Ntt
         */
        Actor_GamerMoneyLess_Ntt.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.Actor_GamerMoneyLess_Ntt)
                return object;
            var message = new $root.msg.Actor_GamerMoneyLess_Ntt();
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = false;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an Actor_GamerMoneyLess_Ntt message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.Actor_GamerMoneyLess_Ntt
         * @static
         * @param {msg.Actor_GamerMoneyLess_Ntt} message Actor_GamerMoneyLess_Ntt
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Actor_GamerMoneyLess_Ntt.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber() : message.UserID;
            return object;
        };

        /**
         * Converts this Actor_GamerMoneyLess_Ntt to JSON.
         * @function toJSON
         * @memberof msg.Actor_GamerMoneyLess_Ntt
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Actor_GamerMoneyLess_Ntt.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Actor_GamerMoneyLess_Ntt;
    })();

    /**
     * Result enum.
     * @name msg.Result
     * @enum {string}
     * @property {number} REGISTER_SUCCESS=0 REGISTER_SUCCESS value
     * @property {number} REGISTER_FAIL=1 REGISTER_FAIL value
     * @property {number} LOGIN_SUCCESS=2 LOGIN_SUCCESS value
     * @property {number} LOGIN_FAIL=3 LOGIN_FAIL value
     */
    msg.Result = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "REGISTER_SUCCESS"] = 0;
        values[valuesById[1] = "REGISTER_FAIL"] = 1;
        values[valuesById[2] = "LOGIN_SUCCESS"] = 2;
        values[valuesById[3] = "LOGIN_FAIL"] = 3;
        return values;
    })();

    msg.Test = (function() {

        /**
         * Properties of a Test.
         * @memberof msg
         * @interface ITest
         * @property {string|null} [Test] Test Test
         */

        /**
         * Constructs a new Test.
         * @memberof msg
         * @classdesc Represents a Test.
         * @implements ITest
         * @constructor
         * @param {msg.ITest=} [properties] Properties to set
         */
        function Test(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Test Test.
         * @member {string} Test
         * @memberof msg.Test
         * @instance
         */
        Test.prototype.Test = "";

        /**
         * Creates a new Test instance using the specified properties.
         * @function create
         * @memberof msg.Test
         * @static
         * @param {msg.ITest=} [properties] Properties to set
         * @returns {msg.Test} Test instance
         */
        Test.create = function create(properties) {
            return new Test(properties);
        };

        /**
         * Encodes the specified Test message. Does not implicitly {@link msg.Test.verify|verify} messages.
         * @function encode
         * @memberof msg.Test
         * @static
         * @param {msg.ITest} message Test message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Test.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Test != null && message.hasOwnProperty("Test"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Test);
            return writer;
        };

        /**
         * Encodes the specified Test message, length delimited. Does not implicitly {@link msg.Test.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.Test
         * @static
         * @param {msg.ITest} message Test message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Test.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Test message from the specified reader or buffer.
         * @function decode
         * @memberof msg.Test
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.Test} Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Test.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.Test();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.Test = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Test message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.Test
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.Test} Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Test.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Test message.
         * @function verify
         * @memberof msg.Test
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Test.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Test != null && message.hasOwnProperty("Test"))
                if (!$util.isString(message.Test))
                    return "Test: string expected";
            return null;
        };

        /**
         * Creates a Test message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.Test
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.Test} Test
         */
        Test.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.Test)
                return object;
            var message = new $root.msg.Test();
            if (object.Test != null)
                message.Test = String(object.Test);
            return message;
        };

        /**
         * Creates a plain object from a Test message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.Test
         * @static
         * @param {msg.Test} message Test
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Test.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Test = "";
            if (message.Test != null && message.hasOwnProperty("Test"))
                object.Test = message.Test;
            return object;
        };

        /**
         * Converts this Test to JSON.
         * @function toJSON
         * @memberof msg.Test
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Test.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Test;
    })();

    msg.UserLogin = (function() {

        /**
         * Properties of a UserLogin.
         * @memberof msg
         * @interface IUserLogin
         * @property {string|null} [LoginName] UserLogin LoginName
         * @property {string|null} [LoginPW] UserLogin LoginPW
         */

        /**
         * Constructs a new UserLogin.
         * @memberof msg
         * @classdesc Represents a UserLogin.
         * @implements IUserLogin
         * @constructor
         * @param {msg.IUserLogin=} [properties] Properties to set
         */
        function UserLogin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserLogin LoginName.
         * @member {string} LoginName
         * @memberof msg.UserLogin
         * @instance
         */
        UserLogin.prototype.LoginName = "";

        /**
         * UserLogin LoginPW.
         * @member {string} LoginPW
         * @memberof msg.UserLogin
         * @instance
         */
        UserLogin.prototype.LoginPW = "";

        /**
         * Creates a new UserLogin instance using the specified properties.
         * @function create
         * @memberof msg.UserLogin
         * @static
         * @param {msg.IUserLogin=} [properties] Properties to set
         * @returns {msg.UserLogin} UserLogin instance
         */
        UserLogin.create = function create(properties) {
            return new UserLogin(properties);
        };

        /**
         * Encodes the specified UserLogin message. Does not implicitly {@link msg.UserLogin.verify|verify} messages.
         * @function encode
         * @memberof msg.UserLogin
         * @static
         * @param {msg.IUserLogin} message UserLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLogin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.LoginName != null && message.hasOwnProperty("LoginName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.LoginName);
            if (message.LoginPW != null && message.hasOwnProperty("LoginPW"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.LoginPW);
            return writer;
        };

        /**
         * Encodes the specified UserLogin message, length delimited. Does not implicitly {@link msg.UserLogin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.UserLogin
         * @static
         * @param {msg.IUserLogin} message UserLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLogin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserLogin message from the specified reader or buffer.
         * @function decode
         * @memberof msg.UserLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.UserLogin} UserLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLogin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.UserLogin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.LoginName = reader.string();
                    break;
                case 2:
                    message.LoginPW = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserLogin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.UserLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.UserLogin} UserLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLogin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserLogin message.
         * @function verify
         * @memberof msg.UserLogin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserLogin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.LoginName != null && message.hasOwnProperty("LoginName"))
                if (!$util.isString(message.LoginName))
                    return "LoginName: string expected";
            if (message.LoginPW != null && message.hasOwnProperty("LoginPW"))
                if (!$util.isString(message.LoginPW))
                    return "LoginPW: string expected";
            return null;
        };

        /**
         * Creates a UserLogin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.UserLogin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.UserLogin} UserLogin
         */
        UserLogin.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.UserLogin)
                return object;
            var message = new $root.msg.UserLogin();
            if (object.LoginName != null)
                message.LoginName = String(object.LoginName);
            if (object.LoginPW != null)
                message.LoginPW = String(object.LoginPW);
            return message;
        };

        /**
         * Creates a plain object from a UserLogin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.UserLogin
         * @static
         * @param {msg.UserLogin} message UserLogin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserLogin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.LoginName = "";
                object.LoginPW = "";
            }
            if (message.LoginName != null && message.hasOwnProperty("LoginName"))
                object.LoginName = message.LoginName;
            if (message.LoginPW != null && message.hasOwnProperty("LoginPW"))
                object.LoginPW = message.LoginPW;
            return object;
        };

        /**
         * Converts this UserLogin to JSON.
         * @function toJSON
         * @memberof msg.UserLogin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserLogin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserLogin;
    })();

    msg.UserRegister = (function() {

        /**
         * Properties of a UserRegister.
         * @memberof msg
         * @interface IUserRegister
         * @property {string|null} [LoginName] UserRegister LoginName
         * @property {string|null} [LoginPW] UserRegister LoginPW
         */

        /**
         * Constructs a new UserRegister.
         * @memberof msg
         * @classdesc Represents a UserRegister.
         * @implements IUserRegister
         * @constructor
         * @param {msg.IUserRegister=} [properties] Properties to set
         */
        function UserRegister(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserRegister LoginName.
         * @member {string} LoginName
         * @memberof msg.UserRegister
         * @instance
         */
        UserRegister.prototype.LoginName = "";

        /**
         * UserRegister LoginPW.
         * @member {string} LoginPW
         * @memberof msg.UserRegister
         * @instance
         */
        UserRegister.prototype.LoginPW = "";

        /**
         * Creates a new UserRegister instance using the specified properties.
         * @function create
         * @memberof msg.UserRegister
         * @static
         * @param {msg.IUserRegister=} [properties] Properties to set
         * @returns {msg.UserRegister} UserRegister instance
         */
        UserRegister.create = function create(properties) {
            return new UserRegister(properties);
        };

        /**
         * Encodes the specified UserRegister message. Does not implicitly {@link msg.UserRegister.verify|verify} messages.
         * @function encode
         * @memberof msg.UserRegister
         * @static
         * @param {msg.IUserRegister} message UserRegister message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserRegister.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.LoginName != null && message.hasOwnProperty("LoginName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.LoginName);
            if (message.LoginPW != null && message.hasOwnProperty("LoginPW"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.LoginPW);
            return writer;
        };

        /**
         * Encodes the specified UserRegister message, length delimited. Does not implicitly {@link msg.UserRegister.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.UserRegister
         * @static
         * @param {msg.IUserRegister} message UserRegister message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserRegister.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserRegister message from the specified reader or buffer.
         * @function decode
         * @memberof msg.UserRegister
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.UserRegister} UserRegister
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserRegister.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.UserRegister();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.LoginName = reader.string();
                    break;
                case 2:
                    message.LoginPW = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserRegister message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.UserRegister
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.UserRegister} UserRegister
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserRegister.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserRegister message.
         * @function verify
         * @memberof msg.UserRegister
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserRegister.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.LoginName != null && message.hasOwnProperty("LoginName"))
                if (!$util.isString(message.LoginName))
                    return "LoginName: string expected";
            if (message.LoginPW != null && message.hasOwnProperty("LoginPW"))
                if (!$util.isString(message.LoginPW))
                    return "LoginPW: string expected";
            return null;
        };

        /**
         * Creates a UserRegister message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.UserRegister
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.UserRegister} UserRegister
         */
        UserRegister.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.UserRegister)
                return object;
            var message = new $root.msg.UserRegister();
            if (object.LoginName != null)
                message.LoginName = String(object.LoginName);
            if (object.LoginPW != null)
                message.LoginPW = String(object.LoginPW);
            return message;
        };

        /**
         * Creates a plain object from a UserRegister message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.UserRegister
         * @static
         * @param {msg.UserRegister} message UserRegister
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserRegister.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.LoginName = "";
                object.LoginPW = "";
            }
            if (message.LoginName != null && message.hasOwnProperty("LoginName"))
                object.LoginName = message.LoginName;
            if (message.LoginPW != null && message.hasOwnProperty("LoginPW"))
                object.LoginPW = message.LoginPW;
            return object;
        };

        /**
         * Converts this UserRegister to JSON.
         * @function toJSON
         * @memberof msg.UserRegister
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserRegister.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserRegister;
    })();

    msg.UserResult = (function() {

        /**
         * Properties of a UserResult.
         * @memberof msg
         * @interface IUserResult
         * @property {msg.Result|null} [RetResult] UserResult RetResult
         * @property {string|null} [ErrorInfo] UserResult ErrorInfo
         */

        /**
         * Constructs a new UserResult.
         * @memberof msg
         * @classdesc Represents a UserResult.
         * @implements IUserResult
         * @constructor
         * @param {msg.IUserResult=} [properties] Properties to set
         */
        function UserResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserResult RetResult.
         * @member {msg.Result} RetResult
         * @memberof msg.UserResult
         * @instance
         */
        UserResult.prototype.RetResult = 0;

        /**
         * UserResult ErrorInfo.
         * @member {string} ErrorInfo
         * @memberof msg.UserResult
         * @instance
         */
        UserResult.prototype.ErrorInfo = "";

        /**
         * Creates a new UserResult instance using the specified properties.
         * @function create
         * @memberof msg.UserResult
         * @static
         * @param {msg.IUserResult=} [properties] Properties to set
         * @returns {msg.UserResult} UserResult instance
         */
        UserResult.create = function create(properties) {
            return new UserResult(properties);
        };

        /**
         * Encodes the specified UserResult message. Does not implicitly {@link msg.UserResult.verify|verify} messages.
         * @function encode
         * @memberof msg.UserResult
         * @static
         * @param {msg.IUserResult} message UserResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RetResult != null && message.hasOwnProperty("RetResult"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.RetResult);
            if (message.ErrorInfo != null && message.hasOwnProperty("ErrorInfo"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.ErrorInfo);
            return writer;
        };

        /**
         * Encodes the specified UserResult message, length delimited. Does not implicitly {@link msg.UserResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.UserResult
         * @static
         * @param {msg.IUserResult} message UserResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.UserResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.UserResult} UserResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.UserResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.RetResult = reader.int32();
                    break;
                case 2:
                    message.ErrorInfo = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.UserResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.UserResult} UserResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserResult message.
         * @function verify
         * @memberof msg.UserResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RetResult != null && message.hasOwnProperty("RetResult"))
                switch (message.RetResult) {
                default:
                    return "RetResult: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.ErrorInfo != null && message.hasOwnProperty("ErrorInfo"))
                if (!$util.isString(message.ErrorInfo))
                    return "ErrorInfo: string expected";
            return null;
        };

        /**
         * Creates a UserResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.UserResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.UserResult} UserResult
         */
        UserResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.UserResult)
                return object;
            var message = new $root.msg.UserResult();
            switch (object.RetResult) {
            case "REGISTER_SUCCESS":
            case 0:
                message.RetResult = 0;
                break;
            case "REGISTER_FAIL":
            case 1:
                message.RetResult = 1;
                break;
            case "LOGIN_SUCCESS":
            case 2:
                message.RetResult = 2;
                break;
            case "LOGIN_FAIL":
            case 3:
                message.RetResult = 3;
                break;
            }
            if (object.ErrorInfo != null)
                message.ErrorInfo = String(object.ErrorInfo);
            return message;
        };

        /**
         * Creates a plain object from a UserResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.UserResult
         * @static
         * @param {msg.UserResult} message UserResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.RetResult = options.enums === String ? "REGISTER_SUCCESS" : 0;
                object.ErrorInfo = "";
            }
            if (message.RetResult != null && message.hasOwnProperty("RetResult"))
                object.RetResult = options.enums === String ? $root.msg.Result[message.RetResult] : message.RetResult;
            if (message.ErrorInfo != null && message.hasOwnProperty("ErrorInfo"))
                object.ErrorInfo = message.ErrorInfo;
            return object;
        };

        /**
         * Converts this UserResult to JSON.
         * @function toJSON
         * @memberof msg.UserResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserResult;
    })();

    msg.UserST = (function() {

        /**
         * Properties of a UserST.
         * @memberof msg
         * @interface IUserST
         * @property {string|null} [UID] UserST UID
         * @property {string|null} [ServerID] UserST ServerID
         * @property {string|null} [RoleUID] UserST RoleUID
         * @property {string|null} [RoleName] UserST RoleName
         * @property {string|null} [RoleLev] UserST RoleLev
         * @property {string|null} [Coin] UserST Coin
         */

        /**
         * Constructs a new UserST.
         * @memberof msg
         * @classdesc Represents a UserST.
         * @implements IUserST
         * @constructor
         * @param {msg.IUserST=} [properties] Properties to set
         */
        function UserST(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserST UID.
         * @member {string} UID
         * @memberof msg.UserST
         * @instance
         */
        UserST.prototype.UID = "";

        /**
         * UserST ServerID.
         * @member {string} ServerID
         * @memberof msg.UserST
         * @instance
         */
        UserST.prototype.ServerID = "";

        /**
         * UserST RoleUID.
         * @member {string} RoleUID
         * @memberof msg.UserST
         * @instance
         */
        UserST.prototype.RoleUID = "";

        /**
         * UserST RoleName.
         * @member {string} RoleName
         * @memberof msg.UserST
         * @instance
         */
        UserST.prototype.RoleName = "";

        /**
         * UserST RoleLev.
         * @member {string} RoleLev
         * @memberof msg.UserST
         * @instance
         */
        UserST.prototype.RoleLev = "";

        /**
         * UserST Coin.
         * @member {string} Coin
         * @memberof msg.UserST
         * @instance
         */
        UserST.prototype.Coin = "";

        /**
         * Creates a new UserST instance using the specified properties.
         * @function create
         * @memberof msg.UserST
         * @static
         * @param {msg.IUserST=} [properties] Properties to set
         * @returns {msg.UserST} UserST instance
         */
        UserST.create = function create(properties) {
            return new UserST(properties);
        };

        /**
         * Encodes the specified UserST message. Does not implicitly {@link msg.UserST.verify|verify} messages.
         * @function encode
         * @memberof msg.UserST
         * @static
         * @param {msg.IUserST} message UserST message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserST.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UID != null && message.hasOwnProperty("UID"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.UID);
            if (message.ServerID != null && message.hasOwnProperty("ServerID"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.ServerID);
            if (message.RoleUID != null && message.hasOwnProperty("RoleUID"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.RoleUID);
            if (message.RoleName != null && message.hasOwnProperty("RoleName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.RoleName);
            if (message.RoleLev != null && message.hasOwnProperty("RoleLev"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.RoleLev);
            if (message.Coin != null && message.hasOwnProperty("Coin"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.Coin);
            return writer;
        };

        /**
         * Encodes the specified UserST message, length delimited. Does not implicitly {@link msg.UserST.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.UserST
         * @static
         * @param {msg.IUserST} message UserST message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserST.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserST message from the specified reader or buffer.
         * @function decode
         * @memberof msg.UserST
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.UserST} UserST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserST.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.UserST();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UID = reader.string();
                    break;
                case 2:
                    message.ServerID = reader.string();
                    break;
                case 3:
                    message.RoleUID = reader.string();
                    break;
                case 4:
                    message.RoleName = reader.string();
                    break;
                case 5:
                    message.RoleLev = reader.string();
                    break;
                case 6:
                    message.Coin = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserST message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.UserST
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.UserST} UserST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserST.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserST message.
         * @function verify
         * @memberof msg.UserST
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserST.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UID != null && message.hasOwnProperty("UID"))
                if (!$util.isString(message.UID))
                    return "UID: string expected";
            if (message.ServerID != null && message.hasOwnProperty("ServerID"))
                if (!$util.isString(message.ServerID))
                    return "ServerID: string expected";
            if (message.RoleUID != null && message.hasOwnProperty("RoleUID"))
                if (!$util.isString(message.RoleUID))
                    return "RoleUID: string expected";
            if (message.RoleName != null && message.hasOwnProperty("RoleName"))
                if (!$util.isString(message.RoleName))
                    return "RoleName: string expected";
            if (message.RoleLev != null && message.hasOwnProperty("RoleLev"))
                if (!$util.isString(message.RoleLev))
                    return "RoleLev: string expected";
            if (message.Coin != null && message.hasOwnProperty("Coin"))
                if (!$util.isString(message.Coin))
                    return "Coin: string expected";
            return null;
        };

        /**
         * Creates a UserST message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.UserST
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.UserST} UserST
         */
        UserST.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.UserST)
                return object;
            var message = new $root.msg.UserST();
            if (object.UID != null)
                message.UID = String(object.UID);
            if (object.ServerID != null)
                message.ServerID = String(object.ServerID);
            if (object.RoleUID != null)
                message.RoleUID = String(object.RoleUID);
            if (object.RoleName != null)
                message.RoleName = String(object.RoleName);
            if (object.RoleLev != null)
                message.RoleLev = String(object.RoleLev);
            if (object.Coin != null)
                message.Coin = String(object.Coin);
            return message;
        };

        /**
         * Creates a plain object from a UserST message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.UserST
         * @static
         * @param {msg.UserST} message UserST
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserST.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UID = "";
                object.ServerID = "";
                object.RoleUID = "";
                object.RoleName = "";
                object.RoleLev = "";
                object.Coin = "";
            }
            if (message.UID != null && message.hasOwnProperty("UID"))
                object.UID = message.UID;
            if (message.ServerID != null && message.hasOwnProperty("ServerID"))
                object.ServerID = message.ServerID;
            if (message.RoleUID != null && message.hasOwnProperty("RoleUID"))
                object.RoleUID = message.RoleUID;
            if (message.RoleName != null && message.hasOwnProperty("RoleName"))
                object.RoleName = message.RoleName;
            if (message.RoleLev != null && message.hasOwnProperty("RoleLev"))
                object.RoleLev = message.RoleLev;
            if (message.Coin != null && message.hasOwnProperty("Coin"))
                object.Coin = message.Coin;
            return object;
        };

        /**
         * Converts this UserST to JSON.
         * @function toJSON
         * @memberof msg.UserST
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserST.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserST;
    })();

    return msg;
})();

module.exports = $root;
