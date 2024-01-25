import { UserDataModel, ServicesDataModel }  from "./data_base_model.js";
class UserFecade extends UserDataModel{
  /////////////////////////////////ATTRIBUTES////////////////////////////////////////////////
  static id=0;// se hereda entre clases pero no entre objetos y luego se actualiza con un set

  constructor (userID) {
  // (userName, userEmail, userPassword, userUserProfilePhoto, userAbout, userStatus, userParchePoints,
  //   userFollowerCounter, userFollowing, userBirthday, userBadges, userLevel, userEnrolledEvents){
    super();
    this.userID = userID
    this.init()

    // this._name = userName;
    // this._email = userEmail;
    // this._password = userPassword;
    // this._profilePhoto = userUserProfilePhoto;
    // this._about = userAbout;
    // this._status = userStatus;
    // this._parchePoints = userParchePoints;
    // this._followerCounter = userFollowerCounter;
    // this._following = userFollowing;
    // this._birthday = userBirthday;
    // this._badges = userBadges;
    // this._level = userLevel;
    // this._enrolledEvents = userEnrolledEvents;
    // this._numero = ++UserModel.id;
  }

  //////////////////////////////////METHODS///////////////////////////////
  // Init
  async init () {
    this.userData = await this.getUserByID(this.userID);
  }

  async updateUserData () {
    
  }
  // name
  get name(){
    // return this._name;
    return this.userData.name
  }
  set name(userName){
    const userInfo = {name : userName};
    this.userData = this.patchUser(this.userID, userInfo);
    // You have to call again init to update the info, but you have to do it with the controler
  }

  // email
  get email(){
    return this.userData.email;
  }
  set email(userEmail){
    const userInfo = {email : userEmail};
    this.userData = this.patchUser(this.userID, userInfo);
  }

  // password
  get password(){
    return this.userData.password; 
  }
  set password(userPassword){
    const userInfo = {password : userPassword};
    this.userData = this.patchUser(this.userID, userInfo);
  }

  // Profile photo
  get profilePhoto(){
    return this.userData.profile_photo; 
  }
  set profilePhoto(userProfilePhoto){
    const userInfo = {profile_photo : userProfilePhoto};
    this.userData = this.patchUser(this.userID, userInfo);}

  // about
  get about() {
    return this.userData.about;
  }
  set about(userAbout) {
    const userInfo = {about : userAbout};
    this.userData = this.patchUser(this.userID, userInfo);
  }

  // status
  get status() {
    return this.userData.status;
  }
  set status(userStatus) {
    const userInfo = {status : userStatus};
    this.userData = this.patchUser(this.userID, userInfo);
  }

  // parche_points
  get parchePoints() {
    return this.userData.parch_points;
  }
  set parchePoints(userParchePoints) {
    const userInfo = {parch_points : userParchePoints};
    this.userData = this.patchUser(this.userID, userInfo);
  }

  // follower_counter
  get followerCounter() {
    return this.userData.follower_counter;
  }
  set followerCounter(userFollowerCounter) {
    const userInfo = {follower_counter : userFollowerCounter};
    this.userData = this.patchUser(this.userID, userInfo);
  }

  // following
  get following() {
    return this.userData.following;
  }
  set following(userFollowing) {
    const userInfo = {following : userFollowing};
    this.userData = this.patchUser(this.userID, userInfo);
  }

  // birthday
  get birthday() {
    return this.userData.birthday;
  }
  set birthday(userBirthday) {
    const userInfo = {birthday : userBirthday};
    this.userData = this.patchUser(this.userID, userInfo);
  }

  // badges
  get badges() {
    return this.userData.badges;
  }
  set badges(userBadges) {
    const userInfo = {badges : userBadges};
    this.userData = this.patchUser(this.userID, userInfo);
  }

  // level
  get level() {
    return this.userData.level;
  }
  set level(userLevel) {
    const userInfo = {level : userLevel};
    this.userData = this.patchUser(this.userID, userInfo);
  }

  // enrolled_events
  get enrolledEvents() {
    return this.userData.enrolled_events;
  }
  set enrolledEvents(userEnrolledEvents) {
    const userInfo = {enrolled_events : userEnrolledEvents};
    this.userData = this.patchUser(this.userID, userInfo);
  }

  // Delete account 
  async deleteAcount () {}
}

class EventFecade extends ServicesDataModel {
  constructor (userID) {
    super();
    this.userID = userID
    this.init()
  }

  // Init
  async init () {
    this.userData = await this.getUserEvents(this.userID);
  }

  get userEvents () {
    return this.userData 
  }
  // problema con la escalabilidad del codigo, como voy a juntar los dos fecades?
  setName (userEventID, userEventName) {
    const userInfo = {name : userEventName};
    this.userData = this.patchEvent(userEventID, userInfo);
  }

  setDescription (userEventID, userEventDescription) {
    const userInfo = {description : userEventDescription};
    this.userData = this.patchEvent(userEventID, userInfo);
  }

  setCategory (userEventID, userEventCategory) {
    const userInfo = {category : userEventCategory};
    this.userData = this.patchEvent(userEventID, userInfo);
  }
}

export { UserFecade, EventFecade }