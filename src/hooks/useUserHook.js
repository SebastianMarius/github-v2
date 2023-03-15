import React, { useState, useEffect } from "react";

function useUserHook(receivedUser) {
  const [user, setUser] = useState();
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsloading] = useState({
    loadingUser: false,
    loadingRepo: false,
  });

  useEffect(() => {
    const fetchUser = async () => {
      const userResponse = await fetch(
        "https://api.github.com/users/" + receivedUser
      );

      const userData = await userResponse.json();

      setUser(userData);

      setIsloading({ loadingUser: true, loadingRepo: true });
      setIsloading({ loadingRepo: true, loadingUser: false });

      const reposResponse = await fetch(
        "https://api.github.com/users/" + userData?.login + "/repos"
      );

      const reposData = await reposResponse.json();

      const final = await Promise.all(
        reposData.map(async (repo) => {
          const languagesResponse = await fetch(
            "https://api.github.com/repos/" +
              userData.login +
              "/" +
              repo.name +
              "/" +
              "languages"
          );

          return languagesResponse.json();
        })
      );
      reposData.forEach((repo, idx) => {
        repo.limbi = final[idx];
      });
      setRepos(reposData);
      setIsloading({ loadingRepo: false, loadingUser: false });
    };

    fetchUser();
  }, [receivedUser]);

  return { user, repos, isLoading };
}

export default useUserHook;
