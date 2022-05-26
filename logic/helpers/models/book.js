const BookModel = (DataTypes) => {
    return {
        book_id: {
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        desc: {
            type: DataTypes.STRING
        },
        pic: {
            type: DataTypes.STRING,
            defaultValue: "def_pic"
        },
        likes: {
            type: DataTypes.STRING,
            defaultValue: "[]"
        },
        chapters: {
            type: DataTypes.STRING,
            defaultValue: "[]"
        },
        publishTime: {
            type: DataTypes.INTEGER
        },
        isPublished: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }
}

module.exports = BookModel;
