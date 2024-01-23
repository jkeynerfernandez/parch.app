const END_POINT = "http://localhost:3000/users";

class DataModel {
  async getUserByID (userID) {
    const requestURL = `${END_POINT}/${userID}`
    const response = await fetch(requestURL);
    const user = await response.json(); 
    return user
  }

  async getUserByEmail (userEmail) {
    const requestURL = `${END_POINT}?email=${userEmail}`
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
    profile_photo : undefined,
    about : undefined,
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
  }

  async updateUser () {}
}
// Crear barra busqueda que solo va a tener buscar elementos y no crear

export {DataModel}