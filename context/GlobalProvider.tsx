import { getCurrentUser } from "@/lib/appwrite";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  FC,
} from "react";

interface User {
  id: string;
  email: string;
  name: string;
  [key: string]: any;
}
interface GlobalContextProps {
  isLoggeIn: boolean;
  setIsLoggeIn: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

export const useGlobalContext = (): GlobalContextProps => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};

interface GlobalProviderProps {
  children: ReactNode;
}

const GlobalProvider: FC<GlobalProviderProps> = ({ children }) => {
  const [isLoggeIn, setIsLoggeIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    getCurrentUser()
      .then((res) => {
        if (res) {
          const transformedUser: User = {
            id: res.$id,
            email: res.email,
            name: res.name,
          };
          setIsLoggeIn(true);
          setUser(transformedUser);
        } else {
          setIsLoggeIn(false);
          setUser(null);
        }
      })
      .catch((error) => {
        console.error("Error fetching current user:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isLoggeIn,
        setIsLoggeIn,
        user,
        setUser,
        isLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
