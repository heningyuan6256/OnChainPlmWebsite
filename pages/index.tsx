import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.less";
import { Button, Card, Col, Row, Image, Collapse } from "antd";
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
          <Button type="primary">申请试用</Button>
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
      <div className={styles.title}>
        一些<span>很屌</span>的描述
      </div>
      <div className={styles.sub_title}>
        一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描
      </div>
      <div className={styles.slide_show_box}>
        <Image preview={false} src="/首页电脑.webp"></Image>
        {/* <AwesomeSlider
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
        /> */}
      </div>
    </div>
  );
};

const CardShow: FC = () => {
  const data = [
    {
      icon: "development",
      title: "闭环的产品开发方案",
      content:
        "为您的产品开发提供一个闭环系统，从需求到生产再到客户的整个回路。",
    },
    {
      icon: "product",
      title: "加速新产品迭代",
      content:
        "帮助您比竞争对手更快的速度创新，将新产品推向市场，获得竞争优势。",
    },
    {
      icon: "control",
      title: "产品和流程的数字主线",
      content: "产品从概念到需求、开发、生产和服务的数字主线管理。",
    },
    {
      icon: "process",
      title: "灵活的产品配置",
      content:
        "使用简单的规则配置和产品配置，就可以按照不同行业、业务特点进行快速组装。",
    },
    {
      icon: "setting",
      title: "变更管理",
      content:
        "基于DSL的高可定制的工作引擎，简化您的变更管理流程，跟踪产品的演变全过程。",
    },
    {
      icon: "quality",
      title: "提高产品质量",
      content:
        "通过跟踪客户问题并将其与工程变更联系起来，控制整个生命周期内产品质量。",
    },
    {
      icon: "team",
      title: "跨职能协作",
      content:
        "实现产品开发过程相关者之间的协作，消除延迟和代价高昂的错误和返工。",
    },
    {
      icon: "cooperation",
      title: "供应商协作",
      content: "有效地将采购的部件与BOM相关联，跟踪所有产品的供应商质量指标。",
    },
    {
      icon: "user",
      title: "提高客户满意度",
      content:
        "通过有效管理客户报告的问题和自动化变更管理流程，您可以提高客户满意度。",
    },
  ];
  return (
    <div className={styles.card_show}>
      <div className={styles.card_show_title}>
        <div className={styles.title}>
          一些<span>很屌</span>的描述
        </div>
      </div>
      <div className={styles.sub_title}>
        一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描述一些描
      </div>
      <div className={styles.card_show_box}>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              data-wow-delay={`${0 + Number(index) * 0.2}s`}
              className={classNames(
                styles.card_content,
                ScrollAnimateClass,
                "animate__fadeInUp"
              )}
            >
              <AliIconFont
                className={styles.card_content_icon}
                type={`icon-front-${item.icon}`}
              ></AliIconFont>
              <div className={styles.card_content_title}>{item.title}</div>
              <div className={styles.card_content_content}>{item.content}</div>
            </div>
          );
        })}
      </div>
      <div>
        <Button type="primary">查看更多</Button>
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
      <div className={styles.title}>
        <span>自由选择</span>适合您的方案
      </div>
      <div className={styles.sub_title}>
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
        <div className={styles.word_container_box}>
          <div className={styles.word_container_box_title1}>我们为您提供</div>
          <div className={styles.word_container_box_title2}>
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
        <div className={styles.list}>
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
        <div className={styles.figure}>
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
