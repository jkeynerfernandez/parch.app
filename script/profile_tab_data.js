const ProfileControler = {
  init() {},
  following (){}
}

const ProfileViews = {
  init () {
    this.followingContainer = document.querySelector(".container-followed")
  },
  addFollowingToContainer () {
    const followBox = document.createElement('div');
    const followIMG = document.createElement('img');
    const textFollowContainer = document.createElement('div');
    const linkFollowText = document.createElement('a');
    const textFollow = document.createElement('p');

    // Append elements
    textFollowContainer.appendChild(linkFollowText)
  }
}