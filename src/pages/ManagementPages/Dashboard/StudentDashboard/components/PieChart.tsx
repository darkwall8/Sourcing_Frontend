import { useEffect, useRef } from "react";
import { Chart, PieController, ArcElement, Tooltip, Legend } from "chart.js";
import {useTranslation} from "react-i18next";

Chart.register(PieController, ArcElement, Tooltip, Legend);

const PieChart = () => {

    const { t }= useTranslation()

    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstance = useRef<Chart<"pie"> | null>(null);

    const getOrCreateLegendList = (chart, id: string) => {
        const legendContainer = document.getElementById(id);
        let listContainer = legendContainer?.querySelector('ul');

        if (!listContainer) {
            listContainer = document.createElement('ul');
            listContainer.style.display = 'flex';
            listContainer.style.flexDirection = 'row';
            listContainer.style.margin = "0";
            listContainer.style.padding = "0";

            legendContainer?.appendChild(listContainer);
        }

        return listContainer;
    };

    const htmlLegendPlugin = {
        id: 'htmlLegend',
        afterUpdate(chart, args, options) {
            const ul = getOrCreateLegendList(chart, options.containerID);

            // Remove old legend items
            while (ul.firstChild) {
                ul.firstChild.remove();
            }

            // Reuse the built-in legendItems generator
            const items = chart.options.plugins.legend.labels.generateLabels(chart);

            items.forEach((item: any) => {
                const li = document.createElement('li');
                li.className = 'flex items-center justify-center cursor-pointer w-fit p-1 mt-2 sm:flex-col';
                li.onclick = () => {
                    const {type} = chart.config;
                    if (type === 'pie' || type === 'doughnut') {
                        // Pie and doughnut charts only have a single dataset and visibility is per item
                        chart.toggleDataVisibility(item.index);
                    } else {
                        chart.setDatasetVisibility(item.datasetIndex, !chart.isDatasetVisible(item.datasetIndex));
                    }
                    chart.update();
                };

                // Color box
                const boxSpan = document.createElement('span');
                boxSpan.style.background = item.fillStyle;
                boxSpan.style.borderColor = item.strokeStyle;
                boxSpan.style.borderRadius= "100%"
                boxSpan.style.borderWidth = item.lineWidth + 'px';
                boxSpan.style.display = 'inline-block';
                boxSpan.style.flexShrink = "0";
                boxSpan.style.width = window.innerHeight < 1536 ? '13px': '15px';
                boxSpan.style.height = window.innerWidth < 1536 ? '13px': '15px';

                // Text
                const textContainer = document.createElement('p');
                textContainer.className = 'text-[9.5px] m-0 p-0 2xl:text-base 2xl:p-1';

                const text = document.createTextNode(item.text);
                textContainer.appendChild(text);

                li.appendChild(boxSpan);
                li.appendChild(textContainer);
                ul.appendChild(li);
            });
        }
    };

    useEffect(() => {

        const data = {
            labels: [
                t("dashboard.student_dashboard.stage_domain.chart.yours"),
                t("dashboard.student_dashboard.stage_domain.chart.auxiliary"),
                t("dashboard.student_dashboard.stage_domain.chart.others")
            ],
            datasets: [
                {
                    data: [68, 25, 7],
                    backgroundColor: ["#4318FF", "#6AD2FF", "#EFF4FB"],
                },
            ],
        };

        const configure = {
            type: "pie" as const,
            data: data,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    },
                    htmlLegend: {
                        containerID: "legend-container",
                    }
                },
            },
            plugins: [htmlLegendPlugin]
        };

        if (chartRef.current) {
            const ctx = chartRef.current.getContext("2d");
            if (ctx) {
                chartInstance.current = new Chart(ctx, configure);
            }
        }

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };   
    });

    return (
        <>
            <div className="flex justify-center items-center flex-col space-y-1">
                <div className="xl:w-30 max-xl:w-20 2xl:w-40">
                    <canvas ref={chartRef}/>
                </div>
                <div id="legend-container"></div>
            </div>
        </>
    );
};

export default PieChart;