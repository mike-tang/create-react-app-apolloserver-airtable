module.exports = {
  Query: {
    guest: async (_, { id }, { dataSources }) => {
      return dataSources.guestAPI.getGuestById(id);
      // return dataSources.guestAPI.getGuestByEmail(email);
    },
  },
}; 

