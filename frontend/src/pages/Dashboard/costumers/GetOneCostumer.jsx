import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOnecostumer } from '../../../../rudex/slices/CostumerSlice';
import Spinner from '../../../components/Spinner';

const GetOneCostumer = () => {
    const params = useParams();

  const { Costumer, isLoading } = useSelector((state) => state.Costumer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOnecostumer(params.costumerId));
  }, []);

  console.log(Costumer);
  return (
    <div>
    {isLoading ? (
      <Spinner />
    ) : (
      <>
        <h1 className='text-2xl font-bold'>Firstname</h1>
        {/* <p>{Costumer.Name}</p> */}
        <h1 className='text-2xl font-bold'>phone</h1>
        <p>{Costumer.costumerPhone}</p>
        <h1 className='text-2xl font-bold'>Address</h1>
        <p>{Costumer.costumerEmail}</p>
        <h1 className='text-2xl font-bold'>Registered at</h1>
        {/* <p>{moment(patient.joinedAt, 'YYYYMMDD').fromNow()}</p> */}
      </>
    )}
  </div>

  )
}

export default GetOneCostumer