import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Menu } from "antd";
import "./index.less";
import All_DATA from "./mock";

const all_data: { [key: string]: any } = All_DATA;

enum Projs {
	INDEX = "iClimate",
	ALERTS = "alerts",
	DEVICES = "My devices",
}

export default () => {
	const [menuName, setMenuName] = useState("");
	const [subMenuName, setSubMenuName] = useState("");
	const [proj, setProj] = useState<Projs>(Projs.INDEX);
	const [data, setData] = useState(all_data["小区1"]);

	const navigate = useNavigate();
	useEffect(() => {
		navigate("tempControl");
	}, []);

	useEffect(() => {
		if (proj === Projs.INDEX) {
			navigate("tempControl");
		} else if (proj === Projs.ALERTS) {
			navigate("warnning");
		}else if (proj === Projs.DEVICES) {
			navigate("devices");
		}
	}, [proj]);

	return (
		<div className=" min-w-screen min-h-screen bg-mainBg text-white">
			<div className="flex flex-row p-8">
				<div className="w-64">
					<div className="h-16 mb-4 flex">
						<div className="w-16 h-16 logo"></div>
						<span className="h-16 leading-[4rem] text-5xl bold">
							iClimate
						</span>
					</div>
					<div className="flex justify-between pr-8 mt-4 mb-4">
						<div>
							<div className="w-4 h-4 lighting mr-2 inline-block"></div>
							<div className="text-greyText inline-block">
								active
							</div>
						</div>
						<div className="w-6 h-6 rounded-lg bg-[#486bf2] text-center leading-6">2</div>
					</div>
					<div className="flex justify-between pr-8 mt-4 mb-4">
						<div>
							<div className="w-4 h-4 bell mr-2 inline-block"></div>
							<div className="text-greyText inline-block">notice</div>
						</div>
						<div className="w-6 h-6 rounded-lg bg-[#df2d2d] text-center leading-6">4</div>
					</div>
					<div className="text-[#8d8d8d] flex flex-rwo mt-2 mb-2">
						<div className="mr-32">Work Space</div>
						<div className="w-8 h-8 bg-[#1c1c1c] leading-8 text-center text-3xl select-none hover:cursor-pointer">
							+
						</div>
					</div>
					<Menu
						mode="inline"
						onOpenChange={(openMenus) => {
							const name = openMenus.slice(-1)[0]
								? openMenus.slice(-1)[0]
								: menuName;
							setMenuName(name);
						}}
						onSelect={(selectedItem) => {
							setSubMenuName(selectedItem.key);
							setData(all_data[selectedItem.key]);
						}}
					>
						<Menu.SubMenu
							key={"我的公司"}
							title="我的公司"
						>
							<Menu.Item key={"公司1"}>公司1</Menu.Item>
						</Menu.SubMenu>
						<Menu.SubMenu
							key={"我的农场"}
							title="我的农场"
						>
							<Menu.Item key={"农场1"}>农场1</Menu.Item>
						</Menu.SubMenu>
						<Menu.SubMenu
							key={"我的住所"}
							title="我的住所"
						>
							<Menu.Item key={"小区1"}>小区1</Menu.Item>
							<Menu.Item key={"小区2"}>小区2</Menu.Item>
							<Menu.Item key={"别墅"}>别墅</Menu.Item>
						</Menu.SubMenu>
						{/* <Menu.SubMenu
							key={"我的汽车"}
							title="我的汽车"
						>
							<Menu.Item key={"汽车1"}>汽车1</Menu.Item>
						</Menu.SubMenu> */}
					</Menu>
				</div>
				<div className="flex-1 flex flex-col">
					<div>
						<div className="h-16 pl-4">
							<div>Project Progress</div>
							{menuName ? (
								<div className="text-xs">
									{menuName}/{subMenuName}
								</div>
							) : (
								<div className="text-transparent select-none">
									null
								</div>
							)}
						</div>
						<Menu
							mode="horizontal"
							onSelect={(selectedItem) => {
								setProj(selectedItem.key as Projs);
							}}
						>
							<Menu.Item key={Projs.INDEX}>iClimate</Menu.Item>
							<Menu.Item key={Projs.DEVICES}>My devices</Menu.Item>
							<Menu.Item key={Projs.ALERTS}>alerts</Menu.Item>	
						</Menu>
					</div>
					<div className="flex-1">
						<Outlet context={{ subMenuName, proj, data }} />
					</div>
				</div>
			</div>
		</div>
	);
};
