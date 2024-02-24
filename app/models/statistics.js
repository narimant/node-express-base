const db = require("../../database/mysql");

exports.totalUsers = async () => {
  const [result] = await db.query(`select count(id) as totalUsers from users`);

  return result[0].totalUsers;
};

exports.totalComments = async () => {
  const [result] = await db.query(
    `select count(id) as totalComments from comments`
  );

  return result[0].totalComments;
};

exports.totalPosts = async () => {
  const [result] = await db.query(`select count(id) as totalPosts from posts`);

  return result[0].totalPosts;
};

exports.totalViews = async () => {
  const [result] = await db.query(`select sum(views) as totalViews from posts`);

  return result[0].totalViews;
};
