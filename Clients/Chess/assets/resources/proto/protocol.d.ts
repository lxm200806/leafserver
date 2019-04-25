import * as $protobuf from "protobufjs";
/** Namespace msg. */
export namespace msg {

    /** CSuits enum. */
    enum CSuits {
        CSuits_NULL = 0,
        Club = 1,
        Diamond = 2,
        Heart = 3,
        Spad = 4
    }

    /** CWeight enum. */
    enum CWeight {
        CWeight_NULl = 0,
        Three = 3,
        Four = 4,
        Five = 5,
        Six = 6,
        Seven = 7,
        Eight = 8,
        Nine = 9,
        Ten = 10,
        Jack = 11,
        Queen = 12,
        King = 13,
        One = 14,
        Two = 15,
        SJoker = 16,
        LJoker = 17
    }

    /** Properties of a CCard. */
    interface ICCard {

        /** CCard CardWeight */
        CardWeight?: (msg.CWeight|null);

        /** CCard CardSuits */
        CardSuits?: (msg.CSuits|null);
    }

    /** Represents a CCard. */
    class CCard implements ICCard {

        /**
         * Constructs a new CCard.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.ICCard);

        /** CCard CardWeight. */
        public CardWeight: msg.CWeight;

        /** CCard CardSuits. */
        public CardSuits: msg.CSuits;

        /**
         * Creates a new CCard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CCard instance
         */
        public static create(properties?: msg.ICCard): msg.CCard;

        /**
         * Encodes the specified CCard message. Does not implicitly {@link msg.CCard.verify|verify} messages.
         * @param message CCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.ICCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CCard message, length delimited. Does not implicitly {@link msg.CCard.verify|verify} messages.
         * @param message CCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.ICCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CCard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.CCard;

        /**
         * Decodes a CCard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.CCard;

        /**
         * Verifies a CCard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CCard message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CCard
         */
        public static fromObject(object: { [k: string]: any }): msg.CCard;

        /**
         * Creates a plain object from a CCard message. Also converts values to other types if specified.
         * @param message CCard
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.CCard, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CCard to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** CIdentity enum. */
    enum CIdentity {
        CIdentity_NULL = 0,
        Farmer = 1,
        Landlord = 2
    }

    /** Properties of a C2R_Login_Req. */
    interface IC2R_Login_Req {

        /** C2R_Login_Req Account */
        Account?: (string|null);

        /** C2R_Login_Req Password */
        Password?: (string|null);
    }

    /** Represents a C2R_Login_Req. */
    class C2R_Login_Req implements IC2R_Login_Req {

        /**
         * Constructs a new C2R_Login_Req.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IC2R_Login_Req);

        /** C2R_Login_Req Account. */
        public Account: string;

        /** C2R_Login_Req Password. */
        public Password: string;

        /**
         * Creates a new C2R_Login_Req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2R_Login_Req instance
         */
        public static create(properties?: msg.IC2R_Login_Req): msg.C2R_Login_Req;

        /**
         * Encodes the specified C2R_Login_Req message. Does not implicitly {@link msg.C2R_Login_Req.verify|verify} messages.
         * @param message C2R_Login_Req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IC2R_Login_Req, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C2R_Login_Req message, length delimited. Does not implicitly {@link msg.C2R_Login_Req.verify|verify} messages.
         * @param message C2R_Login_Req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IC2R_Login_Req, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2R_Login_Req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2R_Login_Req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.C2R_Login_Req;

        /**
         * Decodes a C2R_Login_Req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2R_Login_Req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.C2R_Login_Req;

        /**
         * Verifies a C2R_Login_Req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C2R_Login_Req message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C2R_Login_Req
         */
        public static fromObject(object: { [k: string]: any }): msg.C2R_Login_Req;

        /**
         * Creates a plain object from a C2R_Login_Req message. Also converts values to other types if specified.
         * @param message C2R_Login_Req
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.C2R_Login_Req, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C2R_Login_Req to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a R2C_Login_Ack. */
    interface IR2C_Login_Ack {

        /** R2C_Login_Ack Error */
        Error?: (number|null);

        /** R2C_Login_Ack Message */
        Message?: (string|null);

        /** R2C_Login_Ack Key */
        Key?: (number|Long|null);

        /** R2C_Login_Ack Address */
        Address?: (string|null);
    }

    /** Represents a R2C_Login_Ack. */
    class R2C_Login_Ack implements IR2C_Login_Ack {

        /**
         * Constructs a new R2C_Login_Ack.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IR2C_Login_Ack);

        /** R2C_Login_Ack Error. */
        public Error: number;

        /** R2C_Login_Ack Message. */
        public Message: string;

        /** R2C_Login_Ack Key. */
        public Key: (number|Long);

        /** R2C_Login_Ack Address. */
        public Address: string;

        /**
         * Creates a new R2C_Login_Ack instance using the specified properties.
         * @param [properties] Properties to set
         * @returns R2C_Login_Ack instance
         */
        public static create(properties?: msg.IR2C_Login_Ack): msg.R2C_Login_Ack;

        /**
         * Encodes the specified R2C_Login_Ack message. Does not implicitly {@link msg.R2C_Login_Ack.verify|verify} messages.
         * @param message R2C_Login_Ack message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IR2C_Login_Ack, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified R2C_Login_Ack message, length delimited. Does not implicitly {@link msg.R2C_Login_Ack.verify|verify} messages.
         * @param message R2C_Login_Ack message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IR2C_Login_Ack, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a R2C_Login_Ack message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns R2C_Login_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.R2C_Login_Ack;

        /**
         * Decodes a R2C_Login_Ack message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns R2C_Login_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.R2C_Login_Ack;

        /**
         * Verifies a R2C_Login_Ack message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a R2C_Login_Ack message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns R2C_Login_Ack
         */
        public static fromObject(object: { [k: string]: any }): msg.R2C_Login_Ack;

        /**
         * Creates a plain object from a R2C_Login_Ack message. Also converts values to other types if specified.
         * @param message R2C_Login_Ack
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.R2C_Login_Ack, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this R2C_Login_Ack to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C2R_Register_Req. */
    interface IC2R_Register_Req {

        /** C2R_Register_Req Account */
        Account?: (string|null);

        /** C2R_Register_Req Password */
        Password?: (string|null);
    }

    /** Represents a C2R_Register_Req. */
    class C2R_Register_Req implements IC2R_Register_Req {

        /**
         * Constructs a new C2R_Register_Req.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IC2R_Register_Req);

        /** C2R_Register_Req Account. */
        public Account: string;

        /** C2R_Register_Req Password. */
        public Password: string;

        /**
         * Creates a new C2R_Register_Req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2R_Register_Req instance
         */
        public static create(properties?: msg.IC2R_Register_Req): msg.C2R_Register_Req;

        /**
         * Encodes the specified C2R_Register_Req message. Does not implicitly {@link msg.C2R_Register_Req.verify|verify} messages.
         * @param message C2R_Register_Req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IC2R_Register_Req, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C2R_Register_Req message, length delimited. Does not implicitly {@link msg.C2R_Register_Req.verify|verify} messages.
         * @param message C2R_Register_Req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IC2R_Register_Req, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2R_Register_Req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2R_Register_Req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.C2R_Register_Req;

        /**
         * Decodes a C2R_Register_Req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2R_Register_Req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.C2R_Register_Req;

        /**
         * Verifies a C2R_Register_Req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C2R_Register_Req message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C2R_Register_Req
         */
        public static fromObject(object: { [k: string]: any }): msg.C2R_Register_Req;

        /**
         * Creates a plain object from a C2R_Register_Req message. Also converts values to other types if specified.
         * @param message C2R_Register_Req
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.C2R_Register_Req, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C2R_Register_Req to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a R2C_Register_Ack. */
    interface IR2C_Register_Ack {

        /** R2C_Register_Ack Error */
        Error?: (number|null);

        /** R2C_Register_Ack Message */
        Message?: (string|null);
    }

    /** Represents a R2C_Register_Ack. */
    class R2C_Register_Ack implements IR2C_Register_Ack {

        /**
         * Constructs a new R2C_Register_Ack.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IR2C_Register_Ack);

        /** R2C_Register_Ack Error. */
        public Error: number;

        /** R2C_Register_Ack Message. */
        public Message: string;

        /**
         * Creates a new R2C_Register_Ack instance using the specified properties.
         * @param [properties] Properties to set
         * @returns R2C_Register_Ack instance
         */
        public static create(properties?: msg.IR2C_Register_Ack): msg.R2C_Register_Ack;

        /**
         * Encodes the specified R2C_Register_Ack message. Does not implicitly {@link msg.R2C_Register_Ack.verify|verify} messages.
         * @param message R2C_Register_Ack message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IR2C_Register_Ack, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified R2C_Register_Ack message, length delimited. Does not implicitly {@link msg.R2C_Register_Ack.verify|verify} messages.
         * @param message R2C_Register_Ack message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IR2C_Register_Ack, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a R2C_Register_Ack message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns R2C_Register_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.R2C_Register_Ack;

        /**
         * Decodes a R2C_Register_Ack message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns R2C_Register_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.R2C_Register_Ack;

        /**
         * Verifies a R2C_Register_Ack message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a R2C_Register_Ack message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns R2C_Register_Ack
         */
        public static fromObject(object: { [k: string]: any }): msg.R2C_Register_Ack;

        /**
         * Creates a plain object from a R2C_Register_Ack message. Also converts values to other types if specified.
         * @param message R2C_Register_Ack
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.R2C_Register_Ack, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this R2C_Register_Ack to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C2G_LoginGate_Req. */
    interface IC2G_LoginGate_Req {

        /** C2G_LoginGate_Req Key */
        Key?: (number|Long|null);
    }

    /** Represents a C2G_LoginGate_Req. */
    class C2G_LoginGate_Req implements IC2G_LoginGate_Req {

        /**
         * Constructs a new C2G_LoginGate_Req.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IC2G_LoginGate_Req);

        /** C2G_LoginGate_Req Key. */
        public Key: (number|Long);

        /**
         * Creates a new C2G_LoginGate_Req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2G_LoginGate_Req instance
         */
        public static create(properties?: msg.IC2G_LoginGate_Req): msg.C2G_LoginGate_Req;

        /**
         * Encodes the specified C2G_LoginGate_Req message. Does not implicitly {@link msg.C2G_LoginGate_Req.verify|verify} messages.
         * @param message C2G_LoginGate_Req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IC2G_LoginGate_Req, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C2G_LoginGate_Req message, length delimited. Does not implicitly {@link msg.C2G_LoginGate_Req.verify|verify} messages.
         * @param message C2G_LoginGate_Req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IC2G_LoginGate_Req, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2G_LoginGate_Req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2G_LoginGate_Req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.C2G_LoginGate_Req;

        /**
         * Decodes a C2G_LoginGate_Req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2G_LoginGate_Req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.C2G_LoginGate_Req;

        /**
         * Verifies a C2G_LoginGate_Req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C2G_LoginGate_Req message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C2G_LoginGate_Req
         */
        public static fromObject(object: { [k: string]: any }): msg.C2G_LoginGate_Req;

