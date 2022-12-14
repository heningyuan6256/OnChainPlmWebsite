import { AliIconFont } from "@components/icon";
import { Collapse, Image } from "antd";
import classNames from "classnames";
import Head from "next/head";
import { FC, Fragment } from "react";
import Layout from "../components/Layout";
import { ScrollAnimateClass } from "../constant";
import styles from "../styles/doc.module.less";
const doc: FC = () => {
  const { Panel } = Collapse;

  const generateTitle = (title: string, sort: string) => {
    return (
      <div className={"tree_title"}>
        <AliIconFont
          style={{ fontSize: "18px", color: "#475569" }}
          type={`icon-front-${sort}`}
        ></AliIconFont>
        {title}
      </div>
    );
  };
  const docCatalog = [
    {
      title: generateTitle("基本介绍", "sort"),
    },
    {
      title: generateTitle("项目管理", "project"),
    },
    { title: generateTitle("物料管理", "product") },
    { title: generateTitle("图文档管理", "file") },
    {
      title: generateTitle("产品结构管理", "process"),
      list: [
        { title: "BOM结构管理" },
        { title: "BOM结构中物料的…" },
        { title: "替代料管理" },
        { title: "BOM结构差异分析" },
      ],
    },
    { title: generateTitle("工作流程管理", "workflow") },
    { title: generateTitle("工程变更管理", "control") },

    { title: generateTitle("产品可视化", "data") },
    {
      title: generateTitle("高级搜索", "search"),
    },
    {
      title: generateTitle("CAD集成", "integrate"),
    },
    {
      title: generateTitle("系统管理", "setting"),
    },
  ];

  const cardData = [
    {
      title: "项目管理",
      icon: "project",
      content:
        "项目管理模块包括项目进度管理、项目资源管理、项目交付管理、项目费用管理、项目状态管理、项目基线管理、日历管理。",
    },
    {
      title: "物料管理",
      icon: "product",
      content:
        "项目管理模块包括项目进度管理、项目资源管理、项目交付管理、项目费用管理、项目状态管理、项目基线管理、日历管理。",
    },
    {
      title: "图文档管理",
      icon: "file",
      content:
        "项目管理模块包括项目进度管理、项目资源管理、项目交付管理、项目费用管理、项目状态管理、项目基线管理、日历管理。",
    },
    {
      title: "产品结构管理",
      icon: "process",
      content:
        "项目管理模块包括项目进度管理、项目资源管理、项目交付管理、项目费用管理、项目状态管理、项目基线管理、日历管理。",
    },
    {
      title: "工作流程管理",
      icon: "workflow",
      content:
        "项目管理模块包括项目进度管理、项目资源管理、项目交付管理、项目费用管理、项目状态管理、项目基线管理、日历管理。",
    },
    {
      title: "工程变更管理",
      icon: "control",
      content:
        "项目管理模块包括项目进度管理、项目资源管理、项目交付管理、项目费用管理、项目状态管理、项目基线管理、日历管理。",
    },
    {
      title: "产品可视化",
      icon: "data",
      content:
        "项目管理模块包括项目进度管理、项目资源管理、项目交付管理、项目费用管理、项目状态管理、项目基线管理、日历管理。",
    },
    {
      title: "高级搜索",
      icon: "search",
      content:
        "项目管理模块包括项目进度管理、项目资源管理、项目交付管理、项目费用管理、项目状态管理、项目基线管理、日历管理。",
    },
    {
      title: "CAD集成",
      icon: "integrate",
      content:
        "项目管理模块包括项目进度管理、项目资源管理、项目交付管理、项目费用管理、项目状态管理、项目基线管理、日历管理。",
    },
    {
      title: "系统管理",
      icon: "setting",
      content:
        "项目管理模块包括项目进度管理、项目资源管理、项目交付管理、项目费用管理、项目状态管理、项目基线管理、日历管理。",
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
        <div style={{ height: "80px" }}></div>
        <div className={styles.topImg}>
          <div>产品文档</div>
        </div>
        <div className={styles.doc_container}>
          <div className={styles.doc_container_left}>
            <div className={styles.title}>目录</div>
            <Collapse
              ghost
              expandIcon={({ isActive }) =>
                isActive ? (
                  <AliIconFont
                    style={{
                      color: "#A7B3C5",
                      fontSize: "10px",
                      transform: "rotate(90deg)",
                    }}
                    type="icon-front-arrow"
                  ></AliIconFont>
                ) : (
                  <AliIconFont
                    style={{
                      color: "#A7B3C5",
                      fontSize: "10px",
                    }}
                    type="icon-front-arrow"
                  ></AliIconFont>
                )
              }
            >
              {docCatalog.map((item: any, index) => (
                <Panel
                  header={item.title}
                  key={index}
                  className={classNames(
                    ScrollAnimateClass,
                    "animate__fadeIn"
                  )}
                >
                  <div className={"tree_item_box"}>
                    {(item.list || []).map(
                      (childItem: any, childIndex: number) => {
                        return (
                          <div
                            key={childIndex}
                            className={"child_item"}
                            style={{
                              marginBottom:
                                (item.list || []).length == childIndex + 1
                                  ? "0px"
                                  : "12px",
                            }}
                          >
                            {childItem.title}
                          </div>
                        );
                      }
                    )}
                  </div>
                </Panel>
              ))}
            </Collapse>
          </div>
          <div className={styles.doc_container_right}>
            <div className={styles.bread}>
              文档 / <span>基本介绍</span>
            </div>
            <div className={styles.title}>基本介绍</div>
            <div className={styles.line}></div>
            <div className={styles.sub_title}>
              在开始了解 OnChain PLM 之前，您可以通过基本介绍快速的了解 OnChain
              PLM 包含哪些基础版块功能，并快速导航到您想了解的板块。
            </div>
            <div className={styles.card_list}>
              {cardData.map((item, index) => (
                <div
                  key={index}
                  data-wow-delay={`${0 + Number(index) * 0.1}s`}
                  className={classNames(
                    styles.card,
                    ScrollAnimateClass,
                    "animate__fadeInUp"
                  )}
                >
                  <div className={styles.icon}>
                    <AliIconFont
                      style={{ fontSize: "32px" }}
                      type={`icon-front-${item.icon}`}
                    ></AliIconFont>
                  </div>
                  <div className={styles.title}>{item.title}</div>
                  <div className={styles.content}>{item.content}</div>
                  <div className={styles.more}>
                    查看详情
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "6px",
                      }}
                    >
                      <AliIconFont
                        type="icon-front-arrow"
                        style={{ fontSize: "10px" }}
                      ></AliIconFont>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default doc;
