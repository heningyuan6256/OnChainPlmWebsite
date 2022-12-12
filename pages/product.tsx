import Link from "next/link";
import { FC, Fragment } from "react";
import Layout from "../components/Layout";
import { getPosts } from "./api/hello";
import styles from "../styles/Product.module.less";
import { Image } from "antd";
import { CardShow } from "@components/CardShow";
import { ScrollAnimateClass } from "@constant";
import classNames from "classnames";

interface RenderContent {
  img?: string;
  content?: string;
  title: string;
  contentKey: number;
  list?: string[];
  backgroundImage?: string;
}

const product: FC = ({ posts }: any) => {
  const data = [
    {
      img: "/platform/云原生A.webp",
      content:
        "以零部件对象的模式管理产品数据。覆盖物料创建、物料设计，物料审核、发布、变更等全过程。",
      title: "物料、编码标准化管理",
      list: [
        "不同类型的部件管理",
        "更新部件属性并跟踪更改",
        "简单和高级的搜索功能",
        "查看部件修订版本及其生命周期",
        "物料审批流程，可视化的流程，历史可追溯",
      ],
    },
    {
      img: "/平台-多租户体系架构插图.webp",
      content:
        "以BOM为主线，贯穿各业务流程，保证全生命周期的数据协同，状态协同，变更协同。",
      title: "全流程BOM管理",
      backgroundImage: "/平台-波浪A.webp",
      list: [
        "BOM对象的管理逻辑，支持创建、编辑、流程、变更等功能",
        "跟踪生命周期变化",
        "多BOM版本比较、流程管理、变更管理",
        "追踪每次修订的文件变更",
      ],
    },
    {
      img: "/平台-安全和访问控制插图.webp",
      content:
        "创建和管理各种变更对象，如ECR、ECO、DCR、DCO、MCO等内置流程变更方案。支持CMII的变更体系，实现变更闭环管理。",
      title: "高效变更管理",
      list: [
        "支持各种行业标准变更管理流程",
        "自定义流程模板，满足不同行业需要",
        "追踪受影响物件和解决方案物件",
        "自动化的工作流程和审批记录",
        "BOM红线标记来追踪每个变更记录",
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
      content:
        "基于Go协程和高扩展DSL，自研工作流引擎和工作流设计器覆盖PLM解决方案中所有流程方案。",
      title: "健壮的工作流引擎",
      list: [
        "可拖放工作流设计器",
        "带有事件和脚本的可扩展工作流",
        "灵活的节点分支编排机制，独立的任务、审批分支处理不同审核类型",
        "追踪每个指定用户的(批准/拒绝)操作",
      ],
    },
    {
      img: "/平台-低代码开发插图.webp",
      content:
        "综合项目管理模块，包括分配给团队成员的阶段、活动和任务，并跟踪每个阶段的可交付成果。",
      title: "项目和需求管理",
      backgroundImage: "/平台-波浪C.webp",
      list: [
        "创建新项目或从 Project模板中导入",
        "跨阶段和跨任务跟踪项目进度、状态及可交付成果",
        "创建一个团队并向他们分配任务和可交付成果",
        "通过甘特图直观显示项目进度",
        "全过程的项目风险监控",
      ],
    },
    {
      img: "/平台-系统开放能力插图.webp",
      content:
        "Onchain PLM使查找隐藏在海量产品数据中的信息变得更加容易。可从项目中搜索所有类型的数据以变更对象。",
      title: "多维度深度搜索",
      list: [
        "对所有数据进行快速、多维度的搜索",
        "轻松导航到搜索结果中得到详细信息",
        "通过高级搜索来细化您的搜索结果",
        "保存搜索条件以备将来使用",
        "公共和个人搜索的分类",
      ],
    },
    {
      img: "/平台-应用分发与交付插图.webp",
      content:
        "制造BOM依赖于制造商物料。有效管理制造商物料是产品成功的重要因素。Onchain PLM允许您有效地管理制造商和制造商部件。",
      title: "制造商和制造商部件",
      backgroundImage: "/平台-波浪D.webp",
      list: [
        "创建和管理制造商",
        "完整的制造商变更流程",
        "创建和管理供应商部件及其生命周期",
        "管理制造商认证状态",
      ],
    },
    {
      img: "/平台-应用分发与交付插图.webp",
      content:
        "使用分类和属性创造您自己的数据模型。这允许您自定义和配置Onchain PLM以完全满足您的需求。",
      title: "分类和属性",
      backgroundImage: "/平台-波浪D.webp",
      list: [
        "为物料、文档、项目、变更等对象创建您自己的类型",
        "为每种类型创建自定义属性",
        "支持多种数据类型的属性",
        "为类型分配生命周期",
        "控制修订和非修订属性",
      ],
    },
    {
      img: "/平台-应用分发与交付插图.webp",
      content:
        "除了分类和属性，Onchain PLM还提供配置以扩展系统内置功能。您可以自定义创建编号、生命周期、文本规则、版本等。",
      title: "业务全栈式动态配置",
      backgroundImage: "/平台-波浪D.webp",
      list: [
        "创建自定义编号",
        "创建自己的生命周期和阶段",
        "创建对象关系和属性",
        "自定义列表类型",
        "编辑通知模板",
      ],
    },

    {
      img: "/平台-应用分发与交付插图.webp",
      content: "OnChain PLM以用户、角色和权限的形式提供强大的访问控制。",
      title: "用户、角色和权限控制",
      backgroundImage: "/平台-波浪D.webp",
      list: [
        "创建内部和外部用户",
        "创建角色并将其分配给用户",
        "为每个角色分配权限",
        "启用和禁用用户",
      ],
    },

    {
      img: "/平台-应用分发与交付插图.webp",
      content:
        "Onchain PLM 平台提供大量 API 来扩展和增强其功能。同时也可以通过第三方添加增值功能。",
      title: "第三方 APIs 集成",
      backgroundImage: "/平台-波浪D.webp",
      list: [
        "安全的 REST API",
        "用于扩展功能的插件 SDK",
        "通过 serverless 在应用程序中提供各种语言运行时扩展点",
        "对接第三方系统，如erp、钉钉、企业微信等",
      ],
    },

    {
      img: "/平台-应用分发与交付插图.webp",
      content:
        "OnChain FileViewer 目标打造一个统一的可视化平台，可帮助企业轻松查看和打印从后台文档到高级工程文件(MCAD、ECAD等)主流类型的文档在线文件预览协作，从而推动业务运营转型。",
      title: "企业文件可视化解决方案",
      backgroundImage: "/平台-波浪D.webp",
      list: [
        "2D fileviewer无需原生软件即可查看数百种类型的文件，提供对 Office 套件、图像和 2D CAD 文件的普遍访问，让所有用户都可以访问工程文档和资产文档。",
        "3D fileviewer无需原生软件即可查看主流3D设计工具的3D原始稿，包括3D/2D CAD、图形、Office和PDF文档的在线查看。",
        "有效与制造商、供应商和客户开展跨团队沟通和协作，从而提高运营效率。",
      ],
    },
  ];
  const RenderContent: FC<RenderContent> = (props) => {
    const isOdd = props.contentKey % 2 !== 0;
    const animateMap = {
      [ScrollAnimateClass]: true,
      ["animate__fadeInLeft"]: isOdd,
      ["animate__fadeInRight"]: !isOdd,
    };
    const renderImage = (props: { title: string }) => {
      const { title } = props;
      return <></>;
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
                  <div className={styles.platform_item_list_suffix}></div>{" "}
                  {item}
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
  return (
    <Layout>
      <div style={{ height: "80px" }}></div>
      <div className={styles.container}>
        <div className={styles.title_wrapper_content}>
          <div className={styles.title}>
            <span>灵活智能</span>的产品数据管理
          </div>
          <div className={styles.sub_title} style={{ marginBottom: "20px" }}>
            通过打通人员角色、研发数据、变更流程和业务系统，从概念到工程设计、制造、质量、服务和处置来管理产品整个生命周期。
          </div>
          <div className={styles.sub_title} style={{ textAlign: "center" }}>
            深入了解您的产品数据，使您的产品团队能够做出正确的决策并更快地将您的产品推向市场。
          </div>
        </div>
        <div
          className={`${styles.title_wrapper_img} ${ScrollAnimateClass} animate__fadeIn`}
        >
          <Image preview={false} src="/产品新插图.svg"></Image>
        </div>
        <CardShow></CardShow>
        {data.map((item, index) => (
          <RenderContent
            key={index}
            {...item}
            contentKey={index}
          ></RenderContent>
        ))}
      </div>
      {/* <div>
        <ul>
          {posts.map((post: any) => (
            <li key={post.id}>
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div> */}
    </Layout>
  );
};
// export async function getStaticProps(context: any) {
//   // const posts = await getPosts();
//   // if (!posts) {
//   //   return {
//   //     notFound: true,
//   //   };
//   // }

//   // return {
//   //   props: { posts },
//   // };
// }
export default product;
