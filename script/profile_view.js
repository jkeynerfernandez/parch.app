import { Controler } from "./profile_controler.js";
import { setLocalStorage, getLocalStorage } from "./local_storage.js"
const userToken = getLocalStorage("userToken")
document.addEventListener("DOMContentLoaded", Controler.init(userToken));
const ProfileView = {
  init () {
    this.parcheCounter = document.getElementById("parche_counter");
    this.postCounter = document.getElementById("post_counter");
    this.credibilityCounter = document.getElementById("credibility_counter");
    // this.level = document.getElementById("levelHTML"); // Should change to roltype
    // this.parchePoints = document.getElementById("parche_points");
    // this.progressBar = document.getElementById("progress_bar");
    // this.pointsNextLevel = document.getElementById("points_next_level");
    this.render()
  },

  render () {
    const userData = Controler.getUserData();
    const {parche_counter, post_counter, credibility, level, parche_points, 
    progress_bar, next_level_points, rol_type} = userData;     
    this.parcheCounter.innerText = parche_counter;
    this.postCounter.innerText = post_counter;
    this.credibilityCounter.innerText = credibility;
    // this.level.innerText = level; //should change to rol_type 
    // this.parchePoints.innerText = parche_points;
    // this.progressBar.style.width = `${progress_bar}%`;
    // console.log(typeof(progress_bar))
    // this.pointsNextLevel.innerText = `${next_level_points} points to next level`;
  }
}

// setTimeout(() => {
//   ProfileView.init() 
// }, 500);

export {ProfileView}