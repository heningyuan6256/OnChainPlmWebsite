import Image from "next/image";
import styles from "../styles/Footer.module.less";
import { FC } from "react";
import { Button, Input } from "antd";
import { AliIconFont } from "./icon";
import { UserOutlined } from "@ant-design/icons";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.box}>
        <div className={styles.box1}>
          <Image
            style={{ marginBottom: "40px" }}
            src={"/front-onchain.svg"}
            alt=""
            width={90}
            height={18}
          ></Image>
          <div className={styles.sub_title}>
            输入邮箱对我们进行订阅，不要错过我们的重要消息！
          </div>
          <div className={styles.email}>
            <Input
              prefix={
                <AliIconFont
                  type="icon-front-mail"
                  style={{ fontSize: "20px" }}
                ></AliIconFont>
              }
              placeholder="请输入您的邮箱"
            ></Input>
          </div>
          <div className={styles.button}>
            <Button type="primary">订阅</Button>
          </div>
          {/* <div className={styles.reference}>
            <span>
              Copyright &#169 2012-2022-dahai information system technology
              cd.ltd
            </span>
          </div> */}
          <div className={styles.reference}>
            <span>鄂ICP备15020218号-1</span>
          </div>
        </div>
        <div className={styles.box2}>
          <div className={styles.title}>产品</div>
          <div className={styles.row}>事件</div>
          <div className={styles.row}>更新日志</div>
          <div className={styles.row}>网站地图</div>
          <div className={styles.row}>隐私政策</div>
          <div className={styles.row}>与华为云的合作</div>
        </div>
        <div className={styles.box3}>
          <div className={styles.title}>服务</div>
          <div className={styles.row}>解决方案</div>
          <div className={styles.row}>技术博客</div>
          <div className={styles.row}>帮助中心</div>
        </div>
        <div className={styles.box4}>
          <div className={styles.title}>业务支持</div>
          <div className={styles.row}>027-88319536</div>
          <div className={styles.row}>postmaster@dahaikj.com</div>
          <div className={styles.title} style={{ margin: "32px 0px 30px 0px" }}>
            联系我们
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <AliIconFont
              type="icon-front-weixin"
              style={{ color: "#528ff4", fontSize: "24px" }}
            ></AliIconFont>
            <AliIconFont
              type="icon-front-qq"
              style={{ fontSize: "24px" }}
            ></AliIconFont>
            <AliIconFont
              type="icon-front-github"
              style={{ fontSize: "24px" }}
            ></AliIconFont>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
