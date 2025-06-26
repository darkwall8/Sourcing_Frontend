import { useEffect, useRef } from "react";
import { Chart, BarController, ArcElement, Tooltip, Legend } from "chart.js/auto";

Chart.register(BarController, ArcElement, Tooltip, Legend);

const BarChart = () => {

    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstance = useRef<Chart<'bar'> | null>(null);

    useEffect(()=>{

        const data = {
            labels: ["00", "04", "08", "12", "14", "16", "18"],
            datasets: [
                {
                    label: "Candidates",
                    data: [50, 30, 70, 50, 60, 75, 20], // Ajuste selon ton graphique
                    backgroundColor: (context) => {
                        const ctx = context.chart.ctx;
                        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
                        gradient.addColorStop(0, "#6AD2FF");
                        gradient.addColorStop(1, "rgba(67, 24, 255, 0.43)");
                        return gradient;
                    },
                    borderRadius: 5,
                    barThickness: 8,
                },
            ]
        }

        const configure = {
            type: "bar" as const,
            data: data,
            options: {
                responsive: true,
                plugins: {
                    legend: { display: false },
                    tooltip: { enabled: true },
                },
                scales: {
                    x: {
                        grid: { display: false },
                        ticks: {
                            color: "#B0BBD5",
                            font: { size: 12 },
                        },
                    },
                    y: {
                        grid: { display: false },
                        ticks: { display: false },
                    },
                },
            }
        }

        if (chartRef.current) {
            const ctx = chartRef.current.getContext("2d");
            if (ctx) {
                chartInstance.current = new Chart(ctx, configure);
            }
        }

        return () => {
            chartInstance.current?.destroy();
        };
        
    },[])   

    return (
        <>
            <div>
                    <canvas ref={chartRef} />
            </div>
        </>
    )
} 

export default BarChart