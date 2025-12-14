
import { createBrowserRouter } from "react-router-dom";
import Home from './Home';
import Cart from "./Cart";
import Root from './Root';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root /> ,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/cart',
                element: <Cart />,
            }
        ]
    }
]);

export default router ;