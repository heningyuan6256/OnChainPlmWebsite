import React, { FC, useMemo, useState } from "react";
import styles from "../styles/Header.module.less";
import { MenuProps, Menu, Button } from "antd";
import classnames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import Router from "next/router";
import Image from "next/image";
import { AliIconFont } from "./icon";
type ItemProps = {
  label: string;
  key: string;
};

const Header: FC = () => {
  const router = useRouter();
  const [current, setCurrent] = useState(
    router.asPath === "/" ? "/home" : router.asPath
  );

  const items: ItemProps[] = [
    {
      label: "首页",
      key: "/home",
    },
    {
      label: "平台",
      key: "/platform",
    },
    {
      label: "产品",
      key: "/product",
    },
    {
      label: "解决方案",
      key: "/solution",
    },
    {
      label: "价格",
      key: "/price",
    },
    {
      label: "文档",
      key: "/doc",
    },
    {
      label: "更新日志",
      key: "/log",
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
          return (
            <div
              key={menuItem.key}
              className={classnames({
                [styles.Item]: true,
                [styles.Active]: menuItem.key === current,
              })}
              onClick={() => {
                const routePath = menuItem.key === "/home" ? "/" : menuItem.key;
                setCurrent(routePath);
                Router.push(routePath);
              }}
            >
              {menuItem.label}
            </div>
          );
        })}
      </div>
    );
  }, [current, items]);

  return (
    // 1
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <div className={styles.img}>
            <Image
              src={"/官网导航栏logo.svg"}
              height={30}
              width={108}
              alt=""
            ></Image>
          </div>
        </div>
        <div className={styles.menu}>{HeadMenuGourps}</div>
        <div className={styles.help}>
          <Button style={{ width: "112px", height: "36px" }} type="primary">
            申请试用
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