        /**
         * Creates a plain object from a C2G_LoginGate_Req message. Also converts values to other types if specified.
         * @param message C2G_LoginGate_Req
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.C2G_LoginGate_Req, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C2G_LoginGate_Req to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a G2C_LoginGate_Ack. */
    interface IG2C_LoginGate_Ack {

        /** G2C_LoginGate_Ack Error */
        Error?: (number|null);

        /** G2C_LoginGate_Ack Message */
        Message?: (string|null);

        /** G2C_LoginGate_Ack PlayerID */
        PlayerID?: (number|Long|null);

        /** G2C_LoginGate_Ack UserID */
        UserID?: (number|Long|null);
    }

    /** Represents a G2C_LoginGate_Ack. */
    class G2C_LoginGate_Ack implements IG2C_LoginGate_Ack {

        /**
         * Constructs a new G2C_LoginGate_Ack.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IG2C_LoginGate_Ack);

        /** G2C_LoginGate_Ack Error. */
        public Error: number;

        /** G2C_LoginGate_Ack Message. */
        public Message: string;

        /** G2C_LoginGate_Ack PlayerID. */
        public PlayerID: (number|Long);

        /** G2C_LoginGate_Ack UserID. */
        public UserID: (number|Long);

        /**
         * Creates a new G2C_LoginGate_Ack instance using the specified properties.
         * @param [properties] Properties to set
         * @returns G2C_LoginGate_Ack instance
         */
        public static create(properties?: msg.IG2C_LoginGate_Ack): msg.G2C_LoginGate_Ack;

        /**
         * Encodes the specified G2C_LoginGate_Ack message. Does not implicitly {@link msg.G2C_LoginGate_Ack.verify|verify} messages.
         * @param message G2C_LoginGate_Ack message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IG2C_LoginGate_Ack, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified G2C_LoginGate_Ack message, length delimited. Does not implicitly {@link msg.G2C_LoginGate_Ack.verify|verify} messages.
         * @param message G2C_LoginGate_Ack message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IG2C_LoginGate_Ack, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a G2C_LoginGate_Ack message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns G2C_LoginGate_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.G2C_LoginGate_Ack;

        /**
         * Decodes a G2C_LoginGate_Ack message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns G2C_LoginGate_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.G2C_LoginGate_Ack;

        /**
         * Verifies a G2C_LoginGate_Ack message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a G2C_LoginGate_Ack message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns G2C_LoginGate_Ack
         */
        public static fromObject(object: { [k: string]: any }): msg.G2C_LoginGate_Ack;

        /**
         * Creates a plain object from a G2C_LoginGate_Ack message. Also converts values to other types if specified.
         * @param message G2C_LoginGate_Ack
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.G2C_LoginGate_Ack, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this G2C_LoginGate_Ack to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C2G_GetUserInfo_Req. */
    interface IC2G_GetUserInfo_Req {

        /** C2G_GetUserInfo_Req UserID */
        UserID?: (number|Long|null);
    }

    /** Represents a C2G_GetUserInfo_Req. */
    class C2G_GetUserInfo_Req implements IC2G_GetUserInfo_Req {

        /**
         * Constructs a new C2G_GetUserInfo_Req.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IC2G_GetUserInfo_Req);

        /** C2G_GetUserInfo_Req UserID. */
        public UserID: (number|Long);

        /**
         * Creates a new C2G_GetUserInfo_Req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2G_GetUserInfo_Req instance
         */
        public static create(properties?: msg.IC2G_GetUserInfo_Req): msg.C2G_GetUserInfo_Req;

        /**
         * Encodes the specified C2G_GetUserInfo_Req message. Does not implicitly {@link msg.C2G_GetUserInfo_Req.verify|verify} messages.
         * @param message C2G_GetUserInfo_Req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IC2G_GetUserInfo_Req, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C2G_GetUserInfo_Req message, length delimited. Does not implicitly {@link msg.C2G_GetUserInfo_Req.verify|verify} messages.
         * @param message C2G_GetUserInfo_Req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IC2G_GetUserInfo_Req, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2G_GetUserInfo_Req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2G_GetUserInfo_Req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.C2G_GetUserInfo_Req;

        /**
         * Decodes a C2G_GetUserInfo_Req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2G_GetUserInfo_Req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.C2G_GetUserInfo_Req;

        /**
         * Verifies a C2G_GetUserInfo_Req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C2G_GetUserInfo_Req message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C2G_GetUserInfo_Req
         */
        public static fromObject(object: { [k: string]: any }): msg.C2G_GetUserInfo_Req;

        /**
         * Creates a plain object from a C2G_GetUserInfo_Req message. Also converts values to other types if specified.
         * @param message C2G_GetUserInfo_Req
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.C2G_GetUserInfo_Req, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C2G_GetUserInfo_Req to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a G2C_GetUserInfo_Ack. */
    interface IG2C_GetUserInfo_Ack {

        /** G2C_GetUserInfo_Ack Error */
        Error?: (number|null);

        /** G2C_GetUserInfo_Ack Message */
        Message?: (string|null);

        /** G2C_GetUserInfo_Ack NickName */
        NickName?: (string|null);

        /** G2C_GetUserInfo_Ack Money */
        Money?: (number|Long|null);
    }

    /** Represents a G2C_GetUserInfo_Ack. */
    class G2C_GetUserInfo_Ack implements IG2C_GetUserInfo_Ack {

        /**
         * Constructs a new G2C_GetUserInfo_Ack.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IG2C_GetUserInfo_Ack);

        /** G2C_GetUserInfo_Ack Error. */
        public Error: number;

        /** G2C_GetUserInfo_Ack Message. */
        public Message: string;

        /** G2C_GetUserInfo_Ack NickName. */
        public NickName: string;

        /** G2C_GetUserInfo_Ack Money. */
        public Money: (number|Long);

        /**
         * Creates a new G2C_GetUserInfo_Ack instance using the specified properties.
         * @param [properties] Properties to set
         * @returns G2C_GetUserInfo_Ack instance
         */
        public static create(properties?: msg.IG2C_GetUserInfo_Ack): msg.G2C_GetUserInfo_Ack;

        /**
         * Encodes the specified G2C_GetUserInfo_Ack message. Does not implicitly {@link msg.G2C_GetUserInfo_Ack.verify|verify} messages.
         * @param message G2C_GetUserInfo_Ack message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IG2C_GetUserInfo_Ack, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified G2C_GetUserInfo_Ack message, length delimited. Does not implicitly {@link msg.G2C_GetUserInfo_Ack.verify|verify} messages.
         * @param message G2C_GetUserInfo_Ack message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IG2C_GetUserInfo_Ack, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a G2C_GetUserInfo_Ack message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns G2C_GetUserInfo_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.G2C_GetUserInfo_Ack;

        /**
         * Decodes a G2C_GetUserInfo_Ack message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns G2C_GetUserInfo_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.G2C_GetUserInfo_Ack;

        /**
         * Verifies a G2C_GetUserInfo_Ack message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a G2C_GetUserInfo_Ack message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns G2C_GetUserInfo_Ack
         */
        public static fromObject(object: { [k: string]: any }): msg.G2C_GetUserInfo_Ack;

        /**
         * Creates a plain object from a G2C_GetUserInfo_Ack message. Also converts values to other types if specified.
         * @param message G2C_GetUserInfo_Ack
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.G2C_GetUserInfo_Ack, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this G2C_GetUserInfo_Ack to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C2G_StartMatch_Req. */
    interface IC2G_StartMatch_Req {
    }

    /** Represents a C2G_StartMatch_Req. */
    class C2G_StartMatch_Req implements IC2G_StartMatch_Req {

        /**
         * Constructs a new C2G_StartMatch_Req.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IC2G_StartMatch_Req);

        /**
         * Creates a new C2G_StartMatch_Req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2G_StartMatch_Req instance
         */
        public static create(properties?: msg.IC2G_StartMatch_Req): msg.C2G_StartMatch_Req;

        /**
         * Encodes the specified C2G_StartMatch_Req message. Does not implicitly {@link msg.C2G_StartMatch_Req.verify|verify} messages.
         * @param message C2G_StartMatch_Req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IC2G_StartMatch_Req, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C2G_StartMatch_Req message, length delimited. Does not implicitly {@link msg.C2G_StartMatch_Req.verify|verify} messages.
         * @param message C2G_StartMatch_Req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IC2G_StartMatch_Req, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2G_StartMatch_Req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2G_StartMatch_Req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.C2G_StartMatch_Req;

        /**
         * Decodes a C2G_StartMatch_Req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2G_StartMatch_Req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.C2G_StartMatch_Req;

        /**
         * Verifies a C2G_StartMatch_Req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C2G_StartMatch_Req message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C2G_StartMatch_Req
         */
        public static fromObject(object: { [k: string]: any }): msg.C2G_StartMatch_Req;

        /**
         * Creates a plain object from a C2G_StartMatch_Req message. Also converts values to other types if specified.
         * @param message C2G_StartMatch_Req
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.C2G_StartMatch_Req, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C2G_StartMatch_Req to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a G2C_StartMatch_Ack. */
    interface IG2C_StartMatch_Ack {

        /** G2C_StartMatch_Ack Error */
        Error?: (number|null);

        /** G2C_StartMatch_Ack Message */
        Message?: (string|null);
    }

    /** Represents a G2C_StartMatch_Ack. */
    class G2C_StartMatch_Ack implements IG2C_StartMatch_Ack {

        /**
         * Constructs a new G2C_StartMatch_Ack.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IG2C_StartMatch_Ack);

        /** G2C_StartMatch_Ack Error. */
        public Error: number;

        /** G2C_StartMatch_Ack Message. */
        public Message: string;

        /**
         * Creates a new G2C_StartMatch_Ack instance using the specified properties.
         * @param [properties] Properties to set
         * @returns G2C_StartMatch_Ack instance
         */
        public static create(properties?: msg.IG2C_StartMatch_Ack): msg.G2C_StartMatch_Ack;

        /**
         * Encodes the specified G2C_StartMatch_Ack message. Does not implicitly {@link msg.G2C_StartMatch_Ack.verify|verify} messages.
         * @param message G2C_StartMatch_Ack message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IG2C_StartMatch_Ack, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified G2C_StartMatch_Ack message, length delimited. Does not implicitly {@link msg.G2C_StartMatch_Ack.verify|verify} messages.
         * @param message G2C_StartMatch_Ack message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IG2C_StartMatch_Ack, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a G2C_StartMatch_Ack message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns G2C_StartMatch_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.G2C_StartMatch_Ack;

        /**
         * Decodes a G2C_StartMatch_Ack message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns G2C_StartMatch_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.G2C_StartMatch_Ack;

        /**
         * Verifies a G2C_StartMatch_Ack message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a G2C_StartMatch_Ack message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns G2C_StartMatch_Ack
         */
        public static fromObject(object: { [k: string]: any }): msg.G2C_StartMatch_Ack;

