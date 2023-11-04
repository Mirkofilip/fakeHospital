import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

function BoxChart() {
    const canvasRef = useRef(null);
    const chartRef = useRef(null);

    useEffect(() => {
        if (canvasRef.current) {
            // Distruggi il grafico esistente se presente
            if (chartRef.current) {
                chartRef.current.destroy();
            }

            const newChart = new Chart(canvasRef.current, {
                type: 'bubble',
                data: {
                    datasets: [{
                        type: 'bar',
                        label: 'Bar Dataset',
                        data: [10, 20, 30, 40]
                    }, {
                        type: 'line',
                        label: 'Line Dataset',
                        data: [50, 14, 20, 70],
                    }],
                    labels: ['January', 'February', 'March', 'April']
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

            chartRef.current = newChart;
        }
    }, []);

    return (
        <div className="col-md-8 col-sm-12">
            <div className="box">
                <canvas ref={canvasRef} id="myChartLine"></canvas>
            </div>
        </div>
    );
}

export default BoxChart;
