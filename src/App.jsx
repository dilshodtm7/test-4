// "use client";
// import WebApp from "@twa-dev/sdk";
// import React, { useEffect, useState } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Body from "./body/home.jsx";
// import Footer from "./footer/footer.jsx";
// import Wallet from "./components/wallet/wallet.jsx";
// import Setting from "./components/settings/settings.jsx";
// import Task from "./components/missions/task.jsx";
// import Invite from "./components/invite/invite.jsx";

// import "./App.css";

// function App() {
//   const getMyAccount = "https://withreferal-back-1.onrender.com/auth/login";
//   // const myId = 4545454
//   const myId = WebApp.initDataUnsafe.user.id
//   const [userData, setUserData] = useState(null);
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [getalltasks, setGetalltasks] = useState(null);
//   const [tournament, setTournament] = useState(null);
//   const [referer, setReferer] = useState(null);
// console.log(WebApp.initData)
//   console.log(WebApp.initDataUnsafe)

//   //   const Referal = '46546546'
//   // const first_name = 'dilshodbek'

//   const Referal = WebApp.initDataUnsafe.start_param
//   const first_name = WebApp.initDataUnsafe.user.first_name


//   // const Referal = WebApp.initDataUnsafe.start_param
//   // const first_name = WebApp.initDataUnsafe.user.first_name


//   useEffect(() => {
//     if (WebApp.initDataUnsafe.user) {
//       setUserData(WebApp.initDataUnsafe.user);
//    }
//   }, []);

  


//   const fetchAccountData = async () => {
//     try {
//       const response = await fetch(getMyAccount, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           user_tg: myId.toString(),
//           referal: Referal,
//           first_name: first_name
//         }),
//       });

//       if (response.ok) {
//         // console.log("Account data fetched successfully");
//         const data = await response.json();
//         setTournament(data.tournament);
//         setData(data.retrieve);
//         setReferer(data.referer);
//         setGetalltasks(data);
//         setLoading(true);
//       } else {
//         console.error("Failed to fetch account data");
//       }
//     } catch (error) {
//       console.error("Error fetching account data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchAccountData();
//   }, []);
  


//   return (
    
//     <BrowserRouter>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <Body
//              myId={myId}
//               data={data}
//               loading={loading}
//               userData={userData}
//               fetchAccountData={fetchAccountData}
//               tournament={tournament}
//             />
//           }
//         />
//         <Route path="/airdrop" element={<Wallet data={data}  loading={loading} fetchAccountData={fetchAccountData} myId={myId} />} />
//         <Route path="/bonus" element={<Setting data={data} loading={loading} myId={myId} fetchAccountData={fetchAccountData} />} />
//         <Route
//           path="/task"
//           element={
//             <Task
//               data={getalltasks}
//               myId={myId}
//               fetchAccountData={fetchAccountData}
//               loading={loading}
//             />
//           }
//         />
//         <Route path="/invite" element={<Invite referer={referer} loading={loading} data={data} />} />
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   );
// }

// export default App;

"use client";
import WebApp from "@twa-dev/sdk";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./body/home.jsx";
import Footer from "./footer/footer.jsx";
import Wallet from "./components/wallet/wallet.jsx";
import Setting from "./components/settings/settings.jsx";
import Task from "./components/missions/task.jsx";
import Invite from "./components/invite/invite.jsx";
import { isMobile, isTablet } from 'react-device-detect';
import QrCode from "./assets/qrcod.png";

import "./App.css";

function App() {
  const getMyAccount = "https://withreferal-back-1.onrender.com/auth/login";
  // const myId = 4545454
  const myId = WebApp.initDataUnsafe.user.id
  const [userData, setUserData] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [getalltasks, setGetalltasks] = useState(null);
  const [tournament, setTournament] = useState(null);
  const [referer, setReferer] = useState(null);


  

  //   const Referal = '46546546'
  // const first_name = 'dilshodbek'

  const Referal = WebApp.initDataUnsafe.start_param
  const first_name = WebApp.initDataUnsafe.user.first_name




  useEffect(() => {
    if (WebApp.initDataUnsafe.user) {
      setUserData(WebApp.initDataUnsafe.user);
   }
  }, []);

  const deviceType = isMobile ? 'phone' : isTablet ? 'phone' : 'comp';

  const fetchAccountData = async () => {
    try {
      const response = await fetch(getMyAccount, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_tg: myId.toString(),
          referal: Referal,
          first_name: first_name
        }),
      });

      if (response.ok) {
        // console.log("Account data fetched successfully");
        const data = await response.json();
        setTournament(data.tournament);
        setData(data.retrieve);
        setReferer(data.referer);
        setGetalltasks(data);
        setLoading(true);
      } else {
        console.error("Failed to fetch account data");
      }
    } catch (error) {
      console.error("Error fetching account data:", error);
    }
  };

  useEffect(() => {
    fetchAccountData();
  }, []);
  




  const renderMobileLayout = () => (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Body
              myId={myId}
              data={data}
              loading={loading}
              userData={userData}
              fetchAccountData={fetchAccountData}
              tournament={tournament}
            />
          }
        />
        <Route path="/airdrop" element={<Wallet data={data} loading={loading} fetchAccountData={fetchAccountData} myId={myId} />} />
        <Route path="/bonus" element={<Setting data={data} loading={loading} myId={myId} fetchAccountData={fetchAccountData} />} />
        <Route
          path="/task"
          element={
            <Task
              data={getalltasks}
              myId={myId}
              fetchAccountData={fetchAccountData}
              loading={loading}
            />
          }
        />
        <Route path="/invite" element={<Invite referer={referer} loading={loading} data={data} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );

  const renderDesktopLayout = () => (
     <>
<div className="appss">
<h3>Play with Mobile phone</h3>
<img src={QrCode}  className="loader-img" alt="" />
</div>
    </>
  );



  return (

<>
    
    {deviceType === 'phone'  ? renderMobileLayout() : renderDesktopLayout()}

</>
  );
}

export default App;


