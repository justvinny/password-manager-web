"use client";

import mainStyles from "@/styles/page.module.css";
import styles from "@/styles/view-accounts/view-accsounts.module.css";
import { useEffect, useState } from "react";
import AccountItem from "./account-item";
import { Account, deleteAccount, getAllAccounts } from "@/data/db";

export default function ViewAccounts() {
  const [accountList, setAccountList] = useState<Array<Account>>([]);

  const handleGetUsers = async () => {
    setAccountList(await getAllAccounts());
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  const handleCopy = (password: string) => () => {
    navigator.clipboard.writeText(password);
  };

  const handleDelete = (account: Account) => async () => {
    const isDeleted = await deleteAccount(account.id);

    if (isDeleted) {
      var newAccountList = accountList.filter(
        (item) =>
          item.platform !== account.platform &&
          item.username !== account.username
      );

      setAccountList(newAccountList);
    }
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