        /**
         * Creates a plain object from a G2C_StartMatch_Ack message. Also converts values to other types if specified.
         * @param message G2C_StartMatch_Ack
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.G2C_StartMatch_Ack, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this G2C_StartMatch_Ack to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C2G_ReturnLobby_Ntt. */
    interface IC2G_ReturnLobby_Ntt {
    }

    /** Represents a C2G_ReturnLobby_Ntt. */
    class C2G_ReturnLobby_Ntt implements IC2G_ReturnLobby_Ntt {

        /**
         * Constructs a new C2G_ReturnLobby_Ntt.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IC2G_ReturnLobby_Ntt);

        /**
         * Creates a new C2G_ReturnLobby_Ntt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2G_ReturnLobby_Ntt instance
         */
        public static create(properties?: msg.IC2G_ReturnLobby_Ntt): msg.C2G_ReturnLobby_Ntt;

        /**
         * Encodes the specified C2G_ReturnLobby_Ntt message. Does not implicitly {@link msg.C2G_ReturnLobby_Ntt.verify|verify} messages.
         * @param message C2G_ReturnLobby_Ntt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IC2G_ReturnLobby_Ntt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C2G_ReturnLobby_Ntt message, length delimited. Does not implicitly {@link msg.C2G_ReturnLobby_Ntt.verify|verify} messages.
         * @param message C2G_ReturnLobby_Ntt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IC2G_ReturnLobby_Ntt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2G_ReturnLobby_Ntt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2G_ReturnLobby_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.C2G_ReturnLobby_Ntt;

        /**
         * Decodes a C2G_ReturnLobby_Ntt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2G_ReturnLobby_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.C2G_ReturnLobby_Ntt;

        /**
         * Verifies a C2G_ReturnLobby_Ntt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C2G_ReturnLobby_Ntt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C2G_ReturnLobby_Ntt
         */
        public static fromObject(object: { [k: string]: any }): msg.C2G_ReturnLobby_Ntt;

        /**
         * Creates a plain object from a C2G_ReturnLobby_Ntt message. Also converts values to other types if specified.
         * @param message C2G_ReturnLobby_Ntt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.C2G_ReturnLobby_Ntt, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C2G_ReturnLobby_Ntt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a C2G_CreateRoom_Req. */
    interface IC2G_CreateRoom_Req {

        /** C2G_CreateRoom_Req Error */
        Error?: (number|null);

        /** C2G_CreateRoom_Req Message */
        Message?: (string|null);

        /** C2G_CreateRoom_Req UserID */
        UserID?: (number|Long|null);
    }

    /** Represents a C2G_CreateRoom_Req. */
    class C2G_CreateRoom_Req implements IC2G_CreateRoom_Req {

        /**
         * Constructs a new C2G_CreateRoom_Req.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IC2G_CreateRoom_Req);

        /** C2G_CreateRoom_Req Error. */
        public Error: number;

        /** C2G_CreateRoom_Req Message. */
        public Message: string;

        /** C2G_CreateRoom_Req UserID. */
        public UserID: (number|Long);

        /**
         * Creates a new C2G_CreateRoom_Req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns C2G_CreateRoom_Req instance
         */
        public static create(properties?: msg.IC2G_CreateRoom_Req): msg.C2G_CreateRoom_Req;

        /**
         * Encodes the specified C2G_CreateRoom_Req message. Does not implicitly {@link msg.C2G_CreateRoom_Req.verify|verify} messages.
         * @param message C2G_CreateRoom_Req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IC2G_CreateRoom_Req, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified C2G_CreateRoom_Req message, length delimited. Does not implicitly {@link msg.C2G_CreateRoom_Req.verify|verify} messages.
         * @param message C2G_CreateRoom_Req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IC2G_CreateRoom_Req, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a C2G_CreateRoom_Req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns C2G_CreateRoom_Req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.C2G_CreateRoom_Req;

        /**
         * Decodes a C2G_CreateRoom_Req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns C2G_CreateRoom_Req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.C2G_CreateRoom_Req;

        /**
         * Verifies a C2G_CreateRoom_Req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a C2G_CreateRoom_Req message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns C2G_CreateRoom_Req
         */
        public static fromObject(object: { [k: string]: any }): msg.C2G_CreateRoom_Req;

        /**
         * Creates a plain object from a C2G_CreateRoom_Req message. Also converts values to other types if specified.
         * @param message C2G_CreateRoom_Req
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.C2G_CreateRoom_Req, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this C2G_CreateRoom_Req to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a G2C_CreateRoom_Ack. */
    interface IG2C_CreateRoom_Ack {
    }

    /** Represents a G2C_CreateRoom_Ack. */
    class G2C_CreateRoom_Ack implements IG2C_CreateRoom_Ack {

        /**
         * Constructs a new G2C_CreateRoom_Ack.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IG2C_CreateRoom_Ack);

        /**
         * Creates a new G2C_CreateRoom_Ack instance using the specified properties.
         * @param [properties] Properties to set
         * @returns G2C_CreateRoom_Ack instance
         */
        public static create(properties?: msg.IG2C_CreateRoom_Ack): msg.G2C_CreateRoom_Ack;

        /**
         * Encodes the specified G2C_CreateRoom_Ack message. Does not implicitly {@link msg.G2C_CreateRoom_Ack.verify|verify} messages.
         * @param message G2C_CreateRoom_Ack message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IG2C_CreateRoom_Ack, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified G2C_CreateRoom_Ack message, length delimited. Does not implicitly {@link msg.G2C_CreateRoom_Ack.verify|verify} messages.
         * @param message G2C_CreateRoom_Ack message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IG2C_CreateRoom_Ack, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a G2C_CreateRoom_Ack message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns G2C_CreateRoom_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.G2C_CreateRoom_Ack;

        /**
         * Decodes a G2C_CreateRoom_Ack message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns G2C_CreateRoom_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.G2C_CreateRoom_Ack;

        /**
         * Verifies a G2C_CreateRoom_Ack message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a G2C_CreateRoom_Ack message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns G2C_CreateRoom_Ack
         */
        public static fromObject(object: { [k: string]: any }): msg.G2C_CreateRoom_Ack;

        /**
         * Creates a plain object from a G2C_CreateRoom_Ack message. Also converts values to other types if specified.
         * @param message G2C_CreateRoom_Ack
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.G2C_CreateRoom_Ack, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this G2C_CreateRoom_Ack to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a G2C_PlayerDisconnect_Ntt. */
    interface IG2C_PlayerDisconnect_Ntt {
    }

    /** Represents a G2C_PlayerDisconnect_Ntt. */
    class G2C_PlayerDisconnect_Ntt implements IG2C_PlayerDisconnect_Ntt {

        /**
         * Constructs a new G2C_PlayerDisconnect_Ntt.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IG2C_PlayerDisconnect_Ntt);

        /**
         * Creates a new G2C_PlayerDisconnect_Ntt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns G2C_PlayerDisconnect_Ntt instance
         */
        public static create(properties?: msg.IG2C_PlayerDisconnect_Ntt): msg.G2C_PlayerDisconnect_Ntt;

        /**
         * Encodes the specified G2C_PlayerDisconnect_Ntt message. Does not implicitly {@link msg.G2C_PlayerDisconnect_Ntt.verify|verify} messages.
         * @param message G2C_PlayerDisconnect_Ntt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IG2C_PlayerDisconnect_Ntt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified G2C_PlayerDisconnect_Ntt message, length delimited. Does not implicitly {@link msg.G2C_PlayerDisconnect_Ntt.verify|verify} messages.
         * @param message G2C_PlayerDisconnect_Ntt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IG2C_PlayerDisconnect_Ntt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a G2C_PlayerDisconnect_Ntt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns G2C_PlayerDisconnect_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.G2C_PlayerDisconnect_Ntt;

        /**
         * Decodes a G2C_PlayerDisconnect_Ntt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns G2C_PlayerDisconnect_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.G2C_PlayerDisconnect_Ntt;

        /**
         * Verifies a G2C_PlayerDisconnect_Ntt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a G2C_PlayerDisconnect_Ntt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns G2C_PlayerDisconnect_Ntt
         */
        public static fromObject(object: { [k: string]: any }): msg.G2C_PlayerDisconnect_Ntt;

        /**
         * Creates a plain object from a G2C_PlayerDisconnect_Ntt message. Also converts values to other types if specified.
         * @param message G2C_PlayerDisconnect_Ntt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.G2C_PlayerDisconnect_Ntt, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this G2C_PlayerDisconnect_Ntt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Actor_GamerReady_Ntt. */
    interface IActor_GamerReady_Ntt {

        /** Actor_GamerReady_Ntt UserID */
        UserID?: (number|Long|null);
    }

    /** Represents an Actor_GamerReady_Ntt. */
    class Actor_GamerReady_Ntt implements IActor_GamerReady_Ntt {

        /**
         * Constructs a new Actor_GamerReady_Ntt.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IActor_GamerReady_Ntt);

        /** Actor_GamerReady_Ntt UserID. */
        public UserID: (number|Long);

        /**
         * Creates a new Actor_GamerReady_Ntt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Actor_GamerReady_Ntt instance
         */
        public static create(properties?: msg.IActor_GamerReady_Ntt): msg.Actor_GamerReady_Ntt;

        /**
         * Encodes the specified Actor_GamerReady_Ntt message. Does not implicitly {@link msg.Actor_GamerReady_Ntt.verify|verify} messages.
         * @param message Actor_GamerReady_Ntt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IActor_GamerReady_Ntt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Actor_GamerReady_Ntt message, length delimited. Does not implicitly {@link msg.Actor_GamerReady_Ntt.verify|verify} messages.
         * @param message Actor_GamerReady_Ntt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IActor_GamerReady_Ntt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Actor_GamerReady_Ntt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Actor_GamerReady_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.Actor_GamerReady_Ntt;

        /**
         * Decodes an Actor_GamerReady_Ntt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Actor_GamerReady_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.Actor_GamerReady_Ntt;

        /**
         * Verifies an Actor_GamerReady_Ntt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Actor_GamerReady_Ntt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Actor_GamerReady_Ntt
         */
        public static fromObject(object: { [k: string]: any }): msg.Actor_GamerReady_Ntt;

        /**
         * Creates a plain object from an Actor_GamerReady_Ntt message. Also converts values to other types if specified.
         * @param message Actor_GamerReady_Ntt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.Actor_GamerReady_Ntt, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Actor_GamerReady_Ntt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Actor_GamerGrabLandlordSelect_Ntt. */
    interface IActor_GamerGrabLandlordSelect_Ntt {

        /** Actor_GamerGrabLandlordSelect_Ntt UserID */
        UserID?: (number|Long|null);

