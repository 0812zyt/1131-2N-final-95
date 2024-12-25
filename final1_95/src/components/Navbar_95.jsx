import Wrapper from '../assets/wrappers/Navbar_95'

const Navbar_95 = () => {
  return (
    <Wrapper>
      <header className='header'>
        <div
          className='header-row container'
          role='navigation'
          aria-label='Main'
        >
          <div className='header-left'>
            <div className='logo'>
              <h1>ytzhong_95</h1>
            </div>
          </div>
          <div className='header-right'>
            <ul className='main-menu'>
              <li className='menu-item'>
                <a href='#' className='active'>
                  Home
                </a>
              </li>

              <li className='menu-item mega-menu'>
                <a href='#'>Exams_95 +</a>
                <div className='mega-menu-wrapper slideInUp'>
                  <div className='mega-menu-col'>
                    <h5>Quiz1_95</h5>
                    <ul className='mega-sub-menu'>
                      <li>
                        <a href='#'>N1_95</a>
                      </li>
                      <li>
                        <a href='#'>N2_95</a>
                      </li>
                      <li>
                        <a href='#'>N3_95</a>
                      </li>
                      <li>
                        <a href='#'>N4_95</a>
                      </li>
                    </ul>
                  </div>
                  <div className='mega-menu-col'>
                    <h5>Midterm_95</h5>
                    <ul className='mega-sub-menu'>
                      <li>
                        <a href='/mid_95/p1_95'>P1_95</a>
                      </li>
                      <li>
                        <a href='/mid_95/p2_95'>P2_95</a>
                      </li>
                      <li>
                        <a href='/mid_95/p3_95'>P3_95</a>
                      </li>
                      <li>
                        <a href='/mid_95/p4_95'>P4_95</a>
                      </li>
                    </ul>
                  </div>
                  <div className='mega-menu-col'>
                    <h5>Quiz2_95</h5>
                    <ul className='mega-sub-menu'>
                      <li>
                        <a href='/quiz2/q1_95'>BookPage1_95 (normal)</a>{' '}
                      </li>
                      <li>
                        <a href='/quiz2/q2_95'>BookPage2_95 (context)</a>{' '}
                      </li>
                      <li>
                        <a href='/quiz2/q3_95'>Grocery_95 (context)</a>{' '}
                      </li>
                      <li>
                        <a href='/quiz2/q4_95'>BlogJson_95 (normal)</a>{' '}
                      </li>
                    </ul>
                  </div>
                  <div className='mega-menu-col'>
                    <h5>Final_95</h5>
                    <ul className='mega-sub-menu'>
                      <li>
                        <a href='/final/s1_95'>S1_95 </a>
                      </li>
                      <li>
                        <a href='/final/s2_95'>S2_95 </a>
                      </li>
                      <li>
                        <a href='/final/s3_95'>S3_95 </a>
                      </li>
                      <li>
                        <a href='/final/s4_95'>S4_95 </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className='menu-item dropdown'>
                <a href='#'>Midterm +</a>
                <div className='sub-menu-wrapper slideInUp'>
                  <ul className='sub-menu'>
                    <li className='menu-item'>
                      <a href='/mid_95/p1_95'>P1_95</a>
                    </li>
                    <li className='menu-item'>
                      <a href='/mid_95/p2_95'>P2_95</a>
                    </li>
                    <li className='menu-item'>
                      <a href='/mid_95/p3_95'>P3_95</a>
                    </li>
                    <li className='menu-item'>
                      <a href='/mid_95/p4_95'>P4_95</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className='menu-item dropdown'>
                <a href='#'>Quiz2 +</a>
                <div className='sub-menu-wrapper slideInUp'>
                  <ul className='sub-menu'>
                    <li className='menu-item'>
                      <a href='/quiz2/q1_95'>BookPage1_95 (normal)</a>
                    </li>
                    <li className='menu-item'>
                      <a href='/quiz2/q2_95'>BookPage2_95 (context)</a>
                    </li>
                    <li className='menu-item'>
                      <a href='/quiz2/q3_95'>Grocery_95 (context)</a>
                    </li>
                    <li className='menu-item'>
                      <a href='/quiz2/q4_95'>BlogJson_95 (normal)</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className='menu-item dropdown'>
                <a href='#'>Final_95 +</a>
                <div className='sub-menu-wrapper slideInUp'>
                  <ul className='sub-menu'>
                    <li className='menu-item'>
                      <a href='/final/s1_95'>S1_95 </a>
                    </li>
                    <li className='menu-item'>
                      <a href='/final/s2_95'>S2_95 </a>
                    </li>
                    <li className='menu-item'>
                      <a href='/final/s3_95'>S3_95 </a>
                    </li>
                    <li className='menu-item'>
                      <a href='/final/s4_95'>S4_95 </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className='menu-item'>
                <a href='#'>Contact</a>
              </li>
            </ul>
            <a
              href='#'
              id='hamburger-icon'
              className='mobile-toggler'
              aria-label='Mobile Menu'
            >
              <i className='fas fa-bars'></i>
            </a>
          </div>
          <div id='mobile-menu' className='mobile-menu hidden slideInDown'>
            <ul>
              <li className='menu-item'>
                <a href='#' className='active'>
                  Home
                </a>
              </li>

              <li className='menu-item mega-menu'>
                <a href='#'>Mega menu +</a>
                <div className='mega-menu-wrapper'>
                  <div className='mega-menu-col'>
                    <h5>Menu block 1</h5>
                    <ul className='mega-sub-menu'>
                      <li>
                        <a href='#'>Menu block item 1</a>
                      </li>
                      <li>
                        <a href='#'>Menu block item 2</a>
                      </li>
                      <li>
                        <a href='#'>Menu block item 3</a>
                      </li>
                      <li>
                        <a href='#'>Menu block item 4</a>
                      </li>
                      <li>
                        <a href='#'>Menu block item 5</a>
                      </li>
                    </ul>
                  </div>
                  <div className='mega-menu-col'>
                    <h5>Menu block 2</h5>
                    <ul className='mega-sub-menu'>
                      <li>
                        <a href='#'>Menu block item 1</a>
                      </li>
                      <li>
                        <a href='#'>Menu block item 2</a>
                      </li>
                      <li>
                        <a href='#'>Menu block item 3</a>
                      </li>
                      <li>
                        <a href='#'>Menu block item 4</a>
                      </li>
                      <li>
                        <a href='#'>Menu block item 5</a>
                      </li>
                    </ul>
                  </div>
                  <div className='mega-menu-col'>
                    <h5>Menu block 3</h5>
                    <ul className='mega-sub-menu'>
                      <li>
                        <a href='#'>Menu block item 1</a>
                      </li>
                      <li>
                        <a href='#'>Menu block item 2</a>
                      </li>
                      <li>
                        <a href='#'>Menu block item 3</a>
                      </li>
                      <li>
                        <a href='#'>Menu block item 4</a>
                      </li>
                      <li>
                        <a href='#'>Menu block item 5</a>
                      </li>
                    </ul>
                  </div>
                  <div className='mega-menu-col'>
                    <h5>Menu block 4</h5>
                    <ul className='mega-sub-menu'>
                      <li>
                        <a href='#'>Menu block item 1</a>
                      </li>
                      <li>
                        <a href='#'>Menu block item 2</a>
                      </li>
                      <li>
                        <a href='#'>Menu block item 3</a>
                      </li>
                      <li>
                        <a href='#'>Menu block item 4</a>
                      </li>
                      <li>
                        <a href='#'>Menu block item 5</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className='menu-item dropdown'>
                <a href='#'>Services +</a>
                <div className='sub-menu-wrapper'>
                  <ul className='sub-menu'>
                    <li className='menu-item'>
                      <a href='#'>Service 1</a>
                    </li>
                    <li className='menu-item'>
                      <a href='#'>Service 2</a>
                    </li>
                    <li className='menu-item'>
                      <a href='#'>Service 3</a>
                    </li>
                    <li className='menu-item'>
                      <a href='#'>Service 4</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className='menu-item'>
                <a href='#'>Blog</a>
              </li>
              <li className='menu-item'>
                <a href='#'>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </Wrapper>
  )
}

export default Navbar_95
