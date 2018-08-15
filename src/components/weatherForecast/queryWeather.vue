<template>
    <div class="queryWeather_container">
        <div id="container">
            <div class="location" >您当前所在城市：{{currentCity}}</div>
        </div>
        <h1 style="margin:20px 0px">{{this.currentCity}}天气</h1>
         <Table border :columns="columns1" :data="data1" size="large"></Table>
    </div>
</template>
<script>
    export default {
        name: 'queryWeather',
        data() {
            return {
                currentCity: '',
                map: '',
                columns1: [
                    {
                        title: '当前城市',
                        key: 'city',
                        align: 'center'
                    },
                    {
                        title: '气温',
                        key: 'temperature',
                        align: 'center'
                    },
                    {
                        title: '天气',
                        key: 'weather',
                        align: 'center'
                    },
                    {
                        title: '风向',
                        key: 'windDirection',
                        align: 'center'
                    },
                    {
                        title: '风力',
                        key: 'windPower',
                        align: 'center'
                    },
                    {
                        title: '空气湿度',
                        key: 'humidity',
                        align: 'center'
                    },
                    {
                        title: '发布时间',
                        key: 'reportTime',
                        align: 'center'
                    }
                    
                ],
                data1: []
            }
        },
        methods: {
            initMap() {
                 this.map = new AMap.Map('container');
                 AMap.plugin('AMap.CitySearch', () => {
                    var citySearch = new AMap.CitySearch()
                    citySearch.getLocalCity( (status, result) => {
                        if (status === 'complete' && result.info === 'OK') {
                        // 查询成功，result即为当前所在城市信息
                        this.currentCity = result.city;
                        AMap.plugin('AMap.Weather', () => {
                        //创建天气查询实例
                        var weather = new AMap.Weather();
                        //执行实时天气信息查询
                        weather.getLive(this.currentCity,(err, data) => {
                            let weatherInfo = {
                                city:data.city,
                                temperature:data.temperature + '℃',
                                weather:data.weather,
                                windDirection:data.windDirection,
                                windPower:data.windPower,
                                humidity:data.humidity + '%',
                                reportTime:data.reportTime,
                            }
                            this.data1.push(weatherInfo);
                        });
                    });
                        }
                    })
                })
            },
            weatherForecast() {
                // let map = new AMap.Map('container');
                
            }
        },
        mounted() {
            this.initMap();
            this.weatherForecast();
        },
        destroyed() {
            delete this.map;
        }
    }
</script>
<style scoped>
#container {
    position:relative; 
    width:1200px;
    height: 500px;
    margin: 0 auto;
    padding: 10px;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 5px 5px #ccc;
    margin-bottom: 25px;
}
.location {
    position: absolute;
    z-index: 999;
    right: 10px;
    background-color: #fff;
    border: 1px solid red;
    font-size: 20px;
    padding: 5px;
    color: red;
}
</style>
