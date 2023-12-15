new Vue({
    el: '#app',
    data() {

        return {
            value: true,
            dialogVisible: false,
            tabPosition: 'top',
            QA: [],
            input: "",
            activeName: 'iclimate',
            value_iclimate: true,
            value_energy: true,
            value_temp: true,
            value_temp2: true,
            value_humidi: true,
            value_air: true,
            value_light: true,
            value_con2: true,
            value_con3: true,
            value_con4: true,
            value_con5: true,
            value_temp5: true,
            radio1: '今天',
            radio2: '今天',
            radio3: '今天',
            radio4: '今天',
            curr_page: '大棚1',
            pageData: ["大棚1", "大棚2", "大棚3"],
            info: [],
            count: 1,
            weather_code: ["310100", "330400", "320200"],
            setTemp: 26,
            setHum: 78,
            setAir: 29,
            setLight: 1200
        }
    },
    created() {
        axios({
            url: '/aaa/Data/sendData/',
        }).then(result => {
            //console.log(result.data)
            this.info = result.data
            //console.log(this.info)
        }).catch(error => {
            console.log(error)
        })
    },
    methods: {
        add_memo() {
            var input = document.querySelector('.form input'); //获取事件输入框
            var list = document.querySelector('.list'); //获取事件列表ul
            var time = new Date()
            var time1 = time.toString()
            var time2 = time.toJSON()
            var time3 = time2.substring(0, 10) + " " + time1.substring(16, 21)

            if (input.value != "") {
                list.insertAdjacentHTML('afterbegin', `
    <li class="item">
          <span class="info">${input.value}</span>
          <div>${time3}</div>
          <div class="btn memo-btn">
            <button class="fin">完成</button>
            <button class="del">删除</button>
          </div>
        </li>
    `);
                input.value = ""
            }

            //由于之前设置点击添加按钮后新元素item会被添加到插入元素内部的第一个子节点之前
            //所以我们应该对list的第一个子元素节点进行操作，否则新增事件无法被删除、修改和完成
            //删除
            list.firstElementChild.querySelector('.del').addEventListener('click', function () {
                var item = this.parentNode.parentNode
                item.remove()
            })
            //完成
            list.firstElementChild.querySelector('.fin').addEventListener('click', function () {
                var item = this.parentNode.parentNode
                item.classList.add('finished')
            })


            var delBtns = document.querySelectorAll('.del'); //获取删除按钮
            var finBtns = document.querySelectorAll('.fin'); //获取完成按钮

            //遍历，有几个删除按钮则相当于有几个事件（li）
            for (var idx = 0; idx < delBtns.length; idx++) {
                //点击删除按钮
                delBtns[idx].addEventListener('click', function () {
                    var item = this.parentNode.parentNode //删除按钮父级的父级，即类名为item的li(该按钮所在的行)，一个li即一个事件行
                    item.remove(); //点击删除按钮后删除该条li
                })

                //点击完成按钮
                finBtns[idx].addEventListener('click', function () {
                    var item = this.parentNode.parentNode; //获取该条事件行
                    //classList属性可以返回一个元素类属性集合
                    item.classList.add('finished'); //点击完成按钮后为该行添加新类名finished，以实现新样式
                })
            }
        },
        open_temp() {
            this.$confirm('此操作将改变设定温度, 是否继续?', '调节温度', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                const update_temp = document.getElementById("amount_temp").value
                this.setTemp = update_temp
                this.$message({
                    type: 'success',
                    message: '设置成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消设置'
                });
            });
        },
        open_hum() {
            this.$confirm('此操作将改变设定湿度, 是否继续?', '调节温度', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                const update_hum = document.getElementById("amount_hum").value
                this.setHum = update_hum
                this.$message({
                    type: 'success',
                    message: '设置成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消设置'
                });
            });
        },
        open_air() {
            this.$confirm('此操作将改变设定空气质量, 是否继续?', '调节温度', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                const update_air = document.getElementById("amount_air").value
                this.setHum = update_air
                this.$message({
                    type: 'success',
                    message: '设置成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消设置'
                });
            });
        },
        open_light() {
            this.$confirm('此操作将改变设定光照强度, 是否继续?', '调节温度', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                const update_light = document.getElementById("amount_light").value
                this.setHum = update_light
                this.$message({
                    type: 'success',
                    message: '设置成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消设置'
                });
            });
        },
        dialogQuit() {
            this.dialogVisible = false;
            this.QA = [];
            this.input = "";
        },
        open(pageData) {
            this.$prompt('请输入空间serial', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
            }).then(({ value }) => {
                pageData.push(value)
                let theli = pageData.forEach(element =>
                    console.log(element),
                );
                this.$message({
                    type: 'success',
                    message: '你添加的空间是: ' + value
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '取消输入'
                });
            });
        },
        PageClick(str) {
            this.curr_page = str
            this.count = Number(str.slice(-1))
            getWeather(this.weather_code[this.count - 1])
        },
        handleClick() {

        },
        ChangeWeather(value) {
            //console.log(value)
            const weather2 = document.querySelector('.weather2')
            if (!value) {
                weather2.style.display = 'none'
            }
            else {
                weather2.style.display = 'grid'
            }
        },
        ChangeIclimate(value_iclimate) {
            //console.log(value_iclimate)
            const climate = document.querySelector('.climate')
            const alert = document.querySelector('.alertData')
            if (!value_iclimate) {
                climate.style.display = 'none'
                alert.style.display = 'none'
                this.value_temp = false
                this.value_humidi = false
                this.value_air = false
                this.value_light = false
                this.value_con2 = false
                this.value_con3 = false
                this.value_con4 = false
                this.value_con5 = false
                this.ChangeTemp(this.value_temp)
                this.ChangeHumidi(this.value_humidi)
                this.ChangeAir(this.value_air)
                this.ChangeLight(this.value_light)
                this.ChangeCon2(this.value_con2)
                this.ChangeCon3(this.value_con3)
                this.ChangeCon4(this.value_con4)
                this.ChangeCon5(this.value_con5)
            }
            else {
                climate.style.display = 'grid'
                alert.style.display = 'grid'
                this.value_temp = true
                this.value_humidi = true
                this.value_air = true
                this.value_light = true
                this.value_con2 = true
                this.value_con3 = true
                this.value_con4 = true
                this.value_con5 = true
                this.value_con6 = true
                this.ChangeTemp(this.value_temp)
                this.ChangeHumidi(this.value_humidi)
                this.ChangeAir(this.value_air)
                this.ChangeLight(this.value_light)
                this.ChangeCon2(this.value_con2)
                this.ChangeCon3(this.value_con3)
                this.ChangeCon4(this.value_con4)
                this.ChangeCon5(this.value_con5)
            }
        },
        ChangeEnergy(value_energy) {

        },
        ChangeTemp(value_temp) {
            const setting1 = document.querySelector('.setting1')

            if (!value_temp || !this.value_iclimate) {
                this.value_temp = false
                setting1.style.display = 'none'
            }
            else {
                setting1.style.display = 'grid'
            }
        },
        ChangeTemp2(value_temp2) {

        },
        ChangeTemp5(value_temp5) {

        },
        ChangeHumidi(value_humidi) {

        },
        ChangeAir(value_air) {

        },
        ChangeLight(value_light) {

        },
        ChangeCon2(value_con2) {
            const cont2 = document.querySelector('.cont2')
            if (!value_con2 || !this.value_iclimate) {
                this.value_con2 = false
                cont2.style.display = 'none'
            }
            else {
                cont2.style.display = 'grid'
            }
        },
        ChangeCon3(value_con3) {
            const cont3 = document.querySelector('.cont3')
            if (!value_con3 || !this.value_iclimate) {
                this.value_con3 = false
                cont3.style.display = 'none'
            }
            else {
                cont3.style.display = 'grid'
            }
        },
        ChangeCon4(value_con4) {
            const cont4 = document.querySelector('.cont4')
            if (!value_con4 || !this.value_iclimate) {
                this.value_con4 = false
                cont4.style.display = 'none'
            }
            else {
                cont4.style.display = 'grid'
            }
        },
        ChangeCon5(value_con5) {
            const cont5 = document.querySelector('.cont5')
            if (!value_con5 || !this.value_iclimate) {
                this.value_con5 = false
                cont5.style.display = 'none'
            }
            else {
                cont5.style.display = 'grid'
            }
        },
    }
})

