import { ServicesDataModel, UserDataModel, FollowDataModel } from "./data_base_model.js";
import { setLocalStorage, getLocalStorage } from "./local_storage.js"
import { removeUserByNameList, removeListDuplicates } from "./utilities.js"; 
const UserModel = new UserDataModel()
const FollowModel = new FollowDataModel()
let waitToUpdateDB;
/*---------- CONTROLER ----------*/
const FollowControler = {
  async init () {
    FollowViews.init()
    // get users data
    const currentUserToken = getLocalStorage("userToken");
    const suggestionProfileToken = getLocalStorage("suggestionProfile");
    const currentUserData = await UserModel.getUserByID(currentUserToken);
    let suggestionProfileData = await UserModel.getUserByNickname(suggestionProfileToken);
    suggestionProfileData = suggestionProfileData[0];
    // check if following
    this.userID = currentUserData.id;
    this.suggestionID = suggestionProfileData.id;
    this.followStatus = await this.checkIfFollowing(this.userID, this.suggestionID);
    this.followBTNRender(this.followStatus)
  },

  followControl () {
    // check control
    clearTimeout(waitToUpdateDB)
    waitToUpdateDB = setTimeout(() => {
      const isFollowing =  this.followStatus;
      if (!isFollowing) {
        this.addFollowing(this.userID, this.suggestionID)
      } else {
        try {
          this.removeFollowing(this.userID, this.suggestionID)
        } catch {
          console.log("User doesn't exit")
        }
      }
    },0)
    // change button after if else stament because data internally change
    this.followStatus = !this.followStatus
    this.followBTNRender(this.followStatus)
  },

  // DATA BASE
  addFollowing (userID, suggestionID) {
    FollowModel.addFollower(userID, suggestionID);
  },

  removeFollowing (userID, suggestionID) {
    FollowModel.changeFollowingStatus("53c1", "3e01", false);
    // FollowModel.changeFollowingStatus(userID, suggestionID, false);
  },

  async getFollowData (userID, suggestionID) {
    const followingData = await FollowModel.checkIfFollowing(userID, suggestionID)
    return followingData;
  },

  async checkIfFollowing (userID, suggestionID) {
    const followingData = await this.getFollowData(userID, suggestionID)
    const isUndefined = !Boolean(followingData) 
    let isFollowing;
    if (isUndefined){
      isFollowing = false
    } else {
      isFollowing = followingData.status;
    }
    return isFollowing;
  },

  followBTNRender (userIsFollowing) {
    if (userIsFollowing) {
      FollowViews.following()
    } else {
      FollowViews.unFollowing()
    }
  }
}

/*---------- VIEWS ----------*/
const FollowViews = {
  init () {
    this.followBTN = document.getElementById("follow_button")
    const data = document.getElementById('follow_button')
    data.addEventListener('click', () => {
      FollowControler.followControl()
    })
  },

  following () {
    this.followBTN.classList.add("followBTN");
    this.followBTN.classList.remove("unfollowBTN");
  },

  unFollowing () {
    this.followBTN.classList.add("unfollowBTN");
    this.followBTN.classList.remove("followBTN");
  }
}
FollowModel.getFollowID()
FollowControler.init()