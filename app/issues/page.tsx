'use client'
import { $Enums, Issue } from '@prisma/client';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { number } from 'zod';

interface IssueInterface {
  id: number;
  title: string;
  description: string;
  status: $Enums.Status;
  createdAt: Date;
  updatedAt: Date;
}[]

const IssuesPage = () => {
  const [items, setItems] = useState<IssueInterface[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<IssueInterface[]>('/api/issues/list');
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>ID</th>
            <th>title</th>
            <th>description</th>
            <th>createdAt</th>
            <th>updatedAt</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (<tr>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>{new Date(item.createdAt).toDateString()} {new Date(item.createdAt).toLocaleTimeString()}</td>
            <td>{new Date(item.updatedAt).toDateString()} {new Date(item.updatedAt).toLocaleTimeString()}</td>  </tr>
          ))}
        </tbody>
      </table>
      <div className='my-5'>
      <Link href='/issues/new' passHref className=''>
        <button className="btn">Create new issue</button>
      </Link>
      </div>
    </div>
  );
};

export default IssuesPage;
