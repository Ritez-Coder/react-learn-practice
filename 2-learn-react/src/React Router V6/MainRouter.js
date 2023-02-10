import React from 'react'
import { BrowserRouter, Routes, Route, Link, Navigate, Outlet, useParams, NavLink, useNavigate, useLocation } from 'react-router-dom'

export default function MainRouter() {
     return (
          <BrowserRouter>
               <div className="navbar">
                    <ul>
                         <li> <Link to={"/home"} >Home</Link> </li>
                         <li> <Link to={"/"}>MyApp</Link> </li>
                         <li> <Link to={"/learn"}>Learn</Link> </li>
                    </ul>
                    <div className='main'>
                         <Routes>
                              < Route path='/'  >
                              < Route path='home' element={< Home />} />
                              < Route index  element={<Navigate replace to={"/learn"} />} />
                              <Route  Route path='/learn' element={< Learn />} >
                                   <Route path='course' element={<Courses />}>
                                        < Route path=':courseid' element={<CourseId />} />
                                   </Route>
                                   <Route path='bundle' element={<Bundle />} />
                              </Route>
                              < Route index path='/dashboard' element={<Dashboard />} />
                              < Route index path='*' element={<Error />} />
                              </Route>
                         </Routes>
                    </div>
               </div>
          </BrowserRouter>
     )
}
function Home() {
     return (
          <div className=''>
               <h1>This is my home....</h1>
          </div>
     )
}


function Learn() {
     return <div>
          <h1>This is my Learn Page</h1>
          <div>
               <Link to={"/learn/course"}><button>Course</button></Link>
               <Link to={"/learn/bundle"}><button>Bundle</button></Link>
          </div>
          < Outlet />
     </div>
}

function Courses() {
     const courseList = ["js", "java", "python", "rust", "golang", "solidity"]
     const randomCourseName = courseList[Math.round(Math.random() * courseList.length)]
     return <div>
          <ul>
               <li>JavaScript</li>
               <li>Python</li>
               <li>Java</li>
               <li>Solidity</li>
               <li>HTML/CSS</li>
          </ul>
          <small>More Test.</small>
          < NavLink to={`/learn/course/${randomCourseName}`}>
               <button>{randomCourseName}</button>
          </NavLink>
          < NavLink to="/learn/course/test">
               <button>{"test"}</button>
          </NavLink>
          < Outlet />
     </div>
}

function Bundle() {
     return <div>
          <ul>
               <li>Web2</li>
               <li>Web3</li>
               <li>Android</li>
               <li>Core Software</li>
          </ul>
     </div>
}

function CourseId() {
     const { courseid } = useParams()
     const navigate = useNavigate()
     return <div>
          <h1>The param is : {courseid}</h1>
          <button onClick={() => {
               navigate("/dashboard", { state: {name : courseid} })
          }}>to Dashboard</button>
         
         <Link to={"/dashboard"} state={{name : courseid}}>Random Link Test</Link>

     </div>
}

function Dashboard() {
     const location = useLocation()
     return <div>
          <h1>This is a Dashboard of {location.state.name}</h1>
     </div>
}

function Error() {
     return <div>
          <h1>Error Not Found 404</h1>
          <Link to={"/"}>Home</Link>
     </div>
}