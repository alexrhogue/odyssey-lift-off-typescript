import React from 'react';
import { Layout, ModuleDetail, QueryResult } from '../components';
import { useGetModuleAndParentTrackQuery } from '../types';

/**
 * Module page fetches both parent track and module's data from the gql query GET_MODULE_AND_PARENT_TRACK
 * and feeds them to the ModuleDetail component
 */
const Module = ({ moduleId, trackId }: { moduleId: string, trackId: string}) => {
  const { loading, error, data } = useGetModuleAndParentTrackQuery({
    variables: { moduleId, trackId },
  });

  return (
    <Layout fullWidth>
      <QueryResult error={error} loading={loading} data={data}>
        <ModuleDetail track={data?.track} module={data?.module} />
      </QueryResult>
    </Layout>
  );
};

export default Module;
