import React, { createContext, useState, useContext } from 'react';

const FriendContext = createContext();

export const useFriends = () => useContext(FriendContext);

export const FriendProvider = ({ children }) => {
  const [friends, setFriends] = useState([
    { id: '1', name: 'Alwi Kupu" Malam', image: 'https://static.vecteezy.com/system/resources/previews/004/607/791/non_2x/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg' },
    { id: '2', name: 'Zhaldi Melehoy', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmZwW-n9W8IgXVrn8z7c1FJr39llzHca4C6rsLxOvuYrVi0BN85rrN77R0CXXMvB_mBwM&usqp=CAU' },
    { id: '3', name: 'Ikhsan Sekuter', image: 'https://w7.pngwing.com/pngs/178/419/png-transparent-man-illustration-computer-icons-avatar-login-user-avatar-child-web-design-face.png' },
  ]);

  const addFriend = (friend) => {
    setFriends((prevFriends) => [...prevFriends, friend]);
  };

  return (
    <FriendContext.Provider value={{ friends, addFriend }}>
      {children}
    </FriendContext.Provider>
  );
};
