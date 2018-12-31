require('dotenv').config();
const { RESTDataSource } = require('apollo-datasource-rest');

const guestReducer = (rawGuestData) => ({
  id: rawGuestData.id,
  email: rawGuestData.fields.Email,
  firstName: rawGuestData.fields.First_Name,
  lastName: rawGuestData.fields.Last_Name,
  groupId: rawGuestData.fields.Group_ID,
})

class GuestAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.airtable.com/v0/appJ63Pbz1XbujF8M/Guests'
  }

  willSendRequest(request) {
    // Set authorization header with Airtable API Key
    request.headers.set('Authorization', `Bearer ${process.env.AIRTABLE_API_KEY}`);
    
    // Add query parameters to request URL
    // request.params.set('Email', ??? );
  }

  async getGuestById(id) {
    const res = await this.get(id);
    return res ? guestReducer(res) : null;
  }
}

module.exports = GuestAPI;