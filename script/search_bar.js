import { UserDataModel } from "./data_base_model.js";
import { setLocalStorage } from "./local_storage.js";
const UserData = new UserDataModel()
/*----------  CONTROLER -----------*/
const SeachBarControler = {
  init () {
    SearchBarViews.init()
  },

  async searchBarSuggestions (userSearchSuggestion) {
    const userInfo = await UserData.getUserByNickname(userSearchSuggestion)
    console.log(userInfo)
    this.addSuggestionToTable(userInfo)
  },

  addSuggestionToTable (userSugestions) {
    const searchSuggesntiosTable = SearchBarViews.suggestionsResult
    userSugestions.forEach(element => {
      console.log(searchSuggesntiosTable, 'helsso')
      console.log(element.name)
      const item =  SearchBarViews.newSearchItem(element.name)
      searchSuggesntiosTable.appendChild(item)
    });
  },

  goToSearchSuggestion (userName) {
    setLocalStorage("suggestionProfile", userName);
    window.location.href = "./views/suggestion.html";
  }
}

/*----------  VIEWS -----------*/
const SearchBarViews = {
  init () {
    this.searchBar = document.getElementById("searchBar")
    this.suggestionsResult = document.getElementById("sugestions_results")
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

  newSearchItem (userName) {
    // Make content parent
    const parentDiv = document.createElement('a');
    parentDiv.classList.add('list-group-item', 'list-group-item-action')
    parentDiv.setAttribute("type", "button")

    const nicknameElement = document.createElement('button');
    nicknameElement.classList.add('mb-0', 'fw-bold', 'btn');
    nicknameElement.innerText = userName;
    nicknameElement.setAttribute("type", "button")

    nicknameElement.addEventListener('click', () => {
      SeachBarControler.goToSearchSuggestion(userName)
    })

    // Join elements
    parentDiv.appendChild(nicknameElement);
    console.log(parentDiv)
    return nicknameElement
  }
}

SeachBarControler.init()