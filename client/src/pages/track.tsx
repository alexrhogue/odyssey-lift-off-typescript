import React, {useState} from 'react';
import { Layout, QueryResult } from '../components';
import TrackDetail from '../components/track-detail';
import { useGetTrackLazyQuery, useGetTrackQuery } from '../types';


/**
 * Track Page fetches a track's data from the gql query GET_TRACK
 * and provides it to the TrackDetail component to display
 */
const Track = ({ trackId }: { trackId: string }) => {
  const [call,{  called,loading, error, data }] = useGetTrackLazyQuery({fetchPolicy:'network-only'});
const [id,setId] =useState('c_3')
  
    console.log(loading);
    return (
      <div>
        <input value={id} onChange={e => setId(e.currentTarget.value)}/>
        <button onClick={() => call({ variables: { trackId:id }})}>
          call
        </button>
        <div>loading: {loading ? "true" : "false"}</div>
        <div>called: {called ? "true" : "false"}</div>
        <div>error: {JSON.stringify(error)}</div>
        <pre>{JSON.stringify(data)}</pre>
      </div>
    );
};

export default Track;
