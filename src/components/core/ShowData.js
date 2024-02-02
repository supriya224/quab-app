import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Button from '../button/Button';

const ShowData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          'https://api.tvmaze.com/search/shows?q=all',
        );
        setData(response.data);
      } catch (error) {
        console.error('Error fetching shows:', error);
      }
    };
    getData();
  }, []);

  return (
    <main className="container mx-auto py-24 px-8 ">
      <div className="grid lg:grid-cols-3 gap-6 items-center md:grid-cols-2">
        {data.map((show) => (
          <div className="p-9 rounded-lg bg-blue-500 shadow-md shadow-blue-900 "  key={show.show.id}>
            <img
              className="items-center rounded-lg"
              src={
                show.show.image &&
                show.show.image.medium &&
                show.show.image.original
              }
              alt={show.show.name}
              width={100}
              height={20}
            />
            <div className="p-5 text-white">
              <div className='text-2xl gap-5 items-center font-bold text-slate-900'>
                <a className="py-2 px-4 bg-zinc-400 rounded-lg shadow-md shadow-blue-900 hover:bg-white " href={show.show.officialSite}>
                  Website
                </a>
                <a className="ml-6 px-4 py-2 bg-blue-200 rounded-lg shadow-md shadow-blue-900 hover:bg-white " href={show.show.url}>
                  View
                </a>
              </div>
              <h1 className="m-auto mt-9">Name:{show.show.name}</h1>
              <p>Type: {show.show.type}</p>
              <h1>Language: {show.show.language}</h1>
              <h1>Time:{show.show.schedule.time}</h1>
              <h1>Day:{show.show.schedule.days}</h1>
              <h1>Date:{show.show.premiered}</h1>
              <h1>Rating:{show.show.rating.average}</h1>
              <h1>Update:{show.show.updated}</h1>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ShowData;
