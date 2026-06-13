import {
	type NavBarConfig,
	type NavBarLink,
	type NavBarSearchConfig,
	NavBarSearchMethod,
} from "../types/navBarConfig";

// ============================================================================
// 导航栏配置 - 根据顺序动态生成导航栏链接
// NavBar Configuration - Dynamically generate navigation bar links based on order
// ============================================================================
const getDynamicNavBarConfig = (): NavBarConfig => {
	// 基础导航栏链接
	const links: NavBarLink[] = [
		// 主页
		LinkPresets.Home,
	];
	links.push({
		name: "AutoCAD课程",
		url: "",
		icon: "",
		// 子菜单
		children: [
			{
				name: "CAD二维基础课程",
				url: "/posts/autocad-2d-drafting-course/",
				external: false,
				icon: "",
			},
			{
				name: "CAD三维建模课程",
				url: "/posts/autocad-3d-modeling-course/",
				external: false,
				icon: "",
			},
			{
				name: "CAD高级渲染课程",
				url: "/posts/autocad-advanced-rendering-course/",
				external: false,
				icon: "",
			},
			{
				name: "CAD机械四级考试",
				url: "/posts/mechanical-level-course/",
				external: false,
				icon: "",
			},
		],
		},
		{
			name: "留言板",
			url: "/guestbook/",
			icon: "",
		},
		{
			name: "联系站长",
			url: "/about/",
			icon: "",
		},
		{
			name: "淘宝店铺",
			url: "https://51yimucang.taobao.com/",
			external: true,
			icon: "",
		},);

	// 文档链接
	// links.push({
	// 	name: "文档",
	// 	url: "https://docs-firefly.cuteleaf.cn",
	// 	external: true,
	// 	icon: "material-symbols:docs",
	// });

	return { links } as NavBarConfig;
};

// 导航搜索配置
export const navBarSearchConfig: NavBarSearchConfig = {
	method: NavBarSearchMethod.PageFind,
};

// ============================================================================
// 链接预设 - 可自由自定义导航栏链接的名称、图标和URL
// Link Presets - Allows free customization of the name, icon, and URL of navigation bar links
// ============================================================================
export const LinkPresets: Record<string, NavBarLink> = {
	Home: {
		name: "主页",
		url: "/",
		icon: "material-symbols:home",
	},
	Archive: {
		name: "归档",
		url: "/archive/",
		icon: "material-symbols:archive",
	},
	Categories: {
		name: "分类",
		url: "/categories/",
		icon: "material-symbols:folder-open-rounded",
	},
	Tags: {
		name: "标签",
		url: "/tags/",
		icon: "material-symbols:tag-rounded",
	},
	Friends: {
		name: "友链",
		url: "/friends/",
		icon: "material-symbols:group",
	},
	Sponsor: {
		name: "赞助",
		url: "/sponsor/",
		icon: "material-symbols:favorite",
	},
	Guestbook: {
		name: "留言",
		url: "/guestbook/",
		icon: "material-symbols:chat",
	},
	About: {
		name: "关于我",
		url: "/about/",
		icon: "material-symbols:person",
	},
	Bangumi: {
		name: "番组计划",
		url: "/bangumi/",
		icon: "material-symbols:movie",
	},
	Gallery: {
		name: "相册",
		url: "/gallery/",
		icon: "material-symbols:photo-library",
	},
};

export const navBarConfig: NavBarConfig = getDynamicNavBarConfig();
