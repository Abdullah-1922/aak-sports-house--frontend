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
      providesTags: ["facility"],
    }),
    getSingleFacility: builder.query({
      query: (id: any) => {
        return {
          url: `/facility/${id}`,
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
      invalidatesTags: ["facility"],
    }),
    updateFacility: builder.mutation({
      query: (payload) => {
        const data = payload.data;
        const id = payload.id;
        return {
          url: `/facility/${id}`,
          body: data,
          method: "PUT",
        };
      },
      invalidatesTags: ["facility"],
    }),
    deleteFacility: builder.mutation({
      query: (payload) => {
        return {
          url: `/facility/${payload}`,

          method: "DELETE",
        };
      },
      invalidatesTags: ["facility"],
    }),

    checkAvailability: builder.mutation({
      query: ({ id, date }) => ({
        url: `/check-availability/${id}?date=${date}`,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useGetFacilitiesQuery,
  useGetSingleFacilityQuery,
  useCreateFacilityMutation,
  useDeleteFacilityMutation,
  useCheckAvailabilityMutation,
  useUpdateFacilityMutation
} = facilityApi;
