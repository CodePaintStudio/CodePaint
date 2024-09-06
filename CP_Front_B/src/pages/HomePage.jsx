import {useEffect, useRef} from 'react';
import * as echarts from 'echarts';

const EChartsComponent = ({option}) => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            const chartInstance = echarts.init(chartRef.current);
            chartInstance.setOption(option);
        }
    }, [option]);

    return <div ref={chartRef} style={{width: '100%', height: 400}}/>;
};

const HomePage = () => {
    const option = {
        tooltip: {
            trigger: 'axis',
            formatter: function (params) {
                let tooltipText = '';
                params.forEach(function (param) {
                    tooltipText += `${param.marker}${param.seriesName}: ${param.value}<br>`;
                });
                return tooltipText;
            }
        },
        xAxis: {
            type: 'category',
            data: ['A', 'B', 'C', 'D', 'E']
        },
        series: [
            {
                name: '系列1',
                data: [10, 22, 28, 23, 19],
                type: 'line',
                areaStyle: {}
            },
            {
                name: '系列2',
                data: [25, 14, 23, 35, 10],
                type: 'line',
                areaStyle: {
                    color: '#ff0',
                    opacity: 0.5
                }
            }
        ]
    };

    return (
        <div>
            <EChartsComponent option={option}/>
        </div>
    );
};

export default HomePage;

