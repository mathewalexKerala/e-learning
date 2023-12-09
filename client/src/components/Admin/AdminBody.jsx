import React from 'react';
import './AdminBody.css'
import { Button, ButtonGroup } from '@chakra-ui/react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

import { Chart } from "react-google-charts";

const data = [
  ["Task", "Hours per Day"],
  ["Net Profit", 11],
  ["Paypal Fee", 2],
  ["Shipping", 2],
  ["Tax", 2],
  ["Cost", 7],
];

const options = {
  title: "Pie Chart",
};

 function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"50%"}
      height={"200px"}
    />
  );
}
const data1 = [
    ["Year", "User", "Tutor", "Courses"],
    ["2014", 1000, 400, 200],
    ["2015", 1170, 460, 250],
    ["2016", 660, 1120, 300],
    ["2017", 1030, 540, 350],
  ];

  const options1 = {
    chart: {
      title: "General Statistics",
      subtitle: "",
    },
  };


const AdminBody = () => {
    return (
        <div className='body'>

            
            <div className='first-section' style={{ width: '25%', height: '800px', backgroundColor: 'gray' }}>
                <div className='first_link'>
                    <h1>Dashboard</h1>
                </div>

            </div>
            <div className='second-section' style={{height:'123%'}}>
            <h1 style={{fontSize:'50px',textAlign:'center'}}>DASHBOARD</h1>
                <div className='second_section1' style={{marginLeft:'40px',marginTop:'40px'}}>

               <PieChart/>
               <Chart style={{marginTop:'50px'}}
      chartType="Bar"
      width="80%"
      height="400px"
      data={data1}
      options={options1}
    />
                </div>
            </div>
            

        </div>
    );
}

export default AdminBody;
