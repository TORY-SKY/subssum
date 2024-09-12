import { createContext, useContext, useState, ReactNode } from "react";

// types/User.ts
export interface User {
  accessToken: string | "";
  displayName: string | "";
  email: string | "";
  emailVerified: boolean | "";
  isAnonymous: boolean | "";
  metadata: {
    createdAt: string | "";
    lastLoginAt: string | "";
    lastSignInTime: string | "";
    creationTime: string | "";
  };
  phoneNumber: string | null;
  photoURL: string | "";
  providerId: string | "";
  uid: string | "";
}
interface UserContextType {
  theUser: User | null;
  setUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);
export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theUser, setUser] = useState<User | null>(null);
  return (
    <UserContext.Provider value={{ theUser, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("user must be used within userProvider");
  }
  return context;
};
