const BookModel = (DataTypes) => {
    return {
        pic_id: {
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
}

module.exports = BookModel;
