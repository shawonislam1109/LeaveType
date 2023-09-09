import {RouterProvider} from "react-router-dom";
import {route} from "./route/route";

function App() {
  return (
    <div>
      <RouterProvider router={route}/>
    </div>
  );
}

export default App;
