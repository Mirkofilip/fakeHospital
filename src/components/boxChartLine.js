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
                type: 'line',
                data: {
                    labels: ['Covid', 'Ebola', 'Cold', 'Plague', 'Purple', 'Orange'],
                    datasets: [{
                        label: '# of Virus',
                        data: [12, 19, 3, 5, 2, 3],
                        borderWidth: 1
                    }]
                },
                options: {
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
        <div className="col-span-12 xl-col-span-8 xl-col-span-9">
            <div className="col-span-12 box">
                <canvas ref={canvasRef} id="myChartLine"></canvas>
            </div>
        </div>
    );
}

export default BoxChart;
