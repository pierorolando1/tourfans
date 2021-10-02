import React from 'react'
import { useState } from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, NavLink, Switch, useHistory } from 'react-router-dom';
import { HomeFeed } from '../components/HomeFeed';
import { NewPost } from '../components/NewPost';
import { PrivateRoute } from '../components/routes/PrivateRoute';
import { Selector } from '../components/Selector'

const HomePage = () => {
  const { loged } = useSelector((state: any) => state.auth)
  const [showModal, setShowModal] = useState(false)
  let history = useHistory();

  return (
    <Router>
      <div className="bg-gray-900 h-screen">
        <Modal
          isOpen={showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={() => setShowModal(false)}
          className=""
          overlayClassName="fixed top-0 right-0 left-0 bottom-0 bg-gray-800 bg-opacity-90"
        >
          <button onClick={() => setShowModal(false)}>Close Modal</button>
        </Modal>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-1 mx-auto max-w-7xl bg-gray-900">
          <section className="hidden p-4 md:flex flex-col overflow-y-auto h-screen">
            <div className="h-10 w-full px-1 my-2">
              <img src="https://www.record.com.mx/sites/default/files/styles/amp-discovery-1200x/public/articulos/2021/07/04/pickford_1.jpg" alt="asdas" className="h-9 w-9 rounded-full object-cover" />
            </div>
            <NavLink to="/" className="cursor-pointer my-1 flex transition-all text-gray-100 hover:text-blue-600 rounded-full px-3 py-2 items-center hover:bg-blue-700 hover:bg-opacity-20">
              <i className="mr-2 gg-home" />
              <h1 className="font-bold">Home</h1>
            </NavLink>
            <a href="/" className="cursor-pointer my-1 flex transition-all text-gray-500 hover:text-blue-600 rounded-full px-3 py-2 items-center hover:bg-blue-700 hover:bg-opacity-20">
              <i className="mr-2 gg-bell" />
              <h1 className="font-bold">Notifications</h1>
            </a>
            <a href="/" className="cursor-pointer my-1 flex transition-all text-gray-500 hover:text-blue-600 rounded-full px-3 py-2 items-center hover:bg-blue-700 hover:bg-opacity-20">
              <i className="mr-2 gg-comment" />
              <h1 className="font-bold">Messages</h1>
            </a>
            <Selector />
            <NavLink to="/new/post" className="text-center transition-all bg-blue-700 shadow-button text-gray-100 font-semibold rounded-full py-2 mt-2">New post</NavLink>
          </section>

          <nav className="md:hidden flex w-full p-2 border-t shadow-xl border-gray-800 text-gray-500 font-bold cursor-pointer fixed -bottom-0 bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-md items-center justify-around">
            <NavLink activeClassName="text-gray-400" to="/" className="text-xl"><i className="fal fa-home"></i></NavLink>
            <NavLink activeClassName="text-gray-100" to="/notifications" className="text-xl hover:bg-red-700"><i className="fal fa-bell"></i></NavLink>
            <NavLink to="/new/post" className="flex items-center justify-center text-gray-100 bg-gradient-to-l from-blue-600 to-indigo-600 shadow-button h-9 w-9 rounded-full font-extrabold">+</NavLink>
            <button className=""><i className="gg-comment" /></button>
            <button className=""><i className="gg-profile" /></button>
          </nav>


          <Switch>
            <PrivateRoute path="/" exact isAuthenticated={loged} component={HomeFeed} />
            <PrivateRoute path="/new/post" exact isAuthenticated={loged} component={NewPost} />
          </Switch>


          <section className="md:flex hidden p-3">
            <input type="text" className="transition-all w-full h-11 bg-gray-800 rounded-full px-4 focus:bg-gray-900 border-2 border-transparent focus:border-blue-700 text-gray-100 shadow-lg" placeholder="Search..." />
          </section>
        </div>
      </div>
      </Router>
    )
  }

export default HomePage
