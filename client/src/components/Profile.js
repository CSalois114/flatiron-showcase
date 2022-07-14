import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ShowcaseListEditor from './ShowcaseListEditor';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();

  return (
    <div>
      <ShowcaseListEditor />
      {/* <button onClick={() => navigate(`/showcases/new`)}>Add New Showcase</button> */}
    </div>
  );
};
