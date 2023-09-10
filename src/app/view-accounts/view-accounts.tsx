"use client";

import mainStyles from "@/styles/page.module.css";
import styles from "@/styles/view-accounts/view-accsounts.module.css";
import { useEffect, useState } from "react";
import AccountItem from "./account-item";

interface Account {
  platform: string;
  username: string;
  password: string;
}

const generateMockAccounts = (nAccounts: number) => {
  // TODO remove once PWA Storage is setup
  const accountList: Array<Account> = [];

  for (let i = 0; i < nAccounts; i++) {
    accountList.push({
      platform: `Platform${i}`,
      username: `User${i}`,
      password: `Password${i}`,
    });
  }
  return accountList;
};

export default function ViewAccounts() {
  const [accountList, setAccountList] = useState<Array<Account>>([]);

  useEffect(() => {
    // TODO grab from PWA Storage once it is setup.
    setAccountList(generateMockAccounts(103));
  }, []);

  const handleCopy = (password: string) => () => {
    navigator.clipboard.writeText(password);
  };

  const handleDelete = (account: Account) => () => {
    var newAccountList = accountList.filter(
      (item) =>
        item.platform !== account.platform && item.username !== account.username
    );
    // TODO persist delete once PWA storage is setup.
    setAccountList(newAccountList);
  };

  return (
    <>
      <h1 className={mainStyles.mb16}>View Accounts</h1>
      <div className={styles.accountListContainer}>
        {accountList.map((item, index) => (
          <AccountItem
            index={index}
            platform={item.platform}
            username={item.username}
            onCopyClick={handleCopy(item.password)}
            onDeleteClick={handleDelete(item)}
            key={`${index}-account`}
          />
        ))}
      </div>
      <div className={mainStyles.bottomNavPadding} />
    </>
  );
}
