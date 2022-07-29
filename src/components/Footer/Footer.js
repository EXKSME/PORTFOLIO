import { Link } from 'components/Link';
import { Text } from 'components/Text';
import { classes } from 'utils/style';
import styles from './Footer.module.css';

export const Footer = ({ className }) => (
  <footer className={classes(styles.footer, className)}>
    <Text size="s" align="center">
      <span className={styles.date}>
        {`© ${new Date().getFullYear()} EXKSM.`}
      </span>
      <Link secondary className={styles.link} href="/404" target="_self">
        这里要替换
      </Link>
    </Text>
  </footer>
);
