console.log("before");
// getUser(1, (user) => {
//   getRepos(user.name, (repos) => {
//     getCommits(repos[0], (commits) => {
//       console.log(commits);
//     });
//   });
// });

// getUser(1)
//   .then((user) => getRepos(user.name))
//   .then((repos) => getCommits(repos[0]))
//   .then((commits) => console.log(`Commits: ${commits}`))
//   .catch((err) => console.log("ERROR: ", err.message));

async function displayCommits() {
  try {
    const user = await getUser(1);
    const repos = await getRepos(user.name);
    const commits = await getCommits(repos[0]);
    console.log(commits);
  } catch (err) {
    console.log("Error: ", err.message);
  }
}
displayCommits();

console.log("after");

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading a user...");
      resolve({ id: id, name: "Ahmad" });
    }, 2000);
  });
}

function getRepos(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Reading the repos of ${username}`);
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}
function getCommits(repos) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetching the commits...", repos);
      resolve(["commit", "commit2", "commit3"]);
    }, 2000);
  });
}
