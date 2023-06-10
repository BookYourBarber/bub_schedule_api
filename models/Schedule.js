module.exports = (sequelize, DataTypes) => {
    const Day = sequelize.define("Day", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        barberId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        startTime: {
            type: DataTypes.TIME,
            allowNull: false
        },
        endTime: {
            type: DataTypes.TIME,
            allowNull: false
        },
        type: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            validate: {
                isIn: [[true, false]]
            }
        }
    })
    
    return Day;
}