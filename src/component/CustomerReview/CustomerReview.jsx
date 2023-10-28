import react from 'react'
import Chart from 'react-apexcharts'

const CustomerReview = () => {

    const data ={
        series:[
            {
                name:"Review",
                date:[10,50,30,90,40,120,100]
            },

        ],
        options:{
            chart:{
                type:"area",
                height:"auto",
            },
            fill:{
                colors:["#fff"],
                type:"gradient",

            },
            dataLabels:{
                enabled:false,
            },
            stroke:{
                curve:"smooth",
                colors:["#ff929f"]
            },
            tooltip:{
                x:{
                    format:"dd/MM/yy HH.mm,",

                },

            },
            grid:{
                show:false,
            },
            xaxis:{
                type:"datetime",
                categories:[
                    "2018-09-19T00:00:00.000Z",
                    "2018-09-19T00:01:30.000Z",
                    "2018-09-19T00:02:30.000Z",
                    "2018-09-19T00:03:30.000Z",
                    "2018-09-19T00:04:30.000Z",
                    "2018-09-19T00:05:30.000Z",
                    "2018-09-19T00:06:30.000Z",
                ],

            },
            yaxis:{
                show:false
            },
            toolbar:{
                show:false
            }
        },
    };
    return (
        <div className="CustomerReview">
            <Chart series={data.series} options={data.options} type='area'/>
        </div>
    )
}

export default CustomerReview