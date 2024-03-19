import React, {useState} from 'react'
import {Link} from 'react-router-dom'
// import {FontAwesomeIcon,} from '@fortawesome/fontawesome-free'

import './index.css'

export default function UserDetails() {
  const [searchQuery, setSearchQuery] = useState('')
  const [employeeList, setEmployeeList] = useState([
    {id: 1, name: 'John Doe', dob: '1990-01-01', role: 'Manager'},
    {id: 2, name: 'Jane Smith', dob: '1995-05-15', role: 'Developer'},
    {id: 3, name: 'Alice Johnson', dob: '1988-12-30', role: 'Designer'},
  ])

  const handleSearch = () => {
    console.log('enter pressed')
    const filteredEmployees = employeeList.filter(employee =>
      employee.id.toString().includes(searchQuery.toLowerCase()),
    )

    setEmployeeList(filteredEmployees)
  }

  const cardCounter = 1

  return (
    <div className="user-details-container">
      <div className="header">
        <img
          src="https://i.postimg.cc/6Q8s8274/Group-46.png"
          alt="Logo"
          className="logo1"
        />
        <img
          src="https://i.postimg.cc/7L6p85r6/moptro-logo.png"
          alt="Logo"
          className="logo"
        />
      </div>
      <div className="search-bar ">
        <input
          type="text"
          placeholder="Search with id"
          //   value={searchQuery}
          onChange={e => {
            setSearchQuery(e.target.value)
          }}
          onKeyDown={e => {
            if (e.key === 'Enter') handleSearch()
          }}
        />
        {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
      </div>
      <div className="employee-cards">
        {employeeList.map(employee => (
          <div className="employee-card" key={employee.id}>
            <div className="employee-number">{employee.id}</div>

            <div className="employee-info">
              <p className="id">EMP ID: {employee.id}</p>
              <p className="name">Name: {employee.name}</p>
              <p className="dob">DOB: {employee.dob}</p>
              <p className="role">Role: {employee.role}</p>
            </div>
          </div>
        ))}
        <div className="icon-container">
          <div className="home-icon">
            <Link to="/Home">
              <button className="product">
                <img
                  src="https://i.postimg.cc/nh0CcpnX/Whats-App-Image-2024-03-18-at-17-44-47-c7678100-home-removebg-preview.png"
                  alt="Home 1"
                />
              </button>
            </Link>
          </div>
          <div className="user-icon">
            <button className="home1">
              <img
                src="https://i.postimg.cc/VsxZs0RV/Whats-App-Image-2024-03-18-at-17-47-08-1077c51d-removebg-preview.png"
                alt="Home 2"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
