import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.less";
import { Button, Card, Col, Row, Image } from "antd";
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
// home -- first page
const AdvertiseBox: FC = (props) => {
  const leftAnimateConfig = {
    [ScrollAnimateClass]: true,
    ["fadeInLeft"]: true,
  };
  const rightAnimateConfig = {
    [ScrollAnimateClass]: true,
    ["fadeInRight"]: true,
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
              "front-1.svg",
              "front-2.svg",
              "front-3.svg",
              "front-4.svg",
              "front-5.svg",
              "front-6.svg",
            ].map((item, index) => (
              <Image
                key={index}
                src={`/techLogo/${item}`}
                alt=""
                preview={{
                  visible: false,
                }}
                // width={72}
                //height={72}
              ></Image>
            ))}
          </div>
          <div
            className={classNames({
              [styles.advertise_container_floatIcon_content_wrapper1_right]:
                true,
              ...rightAnimateConfig,
            })}
          >
            {[
              "front-7.svg",
              "front-8.svg",
              "front-9.svg",
              "front-10.svg",
              "front-11.svg",
              "front-12.svg",
            ].map((item, index) => (
              <Image
                key={index}
                src={`/techLogo/${item}`}
                alt=""
                preview={{
                  visible: false,
                }}
                // width={72}
                //height={72}
              ></Image>
            ))}
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
            {[
              "front-13.svg",
              "front-14.svg",
              "front-15.svg",
              "front-16.svg",
              "front-17.svg",
            ].map((item, index) => (
              <Image
                key={index}
                src={`/techLogo/${item}`}
                alt=""
                preview={{
                  visible: false,
                }}
                // width={72}
                //height={72}
              ></Image>
            ))}
          </div>
          <div
            className={classNames({
              [styles.advertise_container_floatIcon_content_wrapper2_right]:
                true,
              ...rightAnimateConfig,
            })}
          >
            {[
              "front-18.svg",
              "front-19.svg",
              "front-20.svg",
              "front-21.svg",
              "front-22.svg",
            ].map((item, index) => (
              <Image
                key={index}
                src={`/techLogo/${item}`}
                alt=""
                preview={{
                  visible: false,
                }}
                // width={72}
                //height={72}
              ></Image>
            ))}
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
              "front-18.svg",
              "front-19.svg",
              "front-20.svg",
              "front-21.svg",
            ].map((item, index) => (
              <Image
                key={index}
                src={`/techLogo/${item}`}
                alt=""
                preview={{
                  visible: false,
                }}
                // width={72}
                //height={72}
              ></Image>
            ))}
          </div>
          <div
            className={classNames({
              [styles.advertise_container_floatIcon_content_wrapper3_right]:
                true,
              ...rightAnimateConfig,
            })}
          >
            {[
              "front-22.svg",
              "front-23.svg",
              "front-24.svg",
              "front-25.svg",
            ].map((item, index) => (
              <Image
                key={index}
                src={`/techLogo/${item}`}
                alt=""
                preview={{
                  visible: false,
                }}
                // width={72}
                //height={72}
              ></Image>
            ))}
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
              "front-26.svg",
              "front-27.svg",
              "front-28.svg",
              "front-29.svg",
            ].map((item, index) => (
              <Image
                key={index}
                src={`/techLogo/${item}`}
                alt=""
                preview={{
                  visible: false,
                }}
                // width={72}
                //height={72}
              ></Image>
            ))}
          </div>
          <div
            className={classNames({
              [styles.advertise_container_floatIcon_content_wrapper4_right]:
                true,
              ...rightAnimateConfig,
            })}
          >
            {[
              "front-30.svg",
              "front-31.svg",
              "front-32.svg",
              "front-33.svg",
            ].map((item, index) => (
              <Image
                key={index}
                src={`/techLogo/${item}`}
                alt=""
                preview={{
                  visible: false,
                }}
                // width={72}
                //height={72}
              ></Image>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.advertise_box}>
        <div className={styles.advertise_box_title}>
          <span className={styles.advertise_box_title_1}>
            新一代超融合云原生技术
          </span>
          <br />
          <span className={styles.advertise_box_title_2}>
            产品全生命周期赋能平台
          </span>
        </div>
        <div className={styles.advertise_box_sub_title}>
          简化产品开发并在云中快速交付创新产品
        </div>
        <div className={styles.advertise_box_sub_title}>
          探索OnChain云原生产品生命周期管理(PLM)解决方案的优势
        </div>
        <div className={styles.advertise_box_sub_button_group}>
          <Button>申请试用</Button>
          <Button>视频介绍</Button>
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
        // "fadeInUp"
      )}
    >
      <div className={styles.slide_show_box}>
        <AwesomeSlider
          mobileTouch
          organicArrows={false}
          media={[
            {
              source: "/slider1.png",
            },
            {
              source: "/slider1.png",
            },
            {
              source: "/slider1.png",
            },
            {
              source: "/slider1.png",
            },
            {
              source: "/slider1.png",
            },
          ]}
        />
      </div>
    </div>
  );
};

const CardShow: FC = () => {
  const data = [
    {
      title: "闭环的产品开发方案",
      content:
        "为您的产品开发提供一个闭环系统，从需求到生产再到客户的整个回路。",
    },
    {
      title: "加速新产品迭代",
      content:
        "帮助您比竞争对手更快的速度创新，将新产品推向市场，获得竞争优势。",
    },
    {
      title: "产品和流程的数字主线",
      content: "产品从概念到需求、开发、生产和服务的数字主线管理。",
    },
    {
      title: "灵活的产品配置",
      content:
        "使用简单的规则配置和产品配置，就可以按照不同行业、业务特点进行快速组装。",
    },
    {
      title: "变更管理",
      content:
        "基于DSL的高可定制的工作引擎，简化您的变更管理流程，跟踪产品的演变全过程。",
    },
    {
      title: "提高产品质量",
      content:
        "通过跟踪客户问题并将其与工程变更联系起来，控制整个生命周期内产品质量。",
    },
    {
      title: "跨职能协作",
      content:
        "实现产品开发过程相关者之间的协作，消除延迟和代价高昂的错误和返工。",
    },
    {
      title: "供应商协作",
      content: "有效地将采购的部件与BOM相关联，跟踪所有产品的供应商质量指标。",
    },
    {
      title: "提高客户满意度",
      content:
        "通过有效管理客户报告的问题和自动化变更管理流程，您可以提高客户满意度。",
    },
  ];
  return (
    <div className={styles.card_show}>
      <div className={styles.card_show_title}>为什么选择OnChain</div>
      <div className={styles.card_show_box}>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className={classNames(
                styles.card_content,
                ScrollAnimateClass,
                "slideInDown"
              )}
            >
              <div className={styles.card_content_title}>{item.title}</div>
              <div className={styles.card_content_content}>{item.content}</div>
            </div>
          );
        })}
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
          <div className={styles.client_show}></div>
          <div className={styles.apply_show}>
            <div></div>
            <div>
              <div className={styles.apply_show_title}>
                提供一站式产品全生命周期解决方案
              </div>
              <div className={styles.apply_show_sub_title}>
                请填写您的资讯内容，我们将在第一时间与您联系
              </div>
            </div>
            <div>
              <Button>申请试用</Button>
            </div>
            <div></div>
          </div>
        </main>
      </Layout>
    </div>
  );
}

// export async function getStaticProps(context: any) {
//   const posts = await getPosts();
//   if (!posts) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { posts },
//   };
// }
