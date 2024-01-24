import { DataModel } from "./data_base_model.js";
  class UserModel extends DataModel{
  /////////////////////////////////ATTRIBUTES////////////////////////////////////////////////
  static id=0;// se hereda entre clases pero no entre objetos y luego se actualiza con un set

  constructor (userID) {
  // (userName, userEmail, userPassword, userUserProfilePhoto, userAbout, userStatus, userParchePoints,
  //   userFollowerCounter, userFollowing, userBirthday, userBadges, userLevel, userEnrolledEvents){
    super();
    this.userID = userID
    this.init(this.userID)

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
  async init (userID) {
    this.userData = await this.getUserByID(userID);
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
    return this._followerCounter;
  }
  set followerCounter(userFollowerCounter) {
    this._followerCounter = userFollowerCounter;
  }

  // following
  get following() {
    return this._following;
  }
  set following(newFollowing) {
    this._following = newFollowing;
  }

  // birthday
  get birthday() {
    return this._birthday;
  }
  set birthday(userBirthday) {
    this._birthday = userBirthday;
  }

  // badges
  get badges() {
    return this._badges;
  }
  set badges(userBadges) {
    this._badges = userBadges;
  }

  // level
  get level() {
    return this._level;
  }
  set level(userLevel) {
    this._level = userLevel;
  }

  // enrolled_events
  get enrolledEvents() {
    return this._enrolledEvents;
  }
  set enrolledEvents(userEnrolledEvents) {
    this._enrolledEvents = userEnrolledEvents;
  }
}

export {UserModel as Usuario}