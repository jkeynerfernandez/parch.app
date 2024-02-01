// export {UserDataModel, ServicesDataModel, FollowDataModel}
const {UserDataModel, FollowDataModel} = require('../script/data_base_model.js');
const UserData = new UserDataModel;
const FollowData = new FollowDataModel;

test('Get user data', async () => {
  let data = await UserData.getUserByID("53cc")
  expect(data).toMatchObject({"about": "changing user About", "account_created": "01/09/2020", "badges": ["commentor", "traveler", "landscaper"], "birthday": "21/01/1990", "credibility": 9.7, "email": "jesusRamiroLondono@gmail.com", "enrolled_events": ["200102020301", "302112032"], "follower_counter": 2100, "following": 120, "id": "53cc", "last_login": "21/04/2024", "level": "Guide", "level_points": 600, "name": "hola mundo", "nickname": "joseLuis21", "parche_counter": 7, "parche_points": 120, "password": "mySecurePassword", "post_counter": 3, "profile_photo": "joseLuis21_image.jpg", "status": "Desparchadisimo"});
});
// Create user that doesn't exit
test('Add following - user that does not exit', async () => {
  let getDataServer = await FollowData.addFollower("p12345", "6789")
  expect(getDataServer).toMatchObject({"fan_id": "p12345", "famous_id": "6789", "status": true});
  // Use to reset data
  FollowData.definellyDeleteFollow(getDataServer.id)
});
// Change a status that exit - add fullowing
test('Add following - user with status false', async () => {
  let getDataServer = await FollowData.addFollower("1234e", "6789")
  expect(getDataServer).toMatchObject({"fan_id": "1234e", "famous_id": "6789", "status": true});
});
// Defenilly remove following
test('remove following', async () => {
  // used to add temp data to check
  let getDataServer = await FollowData.addFollower("2468", "13579")
  let removeResponse = await FollowData.definellyDeleteFollow(getDataServer.id)
  expect(removeResponse).toMatchObject(getDataServer);
});

// Check if following
test('Check if following', async () => {
  let getDataServer = await FollowData.checkIfFollowing("53c1", "3e01")
  expect(getDataServer).toBe(true)
});

test('Check if is not following', async () => {
  let getDataServer = await FollowData.checkIfFollowing("1234a", "5678e")
  expect(getDataServer).toBe(false);
});

// Change status
test('Change user status', async () => {
  let getDataServer = await FollowData.changeFollowingStatus("e123", false)
  expect(getDataServer).toMatchObject({"famous_id": "3e01", "fan_id": "53c1", "id": "e123", "status": false});
});

// Follow ID
test('Get follow ID', async () => {
  let getDataServer = await FollowData.getFollowID("53c1", "3e01");
  expect(getDataServer).toBe("e123")
});