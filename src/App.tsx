import Contacts from "./pages/contact/Contacts";
import CreateContact from "./pages/contact/createContact/CreateContact";
import EditContact from "./pages/contact/editContact/EditContact";
import Maps from "./pages/maps/Maps";
import Layout from "./components/Layout";

import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Contacts />} />
          <Route path="create" element={<CreateContact />} />
          <Route path="edit/:id" element={<EditContact />} />
          <Route path="maps" element={<Maps />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
