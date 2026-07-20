import type { AnnouncementConfig } from "../types/announcementConfig";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题
	title: "公告",

	// 公告内容
	content: "欢迎访问积木好课新官方站点。我们由Autodesk官方认证教师领衔创办，核心团队汇聚硕、博及高校教师，深耕一线软件技术领域逾10年。助力数万专业技术人员更进一步，旧站点23万访问。",

	// 是否允许用户关闭公告
	closable: false,

	link: {
		// 启用链接
		enable: true,
		// 链接文本
		text: "了解更多",
		// 链接 URL
		url: "/about/",
		// 内部链接
		external: false,
	},
};
