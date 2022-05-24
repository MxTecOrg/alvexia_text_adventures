const attributes = {
    sta: 0,
    con: 0,
    str: 0,
    agl: 0,
    int: 0,
    luck: 0
};

const equipment = {
    weapon: "na",
    head: "na",
    shoulder: "na",
    chest: "na",
    belt: "na",
    ring: "na",
    neck: "na",
    trinket: "na",
    bracer: "na",
    pants: "na",
    boots: "na",
    mount: "na"
};

const prof = {
    main : {
        type : "na",
        level : 0,
        xp : 0,
        recipes : []
    },
    second : {
        type : "na",
        level : 0,
        xp : 0,
        recipes : []
    }
};

const inventory = {
    slots : 20,
    armors : [],
    consumables : [],
    materials : [],
    extra : []
};

const spells = {
    s_0 : "na",
    s_1 : "na",
    s_2 : "na",
    s_3 : "na",
    s_4 : "na"
};

const vip = {
    level : 0,
    xp : 0
};

const coins = {
    gold : 0,
    gems : 0,
    honor : 0,
    valor : 0,
    conquest : 0
};

const wallet = {
    wallet : "na",
    gen_wallet : "na"
};

const friendList = {
    friends : [],
    requests : [],
    invitations : []
};

const UserModel = (DataTypes) => {
    return {
        user_id: {
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        nickname: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        color: {
            type: DataTypes.STRING,
        },
        pic: {
            type: DataTypes.STRING
        },
        level: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        },
        xp: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        stat_points: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        stats: {
            type: DataTypes.STRING,
            defaultValue: "{}"
        },
        attributes: {
            type: DataTypes.STRING,
            defaultValue: JSON.stringify(attributes)
        },
        equipment: {
            type: DataTypes.STRING,
            defaultValue: JSON.stringify(equipment)
        },
        inventory: {
            type: DataTypes.STRING,
            defaultValue: JSON.stringify(inventory)
        },
        spells: {
            type: DataTypes.STRING,
            defaultValue: JSON.stringify(spells)
        },
        prof: {
            type: DataTypes.STRING,
            defaultValue: JSON.stringify(prof)
        },
        coins: {
            type: DataTypes.STRING,
            defaultValue: JSON.stringify(coins)
        },
        wallet: {
            type: DataTypes.STRING,
            defaultValue: JSON.stringify(wallet)
        },
        guild : {
            type: DataTypes.STRING,
            defaultValue: "na"
        },
        party : {
            type: DataTypes.STRING,
            defaultValue: "na"
        },
        mails : {
            type: DataTypes.STRING,
            defaultValue: "[]"
        },
        banList: {
            type: DataTypes.STRING,
            defaultValue: "[]"
        },
        friendList: {
            type: DataTypes.STRING,
            defaultValue: JSON.stringify(friendList)
        },
        daily_bonus: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        },
        acceptParty: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        isOnline: {
            type: DataTypes.BOOLEAN,
            defaultStatus: false
        },
        lastTimeOnline: {
            type: DataTypes.INTEGER,
            defaultValue: new Date().getTime()
        },
        verified: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        vip: {
            type: DataTypes.STRING,
            defaultValue: JSON.stringify(vip)
        },
        acclevel: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        }
    }
}

module.exports = UserModel;
