import React, { useRef, useState } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import Item from './Item'

import './PageContent.css'

const PageContent = () => {
  const containerRef = useRef(null)

  return (
    <>
      <LocomotiveScrollProvider
        options={{
          smooth: true
        }}
        containerRef={containerRef}
        onLocationChange={(scroll) =>
          scroll.scrollTo(0, { duration: 0, disableLerp: true })
        }
      >
        <div data-scroll-container ref={containerRef} className="w-full">
          <section data-scroll-section className='bg-gray-100 p-2'>
            {/* Title */}
            <div className='text-gray-900 font-bold text-center text-xl my-5'>Python MSE</div>

            {/* Info */}
            <div className='py-3 px-2'>
              <div className='font-thin text-sm text-gray-500 tracking-wide'> 
                Họ tên: <span className='font-medium text-gray-900'>Lê Trung Kiên</span>
              </div>
              <div className='font-thin text-sm text-gray-500 tracking-wide'> 
                Mã học viên: <span className='font-medium text-gray-900'>221101MSE</span>
              </div>
              <div className='font-thin text-sm text-gray-500 tracking-wide'> 
                Email: <span className='font-medium text-gray-900'>kien221101mse@fsb.edu.vn</span>
              </div>
            </div>

            {/* Example 1 */}
            <Item title="🥉 Bài tập 1" link="https://nbviewer.org/github/kiritoroo/python-mse-assignment/blob/master/example1.ipynb"/>

            {/* Example 2 */}
            <Item title="🥈 Bài tập 2" link="https://nbviewer.org/github/kiritoroo/python-mse-assignment/blob/master/example2.ipynb"/>

            {/* Example 3 */}
            <Item title="🥇 Bài tập 3" link="https://nbviewer.org/github/kiritoroo/python-mse-assignment/blob/master/example3.ipynb"/>

            <div className='py-2'></div>

            {/* Example 3 */}
            <Item title="🏆 Assignment" link="https://nbviewer.org/github/kiritoroo/python-mse-assignment/blob/master/assignment.ipynb"/>

          </section>
        </div>
      </LocomotiveScrollProvider>
    </>
  )
}

export default PageContent