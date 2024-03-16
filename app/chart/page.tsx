'use client'

import {createChart} from 'lightweight-charts'
import { useEffect, useState } from 'react'
import {fetchSingleStock} from '../api/stock_info_api'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const STOCK = () => {
    const [stockIndex, setStockIndex] = useState<any>()
    const [financeIndex, setFinanceIndex] = useState<any>([])

    useEffect(() => {
        fetch('./mock.txt')
        .then((response) => response.json())
        .then((json) => {
            if(stockIndex == null || stockIndex == undefined) {
                setStockIndex(json['Time Series (Daily)'])
                console.log(" load finish 111")
            }
        })

        fetch('./tablemock.txt')
        .then((response) => response.json())
        .then((json) => {
            if(financeIndex == null || financeIndex == undefined || financeIndex.length == 0) {
                setFinanceIndex(json['data'])
                console.log(" load finish 222")
            }
        })
        console.log(" load finish")
    })

    // useEffect(() => {
    //     setStockIndex(fetchSingleStock())
    // }, [])

    useEffect(() => {
        if(stockIndex == null || stockIndex == undefined) {
            console.log("stockIndex is null")
            return
        }
        const parentElement = document.getElementById("STOCK") as HTMLElement
        // const chartWidth = 800
        const chartWidth = parentElement.clientWidth -5
        // const chartHeight = 300
        const chartHeight = parentElement.clientHeight-5

        console.log("size", chartHeight)

        const chart = createChart(parentElement, {
            width: chartWidth,
            height: chartHeight
        })

        const data = Object.keys(stockIndex).map((key) => {
            return {
                time: key,
                open: Number(stockIndex[key]['1. open']),
                close: Number(stockIndex[key]['4. close']),
                high: Number(stockIndex[key]['2. high']),
                low: Number(stockIndex[key]['3. low']),
                value: Number(stockIndex[key]['5. volume'])
            }
        })

        data.reverse()
        console.log("stock data", data)
        const candleStickSeries = chart.addCandlestickSeries({
            upColor: '#EF5350',
            downColor: '#26A69A',
            borderVisible: false,
            wickUpColor: '#EF5350', 
            wickDownColor: '#26A69A'
        })

        candleStickSeries.setData(data)

        return () => chart.remove();

    }, [stockIndex])

    return (
        <div className='h-full w-full flex-col pl-5'>
            <p className='py-5'>股票代码</p>
            <div id='STOCK' className='w-2/3 h-2/3'>
            </div>
            <div id='TABLE' className='w-2/3 h-1/3 mt-5'>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 , maxHeight: 100}} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>年份月度</TableCell>
                        <TableCell >每月营收</TableCell>
                        <TableCell >单月营收增长率</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody id='TABLE_BODY'>
                    {financeIndex.map((item) => (
                        <TableRow
                        key={item.date}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {item.date}
                        </TableCell>
                        <TableCell >{item.revenue}</TableCell>
                        <TableCell >{0}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </div>
        </div>
    )
}
export default STOCK