import { ServicesDataModel, UserDataModel } from "./data_base_model.js";
import { setLocalStorage, getLocalStorage } from "./local_storage.js"
import { removeUserByNameList, removeListDuplicates } from "./utilities.js"; 
const UserModel = new UserDataModel()

class FollowUtilities {
  constructor (userData) {
    this.userData = userData
    // remove duplicate data
    this.userData.followers = removeListDuplicates(this.userData.followers)
    this.userData.following = removeListDuplicates(this.userData.following)
  }

  addFollower (userPersonName) {
    this.userData.followers.push(userPersonName);
  }

  addFollowing (userPersonName) {
    this.userData.following.push(userPersonName);
  }

  removeFollower (userPersonName) {
    const followerList = this.userData.followers;
    this.userData.followers = removeUserByNameList(userPersonName, followerList)
  }

  removeFollowing (userPersonName) {
    const followingList = this.userData.following
    this.userData.following = removeUserByNameList(userPersonName, followingList)
  }

  async updateFollowingDB () {
    const {id : userID, following} = this.userData;
    const response = await UserModel.patchUser(userID, following)
    this.userData = response
  }

  async updateFollowersDB () {
    const {id : userID, followers} = this.userData;
    const response = await UserModel.patchUser(userID, followers)
    this.userData = response
  }
}
/*---------- CONTROLER ----------*/
const FollowControler = {
  async init () {
    FollowViews.init()
    // get users data
    const currentUserToken = getLocalStorage("userToken");
    const suggestionProfileToken = getLocalStorage("suggestionProfile");
    this.currentUserData = await UserModel.getUserByID(currentUserToken);
    this.suggestionProfileData = await UserModel.getUserByNickname(suggestionProfileToken);
    this.suggestionProfileData = this.suggestionProfileData[0];

    // check if following
    const userFollowingData = this.currentUserData.following 
    const suggestionName = this.suggestionProfileData.name
    const isFollowing = this.checkIfFollowing(suggestionName, userFollowingData)
    this.followBTNRender(isFollowing)
  },

  followControl () {
    const userData = new FollowUtilities(this.currentUserData)
    const suggestionProfileData = new FollowUtilities(this.suggestionProfileData)
    // get data from users
    const {name : suggestionName, followers : followersList} = suggestionProfileData.userData;
    const {name : userName, following : followingList} = userData.userData;

    // check control
    const isFollowing = this.checkIfFollowing(suggestionName, followingList)
    if (!isFollowing) {
      userData.addFollowing(suggestionName)
      suggestionProfileData.addFollower(userName)
    } else {
      userData.removeFollowing(suggestionName)
      suggestionProfileData.removeFollower(userName)
    }
    // change button after if else stament because data internally change
    this.followBTNRender(!isFollowing)
  },

  followDataBase () {
    const userData = new FollowUtilities(this.currentUserData)
    const suggestionProfileData = new FollowUtilities(this.suggestionProfileData)

    waitToUpdateDB = setTimeout(() => {
      userData.updateFollowingDB()
      suggestionProfileData.updateFollowersDB()
    },10000)

  },

  checkIfFollowing (userFollowingSuggestion, userFollowingData) {
    const isFollowing = userFollowingData.includes(userFollowingSuggestion)
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

FollowControler.init()