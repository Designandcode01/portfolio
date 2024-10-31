'use client';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm('service_r2imph1', 'template_hntv4mp', form.current, 'AGPyizkTx7W1sUP5L')  // Corrected here
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );
        (e.target as HTMLFormElement).reset();
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="bg-gray-200 p-3 flex flex-col items-center justify-center mt-10 gap-1">
      <h1 className="bg-purple-600 px-2 py-1 text-white border-none rounded-lg font-semibold cursor-pointer">
        For Appointment
      </h1>
      <input
        type="text"
        name="user_name"
        placeholder="Enter your name"
        className="bg-slate-300 w-1/3 border-solid rounded-md px-4 py-1"
        required
      />
      <input
        type="email"
        name="user_email"
        placeholder="Enter your email"
        className="bg-slate-300 w-1/3 border rounded-lg px-4 py-1"
        required
      />
      <textarea
        name="user_message"
        cols={50}
        rows={3}
        placeholder="Leave a message"
        className="bg-slate-300 w-1/3 border border-gray-100 rounded-lg px-4 py-1"
      />
      <button
        type="submit"
        className="bg-purple-600 px-2 py-1 text-white border-none rounded-lg font-semibold cursor-pointer"
      >
        Send Message
      </button>
    </form>
  );
};













// 'use client';
// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// export const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('', '', form.current, {
//         publicKey: '',
//       // .sendForm('service_r2imph1', 'template_hntv4mp', form.current, {
//       //   publicKey: 'AGPyizkTx7W1sUP5L',
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         },
//       );
//       e.target.reset();
//   };

//   return (
//     <form
//         ref={form}
//         onSubmit={sendEmail}
//         action=""
//         className="flex flex-col items-center justify-center mt-[5%] mx-1"
//       >
//         <h1 className="bg-indigo-600 flex items-center justify-center font-semibold text-3xl text-white px-12 py-6">
//           For Appointment
//         </h1>
//         <input
//           type="text"
//           name="user_name"
//           placeholder="Enter your name"
//           className="border-2 border-[#aaa] px-4 py-1 bg-indigo-100"
//           required
//           // border-solid p-[20px] w-[380px] mt-[20px]
//         />
//         <input
//           type="email"
//           name="user_email"
//           placeholder="Enter your email"
//           className="border-2 border-[#aaa] px-4 py-1 bg-indigo-100"
//           required
//         //   border-solid p-[20px] w-[380px] mt-[20px]
//         />
//         {/* <input
//           type="text"
//           name="subject"
//           placeholder="Enter Subject"
//           className="border-2 border-[#aaa] border-solid p-[20px] w-[380px] mt-[20px]"
//           required
//         /> */}
//         <textarea
//           type="text"
//           name="user_message"
//           cols={50}
//           rows={3}
//           placeholder="Leave a message"
//           className="border-2 border-[#aaa] px-4 py-1 bg-indigo-100"
//           // border-solid  mt-[20px]
//         />
//         <button
//           type="submit"
//           className="bg-[#646cff] p-[20px] text-[#fff] border-none font-semibold cursor-pointer w-[380px]"
//         //    mt-[20px]
//         >
//           Send Message
//         </button>
//       </form>
//   );
// };


