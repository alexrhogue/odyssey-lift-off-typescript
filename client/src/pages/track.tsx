import React from 'react';
import { Layout, QueryResult } from '../components';
import TrackDetail from '../components/track-detail';
import { useGetTrackQuery } from '../types';


/**
 * Track Page fetches a track's data from the gql query GET_TRACK
 * and provides it to the TrackDetail component to display
 */
const Track = ({ trackId }: { trackId: string }) => {
  const { loading, error, data } = useGetTrackQuery({ variables: { trackId } });

  
  return (
    <Layout>
      <QueryResult error={error} loading={loading} data={data}>
        <TrackDetail track={data?.track} />
      </QueryResult>
    </Layout>
  );
};

export default Track;
