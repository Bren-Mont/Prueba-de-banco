import Login from "../login/login";
import ForgetPassword from "../login/forgetPassword/forgetPassword";
import SignUp from "../login/SingUp/SignUp";
import Layout from "../../layout/components/Layout";
import Menu from "../admin/menu/Menu";
import Transacciones from "../admin/Transacciones/Transacciones";
import Usuarios from "../admin/Usuarios/Usuarios";
import Cajeros from "../admin/Cajeros/Cajeros";
import LayoutMenu from "../../layout/components/LayoutMenu";




export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [{
      path: '',
      element: <Login />
    },
    {
      path: 'signup',
      element: <SignUp />
    },
    {
      path: '/forget-password',
      element: < ForgetPassword />,
    }
    ],
  },
  {
    path: '/',
    element: <LayoutMenu />,
    children: [{
      path: '/transacciones',
      element: <Transacciones />
    },
    {
      path: '/usuarios',
      element: <Usuarios />,
    },

    {
      path: '/cajeros',
      element: <Cajeros />,
    },
    {
      path: '/Login',
      element: <Login />,
    }
    ]
  },
]


