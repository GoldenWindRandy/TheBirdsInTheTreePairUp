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
						iClimate
					</div>
					<div className="p-2">
						<div className="h-12 flex justify-between items-center">
							<span className="">iClimate</span>
							<Switch />
						</div>
						<div className="h-16 mb-4 mt-4">
							<div className="flex justify-between items-center mb-2">
								<div className="text-xs text-white opacity-30">
									温度传感器
								</div>
								<div>
									<span className="green-circle mr-2"></span>
									<span className="font-bold">Wroking</span>
								</div>
							</div>
							<div className="text-xl font-bold">
								当前室温：{data.temp}°
							</div>
						</div>
						<div className="h-16 mb-4 mt-4">
							<div className="flex justify-between items-center mb-2">
								<div className="text-xs text-white opacity-30">
									湿度传感器
								</div>
								<div>
									<span className="green-circle mr-2"></span>
									<span className="font-bold">Wroking</span>
								</div>
							</div>
							<div className="text-xl font-bold">
								当前湿度：{data.humid}%
							</div>
						</div>
						<div className="flex justify-between mt-4 mb-4">
							<span className="text-xl font-bold">节能模式</span>
							<Switch />
						</div>
					</div>
					<div className="mt-8 text-greyText">
						<p>
							iClimate旨为用户提供智能、便捷和个性化的温控解决方案。打开该功能iClimate将学习用户使用习惯，降低用户能源消耗，提供智能预警功能以及记录提供数据分析图标。
						</p>
					</div>
				</div>
				<div className="w-1/5">
					<div className="w-full h-10 bg-[#00a6db] rounded-lg pl-4 mb-4 leading-10">
						weather
					</div>
					<div className="p-2">
						<div className="h-12 flex justify-between items-center">
							<div className="flex">
								<div className="cloud w-16 h-12 mr-8"></div>
								<div>
									<div>
										{data.weather_temp}，{data.weather}
									</div>
									<div>浙江</div>
								</div>
							</div>
							<Switch />
						</div>
						<div className="mb-4 mt-4 grid grid-cols-3 gap-4">
							<div className="flex flex-col items-center">
								<div className="pressure w-6 h-6"></div>
								<div>{data.pressure} pa</div>
								<div className="text-[#8d8d8d]">Pressure</div>
							</div>
							<div className="flex flex-col items-center">
								<div className="wind w-6 h-6"></div>
								<div>{data.wind} mph</div>
								<div className="text-[#8d8d8d]">Wind</div>
							</div>
							<div className="flex flex-col items-center">
								<div className="visbility w-6 h-6"></div>
								<div>{data.visibility} km</div>
								<div className="text-[#8d8d8d]">Visbility</div>
							</div>
							<div className="flex flex-col items-center">
								<div className="humidity w-6 h-6"></div>
								<div>{data.weather_humid} %</div>
								<div className="text-[#8d8d8d]">Humidity</div>
							</div>
							<div className="flex flex-col items-center">
								<div className="air-quality w-6 h-6"></div>
								<div>{data.air}</div>
								<div className="text-[#8d8d8d]">
									Air quality
								</div>
							</div>
							<div className="flex flex-col items-center">
								<div className="uv w-6 h-6"></div>
								<div>{data.UV}</div>
								<div className="text-[#8d8d8d]">UV</div>
							</div>
						</div>
						<div className="hover:cursor-pointer select-none w-full h-10 bg-transparent text-[#486bf2] rounded-lg text-center leading-10 border border-dashed">
							+ Add City
						</div>
					</div>
				</div>
				<div className="w-1/5 h-[32rem] flex flex-col justify-between">
					<div className="w-full h-10 bg-[#802de8] rounded-lg pl-4 mb-4 leading-10">
						Rooms
					</div>
					{data.rooms.map(
						(
							room: { title: string; device: number },
							i: number
						) => {
							return (
								<div
									className={`w-full h-32 border rounded-2xl p-6 ${
										classNames[i % 3]
									}`}
								>
									<div className="text-xl">{room.title}</div>
									<div>
										<span className=" text-sm mr-2 text-greyText">
											{room.device}台设备
										</span>
										<span className="green-circle"></span>
									</div>
								</div>
							);
						}
					)}
					<div className="hover:cursor-pointer select-none w-full h-10 bg-transparent text-[#486bf2] rounded-lg text-center leading-10 border border-dashed mt-2">
						+ Add Room
					</div>
				</div>
				<div className="w-1/5 flex flex-col">
					<div className="w-full h-10 bg-rose-600 rounded-lg pl-4 mb-4 leading-10">
						Rooms
					</div>
					<div className="p-2 text-xl">
						<div className="flex justify-between items-center">
							<span>室温调节</span>
							<Switch />
						</div>
						<div className="flex items-center mt-4 mb-4">
							<span className="cool w-6 h-6 inline-block mr-2"></span>
							<Switch />
							<span className="warm w-6 h-6 inline-block ml-2"></span>
						</div>
						<div className="text-xs text-greyText mb-4">
							<span className="mr-16">制冷</span>
							<span>暖气</span>
						</div>
						<div className="mt-2 mb-2">
							<span>设定温度:{data.set_temp}°</span>
						</div>
					</div>
					<div className="pl-2">
						<div className="flex justify-between items-center text-xl mt-4 mb-4">
							<span>湿度调节</span>
							<Switch />
						</div>
						<div>
							<div className="humid w-4 h-5 mb-4"></div>
							<div className=" text-greyText text-xs mb-2">
								除（加）湿器
							</div>
							<span className="text-xl">设定湿度:{data.set_humid}%</span>
						</div>
						<div className="hover:cursor-pointer select-none w-full h-10 bg-transparent text-[#486bf2] rounded-lg text-center leading-10 border border-dashed mt-4">
							+ Add Setting
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
