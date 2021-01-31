import get from "lodash/get";

import { LocalStorageServiceType } from "../types/LocalStorageServiceType";

export const USER: string = "user";

const userStorage = (): LocalStorageServiceType => {
  const getSession = (): object | void => {
    const currentUser = localStorage.getItem(USER);
    if (currentUser) return JSON.parse(currentUser);
  };

  const removeSession = (): void => localStorage.removeItem(USER);

  const saveSession = (data: object): void =>
    localStorage.setItem(USER, JSON.stringify(data));

  const updateSession = (field: string, newData: object): void => {
    const session: object | void = getSession();
    return saveSession({ ...session, [field]: newData });
  };

  const getHeaders = (): object => get(getSession(), "headers", {});

  return {
    getSession,
    removeSession,
    saveSession,
    updateSession,
    getHeaders,
  };
};

export default userStorage();
