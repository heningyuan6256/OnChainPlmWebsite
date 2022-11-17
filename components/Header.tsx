import { FC, useState } from "react";
import styles from "../styles/Header.module.less";
import { MenuProps, Menu } from "antd";
import onChainSvg from "../assets/imgs/logo.svg";
import Image from "next/image";

const Header: FC = () => {
  const [current, setCurrent] = useState("mail");
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const items: MenuProps["items"] = [
    {
      label: "Navigation One",
      key: "mail",
    },
    {
      label: "Navigation Two",
      key: "app",
    },
    {
      label: "Navigation Three - Submenu",
      key: "SubMenu",
      // children: [
      //   {
      //     type: "group",
      //     label: "Item 1",
      //     children: [
      //       {
      //         label: "Option 1",
      //         key: "setting:1",
      //       },
      //       {
      //         label: "Option 2",
      //         key: "setting:2",
      //       },
      //     ],
      //   },
      //   {
      //     type: "group",
      //     label: "Item 2",
      //     children: [
      //       {
      //         label: "Option 3",
      //         key: "setting:3",
      //       },
      //       {
      //         label: "Option 4",
      //         key: "setting:4",
      //       },
      //     ],
      //   },
      // ],
    },
    {
      label: (
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      ),
      key: "alipay",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Image height={24} src={onChainSvg} alt="" />
        </div>
        <div className={styles.menu}>
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
          />
        </div>
        <div className={styles.help}></div>
      </div>
    </div>
  );
};

export default Header;
