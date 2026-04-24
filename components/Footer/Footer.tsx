import styles from "./Footer.module.css";
import { FooterProps } from "./Footer.props";
import { Ptag } from "../Ptag/Ptag";
import cn from 'classnames';
import {format} from "date-fns";


export const Footer = ({ className, ...props }: FooterProps): React.ReactElement => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <Ptag tag="p14">OwlTop © 2020 - {format(new Date(), "yyyy")} Все права защищены</Ptag>
      <a href="#"><Ptag tag="p14">Пользовательское соглашение</Ptag></a>
      <a href="#"><Ptag tag="p14">Политика конфиденциальности</Ptag></a>
    </footer>
  );
};
