function followers(input) {
  let usernames = {};
  while (input[0] != "Log out") {
    let tokens = input.shift().split(": ");
    let countOfFollowers = 0;

    if (tokens[0] == "New follower") {
      if (usernames.hasOwnProperty(tokens[1])) {
      } else {
        usernames[tokens[1]] = {
          likes: 0,
          comments: 0,
        };
      }
    } else if (tokens[0] == "Like") {
      if (usernames.hasOwnProperty(tokens[1])) {
        usernames[tokens[1]].likes += Number(tokens[2]);
      }else{
        usernames[tokens[1]] = {
            likes: 0,
            comments: 0,
          };
          usernames[tokens[1]].likes += Number(tokens[2]);
      }
    } else if (tokens[0] == "Comment") {
      if (usernames.hasOwnProperty(tokens[1])) {
           usernames[tokens[1]].comments += 1;
      } else{
        usernames[tokens[1]] = {
            likes: 0,
            comments: 0,
          };
          usernames[tokens[1]].comments += 1;
      }
     
    } else if (tokens[0] == "Blocked") {
        if (usernames.hasOwnProperty(tokens[1])) {
            delete usernames[tokens[1]];
       }else{
             console.log(`${tokens[1]} doesn't exist.`);
       }
    
    }
  }
     let usersCount = Object.keys(usernames).length;
     console.log(`${usersCount} followers`);
  for(let [name,value] of Object.entries(usernames)){
      console.log(`${name}: ${value.likes + value.comments}`);
  }
  
}

followers([
  "New follower: George",
  "Like: George: 5",
  "New follower: George",
  "Log out",
]);

// followers([
//   "Like: Katy: 3",
//   "Comment: Katy",
//   "New follower: Bob",
//   "Blocked: Bob",
//   "New follower: Amy",
//   "Like: Amy: 4",
//   "Log out",
// ]);

// followers((["Blocked: Amy",
// "Comment: Amy",
// "New follower: Amy",
// "Like: Tom: 5",
// "Like: Ellie: 5",
// "Log out"])
// );
