// import { useState } from "react";

// export default function TaskInput() {
//   const [task, setTask] = useState("");
//   const [result, setResult] = useState("");

//   const handleSubmit = async () => {
//     if (!task) return;

//     try {
//       const response = await fetch("http://localhost:8000/api/run-task", { 
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ task })
//       });
//       const data = await response.json();
//       setResult(data.result);
//     } catch (error) {
//       setResult("Error executing task");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center justify-center p-6">
//       <h1 className="text-4xl font-bold mb-6 animate-bounce">AI-Based Web Scraping</h1>
//       <div className="flex flex-col items-center gap-4 p-6 bg-gray-800 rounded-lg shadow-lg w-full max-w-md">
//         <input
//           type="text"
//           value={task}
//           onChange={(e) => setTask(e.target.value)}
//           placeholder="Enter your task"
//           className="border border-gray-600 bg-gray-700 text-white p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//         />
//         <button
//           onClick={handleSubmit}
//           className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md shadow-md transform hover:scale-105 transition-all"
//         >
//           Run Task
//         </button>
//         {result && (
//           <p className="mt-4 text-center text-lg bg-gray-700 p-4 rounded-md shadow-md">
//             Result: {result}
//           </p>
//         )}
//       </div>
//       <footer className="mt-8 text-gray-400 text-sm">
//         © 2025 AI-Based Web Scraping. All rights reserved.
//       </footer>
//     </div>
//   );
// }














// // import React, { useState } from "react";

// // function TaskRunner() {
// //   const [task, setTask] = useState(""); // User input for the task
// //   const [taskLogs, setTaskLogs] = useState([]); // Logs from the backend
// //   const [taskStatus, setTaskStatus] = useState(""); // Task status

// //   const runTask = async () => {
// //     if (!task) {
// //       alert("Please enter a task!");
// //       return;
// //     }

// //     try {
// //       const response = await fetch("http://localhost:8000/api/run-task", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ task }), // Send user input to the backend
// //       });

// //       if (response.ok) {
// //         const data = await response.json();
// //         setTaskLogs(data.logs); // Set logs from the backend
// //         setTaskStatus(data.status); // Set task status
// //       } else {
// //         setTaskStatus("❌ Task failed");
// //       }
// //     } catch (error) {
// //       console.error("Error:", error);
// //       setTaskStatus("❌ Task failed due to an error");
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center justify-center p-6">
// //       <h1 className="text-4xl font-bold mb-6 animate-bounce">AI-Based Task Runner</h1>
// //       <div className="flex flex-col items-center gap-4 p-6 bg-gray-800 rounded-lg shadow-lg w-full max-w-md">
// //         <input
// //           type="text"
// //           value={task}
// //           onChange={(e) => setTask(e.target.value)} // Update task input
// //           placeholder="Enter your task"
// //           className="border border-gray-600 bg-gray-700 text-white p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// //         />
// //         <button
// //           onClick={runTask}
// //           className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md shadow-md transform hover:scale-105 transition-all"
// //         >
// //           Run Task
// //         </button>
// //         {taskStatus && (
// //           <p className="mt-4 text-center text-lg bg-gray-700 p-4 rounded-md shadow-md">
// //             Status: {taskStatus}
// //           </p>
// //         )}
// //         {taskLogs.length > 0 && (
// //           <ul className="mt-4 text-left bg-gray-700 p-4 rounded-md shadow-md w-full">
// //             {taskLogs.map((log, index) => (
// //               <li key={index} className="mb-2">
// //                 {log}
// //               </li>
// //             ))}
// //           </ul>
// //         )}
// //       </div>
// //       <footer className="mt-8 text-gray-400 text-sm">
// //         © 2025 AI-Based Task Runner. All rights reserved.
// //       </footer>
// //     </div>
// //   );
// // }

// // export default TaskRunner;
















// import { useState } from "react";

// export default function TaskInput() {
//   const [task, setTask] = useState("");
//   const [result, setResult] = useState("");

//   const handleSubmit = async () => {
//     if (!task) return;

//     try {
//       const response = await fetch("http://localhost:8000/api/run-task", { 
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ task })
//       });
//       const data = await response.json();

//       // Ensure result is a string
//       if (typeof data.result === "object") {
//         setResult(JSON.stringify(data.result, null, 2)); // Convert object to string
//       } else {
//         setResult(data.result);
//       }
//     } catch (error) {
//       setResult("Error executing task");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center justify-center p-6">
//       <h1 className="text-4xl font-bold mb-6 animate-bounce">AI-Based Web Scraping</h1>
//       <div className="flex flex-col items-center gap-4 p-6 bg-gray-800 rounded-lg shadow-lg w-full max-w-md">
//         <input
//           type="text"
//           value={task}
//           onChange={(e) => setTask(e.target.value)}
//           placeholder="Enter your task"
//           className="border border-gray-600 bg-gray-700 text-white p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//         />
//         <button
//           onClick={handleSubmit}
//           className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md shadow-md transform hover:scale-105 transition-all"
//         >
//           Run Task
//         </button>
//         {result && (
//           <pre className="mt-4 text-center text-lg bg-gray-700 p-4 rounded-md shadow-md whitespace-pre-wrap">
//             Result: {result}
//           </pre>
//         )}
//       </div>
//       <footer className="mt-8 text-gray-400 text-sm">
//         © 2025 AI-Based Web Scraping. All rights reserved.
//       </footer>
//     </div>
//   );
// }





















import { useState } from "react";

export default function TaskInput() {
  const [task, setTask] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state

  const handleSubmit = async () => {
    if (!task) return;

    setLoading(true); // Set loading to true when the task starts
    setResult(""); // Clear previous result

    try {
      const response = await fetch("http://localhost:8000/api/run-task", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task })
      });
      const data = await response.json();

      // Ensure result is a string
      if (typeof data.result === "object") {
        setResult(JSON.stringify(data.result, null, 2)); // Convert object to string
        setResult("Task completed successfully!"); // Set a success message
      } else {
        //setResult(data.result);
        setResult("Task completed successfully!"); // Set a success message
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Error executing task");
    } finally {
      setLoading(false); // Set loading to false when the task is complete
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-6 animate-bounce">AI-Based Web Scraping</h1>
      <div className="flex flex-col items-center gap-4 p-6 bg-gray-800 rounded-lg shadow-lg w-full max-w-md">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your task"
          className="border border-gray-600 bg-gray-700 text-white p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        <button
          onClick={handleSubmit}
          className={`bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md shadow-md transform hover:scale-105 transition-all ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading} // Disable button while loading
        >
          {loading ? "Processing..." : "Run Task"}
        </button>
        {result && (
          <pre className="mt-4 text-center text-lg bg-gray-700 p-4 rounded-md shadow-md whitespace-pre-wrap">
            Result: {result}
          </pre>
        )}
      </div>
      <footer className="mt-8 text-gray-400 text-sm">
        © 2025 AI-Based Web Scraping. All rights reserved.
      </footer>
    </div>
  );
}