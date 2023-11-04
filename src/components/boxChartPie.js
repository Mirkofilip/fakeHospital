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
                type: 'pie',
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
        <div className="col-span-12 xl-col-span-4 xl-col-span-3">
            <div className="col-span-12 box">
                <canvas ref={canvasRef} id="myChart"></canvas>
            </div>
        </div>
    );
}

export default BoxChart;
