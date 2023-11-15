import { Input } from "antd";
import React from "react";
import "./index.less";
import { useOutletContext } from "react-router-dom";

export default () => {
    const classNames = ["disk", "break"];
	const props = useOutletContext();
	const { data } = props as { data: any };
	return (
		<div className="p-2">
			<div className="mb-4 flex">
				<Input.Search
					placeholder="What are You looking for?"
					style={{ width: 300 }}
				/>
				<div className="text-white flex justify-center items-center bg-black ml-32 w-36 h-8 rounded-lg">
					<span className="mr-4">iClimate</span>
					<span className="green-circle"></span>
				</div>
			</div>
			<div className="grid grid-cols-4 gap-16">
				<div className="bg-[#04ed85] h-[28rem] flex flex-col justify-end rounded-2xl">
					<span className="text-center pb-2">iClimate已介入</span>
					<div className="bg-[#f05151] w-full h-3/5 rounded-2xl flex flex-col justify-between">
						<div className="pl-4 pr-4 text-xl mt-2">
							<div className="pl-4 text-xl mt-2 flex flex-row justify-between items-center">
								<div>气温预警</div>
								<div className="rounded bg-[#f61f1f] w-6 h-6 text-center leading-6">
									2
								</div>
							</div>
						</div>
						{data.temp_warn.map(
							(room: { title: string; temp: number }) => {
								return (
									<div className="w-full h-2/5 rounded-2xl bg-[#f61f1f] p-2 pl-4">
										<div>{room.title}</div>
										<div className="fire w-5 h-6 mt-2 mb-2"></div>
										<div>检测温度:{room.temp}</div>
									</div>
								);
							}
						)}
					</div>
					<div className="bg-[#fb8a2e] w-full h-[30%] rounded-2xl flex flex-col">
						<div className="pl-4 text-xl mt-2">湿度预警</div>
						{data.humid_warn.map(
							(room: { title: string; temp: number }) => {
								return (
									<div className="bg-[#e68637] w-full flex-1 rounded-2xl p-2 pl-4">
										<div>{room.title}</div>
										<div className="drop-warn w-5 h-7 mt-2 mb-2"></div>
										<div>检测湿度:{room.temp}</div>
									</div>
								);
							}
						)}
					</div>
				</div>
				<div className="bg-[#d8d848] h-[28rem] flex flex-col justify-end rounded-2xl">
					<span className="text-center pb-2">iClimate已介入</span>
					<div className="bg-[#ac7a30] w-full h-3/5 rounded-2xl flex flex-col justify-between">
						<div className="pl-4 pr-4 text-xl mt-2 flex flex-row justify-between items-center">
							<div>温度检测器</div>
							<div className="rounded bg-[#926829] w-6 h-6 text-center leading-6">
								2
							</div>
						</div>
                        {data.temp_detect.map(
							(room: { title: string; temp: number }, i:number) => {
								return (
									<div className="w-full h-2/5 rounded-2xl bg-[#926829] p-2 pl-4">
										<div>{room.title}</div>
										<div className={`${classNames[i % 2]} w-5 h-6 mt-2 mb-2`}></div>
										<div>检测温度:{room.temp}</div>
									</div>
								);
							}
						)}
					</div>
					<div className="bg-[#fb8a2e] w-full h-[30%] rounded-2xl">
						<div className="pl-4 text-xl mt-2">湿度检测器</div>
                        {data.humid_detect.map(
							(room: { title: string; temp: number }) => {
								return (
									<div className="bg-[#e68637] w-full flex-1 rounded-2xl p-2 pl-4">
										<div>{room.title}</div>
										<div className="break-dark w-5 h-7 mt-2 mb-2"></div>
										<div>检测湿度:{room.temp}</div>
									</div>
								);
							}
						)}
						{/* <div className="bg-[#e68637] w-full flex-1 rounded-2xl p-2 pl-4">
							<div>厕所</div>
							<div className="break-dark w-9 h-6 mt-2 mb-2"></div>
							<div>检测湿度</div>
						</div> */}
					</div>
				</div>
			</div>
		</div>
	);
};
