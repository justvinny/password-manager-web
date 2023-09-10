import mainStyles from "@/styles/page.module.css";
import styles from "@/styles/view-accounts/view-accsounts.module.css";
import WebIcon from "@mui/icons-material/Web";
import PersonIcon from "@mui/icons-material/Person";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

interface Props {
  index: number;
  platform: string;
  username: string;
  onCopyClick: () => void;
  onDeleteClick: () => void;
}

export default function AccountItem({
  index,
  platform,
  username,
  onCopyClick,
  onDeleteClick,
}: Props) {
  return (
    <div
      className={`${mainStyles.mb16} ${mainStyles.mr16} ${styles.accountContainer}`}
    >
      <div className={`${styles.row} ${mainStyles.mb8}`}>
        <WebIcon className={mainStyles.mr8} />
        <p className={styles.textOverflow}>{platform}</p>
        <div className={mainStyles.filler} />
        <IconButton
          onClick={onDeleteClick}
          color="error"
          aria-describedby="Delete Account"
          data-testid={`${index}-delete`}
        >
          <DeleteIcon />
        </IconButton>
      </div>
      <div className={styles.row}>
        <PersonIcon className={mainStyles.mr8} />
        <p className={styles.textOverflow}>{username}</p>
        <div className={mainStyles.filler} />
        <IconButton
          onClick={onCopyClick}
          color="inherit"
          aria-describedby={`Copy Password for your ${platform} with username ${username}`}
          data-testid={`${index}-copy`}
        >
          <ContentCopyIcon />
        </IconButton>
      </div>
    </div>
  );
}
