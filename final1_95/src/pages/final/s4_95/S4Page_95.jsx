import { useState, useEffect } from 'react'
import Wrapper from '../../../assets/wrappers/Menu_95'
import FilterButtons4_95 from './FilterButtons4_95'
import MenuList4_95 from './MenuList4_95'

import { MenuContextProvider_95 } from './contextMenu_95'

const S4Page_95 = () => {
  return (
    <MenuContextProvider_95>
      <Wrapper>
        <section className='menu-demo'>
          <div className='section-center'>
            <section className='menu'>
              <div className='title'>
                <h2>S4Page_95: htchung</h2>
                <div className='underline'></div>
              </div>
              <FilterButtons4_95 />
              <MenuList4_95 />
            </section>
          </div>
        </section>
      </Wrapper>
    </MenuContextProvider_95>
  )
}

export default S4Page_95
