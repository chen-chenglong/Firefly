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
	return { links } as NavBarConfig;
};

// 导航搜索配置
export const navBarSearchConfig: NavBarSearchConfig = {
	method: NavBarSearchMethod.PageFind,
};
export const navBarConfig: NavBarConfig = getDynamicNavBarConfig();
