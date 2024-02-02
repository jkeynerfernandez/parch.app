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
    const searchSuggesntiosTable = SearchBarViews.suggestionsResult;
    userSugestions.forEach(element => {
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
    this.searchBar = document.getElementById("input-buscar")
    this.suggestionsResult = document.querySelector(".box-inputbuscar-suggestions")
    this.waitToSearch()
  },

  waitToSearch () {
    let waitSearch;
    this.searchBar.addEventListener('keyup', (e) => {
      clearTimeout(waitSearch)
      waitSearch = setTimeout(() => {
        this.clearSearchSuggestions(this.suggestionsResult)
        const searchBarValue = this.searchBar.value
        SeachBarControler.searchBarSuggestions(searchBarValue)
      },500)
    })
  },

  newSearchItem (userName) {
    const nicknameElement = document.createElement('li');
    nicknameElement.innerText = userName;
    nicknameElement.addEventListener('click', () => {
      SeachBarControler.goToSearchSuggestion(userName)
    })
    return nicknameElement
  },

  clearSearchSuggestions (userParent) {
    console.log(userParent)
    while (userParent.lastChild) {
      userParent.removeChild(userParent.lastChild);
    }
  }
}

SeachBarControler.init()