import React from "react";
import "./index.less";
import { useNavigate } from "react-router-dom";

const Index = () => {
	const navigate = useNavigate();

	const toLogin = () => {
		navigate("/login");
	};

	return (
		<div className="w-screen h-screen bg-mainBg text-white flex flex-col">
			<nav className="pt-4 pl-8 mb-8">
				<div className="h-20 flex">
					<div className="logo w-16 h-20"></div>
					<span className="text-lg w-24 pt-4 font-bold">
						DIGITAL CLIMATE
					</span>
				</div>
			</nav>
			<main className="flex flex-1">
				<div className="flex-1 pl-40 pt-2">
					<div className="mb-8 w-80 text-7xl font-bold">
						我们是iClimate
					</div>
					<div className="mb-8 text-2xl w-[40rem]" style={{ textAlign: "justify" }}>
						在精细化控制的场景下，我们有功能完善的控制台和数据可视化界面，使用者可以按照不同农作物和季节等要求，完成对温度精细的配置。在日常化的使用场景下，我们设计了基于langchain的对话指令系统，大家可以通过自然语言对大棚温度直接进行简单的调控。
					</div>
					<div
						className="w-24 h-11 rounded-3xl bg-[#003adb] text-lg text-center leading-10 hover:cursor-pointer"
						onClick={toLogin}
					>
						进入
					</div>
				</div>
				<div className="flex-1">
					<div className="rounded-tl-[5rem] border h-3/4 main-right"></div>
				</div>
			</main>
		</div>
	);
};

export default Index;
