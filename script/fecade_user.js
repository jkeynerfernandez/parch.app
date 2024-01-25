import { UserDataModel, ServicesDataModel }  from "./data_base_model.js";
const DataModel = new UserDataModel;
const ServiceModel = new ServicesDataModel;

const deleteMediator = async function (userID) {
  const dataUserEvents = await ServiceModel.getUserEvents(userID);
  for (const event of dataUserEvents) {
    const eventID = event.id;
    ServiceModel.removeEvent(eventID);
  }
  DataModel.removeUser(userID);
}

class UserMediator{
  constructor (userID) {
    this.userID = userID
    this.init()
  }
  //////////////////////////////////METHODS///////////////////////////////
  // Init
  async init () {
    this.userData = await DataModel.getUserByID(this.userID);
  }
  // updateUserData will act as a middleware
  async updateUserData (userPromise) {
    const response = await userPromise;
    this.userData = response;
  }
  
  // name
  get name(){
    return this.userData.name
  }
  set name(userName){
    const userInfo = {name : userName};
    const promise =  DataModel.patchUser(this.userID, userInfo);
    this.updateUserData(promise)
  }

  // email
  get email(){
    return this.userData.email;
  }
  set email(userEmail){
    const userInfo = {email : userEmail};
    const promise = DataModel.patchUser(this.userID, userInfo);
    this.updateUserData(promise)
  }

  // password
  get password(){
    return this.userData.password; 
  }
  set password(userPassword){
    const userInfo = {password : userPassword};
    const promise = DataModel.patchUser(this.userID, userInfo);
    this.updateUserData(promise);
  }

  // Profile photo
  get profilePhoto(){
    return this.userData.profile_photo; 
  }
  set profilePhoto(userProfilePhoto){
    const userInfo = {profile_photo : userProfilePhoto};
    const promise = DataModel.patchUser(this.userID, userInfo);
    this.updateUserData(promise);
  }
  
  // about
  get about() {
    return this.userData.about;
  }
  set about(userAbout) {
    const userInfo = {about : userAbout};
    const promise = DataModel.patchUser(this.userID, userInfo);
    this.updateUserData(promise);
  }

  // status
  get status() {
    return this.userData.status;
  }
  set status(userStatus) {
    const userInfo = {status : userStatus};
    const promise = DataModel.patchUser(this.userID, userInfo);
    this.updateUserData(promise);
  }

  // parche_points
  get parchePoints() {
    return this.userData.parch_points;
  }
  set parchePoints(userParchePoints) {
    const userInfo = {parch_points : userParchePoints};
    const promise = DataModel.patchUser(this.userID, userInfo);
    this.updateUserData(promise);
  }

  // follower_counter
  get followerCounter() {
    return this.userData.follower_counter;
  }
  set followerCounter(userFollowerCounter) {
    const userInfo = {follower_counter : userFollowerCounter};
    const promise = DataModel.patchUser(this.userID, userInfo);
    this.updateUserData(promise);
  }

  // following
  get following() {
    return this.userData.following;
  }
  set following(userFollowing) {
    const userInfo = {following : userFollowing};
    const promise = DataModel.patchUser(this.userID, userInfo);
    this.updateUserData(promise);
  }

  // birthday
  get birthday() {
    return this.userData.birthday;
  }
  set birthday(userBirthday) {
    const userInfo = {birthday : userBirthday};
    const promise = DataModel.patchUser(this.userID, userInfo);
    this.updateUserData(promise);
  }

  // badges
  get badges() {
    return this.userData.badges;
  }
  set badges(userBadges) {
    const userInfo = {badges : userBadges};
    const promise = DataModel.patchUser(this.userID, userInfo);
    this.updateUserData(promise);
  }

  // level
  get level() {
    return this.userData.level;
  }
  set level(userLevel) {
    const userInfo = {level : userLevel};
    const promise = DataModel.patchUser(this.userID, userInfo);
    this.updateUserData(promise);
  }

  // enrolled_events
  get enrolledEvents() {
    return this.userData.enrolled_events;
  }
  set enrolledEvents(userEnrolledEvents) {
    const userInfo = {enrolled_events : userEnrolledEvents};
    const promise = DataModel.patchUser(this.userID, userInfo);
    this.updateUserData(promise);
  }

  // Delete account 
  async deleteAcount () {
    deleteMediator(this.userID);
  }

  // This method is a little bit complicated
  async getEventList () {
    await ServiceModel.getUserEvents(this.userID)
  }

  // Add event
  async addEvent (userEventData) {
    ServiceModel.addNewEvent(this.userID, userEventData)
  }
}

class EventFecade {
  constructor (userID, userEventID) {
    console.log(userEventID)
    this.userID = userID;
    this.eventID = userEventID;
    this.init()
  }

  // Init
  async init () {
    this.eventData = await ServiceModel.getEventInfo(this.eventID);
  }

  async updateEventInfo (userPromise) {
    const response = await userPromise;
    this.eventData = response;
  }

  get userEvents () {
    return this.eventData 
  }
  // problema con la escalabilidad del codigo, como voy a juntar los dos fecades?
  // name
  get name () {
    return this.eventData.name
  }
  set name (userEventValue) {
    const request = {name : userEventValue};
    const response = ServiceModel.patchEvent(this.eventData.id, request);
    this.updateEventInfo(response);
  }
  
  // description
  get description () {
    return this.eventData.description
  }
  set description (userEventValue) {
    const request = {description : userEventValue};
    const response = ServiceModel.patchEvent(this.eventData.id, request);
    this.updateEventInfo(response);
  } 

  // category
  get category () {
    return this.eventData.category
  }
  set category (userEventValue) {
    const request = {category : userEventValue};
    const response = ServiceModel.patchEvent(this.eventData.id, request);
    this.updateEventInfo(response);
  }

  // location
  get location () {
    return this.eventData.location
  }
  set location (userEventValue) {
    const request = {location : userEventValue};
    const response = ServiceModel.patchEvent(this.eventData.id, request);
    this.updateEventInfo(response);
  } 

  // day
  get day () {
    return this.eventData.day
  }
  set day (userEventValue) {
    const request = {day : userEventValue};
    const response = ServiceModel.patchEvent(this.eventData.id, request);
    this.updateEventInfo(response);
  }

  // hour
  get hour () {
    return this.eventData.hour
  }
  set hour (userEventValue) {
    const request = {hour : userEventValue};
    const response = ServiceModel.patchEvent(this.eventData.id, request);
    this.updateEventInfo(response);
  }

  // people enrolled
  get peopleEnrolled () {
    return this.eventData.people_enrolled
  }
  set peopleEnrolled (userEventValue) {
    const request = {people_enrolled : userEventValue};
    const response = ServiceModel.patchEvent(this.eventData.id, request);
    this.updateEventInfo(response);
  }

  // price
  get price () {
    return this.eventData.price
  }
  set price (userEventValue) {
    const request = {price : userEventValue};
    const response = ServiceModel.patchEvent(this.eventData.id, request);
    this.updateEventInfo(response);
  }

  // Remove event
  async deleteEvent () {
    ServiceModel.removeEvent(this.eventData.id);
  }

}

export { UserMediator, EventFecade }