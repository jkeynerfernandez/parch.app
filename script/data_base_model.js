const END_POINT = "http://localhost:3000"
const USERS_END_POINT = `${END_POINT}/users`;
const SERVICES_END_POINT = `${END_POINT}/services`;

class UserDataModel {
  async getUserByID (userID) {
    const requestURL = `${USERS_END_POINT}/${userID}`
    const response = await fetch(requestURL);
    const user = await response.json(); 
    return user
  }

  async getUserByEmail (userEmail) {
    const requestURL = `${USERS_END_POINT}?email=${userEmail}`
    const response = await fetch(requestURL);
    const user = await response.json(); 
    return user
  }

  async addNewUser (userRequest) {
    const {name, nickname, email, password} = userRequest;
    const userInfo = {
      name : name, 
      nickname : nickname,
      email : email,
      password : password,
      profile_photo : null,
      about : null,
      status : "desparchado",
      post_counter : 0,
      parche_counter : 0,
      credibility : 0,
      parche_points : 0,
      follower_counter : 0,
      following : 0,
      last_login : null, //function here
      account_created : null, //function here
      birthday : undefined,
      badges : [],
      level : "Turist", // function here (about option levels)
      enrolled_events : []
    }

    const requestURL = `${USERS_END_POINT}`
    const request = await fetch(requestURL,
    {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(userInfo),
    });
    const response = await request.json(); 
    return response
  }

  async patchUser (userID, userUpdatedData) {
    // userUpdatedData should contains the json key, because we can't check witch keys is the user updating 
    // Should be an object like next one:
    /*     
      const userInfo = {
      name : name, 
      nickname : nickname,
      [...]
    } */

    const requestURL = `${USERS_END_POINT}/${userID}`
    const request = await fetch(requestURL,
    {
      method: 'PATCH',
      headers: {
      'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(userUpdatedData),
    });
    const response = await request.json();
    return response;
  }

  async removeUser (userID) {
    const requestURL = `${USERS_END_POINT}/${userID}`;
    const request = await fetch(requestURL, { method: 'DELETE' });
    const response = await request.json();
    return response;
  }
}
// Crear barra busqueda que solo va a tener buscar elementos y no crear
class ServicesDataModel {
  async getUserEvents (userID) {
    const requestURL = `${SERVICES_END_POINT}/?creatorID=${userID}`;
    const request = await fetch(requestURL);
    const response = await request.json();
    return response;
  }

  async getEventInfo (userEventID) {
    const requestURL = `${SERVICES_END_POINT}/${userEventID}`;
    const request = await fetch(requestURL);
    const response = await request.json();
    return response;
  }

  async addNewEvent (userRequest) {
    const {creatorID, name, description, category, location, day, hour, people_enrolled, price} = userRequest;
    const userInfo = {
      name : name, 
      creatorID : creatorID,
      description : description,
      category : category,
      location : location,
      day : day,
      hour : hour,
      people_enrolled : people_enrolled,
      price : price,
    }

    const requestURL = `${SERVICES_END_POINT}`
    const request = await fetch(requestURL,
    {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(userInfo),
    });
    const response = await request.json(); 
    return response
  }

  async patchEvent (userEventID, userEventData) {
    const requestURL = `${SERVICES_END_POINT}/${userEventID}`
    const request = await fetch(requestURL,
    {
      method: 'PATCH',
      headers: {
      'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(userEventData),
    });
    const response = await request.json();
    return response;
  }

  async removeEvent (userEventID) {
    const requestURL = `${SERVICES_END_POINT}/${userEventID}`;
    const request = await fetch(requestURL, { method: 'DELETE' });
    const response = await request.json();
    return response;
  }
}
export {UserDataModel, ServicesDataModel}