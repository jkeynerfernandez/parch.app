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
  // si continuo referenciando a userData se va a hacer imposible, pero si los dejo como propiedades tambien lo sera, 
  // asi mismo, solo tengo que heredar unas cuantas cosas de la clase padre
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
    // this._name = userName;
    this.patchUser(this.userID, userInfo);
    // You have to call again init to update the info, but you have to do it with the controler
  }

  // email
  get email(){
    return this.userData;
  }
  set email(userEmail){
    this._email = userEmail;
  }

  // password
  get password(){
    return this._password;
  }
  set password(newPassword){
    this._password = (newPassword)
  }

  // Profile photo
  get profilePhoto(){
    return this.profile_photo;
  }
  set profilePhoto(userProfilePhoto){
    this._profilePhoto = userProfilePhoto; 
  }

  // about
  get about() {
    return this._about;
  }
  set about(userAbout) {
    this._about = userAbout;
  }

  // status
  get status() {
    return this._status;
  }
  set status(userStatus) {
    this._status = userStatus;
  }

  // parche_points
  get parchePoints() {
    return this._parchePoints;
  }
  set parchePoints(userParchePoints) {
    this._parchePoints = userParchePoints;
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