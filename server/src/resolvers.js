module.exports = {
  Query: {
    guest: async (_, { id }, { dataSources }) => {
      return dataSources.guestAPI.getGuestById(id);
      // return dataSources.guestAPI.getGuestByEmail(email);
    },
  },
  Mutation: {
    updateGuest: async (_, { id, rsvp }, { dataSources }) => {
      await dataSources.guestAPI.updateGuestById(id, rsvp);
      return dataSources.guestAPI.getGuestById(id);
    }
  }
};