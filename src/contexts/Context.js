import React, { useState, useEffect, useContext, createContext } from 'react';

const UserContext = createContext();

const useAuth = () => {
  useContext(UserContext);
};

const Context = ({ children }) => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      authorUsername: '@inshaldev',
      authorDP:
        'https://pbs.twimg.com/profile_images/1230211581922988034/Uc7Be7oS_400x400.jpg',
      picture: 'https://www.instagram.com/p/CW7lDQLoebc/',
      description: 'What the hell is API??',
      likes: 0,
      comments: 0,
    },
  ]);

  const contextValue = {
    posts,
    setPosts,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default Context;
