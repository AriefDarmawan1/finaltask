// migrations/<timestamp>-add-date-and-skills-to-blog.js
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("blogs", "date", {
      type: Sequelize.DATE,
      allowNull: true,
    });

    await queryInterface.addColumn("blogs", "skills", {
      type: Sequelize.TEXT, // Disimpan sebagai teks untuk menyimpan array keterampilan
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("blogs", "date");
    await queryInterface.removeColumn("blogs", "skills");
  },
};
