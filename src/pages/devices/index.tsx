import { Input, Switch } from "antd";
import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

import "./index.less";

export default () => {
	const classNames = ["bed-room", "living-room", "kitchen"];
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
			<div className="flex flex-row justify-between">
				<div className="w-1/5">
					<div className="w-full h-10 bg-[#486bf2] rounded-lg pl-4 mb-4 leading-10">
						温度检测器
					</div>
					<div className="p-2 text-xl">
						<div className="flex justify-between items-center">
							<span>卧室</span>
							<span className="flex items-center">
								<span className="green-circle mr-1"></span>
								<span className="font-bold text-xs">Working</span>
							</span>
						</div>
						<div className="flex items-center mt-4 mb-4">
							<span className="cool w-6 h-6 inline-block mr-2"></span>
						</div>
						<div className="mt-2 mb-2">
							<span>设定温度:{data.set_temp}°</span>
						</div>
					</div>
					<div className="p-2 text-xl">
						<div className="flex justify-between items-center">
							<span>客厅</span>
							<span className="flex items-center">
								<span className="green-circle mr-1"></span>
								<span className="font-bold text-xs">Working</span>
							</span>
						</div>
						<div className="flex items-center mt-4 mb-4">
							<span className="cool w-6 h-6 inline-block mr-2"></span>
						</div>
						<div className="mt-2 mb-2">
							<span>设定温度:{data.set_temp}°</span>
						</div>
					</div>
					<div className="p-2 text-xl">
						<div className="flex justify-between items-center">
							<span>室温调节</span>
							<span className="flex items-center">
								<span className="green-circle mr-1"></span>
								<span className="font-bold text-xs">Working</span>
							</span>
						</div>
						<div className="flex items-center mt-4 mb-4">
							<span className="cool w-6 h-6 inline-block mr-2"></span>
						</div>
						<div className="mt-2 mb-2">
							<span>设定温度:{data.set_temp}°</span>
						</div>
					</div>
					<div className="pl-2">
						<div className="hover:cursor-pointer select-none w-full h-10 bg-transparent text-[#486bf2] rounded-lg text-center leading-10 border border-dashed mt-4">
							+ Add Setting
						</div>
					</div>
				</div>

				<div className="w-1/5">
					<div className="w-full h-10 bg-[#00a6db] rounded-lg pl-4 mb-4 leading-10">
						Rooms
					</div>
					<div className="p-2 text-xl">
						<div className="flex justify-between items-center">
							<span>室温调节</span>
							<span className="flex items-center">
								<span className="green-circle mr-1"></span>
								<span className="font-bold text-xs">Working</span>
							</span>
						</div>
						<div className="flex items-center mt-4 mb-4">
							<span className="cool w-6 h-6 inline-block mr-2"></span>
						</div>
						<div className="mt-2 mb-2">
							<span>设定温度:{data.set_temp}°</span>
						</div>
					</div>
					<div className="p-2 text-xl">
						<div className="flex justify-between items-center">
							<span>室温调节</span>
							<span className="flex items-center">
								<span className="green-circle mr-1"></span>
								<span className="font-bold text-xs">Working</span>
							</span>
						</div>
						<div className="flex items-center mt-4 mb-4">
							<span className="cool w-6 h-6 inline-block mr-2"></span>
						</div>
						<div className="mt-2 mb-2">
							<span>设定温度:{data.set_temp}°</span>
						</div>
					</div>
					<div className="p-2 text-xl">
						<div className="flex justify-between items-center">
							<span>室温调节</span>
							<span className="flex items-center">
								<span className="green-circle mr-1"></span>
								<span className="font-bold text-xs">Working</span>
							</span>
						</div>
						<div className="flex items-center mt-4 mb-4">
							<span className="cool w-6 h-6 inline-block mr-2"></span>
						</div>
						<div className="mt-2 mb-2">
							<span>设定温度:{data.set_temp}°</span>
						</div>
					</div>
					<div className="pl-2">
						<div className="hover:cursor-pointer select-none w-full h-10 bg-transparent text-[#486bf2] rounded-lg text-center leading-10 border border-dashed mt-4">
							+ Add Setting
						</div>
					</div>
				</div>

				<div className="w-1/5 h-[32rem] flex flex-col justify-between">
					<div className="w-full h-10 bg-[#802de8] rounded-lg pl-4 mb-4 leading-10">
						Rooms
					</div>
					<div className="p-2 text-xl">
						<div className="flex justify-between items-center">
							<span>室温调节</span>
							<span className="flex items-center">
								<span className="green-circle mr-1"></span>
								<span className="font-bold text-xs">Working</span>
								<Switch />
							</span>
						</div>
						<div className="flex items-center mt-4 mb-4">
							<span className="cool w-6 h-6 inline-block mr-2"></span>
						</div>
						<div className="mt-2 mb-2">
							<span>设定温度:{data.set_temp}°</span>
						</div>
					</div>
					<div className="p-2 text-xl">
						<div className="flex justify-between items-center">
							<span>室温调节</span>
							<span className="flex items-center">
								<span className="green-circle mr-1"></span>
								<span className="font-bold text-xs">Working</span>
								<Switch />
							</span>
						</div>
						<div className="flex items-center mt-4 mb-4">
							<span className="cool w-6 h-6 inline-block mr-2"></span>
						</div>
						<div className="mt-2 mb-2">
							<span>设定温度:{data.set_temp}°</span>
						</div>
					</div>
					<div className="p-2 text-xl">
						<div className="flex justify-between items-center">
							<span>室温调节</span>
							<span className="flex items-center">
								<span className="green-circle mr-1"></span>
								<span className="font-bold text-xs">Working</span>
								<Switch />
							</span>
						</div>
						<div className="flex items-center mt-4 mb-4">
							<span className="cool w-6 h-6 inline-block mr-2"></span>
						</div>
						<div className="mt-2 mb-2">
							<span>设定温度:{data.set_temp}°</span>
						</div>
					</div>
					<div className="pl-2">
						<div className="hover:cursor-pointer select-none w-full h-10 bg-transparent text-[#486bf2] rounded-lg text-center leading-10 border border-dashed mt-4">
							+ Add Setting
						</div>
					</div>
				</div>
				
				<div className="w-1/5 flex flex-col">
					<div className="w-full h-10 bg-rose-600 rounded-lg pl-4 mb-4 leading-10">
						Rooms
					</div>
					<div className="p-2 text-xl">
						<div className="flex justify-between items-center">
							<span>室温调节</span>
							<span className="flex items-center">
								<span className="green-circle mr-1"></span>
								<span className="font-bold text-xs">Working</span>
								<Switch />
							</span>
						</div>
						<div className="flex items-center mt-4 mb-4">
							<span className="cool w-6 h-6 inline-block mr-2"></span>
						</div>
						<div className="mt-2 mb-2">
							<span>设定温度:{data.set_temp}°</span>
						</div>
					</div>
					<div className="p-2 text-xl">
						<div className="flex justify-between items-center">
							<span>室温调节</span>
							<span className="flex items-center">
								<span className="green-circle mr-1"></span>
								<span className="font-bold text-xs">Working</span>
								<Switch />
							</span>
						</div>
						<div className="flex items-center mt-4 mb-4">
							<span className="cool w-6 h-6 inline-block mr-2"></span>
						</div>
						<div className="mt-2 mb-2">
							<span>设定温度:{data.set_temp}°</span>
						</div>
					</div>
					<div className="p-2 text-xl">
						<div className="flex justify-between items-center">
							<span>室温调节</span>
							<span className="flex items-center">
								<span className="green-circle mr-1"></span>
								<span className="font-bold text-xs">Working</span>
							</span>
							<Switch />
						</div>
						<div className="flex items-center mt-4 mb-4">
							<span className="cool w-6 h-6 inline-block mr-2"></span>
							<span className="warm w-6 h-6 inline-block ml-2"></span>
						</div>
						<div className="mt-2 mb-2">
							<span>设定温度:{data.set_temp}°</span>
						</div>
					</div>
					<div className="pl-2">
						<div className="hover:cursor-pointer select-none w-full h-10 bg-transparent text-[#486bf2] rounded-lg text-center leading-10 border border-dashed mt-4">
							+ Add Setting
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
