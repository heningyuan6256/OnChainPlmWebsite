import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.less";
import { Button, Card, Col, Row, Image, Collapse, Carousel } from "antd";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { getPosts } from "./api/hello";
import { FC, useEffect } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import classNames from "classnames";
// import "wowjs/css/libs/animate.css";
import Layout from "../components/Layout";
import { ScrollAnimateClass } from "../constant";
import Link from "next/link";
import { AliIconFont } from "@components/icon";
import { CardShow } from "@components/CardShow";
// home -- first page
const AdvertiseBox: FC = (props) => {
  const leftAnimateConfig = {
    [ScrollAnimateClass]: true,
    ["animate__fadeInLeft"]: true,
  };
  const rightAnimateConfig = {
    [ScrollAnimateClass]: true,
    ["animate__fadeInRight"]: true,
  };
  return (
    <div className={classNames(styles.advertise_container)}>
      <div className={styles.advertise_container_floatIcon_content}>
        {/* 第一行 */}
        <div className={styles.advertise_container_floatIcon_content_wrapper1}>
          <div
            className={classNames({
              [styles.advertise_container_floatIcon_content_wrapper1_left]:
                true,
              ...leftAnimateConfig,
            })}
          >
            {[
              "front-2.svg",
              "front-4.svg",
              "front-5.svg",
              "front-27.svg",
              "front-30.svg",
              "front-15.svg",
            ].map((item, index) => {
              let opacity = 1;
              if (index == 0) {
                opacity = 0.3;
              } else if (index == 1) {
                opacity = 0.5;
              } else if (index == 2) {
                opacity = 0.8;
              }
              return (
                <Image
                  key={index}
                  src={`/techLogo/${item}`}
                  style={{ opacity: opacity }}
                  alt=""
                  preview={{
                    visible: false,
                  }}
                  // width={72}
                  //height={72}
                ></Image>
              );
            })}
          </div>
          <div
            className={classNames({
              [styles.advertise_container_floatIcon_content_wrapper1_right]:
                true,
              ...rightAnimateConfig,
            })}
          >
            {[
              "front-33.svg",
              "front-37.svg",
              "front-13.svg",
              "front-14.svg",
              "front-17.svg",
            ].map((item, index) => {
              let opacity = 1;
              if (index == 0) {
                opacity = 0.3;
              } else if (index == 1) {
                opacity = 0.5;
              } else if (index == 2) {
                opacity = 0.5;
              }
              return (
                <Image
                  key={index}
                  style={{ opacity: opacity }}
                  src={`/techLogo/${item}`}
                  alt=""
                  preview={{
                    visible: false,
                  }}
                  // width={72}
                  //height={72}
                ></Image>
              );
            })}
          </div>
        </div>
        {/* 第二行 */}
        <div className={styles.advertise_container_floatIcon_content_wrapper2}>
          <div
            className={classNames({
              [styles.advertise_container_floatIcon_content_wrapper2_left]:
                true,
              ...leftAnimateConfig,
            })}
          >
            {["front-8.svg", "front-3.svg", "front-36.svg", "front-29.svg"].map(
              (item, index) => {
                let opacity = 1;
                if (index == 0) {
                  opacity = 0.3;
                } else if (index === 1) {
                  opacity = 0.8;
                }
                return (
                  <Image
                    key={index}
                    style={{ opacity: opacity }}
                    src={`/techLogo/${item}`}
                    alt=""
                    preview={{
                      visible: false,
                    }}
                    // width={72}
                    //height={72}
                  ></Image>
                );
              }
            )}
          </div>
          <div
            className={classNames({
              [styles.advertise_container_floatIcon_content_wrapper2_right]:
                true,
              ...rightAnimateConfig,
            })}
          >
            {[
              "front-38.svg",
              "front-25.svg",
              "front-16.svg",
              "front-6.svg",
            ].map((item, index) => {
              let opacity = 1;
              if (index == 0) {
                opacity = 0.7;
              }
              return (
                <Image
                  key={index}
                  style={{ opacity: opacity }}
                  src={`/techLogo/${item}`}
                  alt=""
                  preview={{
                    visible: false,
                  }}
                  // width={72}
                  //height={72}
                ></Image>
              );
            })}
          </div>
        </div>
        {/* // 第三行 */}
        <div className={styles.advertise_container_floatIcon_content_wrapper3}>
          <div
            className={classNames({
              [styles.advertise_container_floatIcon_content_wrapper3_left]:
                true,
              ...leftAnimateConfig,
            })}
          >
            {[
              "front-7.svg",
              "front-10.svg",
              "front-39.svg",
              "front-31.svg",
            ].map((item, index) => {
              let opacity = 1;
              if (index == 0) {
                opacity = 0.8;
              } else if (index == 1) {
                opacity = 0.5;
              }
              return (
                <Image
                  key={index}
                  style={{ opacity: opacity }}
                  src={`/techLogo/${item}`}
                  alt=""
                  preview={{
                    visible: false,
                  }}
                  // width={72}
                  //height={72}
                ></Image>
              );
            })}
          </div>
          <div
            className={classNames({
              [styles.advertise_container_floatIcon_content_wrapper3_right]:
                true,
              ...rightAnimateConfig,
            })}
          >
            {[
              "front-32.svg",
              "front-35.svg",
              "front-40.svg",
              "front-23.svg",
              "front-22.svg",
            ].map((item, index) => {
              let opacity = 1;
              if (index == 0) {
                opacity = 0.5;
              } else if (index == 1) {
                opacity = 0.3;
              } else if (index == 3) {
                opacity = 0.8;
              }
              return (
                <Image
                  key={index}
                  src={`/techLogo/${item}`}
                  alt=""
                  preview={{
                    visible: false,
                  }}
                  style={{ opacity: opacity }}
                  // width={72}
                  //height={72}
                ></Image>
              );
            })}
          </div>
        </div>
        {/* 第四行 */}
        <div className={styles.advertise_container_floatIcon_content_wrapper4}>
          <div
            className={classNames({
              [styles.advertise_container_floatIcon_content_wrapper4_left]:
                true,
              ...leftAnimateConfig,
            })}
          >
            {[
              "front-1.svg",
              "front-11.svg",
              "front-12.svg",
              "front-18.svg",
            ].map((item, index) => {
              let opacity = 1;
              if (index == 0) {
                opacity = 0.3;
              } else if (index == 1) {
                opacity = 0.5;
              } else if (index == 2) {
                opacity = 0.8;
              }
              return (
                <Image
                  key={index}
                  src={`/techLogo/${item}`}
                  alt=""
                  preview={{
                    visible: false,
                  }}
                  style={{ opacity: opacity }}
                  // width={72}
                  //height={72}
                ></Image>
              );
            })}
          </div>
          <div
            className={classNames({
              [styles.advertise_container_floatIcon_content_wrapper4_right]:
                true,
              ...rightAnimateConfig,
            })}
          >
            {[
              "front-9.svg",
              "front-20.svg",
              "front-26.svg",
              "front-24.svg",
            ].map((item, index) => {
              let opacity = 1;
              if (index == 0) {
                opacity = 0.3;
              } else if (index == 1) {
                opacity = 0.5;
              } else if (index == 2) {
                opacity = 0.8;
              }
              return (
                <Image
                  key={index}
                  src={`/techLogo/${item}`}
                  alt=""
                  preview={{
                    visible: false,
                  }}
                  style={{ opacity: opacity }}
                  // width={72}
                  //height={72}
                ></Image>
              );
            })}
          </div>
        </div>
      </div>
      <div
        className={classNames(
          styles.advertise_box,
          ScrollAnimateClass,
          "animate__fadeIn"
        )}
      >
        <div className={styles.advertise_box_title}>
          <span className={styles.advertise_box_title_1}>新一代</span>
          <br />
          <span className={styles.advertise_box_title_2}>超融合云原生技术</span>
          <br />
          <span className={styles.advertise_box_title_3}>
            产品全生命周期赋能平台
          </span>
        </div>
        <div className={styles.advertise_box_sub_title}>
          简化产品开发并在云中快速交付创新产品,探索OnChain云原生产
        </div>
        <div className={styles.advertise_box_sub_title}>
          品生命周期管理(PLM)解决方案的优势
        </div>
        <div className={styles.advertise_box_sub_button_group}>
          <Button type="primary">申请订阅</Button>
          <Button>观看视频</Button>
        </div>
      </div>
    </div>
  );
};
const Slideshow: FC = () => {
  return (
    <div
      className={classNames(
        styles.slide_show
        // ScrollAnimateClass,
        // "animate__fadeInUp"
      )}
    >
      <div
        className={classNames(
          styles.title,
          ScrollAnimateClass,
          "animate__fadeInUp"
        )}
      >
        一些<span>很屌</span>的描述
      </div>
      <div
        className={classNames(
          styles.sub_title,
          ScrollAnimateClass,
          "animate__fadeInUp"
        )}
      >
        一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描
      </div>
      <div className={styles.slide_show_box}>
        <Carousel autoplay>
          <div>
            <Image preview={false} src="/首页电脑展示图.svg"></Image>
          </div>
          <div>
            <Image preview={false} src="/首页电脑展示图.svg"></Image>
          </div>
          <div>
            <Image preview={false} src="/首页电脑展示图.svg"></Image>
          </div>
          <div>
            <Image preview={false} src="/首页电脑展示图.svg"></Image>
          </div>
        </Carousel>
        <div className={classNames(styles.leftImage, "slowJump")}>
          <Image preview={false} src="/首页展示页装饰浅蓝.webp"></Image>
        </div>
        <div className={styles.leftDot}>
          <Image preview={false} src="/浅蓝色圆点装饰.webp"></Image>
        </div>
        <div className={classNames(styles.rightImage, "slowJump")}>
          <Image preview={false} src="/首页展示页装饰蓝.webp"></Image>
        </div>
        <div className={styles.rightDot}>
          <Image preview={false} src="/黄色圆点装饰.webp"></Image>
        </div>
      </div>
    </div>
  );
};

