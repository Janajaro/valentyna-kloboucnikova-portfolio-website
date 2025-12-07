import './index.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Work } from '../../components/Work';
import { Random } from '../../components/Random';
import { About } from '../../components/About';
import { Shop } from '../../components/Shop';
import { HomePage } from '../../components/HomePage';
import { ProjectDetail } from '../../components/ProjectDetail';
import { ScrollToTop } from '../../components/ScrollToTop';

export const App = () => {
  return (

    <BrowserRouter>

      <nav className="navigation">

        <Link to="/work"><img src="img/internal/work-typo.png" alt="work" /></Link>
        <Link to="/random"><img src="img/internal/random-typo.png" alt="random" /></Link>
        <Link to="/about"><img src="img/internal/about-typo.png" alt="about" /></Link>
        <Link to="/shop"><img src="img/internal/shop-typo.png" alt="shop" /></Link>

      </nav>

      <Link to="/">

          <h1 className='logotyp'>
            <img src="/img/internal/valentyna-logo.png" alt="logotyp" />
          </h1>

      </Link>

      <ScrollToTop />
      
      <Routes>

        <Route path='/' element={<HomePage />} />
        <Route path='/:id' element={<ProjectDetail />} />
        <Route path='/work' element={<Work />} />
        <Route path='/random' element={<Random />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop />} />
        
      </Routes>

    </BrowserRouter>

  );
};
