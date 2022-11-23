import React, { FC, useMemo, useState } from "react";
import styles from "../styles/Header.module.less";
import { MenuProps, Menu, Button } from "antd";
import onChainSvg from "../assets/imgs/logo.svg";
import Image from "next/image";
import { AliIconFont } from "./icon";
type ItemProps = {
  label: string;
  key: string;
};

const Header: FC = () => {
  const [current, setCurrent] = useState("mail");
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const items: ItemProps[] = [
    {
      label: "首页",
      key: "home",
    },
    {
      label: "平台",
      key: "platform",
    },
    {
      label: "产品",
      key: "product",
    },
    {
      label: "解决方案",
      key: "solution",
    },
    {
      label: "价格",
      key: "price",
    },
    {
      label: "文档",
      key: "doc",
    },
    {
      label: "更新日志",
      key: "log",
    },
    // {
    //   label: (
    //     <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
    //       Navigation Four - Link
    //     </a>
    //   ),
    //   key: "alipay",
    // },
  ];

  const HeadMenuGourps = useMemo(() => {
    return (
      <div className={styles.Head_Item_Group}>
        {items.map((menuItem) => {
          return <div className={styles.Item}>{menuItem.label}</div>;
        })}
      </div>
    );
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          {/* <div>
            <AliIconFont
              type="icon-front-logo"
              style={{ fontSize: "30px" }}
            ></AliIconFont>
          </div>
          <Image height={24} src={onChainSvg} alt="" /> */}
        </div>
        <div className={styles.menu}>
          {HeadMenuGourps}
          {/* <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
          /> */}
        </div>
        <div className={styles.help}>
          <Button>申请试用</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