const PriceShow: FC = (props) => {
  type PriceShowProps = {
    key: string;
    title: string;
    price: string;
    unit: string;
    figure: string;
    list: string[];
  };
  const data: PriceShowProps[] = [
    {
      key: "1",
      figure: "首页标准版.webp",
      title: "标准版",
      price: "¥0000",
      unit: "人/年",
      list: [
        "迭代规划",
        "需求/任务/缺陷管理",
        "项目报表统计",
        "项目集",
        "代码仓库数量 1000个",
        "单仓库容量 1GB",
        "单文件推送大小 50MB",
        "项目内多仓库",
        "导入外部仓库",
        "分支权限管理",
      ],
    },
    {
      key: "2",
      title: "标准版",
      figure: "首页高级版.webp",
      price: "¥0000",
      unit: "人/年",
      list: [
        "迭代规划",
        "需求/任务/缺陷管理",
        "项目报表统计",
        "项目集",
        "代码仓库数量 1000个",
        "单仓库容量 1GB",
        "单文件推送大小 50MB",
        "项目内多仓库",
        "导入外部仓库",
        "分支权限管理",
        "支持 Git ＆ SVN",
        "Web IDE 在线编码",
      ],
    },
    {
      key: "3",
      title: "标准版",
      figure: "首页旗舰版.webp",
      price: "¥0000",
      unit: "人/年",
      list: [
        "迭代规划",
        "需求/任务/缺陷管理",
        "项目报表统计",
        "项目集",
        "代码仓库数量 1000个",
        "单仓库容量 1GB",
        "单文件推送大小 50MB",
        "项目内多仓库",
        "导入外部仓库",
        "分支权限管理",
        "支持 Git ＆ SVN",
        "Web IDE 在线编码",
        "工单支持",
        "商用级高可用性",
        "专属企业微信服务群",
      ],
    },
    {
      key: "4",
      title: "标准版",
      figure: "首页私人订制.webp",
      price: "¥0000",
      unit: "人/年",
      list: [
        "迭代规划",
        "需求/任务/缺陷管理",
        "项目报表统计",
        "项目集",
        "代码仓库数量 1000个",
        "单仓库容量 1GB",
        "单文件推送大小 50MB",
        "项目内多仓库",
        "导入外部仓库",
        "分支权限管理",
        "支持 Git ＆ SVN",
        "Web IDE 在线编码",
        "工单支持",
        "商用级高可用性",
        "专属企业微信服务群",
        "一对一顾问服务",
        "DevOps 成熟度评估",
      ],
    },
  ];
  const priceCard = ({
    title,
    price,
    unit,
    list,
    key,
    figure,
  }: PriceShowProps) => {
    return (
      <div
        key={key}
        className={classNames({
          [styles.card]: true,
          [ScrollAnimateClass]: true,
          animate__fadeInUp: true,
        })}
        data-wow-delay={`${0 + Number(key) * 0.1}s`}
      >
        <div className={styles.figure}>
          <Image preview={false} src={`/${figure}`}></Image>
        </div>
        <div className={styles.title}>{title}</div>
        <div className={styles.price}>{price}</div>
        <div className={styles.unit}>{unit}</div>
        <div className={styles.button}>
          <Button type="primary">立刻购买</Button>
        </div>
        <div className={styles.line}></div>
        <div>
          {(list || []).map((item, index: number) => {
            return (
              <div key={index} className={styles.list_item}>
                <AliIconFont type="icon-front-right"></AliIconFont>
                {item}
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  return (
    <div className={styles.price_show}>
      <div
        className={classNames(
          styles.title,
          ScrollAnimateClass,
          "animate__fadeInUp"
        )}
      >
        <span>自由选择</span>适合您的方案
      </div>
      <div
        className={classNames(
          styles.sub_title,
          ScrollAnimateClass,
          "animate__fadeInUp"
        )}
      >
        一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描
      </div>
      <div className={styles.card_list}>
        <div className={styles.card_content}>
          {data.map((item) => {
            return priceCard(item);
          })}
        </div>
      </div>
    </div>
  );
};

const WorldShow: FC = (props) => {
  return (
    <div className={styles.word_show}>
      <div className={styles.word_container}>
        <div
          className={`${styles.word_container_box} ${ScrollAnimateClass} animate__fadeIn`}
        >
          <div className={`${styles.word_container_box_title1}`}>
            我们为您提供
          </div>
          <div className={`${styles.word_container_box_title2}`}>
            一站式产品生命周期
          </div>
          <div className={styles.word_container_box_title3}>解决方案</div>
        </div>
        <div className={styles.word_container_subTitle}>
          请填写您的资讯内容，我们将在第一时间与您联系
        </div>
        <Button type="primary">申请试用</Button>
      </div>
    </div>
  );
};

const ProblemShow: FC = () => {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  const data = [
    {
      key: "1",
      title: "OnChain PLM 能做什么",
      result:
        "问题的解答解答问题的解答解答问题的解答解答问题的解答解答问题的解答解答问题的解答解答问题的解答解答",
    },
    {
      key: "2",
      title: "OnChain PLM 能做什么",
      result:
        "问题的解答解答问题的解答解答问题的解答解答问题的解答解答问题的解答解答问题的解答解答问题的解答解答",
    },
    {
      key: "3",
      title: "OnChain PLM 能做什么",
      result:
        "问题的解答解答问题的解答解答问题的解答解答问题的解答解答问题的解答解答问题的解答解答问题的解答解答",
    },
  ];
  const { Panel } = Collapse;
  return (
    <div className={styles.problem_show}>
      <div className={styles.box}>
        <div
          className={classNames(
            styles.list,
            ScrollAnimateClass,
            "animate__fadeInLeft"
          )}
        >
          <div className={styles.title}>常见问题</div>

          <Collapse
            accordion
            expandIcon={({ isActive }) =>
              isActive ? (
                <AliIconFont
                  style={{ color: "#000000", fontSize: "20px" }}
                  type="icon-front-minus"
                ></AliIconFont>
              ) : (
                <AliIconFont
                  style={{ color: "#000000", fontSize: "20px" }}
                  type="icon-front-plus"
                ></AliIconFont>
              )
            }
            defaultActiveKey={["1"]}
            ghost
          >
            {data.map((item) => {
              return (
                <Panel header={item.title} key={item.key}>
                  <p>{item.result}</p>
                </Panel>
              );
            })}
          </Collapse>
        </div>
        <div
          className={classNames(
            styles.figure,
            ScrollAnimateClass,
            "animate__fadeInRight",
            "slowJump"
          )}
        >
          <Image preview={false} src="/首页常见问题插图.webp"></Image>
        </div>
      </div>
    </div>
  );
};
export default function Home({ posts }: any) {
  return (
    <div className={styles.container}>
      <Head>
        <title>OnChain PLM</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main className={styles.main}>
          <AdvertiseBox></AdvertiseBox>
          <Slideshow></Slideshow>
          <CardShow></CardShow>
          {/* <div className={styles.client_show}></div> */}
          <PriceShow></PriceShow>
          <WorldShow></WorldShow>
          <ProblemShow></ProblemShow>
        </main>
      </Layout>
    </div>
  );
}
