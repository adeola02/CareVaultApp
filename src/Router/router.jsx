import { createHashRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Error from "../pages/Error";
import SignUp from "../Auth/SignUp";
import Login from "../Auth/Login";
import ForgotPassword from "../Auth/ForgotPassword";
import ResetPassword from "../Auth/ResetPassword";
import SuccessPage from "../Auth/SuccessPage";
import Verification from "../Auth/Verification";
import { Otp } from "../Auth/Otp";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs/ContactUs";
import AboutUs from "../pages/AboutUs";
import DashBoardLayout from "../Layouts/DashBoardLayout";
import DashBoard from "../components/DashBoard/DashBoard";
import Settings from "../components/Settings/Settings";
import Records from "../components/Records/Records";
import ImageUpload from "../components/Upload/Image/ImageUpload";
import PdfUpload from "../components/Upload/Pdf/PdfUpload";
import ManualUpload from "../components/Upload/Manual/ManualUpload";
import AdminLayout from "../Layouts/AdminLayout/AdminLayout";
import AdminDashBoard from "../components/AdminDashBoard/AdminDashBoard";
import AdminRecords from "../components/AdminRecordList/AdminRecords";
import View from "../components/View/View";
import { VerifyResetCode } from "../Auth/VerifyResetCode";
import UserRoute from "./UserRoute";
import AdminRoute from "./AdminRoute";
import { useEffect } from "react";

// import Header from "../components/Header/Header";

export const router = createHashRouter([
  {
    path: "sign-up",
    element: <SignUp />,
  },

  {
    path: "log-in",
    element: <Login />,
  },

  {
    path: "forgotpassword",
    element: <ForgotPassword />,
  },

  {
    path: "resetpassword",
    element: <ResetPassword />,
  },

  {
    path: "successpage",
    element: <SuccessPage />,
  },

  {
    path: "verification",
    element: <Verification />,
  },

  {
    path: "otp",
    element: <Otp />,
  },

  {
    path: "verifyresetcode",
    element: <VerifyResetCode />,
  },

  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
    ],
  },
  {
    element: <UserRoute element={<DashBoardLayout />}></UserRoute>,
    // path:"/dashBoard",
    children: [
      {
        path: "dashBoard",
        element: <DashBoard />,
      },
      {
        path: "records",
        element: <Records />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "uploadImage",
        element: <ImageUpload />,
      },
      {
        path: "uploadPdf",
        element: <PdfUpload />,
      },
      {
        path: "uploadManual",
        element: <ManualUpload />,
      },
      {
        path: "view",
        element: <View />,
      },
    ],
  },
  {
    element: (
      <AdminRoute>
        <AdminLayout />
      </AdminRoute>
    ),
    children: [
      {
        path: "admindashBoard",
        element: <AdminDashBoard />,
      },
      {
        path: "adminRecords",
        element: <AdminRecords />,
      },
    ],
  },

  // {
  //   element:<AdminRoute element={<AdminLayout/>}></AdminRoute>,
  //   path:"adminDashBoard",
  //   children:[
  //     {
  //       path:"",
  //       element:<AdminDashBoard/>
  //     },
  //     {
  //       path:"adminRecords",
  //       element:<AdminRecords/>
  //     }
  //   ]
  // }
]);
