/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "../../api/baseApi";

const facilityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFacilities: builder.query({
      query: (query: any) => {
        return {
          url: query ? `/facility?${query}` : `/facility`,
        };
      },
    }),
    getSingleFacility: builder.query({
      query: (id: any) => {
        console.log(id, "from query");
        return {
          url: `/facilities/${id}`,
        };
      },
    }),
    createFacility: builder.mutation({
      query: (payload) => {
        return {
          url: "/facility",
          body: payload,
          method: "POST",
        };
      },
    }),
    updateFacility: builder.mutation({
      query: (payload) => {
        const data = payload.data;
        const id = payload.id;
        return {
          url: `/facilities/${id}`,
          body: data,
          method: "PATCH",
        };
      },
    }),
    deleteFacility: builder.mutation({
      query: (payload) => {
        return {
          url: `/facilities/${payload}`,

          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useGetFacilitiesQuery,
  useGetSingleFacilityQuery,
  useCreateFacilityMutation,
  useDeleteFacilityMutation,
} = facilityApi;
