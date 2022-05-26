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
        desc: {
            type: DataTypes.STRING
        },
        pic: {
            type: DataTypes.STRING,
            defaultValue: "def_pic"
        },
        background_pic : {
            type: DataTypes.STRING,
            defaultValue: "def_bpic"
        },
        self_likes: {
            type: DataTypes.STRING,
            defaultValue: "[]"
        },
        likes: {
            type: DataTypes.STRING,
            defaultValue: "[]"
        },
        followed : {
            type: DataTypes.STRING,
            defaultValue: "[]"
        },
        following : {
            type: DataTypes.STRING,
            defaultValue: "[]"
        },
        self_books: {
            type: DataTypes.STRING,
            defaultValue: "[]"
        },
        xcoins: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        daily: {
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
            defaultValue: "basic"
        },
        acclevel: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        }
    }
}

module.exports = UserModel;