        /** Actor_GamerGrabLandlordSelect_Ntt IsGrab */
        IsGrab?: (boolean|null);
    }

    /** Represents an Actor_GamerGrabLandlordSelect_Ntt. */
    class Actor_GamerGrabLandlordSelect_Ntt implements IActor_GamerGrabLandlordSelect_Ntt {

        /**
         * Constructs a new Actor_GamerGrabLandlordSelect_Ntt.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IActor_GamerGrabLandlordSelect_Ntt);

        /** Actor_GamerGrabLandlordSelect_Ntt UserID. */
        public UserID: (number|Long);

        /** Actor_GamerGrabLandlordSelect_Ntt IsGrab. */
        public IsGrab: boolean;

        /**
         * Creates a new Actor_GamerGrabLandlordSelect_Ntt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Actor_GamerGrabLandlordSelect_Ntt instance
         */
        public static create(properties?: msg.IActor_GamerGrabLandlordSelect_Ntt): msg.Actor_GamerGrabLandlordSelect_Ntt;

        /**
         * Encodes the specified Actor_GamerGrabLandlordSelect_Ntt message. Does not implicitly {@link msg.Actor_GamerGrabLandlordSelect_Ntt.verify|verify} messages.
         * @param message Actor_GamerGrabLandlordSelect_Ntt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IActor_GamerGrabLandlordSelect_Ntt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Actor_GamerGrabLandlordSelect_Ntt message, length delimited. Does not implicitly {@link msg.Actor_GamerGrabLandlordSelect_Ntt.verify|verify} messages.
         * @param message Actor_GamerGrabLandlordSelect_Ntt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IActor_GamerGrabLandlordSelect_Ntt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Actor_GamerGrabLandlordSelect_Ntt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Actor_GamerGrabLandlordSelect_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.Actor_GamerGrabLandlordSelect_Ntt;

        /**
         * Decodes an Actor_GamerGrabLandlordSelect_Ntt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Actor_GamerGrabLandlordSelect_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.Actor_GamerGrabLandlordSelect_Ntt;

        /**
         * Verifies an Actor_GamerGrabLandlordSelect_Ntt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Actor_GamerGrabLandlordSelect_Ntt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Actor_GamerGrabLandlordSelect_Ntt
         */
        public static fromObject(object: { [k: string]: any }): msg.Actor_GamerGrabLandlordSelect_Ntt;

        /**
         * Creates a plain object from an Actor_GamerGrabLandlordSelect_Ntt message. Also converts values to other types if specified.
         * @param message Actor_GamerGrabLandlordSelect_Ntt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.Actor_GamerGrabLandlordSelect_Ntt, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Actor_GamerGrabLandlordSelect_Ntt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Actor_GamerPlayCard_Req. */
    interface IActor_GamerPlayCard_Req {

        /** Actor_GamerPlayCard_Req Cards */
        Cards?: (msg.ICCard[]|null);
    }

    /** Represents an Actor_GamerPlayCard_Req. */
    class Actor_GamerPlayCard_Req implements IActor_GamerPlayCard_Req {

        /**
         * Constructs a new Actor_GamerPlayCard_Req.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IActor_GamerPlayCard_Req);

        /** Actor_GamerPlayCard_Req Cards. */
        public Cards: msg.ICCard[];

        /**
         * Creates a new Actor_GamerPlayCard_Req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Actor_GamerPlayCard_Req instance
         */
        public static create(properties?: msg.IActor_GamerPlayCard_Req): msg.Actor_GamerPlayCard_Req;

        /**
         * Encodes the specified Actor_GamerPlayCard_Req message. Does not implicitly {@link msg.Actor_GamerPlayCard_Req.verify|verify} messages.
         * @param message Actor_GamerPlayCard_Req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IActor_GamerPlayCard_Req, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Actor_GamerPlayCard_Req message, length delimited. Does not implicitly {@link msg.Actor_GamerPlayCard_Req.verify|verify} messages.
         * @param message Actor_GamerPlayCard_Req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IActor_GamerPlayCard_Req, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Actor_GamerPlayCard_Req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Actor_GamerPlayCard_Req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.Actor_GamerPlayCard_Req;

        /**
         * Decodes an Actor_GamerPlayCard_Req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Actor_GamerPlayCard_Req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.Actor_GamerPlayCard_Req;

        /**
         * Verifies an Actor_GamerPlayCard_Req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Actor_GamerPlayCard_Req message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Actor_GamerPlayCard_Req
         */
        public static fromObject(object: { [k: string]: any }): msg.Actor_GamerPlayCard_Req;

        /**
         * Creates a plain object from an Actor_GamerPlayCard_Req message. Also converts values to other types if specified.
         * @param message Actor_GamerPlayCard_Req
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.Actor_GamerPlayCard_Req, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Actor_GamerPlayCard_Req to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Actor_GamerPlayCard_Ack. */
    interface IActor_GamerPlayCard_Ack {

        /** Actor_GamerPlayCard_Ack Error */
        Error?: (number|null);

        /** Actor_GamerPlayCard_Ack Message */
        Message?: (string|null);
    }

    /** Represents an Actor_GamerPlayCard_Ack. */
    class Actor_GamerPlayCard_Ack implements IActor_GamerPlayCard_Ack {

        /**
         * Constructs a new Actor_GamerPlayCard_Ack.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IActor_GamerPlayCard_Ack);

        /** Actor_GamerPlayCard_Ack Error. */
        public Error: number;

        /** Actor_GamerPlayCard_Ack Message. */
        public Message: string;

        /**
         * Creates a new Actor_GamerPlayCard_Ack instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Actor_GamerPlayCard_Ack instance
         */
        public static create(properties?: msg.IActor_GamerPlayCard_Ack): msg.Actor_GamerPlayCard_Ack;

        /**
         * Encodes the specified Actor_GamerPlayCard_Ack message. Does not implicitly {@link msg.Actor_GamerPlayCard_Ack.verify|verify} messages.
         * @param message Actor_GamerPlayCard_Ack message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IActor_GamerPlayCard_Ack, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Actor_GamerPlayCard_Ack message, length delimited. Does not implicitly {@link msg.Actor_GamerPlayCard_Ack.verify|verify} messages.
         * @param message Actor_GamerPlayCard_Ack message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IActor_GamerPlayCard_Ack, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Actor_GamerPlayCard_Ack message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Actor_GamerPlayCard_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.Actor_GamerPlayCard_Ack;

        /**
         * Decodes an Actor_GamerPlayCard_Ack message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Actor_GamerPlayCard_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.Actor_GamerPlayCard_Ack;

        /**
         * Verifies an Actor_GamerPlayCard_Ack message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Actor_GamerPlayCard_Ack message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Actor_GamerPlayCard_Ack
         */
        public static fromObject(object: { [k: string]: any }): msg.Actor_GamerPlayCard_Ack;

        /**
         * Creates a plain object from an Actor_GamerPlayCard_Ack message. Also converts values to other types if specified.
         * @param message Actor_GamerPlayCard_Ack
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.Actor_GamerPlayCard_Ack, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Actor_GamerPlayCard_Ack to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Actor_GamerPlayCard_Ntt. */
    interface IActor_GamerPlayCard_Ntt {

        /** Actor_GamerPlayCard_Ntt UserID */
        UserID?: (number|Long|null);

        /** Actor_GamerPlayCard_Ntt Cards */
        Cards?: (msg.ICCard[]|null);
    }

    /** Represents an Actor_GamerPlayCard_Ntt. */
    class Actor_GamerPlayCard_Ntt implements IActor_GamerPlayCard_Ntt {

        /**
         * Constructs a new Actor_GamerPlayCard_Ntt.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IActor_GamerPlayCard_Ntt);

        /** Actor_GamerPlayCard_Ntt UserID. */
        public UserID: (number|Long);

        /** Actor_GamerPlayCard_Ntt Cards. */
        public Cards: msg.ICCard[];

        /**
         * Creates a new Actor_GamerPlayCard_Ntt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Actor_GamerPlayCard_Ntt instance
         */
        public static create(properties?: msg.IActor_GamerPlayCard_Ntt): msg.Actor_GamerPlayCard_Ntt;

        /**
         * Encodes the specified Actor_GamerPlayCard_Ntt message. Does not implicitly {@link msg.Actor_GamerPlayCard_Ntt.verify|verify} messages.
         * @param message Actor_GamerPlayCard_Ntt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IActor_GamerPlayCard_Ntt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Actor_GamerPlayCard_Ntt message, length delimited. Does not implicitly {@link msg.Actor_GamerPlayCard_Ntt.verify|verify} messages.
         * @param message Actor_GamerPlayCard_Ntt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IActor_GamerPlayCard_Ntt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Actor_GamerPlayCard_Ntt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Actor_GamerPlayCard_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.Actor_GamerPlayCard_Ntt;

        /**
         * Decodes an Actor_GamerPlayCard_Ntt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Actor_GamerPlayCard_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.Actor_GamerPlayCard_Ntt;

        /**
         * Verifies an Actor_GamerPlayCard_Ntt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Actor_GamerPlayCard_Ntt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Actor_GamerPlayCard_Ntt
         */
        public static fromObject(object: { [k: string]: any }): msg.Actor_GamerPlayCard_Ntt;

        /**
         * Creates a plain object from an Actor_GamerPlayCard_Ntt message. Also converts values to other types if specified.
         * @param message Actor_GamerPlayCard_Ntt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.Actor_GamerPlayCard_Ntt, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Actor_GamerPlayCard_Ntt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Actor_GamerPrompt_Req. */
    interface IActor_GamerPrompt_Req {
    }

    /** Represents an Actor_GamerPrompt_Req. */
    class Actor_GamerPrompt_Req implements IActor_GamerPrompt_Req {

        /**
         * Constructs a new Actor_GamerPrompt_Req.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IActor_GamerPrompt_Req);

        /**
         * Creates a new Actor_GamerPrompt_Req instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Actor_GamerPrompt_Req instance
         */
        public static create(properties?: msg.IActor_GamerPrompt_Req): msg.Actor_GamerPrompt_Req;

        /**
         * Encodes the specified Actor_GamerPrompt_Req message. Does not implicitly {@link msg.Actor_GamerPrompt_Req.verify|verify} messages.
         * @param message Actor_GamerPrompt_Req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IActor_GamerPrompt_Req, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Actor_GamerPrompt_Req message, length delimited. Does not implicitly {@link msg.Actor_GamerPrompt_Req.verify|verify} messages.
         * @param message Actor_GamerPrompt_Req message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IActor_GamerPrompt_Req, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Actor_GamerPrompt_Req message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Actor_GamerPrompt_Req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.Actor_GamerPrompt_Req;

        /**
         * Decodes an Actor_GamerPrompt_Req message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Actor_GamerPrompt_Req
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.Actor_GamerPrompt_Req;

        /**
         * Verifies an Actor_GamerPrompt_Req message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Actor_GamerPrompt_Req message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Actor_GamerPrompt_Req
         */
        public static fromObject(object: { [k: string]: any }): msg.Actor_GamerPrompt_Req;

