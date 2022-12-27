import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import Login from './pages/login/Login';
import MyPage from './pages/mypage/MyPage';
import Register from './pages/register/Register';
import Account from './pages/account/Account';
import NotFound from './pages/notfound/NotFound';
import Write from './pages/Write/Write';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/account" element={<Account />} />
      <Route path="/write" element={<Write />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
