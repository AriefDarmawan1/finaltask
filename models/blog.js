// models/blog.js
module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define("blog", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE, // Tipe data tanggal
      allowNull: true,
    },
    skills: {
      type: DataTypes.TEXT, // Tipe data teks untuk menyimpan keterampilan sebagai JSON atau teks
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Blog.associate = function (models) {
    Blog.belongsTo(models.user, { foreignKey: "userId" });
  };

  return Blog;
};
