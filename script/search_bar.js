import { UserDataModel } from "./data_base_model.js";
const UserData = new UserDataModel()
/*----------  CONTROLER -----------*/
const SeachBarControler = {
  init () {
    SearchBarViews.init()
  },

  async searchBarSuggestions (userSearchSuggestion) {
    const userInfo = await UserData.getUserByNickname(userSearchSuggestion)
    console.log(userInfo)
  },

  addSuggestionToTable (userSugestions) {
    userSugestions.forEach(element => {
      const item =  newSearchItem(element.name, element.email)
      searchSuggesntiosTable.appendChild(item)
    });
  }
}

/*----------  VIEWS -----------*/
const SearchBarViews = {
  init () {
    this.searchBar = document.getElementById("searchBar")
    this.waitToSearch()
  },

  waitToSearch () {
    let waitSearch;
    this.searchBar.addEventListener('keyup', (e) => {
      clearTimeout(waitSearch)
      waitSearch = setTimeout(() => {
        const searchBarValue = this.searchBar.value
        SeachBarControler.searchBarSuggestions(searchBarValue)
      },500)
    })
  },

  newSearchItem () {
    // Make div element
    const elementType = document.createElement('div');
    elementType.classList.add('list-group')

    // Make content parent
    const parentDiv = document.createElement('a');
    parentDiv.classList.add('list-group-item', 'list-group-item-action')

    const nicknameElement = document.createElement('p');
    nicknameElement.classList.add('mb-0', 'fw-bold');
    nicknameElement.innerText = userName;

    // Join elements
    parentDiv.appendChild(nicknameElement);
    parentDiv.appendChild(emailElement);
    return parentDiv
  }
}

SeachBarControler.init()