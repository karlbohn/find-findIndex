function findUserByUsername(usersArray, username) {
  return usersArray.find(function(obj){
    return obj.username === username ;
  });
}


function removeUser(usersArray, username) {
  let idx = usersArray.findIndex(function(obj){
    return obj.username === username;
  })
  if (idx !== -1){
    return usersArray.splice(idx,1)[0];
  }
}