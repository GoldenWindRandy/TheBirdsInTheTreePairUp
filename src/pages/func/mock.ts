const data = {
	小区1: {
		temp: 26,
		humid: 55,
		weather_temp: 25,
		weather: "多云",
		pressure: 1.2,
		wind: 8,
		visibility: 4,
		weather_humid: 71,
		air: 8,
		UV: 4,
		rooms: [
			{
				title: "寝室",
				device: 3,
			},
			{
				title: "客厅",
				device: 5,
			},
			{
				title: "厨房",
				device: 3,
			},
		],
		set_temp: 26,
		set_humid: 26,
		temp_warn: [
			{
				title: "客厅",
				temp: 30,
			},
			{
				title: "厨房",
				temp: 32,
			},
		],
		humid_warn: [
			{
				title: "卧室",
				temp: 35,
			},
		],
		temp_detect: [
			{
				title: "儿童房",
				temp: 90,
			},
			{
				title: "餐厅",
				temp: 5,
			},
		],
		humid_detect: [
			{
				title: "厕所",
				temp: 79,
			},
		],
	},
	小区2: {
		temp: 28,
		humid: 66,
		weather_temp: 27,
		weather: "晴",
		pressure: 1.4,
		wind: 6,
		visibility: 10,
		weather_humid: 80,
		air: 10,
		UV: 6,
		rooms: [
			{
				title: "寝室",
				device: 2,
			},
			{
				title: "客厅",
				device: 4,
			},
			{
				title: "厨房",
				device: 6,
			},
		],
		set_temp: 25,
		set_humid: 30,
		temp_warn: [
			{
				title: "客厅",
				temp: 32,
			},
			{
				title: "厨房",
				temp: 28,
			},
		],
		humid_warn: [
			{
				title: "卧室",
				temp: 20,
			},
		],
		temp_detect: [
			{
				title: "餐厅",
				temp: 84,
			},
			{
				title: "书房",
				temp: 0,
			},
		],
		humid_detect: [
			{
				title: "阁楼",
				temp: 80,
			},
		],
	},
	公司1: {
		temp: 25,
		humid: 60,
		weather_temp: 28,
		weather: "多云",
		pressure: 1.3,
		wind: 10,
		visibility: 9,
		weather_humid: 60,
		air: 10,
		UV: 6,
		rooms: [
			{
				title: "会议室1",
				device: 3,
			},
			{
				title: "会议室2",
				device: 5,
			},
			{
				title: "办公室1",
				device: 3,
			},
		],
		set_temp: 26,
		set_humid: 26,
		temp_warn: [
			{
				title: "办公室1",
				temp: 30,
			},
			{
				title: "办公室2",
				temp: 32,
			},
		],
		humid_warn: [
			{
				title: "会议室3",
				temp: 35,
			},
		],
		temp_detect: [
			{
				title: "大厅",
				temp: 90,
			},
			{
				title: "会议室5",
				temp: 0,
			},
		],
		humid_detect: [
			{
				title: "大厅",
				temp: 5,
			},
		],
	},
	农场1: {
		temp: 24,
		humid: 66,
		weather_temp: 27,
		weather: "小雨",
		pressure: 1.4,
		wind: 9,
		visibility: 12,
		weather_humid: 61,
		air: 9,
		UV: 6,
		rooms: [
			{
				title: "仓库1",
				device: 1,
			},
			{
				title: "仓库2",
				device: 1,
			},
			{
				title: "仓库3",
				device: 1,
			},
		],
		set_temp: 26,
		set_humid: 26,
		temp_warn: [
			{
				title: "厨房",
				temp: 30,
			},
			{
				title: "卧室",
				temp: 32,
			},
		],
		humid_warn: [
			{
				title: "牛棚",
				temp: 35,
			},
		],
		temp_detect: [
			{
				title: "牛棚",
				temp: 90,
			},
			{
				title: "仓库1",
				temp: 0,
			},
		],
		humid_detect: [
			{
				title: "仓库2",
				temp: 5,
			},
		],
	},
	别墅: {
		temp: 26,
		humid: 70,
		weather_temp: 25,
		weather: "多云",
		pressure: 1.2,
		wind: 8,
		visibility: 4,
		weather_humid: 71,
		air: 8,
		UV: 4,
		rooms: [
			{
				title: "寝室",
				device: 3,
			},
			{
				title: "客厅",
				device: 5,
			},
			{
				title: "厨房",
				device: 3,
			},
		],
		set_temp: 26,
		set_humid: 26,
		temp_warn: [
			{
				title: "客厅",
				temp: 30,
			},
			{
				title: "厨房",
				temp: 32,
			},
		],
		humid_warn: [
			{
				title: "卧室",
				temp: 35,
			},
		],
		temp_detect: [
			{
				title: "儿童房",
				temp: 90,
			},
			{
				title: "客厅",
				temp: 10,
			},
		],
		humid_detect: [
			{
				title: "阳台",
				temp: 30,
			},
		],
	},
	汽车1: {
		temp: 26,
		humid: 55,
		weather_temp: 25,
		weather: "多云",
		pressure: 1.2,
		wind: 8,
		visibility: 4,
		weather_humid: 71,
		air: 8,
		UV: 4,
		rooms: [
			{
				title: "寝室",
				device: 3,
			},
			{
				title: "客厅",
				device: 5,
			},
			{
				title: "厨房",
				device: 3,
			},
		],
		set_temp: 26,
		set_humid: 26,
		temp_warn: [
			{
				title: "客厅",
				temp: 30,
			},
			{
				title: "厨房",
				temp: 32,
			},
		],
		humid_warn: [
			{
				title: "卧室",
				temp: 35,
			},
		],
		temp_detect: [
			{
				title: "儿童房",
				temp: 90,
			},
			{
				title: "书房",
				temp: 0,
			},
		],
		humid_detect: [
			{
				title: "厕所",
				temp: 5,
			},
		],
	},
};
export default data;
