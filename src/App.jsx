import "./App.css";
import { Layout } from "./components/Layout";
import { Routing } from "./Routing";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routing />
      </Layout>
    </>
  );
}

export default App;
