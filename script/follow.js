
import { ServicesDataModel, UserDataModel } from "./data_base_model.js";
import { setLocalStorage, getLocalStorage } from "./local_storage.js"
const UserModel = new UserDataModel()

const FollowChain = {
  init (userCurrentData, userSuggestionData) {
    this.userData = userCurrentData;
    this.suggestionData = userSuggestionData;
    const data = this.getFollowing(this.userData)
    this.suggestionData.following = this.addFollower('danny', data)
    console.log(this.suggestionData,"hey")
  },

  removeListDuplicates (userList) {
    const removeDuplicates = new Set(userList)
    const parseToList = Array.from(removeDuplicates)
    return parseToList
  },

  getFollowing (userObject) {
    const followingData = userObject.following;
    const removeDuplicates = this.removeListDuplicates(followingData) 
    return removeDuplicates
  },
  
  getFollowers (userObject) {
    const followersData = userObject.followers;
    const removeDuplicates = this.removeListDuplicates(followingData) 
    return removeDuplicates
  },

  addFollower (userNewFollower, userFollowers) {
    const updateData = userFollowers.push(userNewFollower);
    return updateData
  },

  addFollowing (userNewFollowing, userFollowing) {
    const updateData = userFollowing.push(userNewFollowing)
    return updateData
  },


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

    FollowChain.init(this.currentUserData, this.suggestionProfileData)
    console.log(this.currentUserData, this.suggestionProfileData)
    // check if following
    const userFollowingData = this.currentUserData.following 
    const suggestionName = this.suggestionProfileData.name
    console.log(userFollowingData)
    this.checkIfFollowing(suggestionName, userFollowingData)

    // follow functionality
    this.followUser(suggestionName, userFollowingData)
  },

  checkIfFollowing (userFollowingSuggestion, userFollowingData) {
    const isFollowing = userFollowingData.includes(userFollowingSuggestion)

    if (isFollowing) {
      FollowViews.following()
    } else {
      FollowViews.unFollowing()
    }
    console.log(isFollowing, "hello")
    // array.includes("hello")
  },

  followUser (currentUserData, userFollowingData) {
    currentUserData.following
    const mySet = new Set([userFollowingData])
    console.log(typeof(mySet), mySet)
  }
}

/*---------- VIEWS ----------*/
const FollowViews = {
  init () {
    this.followBTN = document.getElementById("follow_button")
    console.log(this.followBTN)
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