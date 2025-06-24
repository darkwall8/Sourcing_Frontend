import { useEffect, useRef } from "react";
import { Chart, PieController, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(PieController, ArcElement, Tooltip, Legend);

const PieChart = () => {
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
                li.style.alignItems = 'center';
                li.style.justifyContent= 'center';
                li.style.cursor = 'pointer';
                li.style.display = 'flex';
                li.style.flexDirection = 'column';
                li.style.width= '90px';
                li.style.padding = '4px';
                li.style.marginTop= '10px';

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
                boxSpan.style.height = '13px';
                boxSpan.style.width = '13px';

                // Text
                const textContainer = document.createElement('p');
                textContainer.style.color = item.fontColor;
                textContainer.style.fontSize= "9.5px";
                textContainer.style.margin = "0";
                textContainer.style.padding = "0";
                textContainer.style.textDecoration = item.hidden ? 'line-through' : '';

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
            labels: ["Your domain", "Auxiliary domain", "Other"],
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
                <div className="w-30">
                    <canvas ref={chartRef}/>
                </div>
                <div id="legend-container"></div>
            </div>
        </>
    );
};

export default PieChart;