const END_POINT = "http://localhost:3000"
const USERS_END_POINT = `${END_POINT}/users`;
const SERVICES_END_POINT = `${END_POINT}/services`;
const FOLLOW_END_POINT = `${END_POINT}/follow`;

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

  async getUserByNickname (userNickname) {
    const requestURL = `${USERS_END_POINT}?nickname=${userNickname}`
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
      credibility : 0,
      post_counter : 0,
      parche_counter : 0,
      parche_points : 0,
      level_points : 0,
      followers : [],
      following : [],
      last_login : null, //function here
      account_created : null, //function here
      birthday : null,
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

  async addNewEvent (userID, userRequest) {
    const {name, description, category, location, day, hour, price} = 
    userRequest;
    const userInfo = {
      name : name, 
      creatorID : userID,
      description : description,
      category : category,
      location : location,
      day : day,
      hour : hour,
      people_enrolled : 0, // We have to determinate how many people is enrolled
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

// Follow model 
class FollowDataModel {
  async getListFollowers (userID) {
    const requestURL = `${FOLLOW_END_POINT}?famous_id=${userID}`
    const response = await fetch(requestURL);
    const user = await response.json(); 
    return user
  }

  async getListFollowing (userID) {
    const requestURL = `${FOLLOW_END_POINT}?fan_id=${userID}`
    const response = await fetch(requestURL);
    const user = await response.json(); 
    return user
  }

  async addFollower (userFanID, userFamousID) {
    const isFollowing = await this.checkIfCreated(userFanID, userFamousID)
    if (isFollowing) {
      const followID = await this.getFollowID(userFanID, userFamousID);
      const response = await this.changeFollowingStatus(followID, true);
      return response
    } else {
      const userInfo = {
        famous_id : userFamousID, 
        fan_id : userFanID,
        status : true
      }
      debugger
      const requestURL = `${FOLLOW_END_POINT}`
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
  }

  // used to add or remove following
  async changeFollowingStatus (userFollowID ,userStatus) {
    const userInfo = { status : userStatus }
    const requestURL = `${FOLLOW_END_POINT}/${userFollowID}`
    const request = await fetch(requestURL,
    {
      method: 'PATCH',
      headers: {
      'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(userInfo),
    });
    const response = await request.json(); 
    return response
  }

  async getFollowID (userFanID, userFamousID) {
    const requestURL = `${FOLLOW_END_POINT}?fan_id=${userFanID}&famous_id=${userFamousID}`
    const request = await fetch(requestURL);
    const response = await request.json(); 
    const followID = response[0].id
    return followID
  }

  async checkIfCreated (userFanID, userFamousID) {
    const requestURL = `${FOLLOW_END_POINT}?fan_id=${userFanID}&famous_id=${userFamousID}`
    const request = await fetch(requestURL);
    const response = await request.json(); 
    return Boolean(response[0]) 
  }

  async checkIfFollowing (userFanID, userFamousID) {
    try {
      const requestURL = `${FOLLOW_END_POINT}?fan_id=${userFanID}&famous_id=${userFamousID}`
      const request = await fetch(requestURL);
      const response = await request.json(); 
      const isFollowing = response[0].status
      // If throw an erron this line will not be executed
      return isFollowing 
    }
    catch (e) {
      return false
    }
  }
  
  // DON'T USE IT IN FRON END, IT IS JUST FOR TESTING ADD USER FUNCTIONALITY
  async definellyDeleteFollow (followID) {
    const requestURL = `${FOLLOW_END_POINT}/${followID}`;
    const request = await fetch(requestURL, { method: 'DELETE' });
    const response = await request.json();
    return response;
  }
}
// module.exports = {UserDataModel, ServicesDataModel, FollowDataModel};
export {UserDataModel, ServicesDataModel, FollowDataModel}