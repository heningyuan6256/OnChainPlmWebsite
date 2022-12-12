import { ScrollAnimateClass } from "@constant";
import { Button } from "antd";
import classNames from "classnames";
import { FC } from "react";
import styles from "../styles/CardShow.module.less";
import { AliIconFont } from "./icon";

export const CardShow: FC = () => {
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
    <div
      className={classNames(
        styles.card_show
        // ScrollAnimateClass,
        // "animate__fadeInUp"
      )}
    >
      <div
        className={classNames(
          styles.card_show_title,
          ScrollAnimateClass,
          "animate__fadeInUp"
        )}
      >
        <div className={styles.title}>
          一些<span>很屌</span>的描述
        </div>
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
      <div className={styles.card_show_box}>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              data-wow-delay={`${0 + Number(index) * 0.1}s`}
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
