type LocalStorageServiceType = {
  getSession: () => object | void;
  removeSession: () => void;
  saveSession: (data: object) => void;
  updateSession: (field: string, newData: object) => void;
  getHeaders: () => object;
};

export type { LocalStorageServiceType };