        /**
         * Creates a plain object from an Actor_GamerPrompt_Req message. Also converts values to other types if specified.
         * @param message Actor_GamerPrompt_Req
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.Actor_GamerPrompt_Req, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Actor_GamerPrompt_Req to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Actor_GamerPrompt_Ack. */
    interface IActor_GamerPrompt_Ack {

        /** Actor_GamerPrompt_Ack Error */
        Error?: (number|null);

        /** Actor_GamerPrompt_Ack Message */
        Message?: (string|null);

        /** Actor_GamerPrompt_Ack Cards */
        Cards?: (msg.ICCard[]|null);
    }

    /** Represents an Actor_GamerPrompt_Ack. */
    class Actor_GamerPrompt_Ack implements IActor_GamerPrompt_Ack {

        /**
         * Constructs a new Actor_GamerPrompt_Ack.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IActor_GamerPrompt_Ack);

        /** Actor_GamerPrompt_Ack Error. */
        public Error: number;

        /** Actor_GamerPrompt_Ack Message. */
        public Message: string;

        /** Actor_GamerPrompt_Ack Cards. */
        public Cards: msg.ICCard[];

        /**
         * Creates a new Actor_GamerPrompt_Ack instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Actor_GamerPrompt_Ack instance
         */
        public static create(properties?: msg.IActor_GamerPrompt_Ack): msg.Actor_GamerPrompt_Ack;

        /**
         * Encodes the specified Actor_GamerPrompt_Ack message. Does not implicitly {@link msg.Actor_GamerPrompt_Ack.verify|verify} messages.
         * @param message Actor_GamerPrompt_Ack message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IActor_GamerPrompt_Ack, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Actor_GamerPrompt_Ack message, length delimited. Does not implicitly {@link msg.Actor_GamerPrompt_Ack.verify|verify} messages.
         * @param message Actor_GamerPrompt_Ack message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IActor_GamerPrompt_Ack, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Actor_GamerPrompt_Ack message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Actor_GamerPrompt_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.Actor_GamerPrompt_Ack;

        /**
         * Decodes an Actor_GamerPrompt_Ack message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Actor_GamerPrompt_Ack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.Actor_GamerPrompt_Ack;

        /**
         * Verifies an Actor_GamerPrompt_Ack message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Actor_GamerPrompt_Ack message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Actor_GamerPrompt_Ack
         */
        public static fromObject(object: { [k: string]: any }): msg.Actor_GamerPrompt_Ack;

        /**
         * Creates a plain object from an Actor_GamerPrompt_Ack message. Also converts values to other types if specified.
         * @param message Actor_GamerPrompt_Ack
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.Actor_GamerPrompt_Ack, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Actor_GamerPrompt_Ack to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Actor_GamerDontPlay_Ntt. */
    interface IActor_GamerDontPlay_Ntt {

        /** Actor_GamerDontPlay_Ntt UserID */
        UserID?: (number|Long|null);
    }

    /** Represents an Actor_GamerDontPlay_Ntt. */
    class Actor_GamerDontPlay_Ntt implements IActor_GamerDontPlay_Ntt {

        /**
         * Constructs a new Actor_GamerDontPlay_Ntt.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IActor_GamerDontPlay_Ntt);

        /** Actor_GamerDontPlay_Ntt UserID. */
        public UserID: (number|Long);

        /**
         * Creates a new Actor_GamerDontPlay_Ntt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Actor_GamerDontPlay_Ntt instance
         */
        public static create(properties?: msg.IActor_GamerDontPlay_Ntt): msg.Actor_GamerDontPlay_Ntt;

        /**
         * Encodes the specified Actor_GamerDontPlay_Ntt message. Does not implicitly {@link msg.Actor_GamerDontPlay_Ntt.verify|verify} messages.
         * @param message Actor_GamerDontPlay_Ntt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IActor_GamerDontPlay_Ntt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Actor_GamerDontPlay_Ntt message, length delimited. Does not implicitly {@link msg.Actor_GamerDontPlay_Ntt.verify|verify} messages.
         * @param message Actor_GamerDontPlay_Ntt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IActor_GamerDontPlay_Ntt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Actor_GamerDontPlay_Ntt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Actor_GamerDontPlay_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.Actor_GamerDontPlay_Ntt;

        /**
         * Decodes an Actor_GamerDontPlay_Ntt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Actor_GamerDontPlay_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.Actor_GamerDontPlay_Ntt;

        /**
         * Verifies an Actor_GamerDontPlay_Ntt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Actor_GamerDontPlay_Ntt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Actor_GamerDontPlay_Ntt
         */
        public static fromObject(object: { [k: string]: any }): msg.Actor_GamerDontPlay_Ntt;

        /**
         * Creates a plain object from an Actor_GamerDontPlay_Ntt message. Also converts values to other types if specified.
         * @param message Actor_GamerDontPlay_Ntt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.Actor_GamerDontPlay_Ntt, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Actor_GamerDontPlay_Ntt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Actor_Trusteeship_Ntt. */
    interface IActor_Trusteeship_Ntt {

        /** Actor_Trusteeship_Ntt UserID */
        UserID?: (number|Long|null);

        /** Actor_Trusteeship_Ntt isTrusteeship */
        isTrusteeship?: (boolean|null);
    }

    /** Represents an Actor_Trusteeship_Ntt. */
    class Actor_Trusteeship_Ntt implements IActor_Trusteeship_Ntt {

        /**
         * Constructs a new Actor_Trusteeship_Ntt.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IActor_Trusteeship_Ntt);

        /** Actor_Trusteeship_Ntt UserID. */
        public UserID: (number|Long);

        /** Actor_Trusteeship_Ntt isTrusteeship. */
        public isTrusteeship: boolean;

        /**
         * Creates a new Actor_Trusteeship_Ntt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Actor_Trusteeship_Ntt instance
         */
        public static create(properties?: msg.IActor_Trusteeship_Ntt): msg.Actor_Trusteeship_Ntt;

        /**
         * Encodes the specified Actor_Trusteeship_Ntt message. Does not implicitly {@link msg.Actor_Trusteeship_Ntt.verify|verify} messages.
         * @param message Actor_Trusteeship_Ntt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IActor_Trusteeship_Ntt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Actor_Trusteeship_Ntt message, length delimited. Does not implicitly {@link msg.Actor_Trusteeship_Ntt.verify|verify} messages.
         * @param message Actor_Trusteeship_Ntt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IActor_Trusteeship_Ntt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Actor_Trusteeship_Ntt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Actor_Trusteeship_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.Actor_Trusteeship_Ntt;

        /**
         * Decodes an Actor_Trusteeship_Ntt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Actor_Trusteeship_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.Actor_Trusteeship_Ntt;

        /**
         * Verifies an Actor_Trusteeship_Ntt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Actor_Trusteeship_Ntt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Actor_Trusteeship_Ntt
         */
        public static fromObject(object: { [k: string]: any }): msg.Actor_Trusteeship_Ntt;

        /**
         * Creates a plain object from an Actor_Trusteeship_Ntt message. Also converts values to other types if specified.
         * @param message Actor_Trusteeship_Ntt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.Actor_Trusteeship_Ntt, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Actor_Trusteeship_Ntt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CGamerInfo. */
    interface ICGamerInfo {

        /** CGamerInfo UserID */
        UserID?: (number|Long|null);

        /** CGamerInfo NickName */
        NickName?: (string|null);

        /** CGamerInfo Money */
        Money?: (number|Long|null);

        /** CGamerInfo SeatID */
        SeatID?: (number|null);

        /** CGamerInfo IsReady */
        IsReady?: (boolean|null);

        /** CGamerInfo IsOffline */
        IsOffline?: (boolean|null);
    }

    /** Represents a CGamerInfo. */
    class CGamerInfo implements ICGamerInfo {

        /**
         * Constructs a new CGamerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.ICGamerInfo);

        /** CGamerInfo UserID. */
        public UserID: (number|Long);

        /** CGamerInfo NickName. */
        public NickName: string;

        /** CGamerInfo Money. */
        public Money: (number|Long);

        /** CGamerInfo SeatID. */
        public SeatID: number;

        /** CGamerInfo IsReady. */
        public IsReady: boolean;

        /** CGamerInfo IsOffline. */
        public IsOffline: boolean;

        /**
         * Creates a new CGamerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CGamerInfo instance
         */
        public static create(properties?: msg.ICGamerInfo): msg.CGamerInfo;

        /**
         * Encodes the specified CGamerInfo message. Does not implicitly {@link msg.CGamerInfo.verify|verify} messages.
         * @param message CGamerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.ICGamerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CGamerInfo message, length delimited. Does not implicitly {@link msg.CGamerInfo.verify|verify} messages.
         * @param message CGamerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.ICGamerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CGamerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CGamerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.CGamerInfo;

        /**
         * Decodes a CGamerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CGamerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.CGamerInfo;

        /**
         * Verifies a CGamerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CGamerInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CGamerInfo
         */
        public static fromObject(object: { [k: string]: any }): msg.CGamerInfo;

        /**
         * Creates a plain object from a CGamerInfo message. Also converts values to other types if specified.
         * @param message CGamerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.CGamerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CGamerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CGamerCards. */
    interface ICGamerCards {

        /** CGamerCards GamerCards */
        GamerCards?: (msg.ICCard[]|null);
    }

    /** Represents a CGamerCards. */
    class CGamerCards implements ICGamerCards {

        /**
         * Constructs a new CGamerCards.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.ICGamerCards);

        /** CGamerCards GamerCards. */
        public GamerCards: msg.ICCard[];

        /**
         * Creates a new CGamerCards instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CGamerCards instance
         */
        public static create(properties?: msg.ICGamerCards): msg.CGamerCards;

        /**
         * Encodes the specified CGamerCards message. Does not implicitly {@link msg.CGamerCards.verify|verify} messages.
         * @param message CGamerCards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.ICGamerCards, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CGamerCards message, length delimited. Does not implicitly {@link msg.CGamerCards.verify|verify} messages.
         * @param message CGamerCards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.ICGamerCards, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CGamerCards message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CGamerCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.CGamerCards;

        /**
         * Decodes a CGamerCards message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CGamerCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.CGamerCards;

        /**
         * Verifies a CGamerCards message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CGamerCards message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CGamerCards
         */
        public static fromObject(object: { [k: string]: any }): msg.CGamerCards;

        /**
         * Creates a plain object from a CGamerCards message. Also converts values to other types if specified.
         * @param message CGamerCards
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.CGamerCards, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CGamerCards to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Actor_GamerEnterRoom_Ntt. */
    interface IActor_GamerEnterRoom_Ntt {

        /** Actor_GamerEnterRoom_Ntt Gamer */
        Gamer?: (msg.ICGamerInfo|null);
    }

