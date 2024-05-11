import React, { useContext, useEffect, useState } from 'react';
import MainPage from '../../Mainpage';
<<<<<<< HEAD
import Staff_1 from '../staff/Staff_1';
=======
import staff_1 from '../staff/Staff_1';
>>>>>>> 98fbaa306a67652b03bc1295c3699c267ff90956
import { StudentContext } from '../../context/StudentContext';
import { useNavigate } from 'react-router-dom';
import supabase from '../../database/Client';


function Personalinfo() {
  const navigate = useNavigate();
  const { Authenticated, setAuthenticated, Email } = useContext(StudentContext);
  const [userData, setUserData] = useState(null); 
  const [Name, setName] = useState(null);
  const [Roll_Number, setRoll_Number] = useState(null);
  const [Year, setYear] = useState(null);
  const page1 = () => {
    navigate('/Staff_1');
  }
  useEffect(() => {
    if (!Authenticated) {
      navigate('/');
    } else {
      supabase
        .from('student_bio_details')
        .select('*')
        .eq('email', Email)
        .then((response) => {
          console.log(response);
          setName(response.data[0].name);
          setRoll_Number(response.data[0].rollno);
          var string = response.data[0].year + " / " + response.data[0].dept + " / " + response.data[0].section;
          setYear(string);
        })
        .catch((error) => {
          console.error('Error fetching user data:', error.message);
        });
    }
  }, []);

  return (
    <div>
      <MainPage />
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1279px] h-[645px] bg-white rounded-xl p-4">
        <div className="flex items-center">
          <img src="./images/WireframeImagePlaceholder.png" alt="Profile Photo" className="p-4 w-15 h-30" />
          <div className="mt-6 px-6">
            <h2 className="text-2xl mb-4 text-gray-700 font-bold">PERSONAL INFORMATION</h2>
            <div className="flex items-center">
              <label className="block text-gray-700 font-bold mb-1 mr-28">
                <h5>Name</h5>
              </label>
              <span className="mb-1">
                <h5>{Name}</h5>
              </span>
            </div>
            <div className="flex items-center">
              <label className="block text-gray-700 font-bold mb-1 mr-12">
                <h5>Roll_Number</h5>
              </label>
              <span className="mb-1">
                <h5>{Roll_Number}</h5>
              </span>
            </div>
            <div className="flex items-center">
              <label className="block text-gray-700 font-bold mb-1 mr-2">
                <h5>Year/Class/Section</h5>
              </label>
              <span className="mb-1">
                <h5>{Year}</h5>
              </span>
            </div>
            <div className="flex items-center">
              <label className="block text-gray-700 font-bold mb-1 mr-28">
                <h5>Email</h5>
              </label>
              <span className="mb-1">
                <h5>{Email}</h5>
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
                    <button className="button1 absolute bottom-40 left-25 mt-6 py-2 px-4 w-15 h-11 rounded-md font-semibold focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-purple-300 text-black"
                    onClick={page1}>Semester 3</button>
                    <button className="button1 absolute bottom-40 right-25 mt-6 py-2 px-4 w-15 h-11 rounded-md font-semibold focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-purple-300 text-black">Semester 4</button>
                    <button className="button1 absolute bottom-20 left-25 mt-3 py-2 px-4 w-15 h-11 rounded-md font-semibold focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-purple-300 text-black">Semester 5</button>
                    <button className="button1 absolute bottom-20 right-25 mt-3 py-2 px-4 w-15 h-11 rounded-md font-semibold focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-purple-300 text-black">Semester 6</button>
                </div>
            </div>
        </div>
    )
}
export default Personalinfo;