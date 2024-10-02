import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getActivityById } from '../api/activty';

function ActivityDetail(props) {
  const [paramsData] = useSearchParams();
  const id = paramsData.get('id');
  useEffect(() => {
    async function fetchData() {
      const data = await getActivityById(id);
      console.log(data);
    }
    fetchData();
  }, [id]);
  return (
    <div>
      活动id：
      {id}
    </div>
  );
}

export default ActivityDetail;
