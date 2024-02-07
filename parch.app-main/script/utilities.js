const removeUserByNameList = function (userName, userList) {
  const elementIndex = userList.indexOf(userName)
  userList.splice(elementIndex, 1)
  return userList 
} 

const removeListDuplicates  = function (userList) {
    const removeDuplicates = new Set(userList)
    const parseToList = Array.from(removeDuplicates)
    return parseToList
  }
export { removeUserByNameList, removeListDuplicates }