
new Vue({
    el: '#app',
    data() {

        return {
            value: true,
            tabPosition: 'top',
            activeName: 'iclimate',
            value_iclimate: true,
            value_energy: true,
            value_temp: true,
            value_temp2: true,
            value_humidi: true,
            value_con1: true,
            value_con2: true,
            value_con3: true,
            value_con4: true,
            value_con5: true,
            value_con6: true,
            value_temp3: true,
            value_temp4: true,
            value_temp5: true,
        }
    },
    methods: {
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
            if (!value_iclimate) {
                climate.style.display = 'none'
            }
            else {
                climate.style.display = 'grid'
            }
        },
        ChangeEnergy(value_energy) {

        },
        ChangeTemp(value_temp) {
            const setting1 = document.querySelector('.setting1')

            if (!value_temp) {
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
            if (!value_humidi) {
                setting2.style.display = 'none'
            }
            else {
                setting2.style.display = 'grid'
            }
        },
        ChangeCon1(value_con1) {
            const cont1 = document.querySelector('.cont1')
            if (!value_con1) {
                cont1.style.display = 'none'
            }
            else {
                cont1.style.display = 'grid'
            }
        },
        ChangeCon2(value_con2) {
            const cont2 = document.querySelector('.cont2')
            if (!value_con2) {
                cont2.style.display = 'none'
            }
            else {
                cont2.style.display = 'grid'
            }
        },
        ChangeCon3(value_con3) {
            const cont3 = document.querySelector('.cont3')
            if (!value_con3) {
                cont3.style.display = 'none'
            }
            else {
                cont3.style.display = 'grid'
            }
        },
        ChangeCon4(value_con4) {
            const cont4 = document.querySelector('.cont4')
            if (!value_con4) {
                cont4.style.display = 'none'
            }
            else {
                cont4.style.display = 'grid'
            }
        },
        ChangeCon5(value_con5) {
            const cont5 = document.querySelector('.cont5')
            if (!value_con5) {
                cont5.style.display = 'none'
            }
            else {
                cont5.style.display = 'grid'
            }
        },
        ChangeCon6(value_con6) {
            const cont6 = document.querySelector('.cont6')
            if (!value_con6) {
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