    /** Represents an Actor_GamerEnterRoom_Ntt. */
    class Actor_GamerEnterRoom_Ntt implements IActor_GamerEnterRoom_Ntt {

        /**
         * Constructs a new Actor_GamerEnterRoom_Ntt.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IActor_GamerEnterRoom_Ntt);

        /** Actor_GamerEnterRoom_Ntt Gamer. */
        public Gamer?: (msg.ICGamerInfo|null);

        /**
         * Creates a new Actor_GamerEnterRoom_Ntt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Actor_GamerEnterRoom_Ntt instance
         */
        public static create(properties?: msg.IActor_GamerEnterRoom_Ntt): msg.Actor_GamerEnterRoom_Ntt;

        /**
         * Encodes the specified Actor_GamerEnterRoom_Ntt message. Does not implicitly {@link msg.Actor_GamerEnterRoom_Ntt.verify|verify} messages.
         * @param message Actor_GamerEnterRoom_Ntt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IActor_GamerEnterRoom_Ntt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Actor_GamerEnterRoom_Ntt message, length delimited. Does not implicitly {@link msg.Actor_GamerEnterRoom_Ntt.verify|verify} messages.
         * @param message Actor_GamerEnterRoom_Ntt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IActor_GamerEnterRoom_Ntt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Actor_GamerEnterRoom_Ntt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Actor_GamerEnterRoom_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.Actor_GamerEnterRoom_Ntt;

        /**
         * Decodes an Actor_GamerEnterRoom_Ntt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Actor_GamerEnterRoom_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.Actor_GamerEnterRoom_Ntt;

        /**
         * Verifies an Actor_GamerEnterRoom_Ntt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Actor_GamerEnterRoom_Ntt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Actor_GamerEnterRoom_Ntt
         */
        public static fromObject(object: { [k: string]: any }): msg.Actor_GamerEnterRoom_Ntt;

        /**
         * Creates a plain object from an Actor_GamerEnterRoom_Ntt message. Also converts values to other types if specified.
         * @param message Actor_GamerEnterRoom_Ntt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.Actor_GamerEnterRoom_Ntt, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Actor_GamerEnterRoom_Ntt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Actor_GamersInRoom_Ntt. */
    interface IActor_GamersInRoom_Ntt {

        /** Actor_GamersInRoom_Ntt Gamers */
        Gamers?: (msg.ICGamerInfo[]|null);
    }

    /** Represents an Actor_GamersInRoom_Ntt. */
    class Actor_GamersInRoom_Ntt implements IActor_GamersInRoom_Ntt {

        /**
         * Constructs a new Actor_GamersInRoom_Ntt.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IActor_GamersInRoom_Ntt);

        /** Actor_GamersInRoom_Ntt Gamers. */
        public Gamers: msg.ICGamerInfo[];

        /**
         * Creates a new Actor_GamersInRoom_Ntt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Actor_GamersInRoom_Ntt instance
         */
        public static create(properties?: msg.IActor_GamersInRoom_Ntt): msg.Actor_GamersInRoom_Ntt;

        /**
         * Encodes the specified Actor_GamersInRoom_Ntt message. Does not implicitly {@link msg.Actor_GamersInRoom_Ntt.verify|verify} messages.
         * @param message Actor_GamersInRoom_Ntt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IActor_GamersInRoom_Ntt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Actor_GamersInRoom_Ntt message, length delimited. Does not implicitly {@link msg.Actor_GamersInRoom_Ntt.verify|verify} messages.
         * @param message Actor_GamersInRoom_Ntt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IActor_GamersInRoom_Ntt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Actor_GamersInRoom_Ntt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Actor_GamersInRoom_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.Actor_GamersInRoom_Ntt;

        /**
         * Decodes an Actor_GamersInRoom_Ntt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Actor_GamersInRoom_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.Actor_GamersInRoom_Ntt;

        /**
         * Verifies an Actor_GamersInRoom_Ntt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Actor_GamersInRoom_Ntt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Actor_GamersInRoom_Ntt
         */
        public static fromObject(object: { [k: string]: any }): msg.Actor_GamersInRoom_Ntt;

        /**
         * Creates a plain object from an Actor_GamersInRoom_Ntt message. Also converts values to other types if specified.
         * @param message Actor_GamersInRoom_Ntt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.Actor_GamersInRoom_Ntt, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Actor_GamersInRoom_Ntt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Actor_GamerExitRoom_Ntt. */
    interface IActor_GamerExitRoom_Ntt {

        /** Actor_GamerExitRoom_Ntt UserID */
        UserID?: (number|Long|null);
    }

    /** Represents an Actor_GamerExitRoom_Ntt. */
    class Actor_GamerExitRoom_Ntt implements IActor_GamerExitRoom_Ntt {

        /**
         * Constructs a new Actor_GamerExitRoom_Ntt.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IActor_GamerExitRoom_Ntt);

        /** Actor_GamerExitRoom_Ntt UserID. */
        public UserID: (number|Long);

        /**
         * Creates a new Actor_GamerExitRoom_Ntt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Actor_GamerExitRoom_Ntt instance
         */
        public static create(properties?: msg.IActor_GamerExitRoom_Ntt): msg.Actor_GamerExitRoom_Ntt;

        /**
         * Encodes the specified Actor_GamerExitRoom_Ntt message. Does not implicitly {@link msg.Actor_GamerExitRoom_Ntt.verify|verify} messages.
         * @param message Actor_GamerExitRoom_Ntt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IActor_GamerExitRoom_Ntt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Actor_GamerExitRoom_Ntt message, length delimited. Does not implicitly {@link msg.Actor_GamerExitRoom_Ntt.verify|verify} messages.
         * @param message Actor_GamerExitRoom_Ntt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IActor_GamerExitRoom_Ntt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Actor_GamerExitRoom_Ntt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Actor_GamerExitRoom_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.Actor_GamerExitRoom_Ntt;

        /**
         * Decodes an Actor_GamerExitRoom_Ntt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Actor_GamerExitRoom_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.Actor_GamerExitRoom_Ntt;

        /**
         * Verifies an Actor_GamerExitRoom_Ntt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Actor_GamerExitRoom_Ntt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Actor_GamerExitRoom_Ntt
         */
        public static fromObject(object: { [k: string]: any }): msg.Actor_GamerExitRoom_Ntt;

        /**
         * Creates a plain object from an Actor_GamerExitRoom_Ntt message. Also converts values to other types if specified.
         * @param message Actor_GamerExitRoom_Ntt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.Actor_GamerExitRoom_Ntt, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Actor_GamerExitRoom_Ntt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Actor_GamerReconnect_Ntt. */
    interface IActor_GamerReconnect_Ntt {

        /** Actor_GamerReconnect_Ntt Multiples */
        Multiples?: (number|null);

        /** Actor_GamerReconnect_Ntt LordCards */
        LordCards?: (msg.ICCard[]|null);

        /** Actor_GamerReconnect_Ntt GamersIdentity */
        GamersIdentity?: (msg.CIdentity[]|null);

        /** Actor_GamerReconnect_Ntt DesksCards */
        DesksCards?: (msg.ICGamerCards[]|null);

        /** Actor_GamerReconnect_Ntt GamerGrabLandlordState */
        GamerGrabLandlordState?: (boolean[]|null);
    }

    /** Represents an Actor_GamerReconnect_Ntt. */
    class Actor_GamerReconnect_Ntt implements IActor_GamerReconnect_Ntt {

        /**
         * Constructs a new Actor_GamerReconnect_Ntt.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IActor_GamerReconnect_Ntt);

        /** Actor_GamerReconnect_Ntt Multiples. */
        public Multiples: number;

        /** Actor_GamerReconnect_Ntt LordCards. */
        public LordCards: msg.ICCard[];

        /** Actor_GamerReconnect_Ntt GamersIdentity. */
        public GamersIdentity: msg.CIdentity[];

        /** Actor_GamerReconnect_Ntt DesksCards. */
        public DesksCards: msg.ICGamerCards[];

        /** Actor_GamerReconnect_Ntt GamerGrabLandlordState. */
        public GamerGrabLandlordState: boolean[];

        /**
         * Creates a new Actor_GamerReconnect_Ntt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Actor_GamerReconnect_Ntt instance
         */
        public static create(properties?: msg.IActor_GamerReconnect_Ntt): msg.Actor_GamerReconnect_Ntt;

        /**
         * Encodes the specified Actor_GamerReconnect_Ntt message. Does not implicitly {@link msg.Actor_GamerReconnect_Ntt.verify|verify} messages.
         * @param message Actor_GamerReconnect_Ntt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IActor_GamerReconnect_Ntt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Actor_GamerReconnect_Ntt message, length delimited. Does not implicitly {@link msg.Actor_GamerReconnect_Ntt.verify|verify} messages.
         * @param message Actor_GamerReconnect_Ntt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IActor_GamerReconnect_Ntt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Actor_GamerReconnect_Ntt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Actor_GamerReconnect_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.Actor_GamerReconnect_Ntt;

        /**
         * Decodes an Actor_GamerReconnect_Ntt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Actor_GamerReconnect_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.Actor_GamerReconnect_Ntt;

        /**
         * Verifies an Actor_GamerReconnect_Ntt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Actor_GamerReconnect_Ntt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Actor_GamerReconnect_Ntt
         */
        public static fromObject(object: { [k: string]: any }): msg.Actor_GamerReconnect_Ntt;

        /**
         * Creates a plain object from an Actor_GamerReconnect_Ntt message. Also converts values to other types if specified.
         * @param message Actor_GamerReconnect_Ntt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.Actor_GamerReconnect_Ntt, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Actor_GamerReconnect_Ntt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Actor_GameStart_Ntt. */
    interface IActor_GameStart_Ntt {

        /** Actor_GameStart_Ntt GamersUserID */
        GamersUserID?: ((number|Long)[]|null);

        /** Actor_GameStart_Ntt GamersCardsCount */
        GamersCardsCount?: (number[]|null);

        /** Actor_GameStart_Ntt GamersCards */
        GamersCards?: (msg.ICGamerCards[]|null);
    }

    /** Represents an Actor_GameStart_Ntt. */
    class Actor_GameStart_Ntt implements IActor_GameStart_Ntt {

        /**
         * Constructs a new Actor_GameStart_Ntt.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IActor_GameStart_Ntt);

        /** Actor_GameStart_Ntt GamersUserID. */
        public GamersUserID: (number|Long)[];

        /** Actor_GameStart_Ntt GamersCardsCount. */
        public GamersCardsCount: number[];

        /** Actor_GameStart_Ntt GamersCards. */
        public GamersCards: msg.ICGamerCards[];

        /**
         * Creates a new Actor_GameStart_Ntt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Actor_GameStart_Ntt instance
         */
        public static create(properties?: msg.IActor_GameStart_Ntt): msg.Actor_GameStart_Ntt;

