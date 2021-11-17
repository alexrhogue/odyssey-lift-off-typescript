import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Author of a complete Track or a Module */
export type Author = {
  __typename?: 'Author';
  id: Scalars['ID'];
  /** Author's first and last name */
  name: Scalars['String'];
  /** Author's profile picture */
  photo?: Maybe<Scalars['String']>;
};

export type IncrementTrackViewsResponse = {
  __typename?: 'IncrementTrackViewsResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int'];
  /** Human-readable message for the UI */
  message: Scalars['String'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean'];
  /** Newly updated track after a successful mutation */
  track?: Maybe<Track>;
};

/** A Module is a single unit of teaching. Multiple Modules compose a Track */
export type Module = {
  __typename?: 'Module';
  /** The module's text-based description, can be in markdown format. In case of a video, it will be the enriched transcript */
  content?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The module's length in minutes */
  length?: Maybe<Scalars['Int']>;
  /** The module's title */
  title: Scalars['String'];
  /** The module's video url, for video-based modules */
  videoUrl?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Increment the number of views of a given track, when the track card is clicked */
  incrementTrackViews: IncrementTrackViewsResponse;
};


export type MutationIncrementTrackViewsArgs = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  /** Fetch a specific module, provided a module's ID */
  module: Module;
  /** Fetch a specific track, provided a track's ID */
  track: Track;
  /** Query to get tracks array for the homepage grid */
  tracksForHome: Array<Track>;
};


export type QueryModuleArgs = {
  id: Scalars['ID'];
};


export type QueryTrackArgs = {
  id: Scalars['ID'];
};

/** A track is a group of Modules that teaches about a specific topic */
export type Track = {
  __typename?: 'Track';
  /** The track's main Author */
  author: Author;
  /** The track's complete description, can be in markdown format */
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The track's approximate length to complete, in minutes */
  length?: Maybe<Scalars['Int']>;
  /** The track's complete array of Modules */
  modules: Array<Module>;
  /** The number of modules this track contains */
  modulesCount?: Maybe<Scalars['Int']>;
  /** The number of times a track has been viewed */
  numberOfViews?: Maybe<Scalars['Int']>;
  /** The track's illustration to display in track card or track page detail */
  thumbnail?: Maybe<Scalars['String']>;
  /** The track's title */
  title: Scalars['String'];
};

export type GetTracksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTracksQuery = { __typename?: 'Query', tracksForHome: Array<{ __typename?: 'Track', id: string, title: string, thumbnail?: string | null | undefined, length?: number | null | undefined, modulesCount?: number | null | undefined }> };

export type GetTrackQueryVariables = Exact<{
  trackId: Scalars['ID'];
}>;


export type GetTrackQuery = { __typename?: 'Query', track: { __typename?: 'Track', id: string, title: string, thumbnail?: string | null | undefined, length?: number | null | undefined, modulesCount?: number | null | undefined, numberOfViews?: number | null | undefined, description?: string | null | undefined, author: { __typename?: 'Author', id: string, name: string, photo?: string | null | undefined }, modules: Array<{ __typename?: 'Module', id: string, title: string, length?: number | null | undefined }> } };

export type GetModuleAndParentTrackQueryVariables = Exact<{
  moduleId: Scalars['ID'];
  trackId: Scalars['ID'];
}>;


export type GetModuleAndParentTrackQuery = { __typename?: 'Query', module: { __typename?: 'Module', id: string, title: string, content?: string | null | undefined, videoUrl?: string | null | undefined }, track: { __typename?: 'Track', id: string, title: string, modules: Array<{ __typename?: 'Module', id: string, title: string, length?: number | null | undefined }> } };


export const GetTracksDocument = gql`
    query getTracks {
  tracksForHome {
    id
    title
    thumbnail
    length
    modulesCount
  }
}
    `;

/**
 * __useGetTracksQuery__
 *
 * To run a query within a React component, call `useGetTracksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTracksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTracksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTracksQuery(baseOptions?: Apollo.QueryHookOptions<GetTracksQuery, GetTracksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTracksQuery, GetTracksQueryVariables>(GetTracksDocument, options);
      }
export function useGetTracksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTracksQuery, GetTracksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTracksQuery, GetTracksQueryVariables>(GetTracksDocument, options);
        }
export type GetTracksQueryHookResult = ReturnType<typeof useGetTracksQuery>;
export type GetTracksLazyQueryHookResult = ReturnType<typeof useGetTracksLazyQuery>;
export type GetTracksQueryResult = Apollo.QueryResult<GetTracksQuery, GetTracksQueryVariables>;
export const GetTrackDocument = gql`
    query getTrack($trackId: ID!) {
  track(id: $trackId) {
    id
    title
    author {
      id
      name
      photo
    }
    thumbnail
    length
    modulesCount
    numberOfViews
    modules {
      id
      title
      length
    }
    description
  }
}
    `;

/**
 * __useGetTrackQuery__
 *
 * To run a query within a React component, call `useGetTrackQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTrackQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTrackQuery({
 *   variables: {
 *      trackId: // value for 'trackId'
 *   },
 * });
 */
export function useGetTrackQuery(baseOptions: Apollo.QueryHookOptions<GetTrackQuery, GetTrackQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTrackQuery, GetTrackQueryVariables>(GetTrackDocument, options);
      }
export function useGetTrackLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTrackQuery, GetTrackQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTrackQuery, GetTrackQueryVariables>(GetTrackDocument, options);
        }
export type GetTrackQueryHookResult = ReturnType<typeof useGetTrackQuery>;
export type GetTrackLazyQueryHookResult = ReturnType<typeof useGetTrackLazyQuery>;
export type GetTrackQueryResult = Apollo.QueryResult<GetTrackQuery, GetTrackQueryVariables>;
export const GetModuleAndParentTrackDocument = gql`
    query getModuleAndParentTrack($moduleId: ID!, $trackId: ID!) {
  module(id: $moduleId) {
    id
    title
    content
    videoUrl
  }
  track(id: $trackId) {
    id
    title
    modules {
      id
      title
      length
    }
  }
}
    `;

/**
 * __useGetModuleAndParentTrackQuery__
 *
 * To run a query within a React component, call `useGetModuleAndParentTrackQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetModuleAndParentTrackQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetModuleAndParentTrackQuery({
 *   variables: {
 *      moduleId: // value for 'moduleId'
 *      trackId: // value for 'trackId'
 *   },
 * });
 */
export function useGetModuleAndParentTrackQuery(baseOptions: Apollo.QueryHookOptions<GetModuleAndParentTrackQuery, GetModuleAndParentTrackQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetModuleAndParentTrackQuery, GetModuleAndParentTrackQueryVariables>(GetModuleAndParentTrackDocument, options);
      }
export function useGetModuleAndParentTrackLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetModuleAndParentTrackQuery, GetModuleAndParentTrackQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetModuleAndParentTrackQuery, GetModuleAndParentTrackQueryVariables>(GetModuleAndParentTrackDocument, options);
        }
export type GetModuleAndParentTrackQueryHookResult = ReturnType<typeof useGetModuleAndParentTrackQuery>;
export type GetModuleAndParentTrackLazyQueryHookResult = ReturnType<typeof useGetModuleAndParentTrackLazyQuery>;
export type GetModuleAndParentTrackQueryResult = Apollo.QueryResult<GetModuleAndParentTrackQuery, GetModuleAndParentTrackQueryVariables>;