import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...rest }: AvatarProps) {
  return (
    <div className={styles.author}>
      <img
        className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        {...rest}
      />
    </div>
  );
}