        /**
         * Encodes the specified Actor_GameStart_Ntt message. Does not implicitly {@link msg.Actor_GameStart_Ntt.verify|verify} messages.
         * @param message Actor_GameStart_Ntt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IActor_GameStart_Ntt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Actor_GameStart_Ntt message, length delimited. Does not implicitly {@link msg.Actor_GameStart_Ntt.verify|verify} messages.
         * @param message Actor_GameStart_Ntt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IActor_GameStart_Ntt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Actor_GameStart_Ntt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Actor_GameStart_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.Actor_GameStart_Ntt;

        /**
         * Decodes an Actor_GameStart_Ntt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Actor_GameStart_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.Actor_GameStart_Ntt;

        /**
         * Verifies an Actor_GameStart_Ntt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Actor_GameStart_Ntt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Actor_GameStart_Ntt
         */
        public static fromObject(object: { [k: string]: any }): msg.Actor_GameStart_Ntt;

        /**
         * Creates a plain object from an Actor_GameStart_Ntt message. Also converts values to other types if specified.
         * @param message Actor_GameStart_Ntt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.Actor_GameStart_Ntt, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Actor_GameStart_Ntt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Actor_AuthorityGrabLandlord_Ntt. */
    interface IActor_AuthorityGrabLandlord_Ntt {

        /** Actor_AuthorityGrabLandlord_Ntt UserID */
        UserID?: (number|Long|null);
    }

    /** Represents an Actor_AuthorityGrabLandlord_Ntt. */
    class Actor_AuthorityGrabLandlord_Ntt implements IActor_AuthorityGrabLandlord_Ntt {

        /**
         * Constructs a new Actor_AuthorityGrabLandlord_Ntt.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IActor_AuthorityGrabLandlord_Ntt);

        /** Actor_AuthorityGrabLandlord_Ntt UserID. */
        public UserID: (number|Long);

        /**
         * Creates a new Actor_AuthorityGrabLandlord_Ntt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Actor_AuthorityGrabLandlord_Ntt instance
         */
        public static create(properties?: msg.IActor_AuthorityGrabLandlord_Ntt): msg.Actor_AuthorityGrabLandlord_Ntt;

        /**
         * Encodes the specified Actor_AuthorityGrabLandlord_Ntt message. Does not implicitly {@link msg.Actor_AuthorityGrabLandlord_Ntt.verify|verify} messages.
         * @param message Actor_AuthorityGrabLandlord_Ntt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IActor_AuthorityGrabLandlord_Ntt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Actor_AuthorityGrabLandlord_Ntt message, length delimited. Does not implicitly {@link msg.Actor_AuthorityGrabLandlord_Ntt.verify|verify} messages.
         * @param message Actor_AuthorityGrabLandlord_Ntt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IActor_AuthorityGrabLandlord_Ntt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Actor_AuthorityGrabLandlord_Ntt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Actor_AuthorityGrabLandlord_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.Actor_AuthorityGrabLandlord_Ntt;

        /**
         * Decodes an Actor_AuthorityGrabLandlord_Ntt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Actor_AuthorityGrabLandlord_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.Actor_AuthorityGrabLandlord_Ntt;

        /**
         * Verifies an Actor_AuthorityGrabLandlord_Ntt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Actor_AuthorityGrabLandlord_Ntt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Actor_AuthorityGrabLandlord_Ntt
         */
        public static fromObject(object: { [k: string]: any }): msg.Actor_AuthorityGrabLandlord_Ntt;

        /**
         * Creates a plain object from an Actor_AuthorityGrabLandlord_Ntt message. Also converts values to other types if specified.
         * @param message Actor_AuthorityGrabLandlord_Ntt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.Actor_AuthorityGrabLandlord_Ntt, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Actor_AuthorityGrabLandlord_Ntt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Actor_AuthorityPlayCard_Ntt. */
    interface IActor_AuthorityPlayCard_Ntt {

        /** Actor_AuthorityPlayCard_Ntt UserID */
        UserID?: (number|Long|null);

        /** Actor_AuthorityPlayCard_Ntt IsFirst */
        IsFirst?: (boolean|null);
    }

    /** Represents an Actor_AuthorityPlayCard_Ntt. */
    class Actor_AuthorityPlayCard_Ntt implements IActor_AuthorityPlayCard_Ntt {

        /**
         * Constructs a new Actor_AuthorityPlayCard_Ntt.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IActor_AuthorityPlayCard_Ntt);

        /** Actor_AuthorityPlayCard_Ntt UserID. */
        public UserID: (number|Long);

        /** Actor_AuthorityPlayCard_Ntt IsFirst. */
        public IsFirst: boolean;

        /**
         * Creates a new Actor_AuthorityPlayCard_Ntt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Actor_AuthorityPlayCard_Ntt instance
         */
        public static create(properties?: msg.IActor_AuthorityPlayCard_Ntt): msg.Actor_AuthorityPlayCard_Ntt;

        /**
         * Encodes the specified Actor_AuthorityPlayCard_Ntt message. Does not implicitly {@link msg.Actor_AuthorityPlayCard_Ntt.verify|verify} messages.
         * @param message Actor_AuthorityPlayCard_Ntt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IActor_AuthorityPlayCard_Ntt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Actor_AuthorityPlayCard_Ntt message, length delimited. Does not implicitly {@link msg.Actor_AuthorityPlayCard_Ntt.verify|verify} messages.
         * @param message Actor_AuthorityPlayCard_Ntt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IActor_AuthorityPlayCard_Ntt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Actor_AuthorityPlayCard_Ntt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Actor_AuthorityPlayCard_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.Actor_AuthorityPlayCard_Ntt;

        /**
         * Decodes an Actor_AuthorityPlayCard_Ntt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Actor_AuthorityPlayCard_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.Actor_AuthorityPlayCard_Ntt;

        /**
         * Verifies an Actor_AuthorityPlayCard_Ntt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Actor_AuthorityPlayCard_Ntt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Actor_AuthorityPlayCard_Ntt
         */
        public static fromObject(object: { [k: string]: any }): msg.Actor_AuthorityPlayCard_Ntt;

        /**
         * Creates a plain object from an Actor_AuthorityPlayCard_Ntt message. Also converts values to other types if specified.
         * @param message Actor_AuthorityPlayCard_Ntt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.Actor_AuthorityPlayCard_Ntt, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Actor_AuthorityPlayCard_Ntt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Actor_SetMultiples_Ntt. */
    interface IActor_SetMultiples_Ntt {

        /** Actor_SetMultiples_Ntt Multiples */
        Multiples?: (number|null);
    }

    /** Represents an Actor_SetMultiples_Ntt. */
    class Actor_SetMultiples_Ntt implements IActor_SetMultiples_Ntt {

        /**
         * Constructs a new Actor_SetMultiples_Ntt.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IActor_SetMultiples_Ntt);

        /** Actor_SetMultiples_Ntt Multiples. */
        public Multiples: number;

        /**
         * Creates a new Actor_SetMultiples_Ntt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Actor_SetMultiples_Ntt instance
         */
        public static create(properties?: msg.IActor_SetMultiples_Ntt): msg.Actor_SetMultiples_Ntt;

        /**
         * Encodes the specified Actor_SetMultiples_Ntt message. Does not implicitly {@link msg.Actor_SetMultiples_Ntt.verify|verify} messages.
         * @param message Actor_SetMultiples_Ntt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IActor_SetMultiples_Ntt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Actor_SetMultiples_Ntt message, length delimited. Does not implicitly {@link msg.Actor_SetMultiples_Ntt.verify|verify} messages.
         * @param message Actor_SetMultiples_Ntt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IActor_SetMultiples_Ntt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Actor_SetMultiples_Ntt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Actor_SetMultiples_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.Actor_SetMultiples_Ntt;

        /**
         * Decodes an Actor_SetMultiples_Ntt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Actor_SetMultiples_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.Actor_SetMultiples_Ntt;

        /**
         * Verifies an Actor_SetMultiples_Ntt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Actor_SetMultiples_Ntt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Actor_SetMultiples_Ntt
         */
        public static fromObject(object: { [k: string]: any }): msg.Actor_SetMultiples_Ntt;

        /**
         * Creates a plain object from an Actor_SetMultiples_Ntt message. Also converts values to other types if specified.
         * @param message Actor_SetMultiples_Ntt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.Actor_SetMultiples_Ntt, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Actor_SetMultiples_Ntt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Actor_SetLandlord_Ntt. */
    interface IActor_SetLandlord_Ntt {

        /** Actor_SetLandlord_Ntt UserID */
        UserID?: (number|Long|null);

        /** Actor_SetLandlord_Ntt LordCards */
        LordCards?: (msg.ICCard[]|null);
    }

    /** Represents an Actor_SetLandlord_Ntt. */
    class Actor_SetLandlord_Ntt implements IActor_SetLandlord_Ntt {

        /**
         * Constructs a new Actor_SetLandlord_Ntt.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IActor_SetLandlord_Ntt);

        /** Actor_SetLandlord_Ntt UserID. */
        public UserID: (number|Long);

        /** Actor_SetLandlord_Ntt LordCards. */
        public LordCards: msg.ICCard[];

        /**
         * Creates a new Actor_SetLandlord_Ntt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Actor_SetLandlord_Ntt instance
         */
        public static create(properties?: msg.IActor_SetLandlord_Ntt): msg.Actor_SetLandlord_Ntt;

        /**
         * Encodes the specified Actor_SetLandlord_Ntt message. Does not implicitly {@link msg.Actor_SetLandlord_Ntt.verify|verify} messages.
         * @param message Actor_SetLandlord_Ntt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IActor_SetLandlord_Ntt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Actor_SetLandlord_Ntt message, length delimited. Does not implicitly {@link msg.Actor_SetLandlord_Ntt.verify|verify} messages.
         * @param message Actor_SetLandlord_Ntt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IActor_SetLandlord_Ntt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Actor_SetLandlord_Ntt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Actor_SetLandlord_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.Actor_SetLandlord_Ntt;

        /**
         * Decodes an Actor_SetLandlord_Ntt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Actor_SetLandlord_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.Actor_SetLandlord_Ntt;

        /**
         * Verifies an Actor_SetLandlord_Ntt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Actor_SetLandlord_Ntt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Actor_SetLandlord_Ntt
         */
        public static fromObject(object: { [k: string]: any }): msg.Actor_SetLandlord_Ntt;

        /**
         * Creates a plain object from an Actor_SetLandlord_Ntt message. Also converts values to other types if specified.
         * @param message Actor_SetLandlord_Ntt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.Actor_SetLandlord_Ntt, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Actor_SetLandlord_Ntt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Actor_Gameover_Ntt. */
    interface IActor_Gameover_Ntt {

        /** Actor_Gameover_Ntt Winner */
        Winner?: (msg.CIdentity|null);

        /** Actor_Gameover_Ntt BasePointPerMatch */
        BasePointPerMatch?: (number|Long|null);

