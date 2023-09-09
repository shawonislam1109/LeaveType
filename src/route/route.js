import { createBrowserRouter } from "react-router-dom";
import MainCom from "../component/MainCom";


 export const route = createBrowserRouter([
     {
        path : '/',
        element : <MainCom/>,
        children: [
            {
                
            }
        ]
     }
])