import './App.css';
import { AppContext } from './contex/contaxApi';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Feed from "./components/Feed"
import SearchResult from './components/SearchRuselt'
import VideoDetails from './components/VideoDetalis'
function App() {
  return (
    <AppContext >
      <BrowserRouter>

        <div className="flex flex-col h-full">
          <Header />


          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route
              path="/searchResult/:searchQuery"
              element={<SearchResult />}
            />
            <Route path="/video/:id" element={<VideoDetails />} />
          </Routes>
        </div>

      </BrowserRouter >
    </AppContext>
  );
}

export default App;
