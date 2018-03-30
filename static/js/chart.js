
// 基于准备好的dom，初始化echarts实例
var object = echarts.init(document.getElementById("object"));
objectOption = {
    color: ['#e61904', '#f16824', '#f1a502','#a8cd0e','#d6e818','#3eb5df'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['新增','返贫','未变化','脱贫享受政策','脱贫不享受政策','贫困人数'],
        itemWidth:10,
        itemHeight:10,
        textStyle:{
            color:'#fff',
        },
        itemGap:20,
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['周至县','蓝田县','鄠邑区','长安区','临潼区','西咸新区','灞桥区','高陵区','国际港务区'],
            axisTick:{
                show:false,
            },
            axisLine:{
                lineStyle:{
                    color:'#0d6897',

                }
            },
            axisLabel:{
                formatter: '{value}',
                textStyle: {
                    color: '#fff',

                }
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            name:'户/人',
            nameTextStyle:{
                color:'#fff',

                align:'left',


            },
            axisLabel: {
                formatter: '{value} W',
                textStyle: {
                    color: '#fff',

                }
            },
            axisTick:{
                show:false,
            },
            axisLine:{
                lineStyle:{
                    color:'#0d6897',

                }
            }

        },

        {
            type: 'value',
            axisLine:{
                lineStyle:{
                    color:'#0d6897',

                }
            }


        }
    ],
    series : [
        {
            name:'新增',
            type:'bar',
            stack: '广告',//堆叠显示
            data:[32, 32, 30, 33, 30, 30, 30,23,54]
        },
        {
            name:'返贫',
            type:'bar',
            stack: '广告',
            data:[10, 13, 11, 13, 90, 23, 21,13,13]
        },
        {
            name:'未变化',
            type:'bar',
            stack: '广告',
            data:[22, 18, 19, 23, 29, 33, 31,33,22]
        },
        {
            name:'脱贫享受政策',
            type:'bar',
            stack: '广告',
            data:[15, 22, 21, 14, 19, 33, 41,13,44]
        },
        {
            name:'脱贫不享受政策',
            type:'bar',
            stack: '广告',
            data:[15, 23, 21, 14, 19, 33, 41,21,31]
        },
        {
            name:'贫困人数',
            type:'bar',
            data:[86, 118, 94, 126, 179, 160, 150,134,143],

        }
    ]
};
// 使用刚指定的配置项和数据显示图表。
object.setOption(objectOption);

//贫困人口分区统计--------------------------------------------------

// 基于准备好的dom，初始化echarts实例
//各区县贫困户占比
var povertyFamily = echarts.init(document.getElementById("family"));
povertyFamilyOption = {
    title: {
        text: '各区县贫困户占比',
        left: 'center',
        textStyle:{
            color:'#fff',

        }
    },
    color: ['#980404', '#bc0000', '#d91314','#f15733','#ff8144','#ffb24e','#ffa374','#ffbd9b','#ffd2bb'],
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        bottom: 10,
        left: 'center',
        itemWidth:10,
        itemHeight:10,
        textStyle:{
            color:'#fff',
        },
        data: ['周至县', '蓝田县','扈邑区','长安区','临潼区','西咸新区','灞桥区','高陵区','国际港务区']
    },
    series : [
        {
            type: 'pie',
            radius : '40%',
            center: ['50%', '50%'],

            data:[
                {value:535, name: '周至县'},
                {value:510, name: '蓝田县'},
                {value:634, name: '扈邑区'},
                {value:735, name: '长安区'},
                {value:535, name: '临潼区'},
                {value:510, name: '西咸新区'},
                {value:634, name: '灞桥区'},
                {value:735, name: '高陵区'},
                {value:535, name: '国际港务区'},

            ],
            label: {
                normal: {
                    textStyle: {
                        color: '#fff',
                    },
                    formatter:'{b} {d}%',
                },
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: '#59636d',
                    },

                }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
// 使用刚指定的配置项和数据显示图表。
povertyFamily.setOption(povertyFamilyOption);
// 基于准备好的dom，初始化echarts实例
//各区县贫困人口占比
var povertyPerson = echarts.init(document.getElementById("person"));
povertyPersonOption = {
    title: {
        text: '各区县贫困人口占比',
        left: 'center',
        textStyle:{
            color:'#fff',

        }
    },
    color: ['#980404', '#bc0000', '#d91314','#f15733','#ff8144','#ffb24e','#ffa374','#ffbd9b','#ffd2bb'],
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        bottom: 10,
        left: 'center',
        itemWidth:10,
        itemHeight:10,
        textStyle:{
            color:'#fff',
        },
        data: ['周至县', '蓝田县','扈邑区','长安区','临潼区','西咸新区','灞桥区','高陵区','国际港务区']
    },
    series : [
        {
            type: 'pie',
            radius : '40%',
            center: ['50%', '50%'],

            data:[
                {value:535, name: '周至县'},
                {value:510, name: '蓝田县'},
                {value:634, name: '扈邑区'},
                {value:735, name: '长安区'},
                {value:535, name: '临潼区'},
                {value:510, name: '西咸新区'},
                {value:634, name: '灞桥区'},
                {value:735, name: '高陵区'},
                {value:535, name: '国际港务区'},

            ],
            label: {
                normal: {
                    textStyle: {
                        color: '#fff',
                    },
                    formatter:'{b} {d}%',
                },
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: '#59636d',
                    },

                }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
// 使用刚指定的配置项和数据显示图表。
povertyPerson.setOption(povertyPersonOption);