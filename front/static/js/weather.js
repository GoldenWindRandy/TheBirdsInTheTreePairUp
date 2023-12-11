function getWeather(cityCode) {
    //  获取天气数据
    myAxios({
        url: 'http://hmajax.itheima.net/api/weather',
        params: {
            city: cityCode
        }
    }).then(result => {
        //console.log(result)
        const wObj = result.data
        const twObj = wObj.todayWeather
        const item = wObj.dayForecast[0]
        // console.log(wObj.area)
        // 数据展示到页面
        // 阳历和农历日期
        const dateStr = `<span class="dateShort">${wObj.date}</span>
      <span class="calendar">农历&nbsp;
        <span class="dateLunar">${wObj.dateLunar}</span>
      </span>`
        document.querySelector('.title').innerHTML = dateStr
        // 城市名字


        const weatherStr1 = `
          <img src="${item.weatherImg}" class="weatherImg" alt="">
              <div>
                  <span class="area">${wObj.area}</span>
                  <p class="temp">
                      <span class="temperature">${wObj.temperature}</span>°
                  </p>

              </div>`



        const weatherStr2 = `<div class="flex flex-col items-center">
              <div class="w-6 h-6">
                  <img src="${wObj.weatherImg}" class="weatherImg" alt="">
              </div>
              <div><span class="weather">${wObj.weather}</span></div>
              <div class="text-[#8d8d8d]">天气</div>
          </div>
          <div class="flex flex-col items-center">
              <div class="wind w-6 h-6"></div>
              <div class="windDirection">${wObj.windDirection}</div>
              <div class="text-[#8d8d8d]">风向</div>
          </div>
          <div class="flex flex-col items-center">
              <div class="wind w-6 h-6"></div>
              <div class="windPower">${wObj.windPower}</div>
              <div class="text-[#8d8d8d]">风速</div>
          </div>
          <div class="flex flex-col items-center">
              <div class="humidity2 w-6 h-6"></div>
              <div>
                  <span class="humidity">${twObj.humidity}</span>%
              </div>
              <div class="text-[#8d8d8d]">湿度</div>
          </div>
          <div class="flex flex-col items-center">
              <div class="uv w-6 h-6"></div>
              <div class="ultraviolet">${twObj.ultraviolet}</div>
              <div class="text-[#8d8d8d]">紫外线</div>
          </div>
          <div class="flex flex-col items-center">
              <div class="visbility w-6 h-6"></div>
              <div><span class="psPm25">${wObj.psPm25}</span>
                  <span class="psPm25Level">${wObj.psPm25Level}</span>
              </div>
              <div class="text-[#8d8d8d]">PM2.5</div>
          </div>
          <li>
              <span>日出</span>
              <span class="sunriseTime">${twObj.sunriseTime}</span>
          </li>
          <li>
              <span>日落</span>
              <span class="sunsetTime">${twObj.sunsetTime}</span>
          </li>`

        // 7日天气预报数据展示
        const dayForecast = wObj.dayForecast
        const dayForecastStr = dayForecast.map(item => {
            return `<li class="item">
      <div class="date-box">
        <span class="dateFormat">${item.dateFormat}</span>
        <span class="date">${item.date}</span>
      </div>
      <img src="${item.weatherImg}" alt="" class="weatherImg">
      <span class="weather">${item.weather}</span>
      <div class="temp">
        <span class="temNight">${item.temNight}</span>-
        <span class="temDay">${item.temDay}</span>
        <span>℃</span>
      </div>
      <div class="wind">
        <span class="windDirection">${item.windDirection}</span>
        <span class="windPower">${item.windPower}</span>
      </div>
    </li>`
        }).join('')
        // console.log(dayForecastStr)
        document.querySelector('.week-wrap').innerHTML = dayForecastStr
        document.querySelector('.weather1').innerHTML = weatherStr1
        document.querySelector('.weather2').innerHTML = weatherStr2
    })
}

// 默认进入网页-就要获取天气数据
getWeather('310100')
document.querySelector('.search-city').addEventListener('input', (e) => {
    //console.log(e.target.value)
    myAxios({
        url: 'http://hmajax.itheima.net/api/weather/city',
        params: {
            city: e.target.value
        }
    }).then(result => {
        // console.log(result)
        const liStr = result.data.map(item => {
            return `<li class="city-item" data-code="${item.code}">${item.name}</li>`
        }).join('')
        //console.log(liStr)
        document.querySelector('.search-list').innerHTML = liStr
    })
})
document.querySelector('.search-list').addEventListener('click', e => {
    if (e.target.classList.contains('city-item')) {
        const cityCode = e.target.dataset.code
        // console.log(e.target.dataset.code)
        getWeather(cityCode)
        document.querySelector('.search-city').value = ''
    }
})