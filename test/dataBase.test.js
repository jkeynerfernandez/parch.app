// export {UserDataModel, ServicesDataModel, FollowDataModel}
const {UserDataModel, FollowDataModel} = require('../script/data_base_model.js');
const UserData = new UserDataModel;
const FollowData = new FollowDataModel;

test('Get user data', async () => {
  let data = await UserData.getUserByID("53cc")
  expect(data).toMatchObject({"about": "changing user About", "account_created": "01/09/2020", "badges": ["commentor", "traveler", "landscaper"], "birthday": "21/01/1990", "credibility": 9.7, "email": "jesusRamiroLondono@gmail.com", "enrolled_events": ["200102020301", "302112032"], "follower_counter": 2100, "following": 120, "id": "53cc", "last_login": "21/04/2024", "level": "Guide", "level_points": 600, "name": "hola mundo", "nickname": "joseLuis21", "parche_counter": 7, "parche_points": 120, "password": "mySecurePassword", "post_counter": 3, "profile_photo": "joseLuis21_image.jpg", "status": "Desparchadisimo"});
});

test('Check if following', async () => {
  let getDataServer = await FollowData.checkIfFollowing("53c1", "3e01")

  expect(getDataServer).toMatchObject({"famous_id": "3e01", "fan_id": "53c1", "id": "e123", "status": true});
});