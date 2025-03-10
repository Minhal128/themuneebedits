import {useState,useEffect} from "react";
// // export const LoadingScreen = ({ onComplete }) =>{
// //     const [text,setText]=useState("");
// //     const fullText = "Muneeb Edits 🎥";
// //     useEffect(()=>{
// //         let index = 0;
// //         const interval = setInterval(()=>{
// //             setText(fullText.substring(0,index))
// //             index++;

// //             if(index> fullText.length){
// //                 clearInterval(interval);

// //                 setTimeout(()=>{
// //                     onComplete();
// //                 },1000);
// //             }
// //         },100);

// //         return ()=> clearInterval(interval);
// //     },[onComplete]);
// //     return <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
// //         <div className="mb-4 text-4xl font-mono font-bold">{text}<span className="animate-blink ml-1"> | </span>
// //         </div>
// //         <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
// //             <div className="w-[40%] h-full bg-cyan-300 shadow-[0_0_15px_#3b82f6] animate-loading-bar">
// //                 {/* {" "}  */}
// //             </div>
// //         </div>
// //     </div>;
// // };

// import { useState, useEffect } from "react";

// export const LoadingScreen = ({ onComplete }) => {
//   const [text, setText] = useState("");
//   const fullText = "Muneeb Edits 🎥";

//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       setText(fullText.substring(0, index));
//       index++;

//       if (index > fullText.length) {
//         clearInterval(interval);
//         setTimeout(() => {
//           onComplete();
//         }, 1000);
//       }
//     }, 100);

//     return () => clearInterval(interval);
//   }, [onComplete]);

//   return (
//     <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center p-4">
//       <div className="mb-4 text-3xl md:text-4xl font-mono font-bold text-center">
//         {text}
//         <span className="animate-blink ml-1"> | </span>
//       </div>
//       <div className="w-[80%] md:w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
//         <div className="w-[40%] h-full bg-cyan-300 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
//       </div>
//     </div>
//   );
// };


export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const [hide, setHide] = useState(false); // New state to track hiding

    const fullText = "Muneeb Edits 🎥";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if (index > fullText.length) {
                clearInterval(interval);

                setTimeout(() => {
                    setHide(true); // Hide loading screen
                    onComplete();
                }, 1000);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete]);

    if (hide) return null; // Completely remove loading screen when done

    return (
        <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
            <div className="mb-4 text-4xl font-mono font-bold">
                {text}
                <span className="animate-blink ml-1"> | </span>
            </div>
            <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
                <div className="w-[40%] h-full bg-cyan-300 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
            </div>
        </div>
    );
};
