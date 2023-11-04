import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { motion } from 'framer-motion';

function BoxChartDoughnut() {
    const canvasRef = useRef(null);
    const chartRef = useRef(null);

    useEffect(() => {
        if (canvasRef.current) {
            // Distruggi il grafico esistente se presente
            if (chartRef.current) {
                chartRef.current.destroy();
            }

            const newChart = new Chart(canvasRef.current, {
                type: 'doughnut',
                data: {
                    labels: ['Covid', 'Ebola', 'Cold', 'Plague', 'T-virus', 'Orange'],
                    datasets: [{
                        label: '# of Virus',
                        data: [12, 19, 3, 5, 2, 3],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    },
                    animation: {
                        // Imposta il ritardo desiderato in millisecondi
                        delay: 0.4,
                        duration: 1000, 
                        easing: 'easeInOutQuart', // Tipo di interpolazione
                    },
                }
            });

            chartRef.current = newChart;
        }
    }, []);

    return (
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay:0.3, duration: 0.5 }}  className="col-md-12 col-sm-6 box">
            <div className="box-top">
                <canvas ref={canvasRef} id="myChart"></canvas>
            </div>
        </motion.div>
    );
}

export default BoxChartDoughnut;
