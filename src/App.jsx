import { RouterProvider, Route } from "react-router-dom";
import router from "./layout/Router";
import TableauBord from "../src/pages/TableauBord";
import critereData from "../src/models/Criteres";

function App() {
  return (
    <RouterProvider router={router}>
      <Route path="/tableau-bord">
        <TableauBord critereData={critereData} />
      </Route>
    </RouterProvider>
  );
}

export default App;
