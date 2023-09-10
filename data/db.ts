let request: IDBOpenDBRequest;
let db: IDBDatabase;
let version = 1;

export interface Account {
  id: string;
  platform: string;
  username: string;
  password: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export enum Stores {
  Accounts = "accounts",
}

const DB_NAME = "pmpwa-db";

export const initDb = (): Promise<boolean> => {
  return new Promise((resolve) => {
    request = indexedDB.open(DB_NAME);

    request.onupgradeneeded = () => {
      db = request.result;

      if (!db.objectStoreNames.contains(Stores.Accounts)) {
        db.createObjectStore(Stores.Accounts, { keyPath: "id" });
      }
    };

    request.onsuccess = () => {
      db = request.result;
      version = db.version;
      resolve(true);
    };

    request.onerror = () => {
      console.error("request.onerror - initDB", version);
      const error = request.error?.message ?? "Unkown Error";
      console.error(error);
      resolve(false);
    };
  });
};

export const addAccount = (account: Account): Promise<boolean> => {
  return new Promise((resolve) => {
    if (db) {
      resolve(true);
    }

    request = indexedDB.open(DB_NAME, version);

    request.onsuccess = () => {
      db = request.result;
      const transaction = db.transaction(Stores.Accounts, "readwrite");
      const store = transaction.objectStore(Stores.Accounts);
      const res = store.add(account);

      res.onsuccess = () => {
        resolve(true);
      };

      res.onerror = () => {
        const error = res.error?.message ?? "Unkown Error";
        console.error(error);
        resolve(false);
      };
    };

    request.onerror = () => {
      const error = request.error?.message ?? "Unkown Error";
      console.error(error);
      resolve(false);
    };
  });
};

export const getAllAccounts = (): Promise<Array<Account>> => {
  return new Promise((resolve) => {
    request = indexedDB.open(DB_NAME);

    request.onsuccess = () => {
      db = request.result;
      const transaction = db.transaction(Stores.Accounts, "readonly");
      const store = transaction.objectStore(Stores.Accounts);
      const res = store.getAll();

      res.onsuccess = () => {
        resolve(res.result);
      };

      res.onerror = () => {
        const error = res.error?.message ?? "Unkown Error";
        console.error(error);
        resolve([]);
      };
    };

    request.onerror = () => {
      const error = request.error?.message ?? "Unkown Error";
      console.error(error);
      resolve([]);
    };
  });
};

export const deleteAccount = (key: string): Promise<boolean> => {
  return new Promise((resolve) => {
    request = indexedDB.open(DB_NAME, version);

    request.onsuccess = () => {
      db = request.result;
      const transaction = db.transaction(Stores.Accounts, "readwrite");
      const store = transaction.objectStore(Stores.Accounts);
      const res = store.delete(key);

      res.onsuccess = () => {
        resolve(true);
      };

      res.onerror = () => {
        const error = res.error?.message ?? "Unkown Error";
        console.error(error);
        resolve(false);
      };
    };

    request.onerror = () => {
      const error = request.error?.message ?? "Unkown Error";
      console.error(error);
      resolve(false);
    };
  });
};
