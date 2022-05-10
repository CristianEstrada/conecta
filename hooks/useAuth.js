import { View, Text } from "react-native";
import React from "react";
import { createContext, useContext } from "react";
import * as Google from 'expo-google-app-auth';

const AuthContext = createContext({});

const config = {
  androidClientId: "731900721296-me1r4tbjqbu1ptrlo3c088dg10gauupd.apps.googleusercontent.com",
  iosClientId: "731900721296-caimt3qept7ehel9t8hg22f7bnctnfnk.apps.googleusercontent.com",
  scopes: ["profile", "email"],
  Permissions: ["public_profile", "email", "gender", "location"],
}

export const AuthProvider = ({ children }) => {


    const signInWithGoogle = async () => {
        await Google.logInAsync(config).then(async (logInResult) => { if(logInResult.type === "success") {

        }});
    };

  return (
    <AuthContext.Provider
      value={{
        user: null,
        signInWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
