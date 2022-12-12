import Image from "next/image";
import styles from "../styles/Footer.module.less";
import { FC, Fragment } from "react";
import { Button, Input } from "antd";
import { AliIconFont } from "./icon";
import classNames from "classnames";
import { ScrollAnimateClass } from "@constant";

const Footer: FC = () => {
  return (
    <Fragment>
      <div className={styles.apply_show}>
        <div
          className={classNames(
            styles.box,
            ScrollAnimateClass,
            "animate__fadeIn"
          )}
        >
          <div className={styles.apply_show_title}>提供一站式</div>
          <div className={styles.apply_show_title}>产品全生命周期解决方案</div>
          <div className={styles.apply_show_sub_title}>
            请填写您的资讯内容，我们将在第一时间与您联系
          </div>
          <div>
            <Button>申请试用</Button>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.box}>
          <div
            className={classNames(
              styles.box1,
              ScrollAnimateClass,
              "animate__fadeIn"
            )}
          >
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
            <div className={styles.reference}>
              <span>鄂ICP备15020218号-1</span>
            </div>
          </div>
          <div className={styles.box_container}>
            <div style={{ display: "flex" }}>
              <div
                className={classNames(
                  styles.box2,
                  ScrollAnimateClass,
                  "animate__fadeIn"
                )}
                data-wow-delay={`0.2s`}
              >
                <div className={styles.title}>产品</div>
                <div className={styles.row}>事件</div>
                <div className={styles.row}>更新日志</div>
                <div className={styles.row}>网站地图</div>
                <div className={styles.row}>隐私政策</div>
                <div className={styles.row}>与华为云的合作</div>
              </div>
              <div
                className={classNames(
                  styles.box3,
                  ScrollAnimateClass,
                  "animate__fadeIn"
                )}
                data-wow-delay={`0.4s`}
              >
                <div className={styles.title}>服务</div>
                <div className={styles.row}>解决方案</div>
                <div className={styles.row}>技术博客</div>
                <div className={styles.row}>帮助中心</div>
              </div>
              <div
                className={classNames(
                  styles.box4,
                  ScrollAnimateClass,
                  "animate__fadeIn"
                )}
                data-wow-delay={`0.6s`}
              >
                <div className={styles.title}>业务支持</div>
                <div className={styles.row}>027-88319536</div>
                <div className={styles.row}>postmaster@dahaikj.com</div>
                <div style={{ display: "flex", gap: "20px" }}>
                  <AliIconFont
                    type="icon-front-weixin"
                    style={{ color: "#528ff4", fontSize: "24px" }}
                  ></AliIconFont>
                  <AliIconFont
                    type="icon-front-qq"
                    style={{ fontSize: "24px", color: "#A7B3C5" }}
                  ></AliIconFont>
                  <AliIconFont
                    type="icon-front-github"
                    style={{ fontSize: "24px", color: "#A7B3C5" }}
                  ></AliIconFont>
                </div>
              </div>
            </div>
            <div className={styles.box_bottom}>
              Copyright &#169 2012-2022-dahai information system technology
              cd.ltd
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
