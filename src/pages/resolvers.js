// resolvers.js

const { User } = require('./models');

const resolvers = {
  Query: {
    users: () => User.findAll(),
  },
  Mutation: {
    async registerUser(parent, { input }, { models }) {
      const { username, password } = input;
      const user = await models.User.findOne({ where: { username } });
      if (user) {
        throw new Error('Username already exists');
      }
      return User.create({
        username,
        password,
      });
    },
  },
};

module.exports = resolvers;