        /** Actor_Gameover_Ntt Multiples */
        Multiples?: (number|null);
    }

    /** Represents an Actor_Gameover_Ntt. */
    class Actor_Gameover_Ntt implements IActor_Gameover_Ntt {

        /**
         * Constructs a new Actor_Gameover_Ntt.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IActor_Gameover_Ntt);

        /** Actor_Gameover_Ntt Winner. */
        public Winner: msg.CIdentity;

        /** Actor_Gameover_Ntt BasePointPerMatch. */
        public BasePointPerMatch: (number|Long);

        /** Actor_Gameover_Ntt Multiples. */
        public Multiples: number;

        /**
         * Creates a new Actor_Gameover_Ntt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Actor_Gameover_Ntt instance
         */
        public static create(properties?: msg.IActor_Gameover_Ntt): msg.Actor_Gameover_Ntt;

        /**
         * Encodes the specified Actor_Gameover_Ntt message. Does not implicitly {@link msg.Actor_Gameover_Ntt.verify|verify} messages.
         * @param message Actor_Gameover_Ntt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IActor_Gameover_Ntt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Actor_Gameover_Ntt message, length delimited. Does not implicitly {@link msg.Actor_Gameover_Ntt.verify|verify} messages.
         * @param message Actor_Gameover_Ntt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IActor_Gameover_Ntt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Actor_Gameover_Ntt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Actor_Gameover_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.Actor_Gameover_Ntt;

        /**
         * Decodes an Actor_Gameover_Ntt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Actor_Gameover_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.Actor_Gameover_Ntt;

        /**
         * Verifies an Actor_Gameover_Ntt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Actor_Gameover_Ntt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Actor_Gameover_Ntt
         */
        public static fromObject(object: { [k: string]: any }): msg.Actor_Gameover_Ntt;

        /**
         * Creates a plain object from an Actor_Gameover_Ntt message. Also converts values to other types if specified.
         * @param message Actor_Gameover_Ntt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.Actor_Gameover_Ntt, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Actor_Gameover_Ntt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Actor_GamerMoneyLess_Ntt. */
    interface IActor_GamerMoneyLess_Ntt {

        /** Actor_GamerMoneyLess_Ntt UserID */
        UserID?: (number|Long|null);
    }

    /** Represents an Actor_GamerMoneyLess_Ntt. */
    class Actor_GamerMoneyLess_Ntt implements IActor_GamerMoneyLess_Ntt {

        /**
         * Constructs a new Actor_GamerMoneyLess_Ntt.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IActor_GamerMoneyLess_Ntt);

        /** Actor_GamerMoneyLess_Ntt UserID. */
        public UserID: (number|Long);

        /**
         * Creates a new Actor_GamerMoneyLess_Ntt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Actor_GamerMoneyLess_Ntt instance
         */
        public static create(properties?: msg.IActor_GamerMoneyLess_Ntt): msg.Actor_GamerMoneyLess_Ntt;

        /**
         * Encodes the specified Actor_GamerMoneyLess_Ntt message. Does not implicitly {@link msg.Actor_GamerMoneyLess_Ntt.verify|verify} messages.
         * @param message Actor_GamerMoneyLess_Ntt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IActor_GamerMoneyLess_Ntt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Actor_GamerMoneyLess_Ntt message, length delimited. Does not implicitly {@link msg.Actor_GamerMoneyLess_Ntt.verify|verify} messages.
         * @param message Actor_GamerMoneyLess_Ntt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IActor_GamerMoneyLess_Ntt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Actor_GamerMoneyLess_Ntt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Actor_GamerMoneyLess_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.Actor_GamerMoneyLess_Ntt;

        /**
         * Decodes an Actor_GamerMoneyLess_Ntt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Actor_GamerMoneyLess_Ntt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.Actor_GamerMoneyLess_Ntt;

        /**
         * Verifies an Actor_GamerMoneyLess_Ntt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Actor_GamerMoneyLess_Ntt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Actor_GamerMoneyLess_Ntt
         */
        public static fromObject(object: { [k: string]: any }): msg.Actor_GamerMoneyLess_Ntt;

        /**
         * Creates a plain object from an Actor_GamerMoneyLess_Ntt message. Also converts values to other types if specified.
         * @param message Actor_GamerMoneyLess_Ntt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.Actor_GamerMoneyLess_Ntt, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Actor_GamerMoneyLess_Ntt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Result enum. */
    enum Result {
        REGISTER_SUCCESS = 0,
        REGISTER_FAIL = 1,
        LOGIN_SUCCESS = 2,
        LOGIN_FAIL = 3
    }

    /** Properties of a Test. */
    interface ITest {

        /** Test Test */
        Test?: (string|null);
    }

    /** Represents a Test. */
    class Test implements ITest {

        /**
         * Constructs a new Test.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.ITest);

        /** Test Test. */
        public Test: string;

        /**
         * Creates a new Test instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Test instance
         */
        public static create(properties?: msg.ITest): msg.Test;

        /**
         * Encodes the specified Test message. Does not implicitly {@link msg.Test.verify|verify} messages.
         * @param message Test message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.ITest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Test message, length delimited. Does not implicitly {@link msg.Test.verify|verify} messages.
         * @param message Test message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.ITest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Test message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.Test;

        /**
         * Decodes a Test message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.Test;

        /**
         * Verifies a Test message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Test message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Test
         */
        public static fromObject(object: { [k: string]: any }): msg.Test;

        /**
         * Creates a plain object from a Test message. Also converts values to other types if specified.
         * @param message Test
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.Test, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Test to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserLogin. */
    interface IUserLogin {

        /** UserLogin LoginName */
        LoginName?: (string|null);

        /** UserLogin LoginPW */
        LoginPW?: (string|null);
    }

    /** Represents a UserLogin. */
    class UserLogin implements IUserLogin {

        /**
         * Constructs a new UserLogin.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IUserLogin);

        /** UserLogin LoginName. */
        public LoginName: string;

        /** UserLogin LoginPW. */
        public LoginPW: string;

        /**
         * Creates a new UserLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserLogin instance
         */
        public static create(properties?: msg.IUserLogin): msg.UserLogin;

        /**
         * Encodes the specified UserLogin message. Does not implicitly {@link msg.UserLogin.verify|verify} messages.
         * @param message UserLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IUserLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserLogin message, length delimited. Does not implicitly {@link msg.UserLogin.verify|verify} messages.
         * @param message UserLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IUserLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserLogin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.UserLogin;

        /**
         * Decodes a UserLogin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.UserLogin;

        /**
         * Verifies a UserLogin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserLogin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserLogin
         */
        public static fromObject(object: { [k: string]: any }): msg.UserLogin;

        /**
         * Creates a plain object from a UserLogin message. Also converts values to other types if specified.
         * @param message UserLogin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.UserLogin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserLogin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserRegister. */
    interface IUserRegister {

        /** UserRegister LoginName */
        LoginName?: (string|null);

        /** UserRegister LoginPW */
        LoginPW?: (string|null);
    }

    /** Represents a UserRegister. */
    class UserRegister implements IUserRegister {

        /**
         * Constructs a new UserRegister.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IUserRegister);

        /** UserRegister LoginName. */
        public LoginName: string;

        /** UserRegister LoginPW. */
        public LoginPW: string;

        /**
         * Creates a new UserRegister instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserRegister instance
         */
        public static create(properties?: msg.IUserRegister): msg.UserRegister;

        /**
         * Encodes the specified UserRegister message. Does not implicitly {@link msg.UserRegister.verify|verify} messages.
         * @param message UserRegister message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IUserRegister, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserRegister message, length delimited. Does not implicitly {@link msg.UserRegister.verify|verify} messages.
         * @param message UserRegister message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IUserRegister, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserRegister message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserRegister
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.UserRegister;

        /**
         * Decodes a UserRegister message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserRegister
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.UserRegister;

        /**
         * Verifies a UserRegister message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserRegister message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserRegister
         */
        public static fromObject(object: { [k: string]: any }): msg.UserRegister;

        /**
         * Creates a plain object from a UserRegister message. Also converts values to other types if specified.
         * @param message UserRegister
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.UserRegister, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserRegister to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserResult. */
    interface IUserResult {

        /** UserResult RetResult */
        RetResult?: (msg.Result|null);

        /** UserResult ErrorInfo */
        ErrorInfo?: (string|null);
    }

    /** Represents a UserResult. */
    class UserResult implements IUserResult {

        /**
         * Constructs a new UserResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IUserResult);

        /** UserResult RetResult. */
        public RetResult: msg.Result;

        /** UserResult ErrorInfo. */
        public ErrorInfo: string;

        /**
         * Creates a new UserResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserResult instance
         */
        public static create(properties?: msg.IUserResult): msg.UserResult;

        /**
         * Encodes the specified UserResult message. Does not implicitly {@link msg.UserResult.verify|verify} messages.
         * @param message UserResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IUserResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserResult message, length delimited. Does not implicitly {@link msg.UserResult.verify|verify} messages.
         * @param message UserResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IUserResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.UserResult;

        /**
         * Decodes a UserResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.UserResult;

        /**
         * Verifies a UserResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserResult
         */
        public static fromObject(object: { [k: string]: any }): msg.UserResult;

        /**
         * Creates a plain object from a UserResult message. Also converts values to other types if specified.
         * @param message UserResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.UserResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserST. */
    interface IUserST {

        /** UserST UID */
        UID?: (string|null);

        /** UserST ServerID */
        ServerID?: (string|null);

        /** UserST RoleUID */
        RoleUID?: (string|null);

        /** UserST RoleName */
        RoleName?: (string|null);

        /** UserST RoleLev */
        RoleLev?: (string|null);

        /** UserST Coin */
        Coin?: (string|null);
    }

    /** Represents a UserST. */
    class UserST implements IUserST {

        /**
         * Constructs a new UserST.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IUserST);

        /** UserST UID. */
        public UID: string;

        /** UserST ServerID. */
        public ServerID: string;

        /** UserST RoleUID. */
        public RoleUID: string;

        /** UserST RoleName. */
        public RoleName: string;

        /** UserST RoleLev. */
        public RoleLev: string;

        /** UserST Coin. */
        public Coin: string;

        /**
         * Creates a new UserST instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserST instance
         */
        public static create(properties?: msg.IUserST): msg.UserST;

        /**
         * Encodes the specified UserST message. Does not implicitly {@link msg.UserST.verify|verify} messages.
         * @param message UserST message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IUserST, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserST message, length delimited. Does not implicitly {@link msg.UserST.verify|verify} messages.
         * @param message UserST message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IUserST, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserST message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.UserST;

        /**
         * Decodes a UserST message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.UserST;

        /**
         * Verifies a UserST message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserST message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserST
         */
        public static fromObject(object: { [k: string]: any }): msg.UserST;

        /**
         * Creates a plain object from a UserST message. Also converts values to other types if specified.
         * @param message UserST
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.UserST, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserST to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
