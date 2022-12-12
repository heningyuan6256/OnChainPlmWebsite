import { Image } from "antd";
import classNames from "classnames";
import Head from "next/head";
import { FC, Fragment } from "react";
import Layout from "../components/Layout";
import { ScrollAnimateClass } from "../constant";
import styles from "../styles/Platform.module.less";

interface RenderContent {
  img?: string;
  content?: string;
  title: string;
  contentKey: number;
  list?: string[];
  backgroundImage?: string;
}

const RenderContent: FC<RenderContent> = (props) => {
  const isOdd = props.contentKey % 2 !== 0;
  const animateMap = {
    [ScrollAnimateClass]: true,
    ["animate__fadeInLeft"]: isOdd,
    ["animate__fadeInRight"]: !isOdd,
  };
  const renderImage = (props: { title: string }) => {
    const { title } = props;
    switch (title) {
      case "云原生赋能平台":
        return (
          <div className={styles.img1}>
            <Image
              className={styles.relativeImg1}
              preview={false}
              src="/platform/云原生A.webp"
            ></Image>
            <div
              className={classNames({
                [styles.absoluteImg_1]: true,
                [ScrollAnimateClass]: true,
                ["animate__fadeInRight"]: true,
                ["jump"]: true,
              })}
              data-wow-duration="2s"
            >
              <Image preview={false} src="/platform/云原生B.webp"></Image>
            </div>
            <div
              className={classNames({
                [styles.absoluteImg_2]: true,
                [ScrollAnimateClass]: true,
                ["animate__fadeInDown"]: true,
                ["jump"]: true,
              })}
              data-wow-duration="2s"
            >
              <Image preview={false} src="/platform/云原生C.webp"></Image>
            </div>
          </div>
        );
      case "多租户体系架构":
        return (
          <div className={styles.img2}>
            <Image
              className={styles.relativeImg}
              preview={false}
              src="/platform/多租户B.webp"
            ></Image>
            <div
              className={classNames({
                [styles.absoluteImg_3]: true,
                [ScrollAnimateClass]: true,
                ["animate__fadeInRight"]: true,
                ["jump"]: true,
              })}
              data-wow-duration="2s"
            >
              <Image preview={false} src="/platform/多租户A.webp"></Image>
            </div>
            <div
              className={classNames({
                [styles.absoluteImg_4]: true,
                [ScrollAnimateClass]: true,
                ["animate__fadeInDown"]: true,
                ["jump"]: true,
              })}
              data-wow-duration="2s"
            >
              <Image preview={false} src="/platform/多租户C.webp"></Image>
            </div>
          </div>
        );
      case "安全和访问控制":
        return (
          <div className={styles.img3}>
            <Image
              className={styles.relativeImg}
              preview={false}
              src="/platform/安全访问A.webp"
            ></Image>
            <div
              className={classNames({
                [styles.absoluteImg_5]: true,
                [ScrollAnimateClass]: true,
                ["animate__fadeInRight"]: true,
                ["jump"]: true,
              })}
              data-wow-duration="2s"
            >
              <Image preview={false} src="/platform/安全访问C.webp"></Image>
            </div>
            <div
              className={classNames({
                [styles.absoluteImg_6]: true,
                [ScrollAnimateClass]: true,
                ["animate__fadeInDown"]: true,
                ["jump"]: true,
              })}
              data-wow-duration="2s"
            >
              <Image preview={false} src="/platform/安全访问D.webp"></Image>
            </div>
            <div
              className={classNames({
                [styles.absoluteImg_7]: true,
                [ScrollAnimateClass]: true,
                ["animate__fadeInDown"]: true,
                ["jump"]: true,
              })}
              data-wow-duration="2s"
            >
              <Image preview={false} src="/platform/安全访问B.webp"></Image>
            </div>
          </div>
        );
      case "多维度企业协同":
        return (
          <div className={styles.img4}>
            <Image
              className={styles.relativeImg}
              preview={false}
              src="/platform/多维度协同A.webp"
            ></Image>
            <div
              className={classNames({
                [styles.absoluteImg_8]: true,
                [ScrollAnimateClass]: true,
                ["animate__fadeInRight"]: true,
                ["jump"]: true,
              })}
              data-wow-duration="2s"
            >
              <Image preview={false} src="/platform/多维度协同C.webp"></Image>
            </div>
          </div>
        );
      case "企业移动":
        return (
          <div className={styles.img5}>
            <Image
              className={styles.relativeImg}
              preview={false}
              src="/platform/企业移动A.webp"
            ></Image>
            <div
              className={classNames({
                [styles.absoluteImg_9]: true,
                [ScrollAnimateClass]: true,
                ["animate__fadeInRight"]: true,
                ["jump"]: true,
              })}
              data-wow-duration="2s"
            >
              <Image preview={false} src="/platform/企业移动B.svg"></Image>
            </div>
            <div
              className={classNames({
                [styles.absoluteImg_10]: true,
                [ScrollAnimateClass]: true,
                ["animate__fadeInRight"]: true,
                ["jump"]: true,
              })}
              data-wow-duration="2s"
            >
              <Image preview={false} src="/platform/企业移动C.webp"></Image>
            </div>
            <div
              className={classNames({
                [styles.absoluteImg_11]: true,
                [ScrollAnimateClass]: true,
                ["animate__fadeInRight"]: true,
                ["jump"]: true,
              })}
              data-wow-duration="2s"
            >
              <Image preview={false} src="/platform/企业移动D.webp"></Image>
            </div>
          </div>
          // <Fragment>
          //   <Image preview={false} src="/platform/企业移动A.webp"></Image>
          // </Fragment>
        );
      case "低代码开发":
        return (
          <Fragment>
            <Image preview={false} src="/platform/代码开发A.webp"></Image>
          </Fragment>
        );
      case "系统开放能力":
        return (
          <Fragment>
            <Image preview={false} src="/platform/系统开放A.webp"></Image>
          </Fragment>
        );
      case "应用分发与交付能力":
        return (
          <Fragment>
            <Image preview={false} src="/platform/应用分发A.webp"></Image>
          </Fragment>
        );
    }
  };
  return (
    <div className={styles.platform_container}>
      <div
        className={classNames({
          [styles.platform_item]: true,
          ...animateMap,
        })}
        style={{ flexDirection: !isOdd ? "row" : "row-reverse" }}
      >
        <div style={{ minWidth: "430px" }}>
          <div
            style={{ display: "flex" }}
            className={classNames({
              [styles.platform_item_title]: true,
              ...animateMap,
            })}
          >
            <div className={styles.platform_item_title_prefix}>
              0{props.contentKey + 1}
            </div>{" "}
            {props.title}
          </div>
          <div
            className={classNames({
              [styles.platform_item_content]: true,
              ...animateMap,
            })}
          >
            {props.content}
          </div>
          <div>
            {(props.list || []).map((item, index) => (
              <div
                key={index}
                className={classNames({
                  [styles.platform_item_list]: true,
                  ...animateMap,
                })}
              >
                <div className={styles.platform_item_list_suffix}></div> {item}
              </div>
            ))}
          </div>
        </div>
        <div
          className={classNames({
            [styles.platform_item_img]: true,
            ...animateMap,
          })}
        >
          {renderImage({ title: props.title })}
        </div>
      </div>
    </div>
  );
};

