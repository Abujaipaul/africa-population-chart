#  Africa Demographics Dashboard

A React-based data visualization application that fetches, transforms, and displays live population metrics for African nations using a public API.

##  Technical Features

* **Live Asynchronous Data Pipeline:** Integrates the `REST Countries API` using asynchronous `fetch` requests inside a `useEffect` hook to pull real-time demographic data.
* **Advanced Data Engineering:** Implements JavaScript method chaining (`.map()`, `.sort()`, `.slice()`) to extract nested object properties, perform mathematical transformations (scaling population to millions), sort the data by highest population, and filter the output to the Top 10 nations.
* **Interactive Data Visualization:** Utilizes the `recharts` library to render a dynamic `<BarChart>` based on the transformed API payload.
* **Defensive Programming:** Features robust error handling (`try...catch` blocks) and simulated loading states to ensure a smooth user experience even during network latency.

##  Tech Stack

* **Core:** React (Vite)
* **Data Visualization:** Recharts
* **State Management:** React Hooks (`useState`, `useEffect`)
* **API:** REST Countries API (v3.1)

##  Getting Started

To view and run this dashboard locally on your machine:

1. Clone the repository:
`git clone https://github.com/Abujaipaul/africa-population-chart.git`

2. Navigate into the project directory:
`cd africa-population-chart`

3. Install the required dependencies (including Recharts):
`npm install`

4. Spin up the Vite development server:
`npm run dev`