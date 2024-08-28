import React from 'react'
import { navigationList } from '../utils/navigationList'

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-black p-8 md:p-12">
      <div className="text-white">
        <h1 className="mb-4 text-xl font-semibold ">Navigation</h1>
        <ul className="space-y-2">
          {navigationList.map((item, index) => (
            <li key={index}>
              <a href={item.link} className="hover:underline cursor-pointer">
                {item.label}
              </a>
            </li>
          ))}                                                                                   
        </ul>
      </div>
      <div className="text-white">
        <h1 className="mb-4 text-xl font-semibold ">Contact Us</h1>
        <ul className="space-y-2">
          {navigationList.map((item, index) => (
            <li key={index}>
              <a href={item.link} className="hover:underline cursor-pointer">
                {item.label}
              </a>
            </li>
          ))}                                                                                   
        </ul>
      </div>

      <div className="text-white">
        <h1 className="mb-4 text-xl font-semibold">Feedback</h1>
        <div className="flex flex-col space-y-4">
          <input
            name="email"
            type="text"
            id="email"
            placeholder="Your Email"
            autoComplete='off'
            className="p-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:bg-gray-600"
          />
          <textarea
            name="feedback"
            id="feedback"
            rows="4"
            cols="30"
            placeholder="Your Feedback"
            className="p-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:bg-gray-600"
          />
          <button className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded">
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Footer