const platform: FC = () => {
  const data = [
    {
      img: "/platform/云原生A.webp",
      content:
        "OnChainPLM基于云原生技术，来构建新一代工业软件技术底座“产品全生命周期赋能平台”，帮助企业高效管理其产品开发流程，并比竞争对手更快地将产品推向市场。您的整个产品数据在云端安全可靠，可从任何地方任何设备进行访问。",
      title: "云原生赋能平台",
    },
    {
      img: "/平台-多租户体系架构插图.webp",
      content:
        "OnChainPLM平台采用多租户和微服务架构构建。您的产品数据与爱他用户产品数据相互隔离、安全可靠，并且应用程序由于分布式和优化的系统资源高效运行。",
      title: "多租户体系架构",
      backgroundImage: "/平台-波浪A.webp",
      list: [
        "数据隔离带来安全性",
        "提高性能可扩展性",
        "系统的高可用性并减少停机时间",
        "自动备份保证数据的零丢失",
        "低成本投入和提高企业自身回报率",
      ],
    },
    {
      img: "/平台-安全和访问控制插图.webp",
      content:
        "我们的平台提供多层数据安全和访问控制。借助对象权限和精细权限模型，您可以更好地控制谁可以访问数据以及他们可以做什么。",
      title: "安全和访问控制",
      list: [
        "精细粒度的访问控制模型",
        "用户、角色、特权和权限的控制",
        "内置对象和属性的访问控制",
        "精细粒度的访问控制模型",
        "基于角色的应用程序配置",
      ],
    },
    {
      img: "/平台-多维度企业协同插图.webp",
      content:
        "通过OnChain企业社交功能，方便连接产品团队中的各个角色人员，增强他们之间的协作。团队可以共享关键信息，如文档、文件、图纸等以及上下文研发数据。",
      title: "多维度企业协同",
      backgroundImage: "/平台-波浪B.webp",
      list: [
        "应用程序中的上下文对话",
        "通过消息共享文件和图纸等研发数据",
        "鼓励您的客户直接提供反馈",
        "自动备份保证数据的零丢失",
        "与钉钉、飞书等程序做无缝集成",
      ],
    },
    {
      img: "/平台-企业移动插图.webp",
      content: "通过我们的移动应用程序，您的团队可以从任何地方访问产品数据。",
      title: "企业移动",
      list: [
        "随时随地在任何设备上安全地访问数据",
        "基于角色的移动应用程序",
        "推送通知和自动更新",
        "直接从您的移动设备参与对话",
      ],
    },
    {
      img: "/平台-低代码开发插图.webp",
      content:
        "定制化应用程序开发，方便为您的产品团队提供更好的用户体验。OnChainPLM平台提供低代码应用程序开发，基于Serverless技术，无需编写大量代码即可构建自定义应用程序。",
      title: "低代码开发",
      backgroundImage: "/平台-波浪C.webp",
      list: ["自定义数据模型和扩展字段", "自定义视图或扩展现有视图"],
    },
    {
      img: "/平台-系统开放能力插图.webp",
      content:
        "平台内置 OPEN API 可以在安全环境中创建和访问数据。这些API可以通过不同的编程语言轻松访问。",
      title: "系统开放能力",
      list: [
        "高安全性的REST API",
        "带有示例的详细文档",
        "便捷的第三方系统集成",
        "直接从您的移动设备参与对话",
      ],
    },
    {
      img: "/平台-应用分发与交付插图.webp",
      content:
        "基于云原生超融合技术的应用架构，PLM 相关业务最终交付物会完全遵循云原生应用交付件标准去交付客户应用体。分钟级时间完成支撑工业级的云原生应用部过程。",
      title: "应用分发与交付能力",
      backgroundImage: "/平台-波浪D.webp",
      list: [
        "优化容器镜像大小，降低镜像传输成本",
        "实现高效的个性化交付",
        "生态集成",
      ],
    },
  ];
  return (
    <Fragment>
      <Head>
        <title>OnChain PLM 平台</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className={styles.main}>
          <div style={{ height: "80px" }}></div>
          <div
            className={`${ScrollAnimateClass} animate__fadeIn`}
            style={{
              height: "536px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image preview={false} src="/产品插图.png"></Image>
          </div>
          {data.map((item, index) => (
            <RenderContent
              key={index}
              {...item}
              contentKey={index}
            ></RenderContent>
          ))}
        </main>
      </Layout>
    </Fragment>
  );
};

export default platform;
