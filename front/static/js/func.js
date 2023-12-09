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
            value_con1: true,
            value_con2: true,
            value_con3: true,
            value_con4: true,
            value_con5: true,
            value_con6: true,
            value_temp3: true,
            value_temp4: true,
            value_temp5: true,
            radio1: '今天',
            radio2: '今天',
            radio3: '今天',
            radio4: '今天',
            curr_page: '大棚1',
            pageData: ["大棚1", "大棚2", "大棚3"],
            info: '',

        }
    },
    created() {
        axios({
            url: '/aaa/Data/sendData/',
        }).then(result => {
            console.log(result.data)
            this.info = result.data
            //console.log(this.info[0][0].HUMIDITY.id)
        }).catch(error => {
            console.log(error)
        })
    },
    methods: {
        addQuestion() {
            if (this.input === "") {
                return;
            }
            this.QA.push(this.input);
            let anwser = this.input;
            anwser = anwser.replace("吗", "");
            anwser = anwser.replace("?", "!");
            anwser = anwser.replace("？", "!");
            anwser = anwser.replace("? ", "!");
            anwser = anwser.replace("？ ", "!");
            anwser = anwser.replace("你", "我");
            anwser = anwser.replace("今天星期几", "今天星期五");
            anwser = anwser.replace("明天星期几", "明天星期六");
            this.QA.push(anwser);
            this.input = "";
        },
        dialogQuit() {
            this.dialogVisible = false;
            this.QA = [];
            this.input = "";
        },
        open(pageData) {
            this.$prompt('请输入空间名称', '提示', {
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
                this.value_con1 = false
                this.value_con2 = false
                this.value_con3 = false
                this.value_con4 = false
                this.value_con5 = false
                this.value_con6 = false
                this.ChangeTemp(this.value_temp)
                this.ChangeHumidi(this.value_humidi)
                this.ChangeAir(this.value_air)
                this.ChangeLight(this.value_light)
                this.ChangeCon1(this.value_con1)
                this.ChangeCon2(this.value_con2)
                this.ChangeCon3(this.value_con3)
                this.ChangeCon4(this.value_con4)
                this.ChangeCon5(this.value_con5)
                this.ChangeCon6(this.value_con6)
            }
            else {
                climate.style.display = 'grid'
                alert.style.display = 'grid'
                this.value_temp = true
                this.value_humidi = true
                this.value_air = true
                this.value_light = true
                this.value_con1 = true
                this.value_con2 = true
                this.value_con3 = true
                this.value_con4 = true
                this.value_con5 = true
                this.value_con6 = true
                this.ChangeTemp(this.value_temp)
                this.ChangeHumidi(this.value_humidi)
                this.ChangeAir(this.value_air)
                this.ChangeLight(this.value_light)
                this.ChangeCon1(this.value_con1)
                this.ChangeCon2(this.value_con2)
                this.ChangeCon3(this.value_con3)
                this.ChangeCon4(this.value_con4)
                this.ChangeCon5(this.value_con5)
                this.ChangeCon6(this.value_con6)
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
        ChangeHumidi(value_humidi) {
            const setting2 = document.querySelector('.setting2')
            if (!value_humidi || !this.value_iclimate) {
                this.value_humidi = false
                setting2.style.display = 'none'
            }
            else {
                setting2.style.display = 'grid'
            }
        },
        ChangeAir(value_air) {
            const setting3 = document.querySelector('.setting3')
            if (!value_air || !this.value_air) {
                this.value_air = false
                setting3.style.display = 'none'
            }
            else {
                setting3.style.display = 'grid'
            }
        },
        ChangeLight(value_light) {
            const setting4 = document.querySelector('.setting4')
            if (!value_light || !this.value_light) {
                this.value_light = false
                setting4.style.display = 'none'
            }
            else {
                setting4.style.display = 'grid'
            }
        },
        ChangeCon1(value_con1) {
            const cont1 = document.querySelector('.cont1')
            if (!value_con1 || !this.value_iclimate) {
                this.value_con1 = false
                cont1.style.display = 'none'
            }
            else {
                cont1.style.display = 'grid'
            }
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
        ChangeCon6(value_con6) {
            const cont6 = document.querySelector('.cont6')
            if (!value_con6 || !this.value_iclimate) {
                this.value_con6 = false
                cont6.style.display = 'none'
            }
            else {
                cont6.style.display = 'grid'
            }
        },
        ChangeTemp3(value_temp3) {

        },
        ChangeTemp4(value_temp4) {

        },
        ChangeTemp5(value_temp5) {

        },
    }
})

