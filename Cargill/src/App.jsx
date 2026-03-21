import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import News from "./pages/News.jsx";
import Contacts from "./pages/Contacts.jsx";
import Layout from "./Layout.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/news" element={<News />} />
            <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </Router>
  )
}