import { ServicesDataModel, UserDataModel, FollowDataModel } from "./data_base_model.js";
import { setLocalStorage, getLocalStorage } from "./local_storage.js"
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
    console.log(this.followStatus)
    this.followID = await FollowModel.getFollowID(this.userID, this.suggestionID);
    debugger
    this.followBTNRender(this.followStatus)
  },

  followControl () {
    // check control
    const currentStatus = this.followStatus;
    clearTimeout(waitToUpdateDB)
    waitToUpdateDB = setTimeout(() => {
      const isFollowing =  currentStatus;
      if (!isFollowing) {
        this.addFollowing(this.userID, this.suggestionID)
      } else {
        try {
          this.removeFollowing(this.userID, this.suggestionID)
        } catch {
          console.log("User doesn't exit")
        }
      }
    },1000)
    // change button after if else stament because data internally change
    this.followStatus = !this.followStatus
    this.followBTNRender(this.followStatus)
  },

  // DATA BASE
  addFollowing (userID, suggestionID) {
    FollowModel.addFollower(userID, suggestionID);
  },

  removeFollowing () {
    FollowModel.changeFollowingStatus(this.followID, false);
    // FollowModel.changeFollowingStatus(userID, suggestionID, false);
  },

  async checkIfFollowing (userID, suggestionID) {
    let isFollowing = await FollowModel.checkIfFollowing(userID, suggestionID) 
    return isFollowing;
  },

  async getFollowData (userID, suggestionID) {
    // line not working
    // const followingData = await FollowModel.checkIfFollowing(userID, suggestionID)
    return followingData;
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
    this.followBTN.addEventListener('click', () => {
      FollowControler.followControl()
    })
  },

  following () {
    this.followBTN.classList.add("follow-btn");
    this.followBTN.classList.remove("unfollow-btn");
    this.followBTN.innerText = "unfollow";
  },

  unFollowing () {
    this.followBTN.classList.add("unfollow-btn");
    this.followBTN.classList.remove("follow-btn");
    this.followBTN.innerText = "follow";
  }
}
FollowControler.init()