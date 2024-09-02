import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => {
        console.log(userInfo);
        return {
          url: "/auth/login",
          method: "POST",
          body: userInfo,
        };
      },
    }),
    signUp: builder.mutation({
      query: (userInfo) => {
        console.log(userInfo);
        return {
          url: "/auth/signup",
          method: "POST",
          body: userInfo,
        };
      },
    }),
    addAdmin: builder.mutation({
      query: (userInfo) => {
        console.log(userInfo);
        return {
          url: "/auth/add-admin",
          method: "POST",
          body: userInfo,
        };
      },
    }),
  }),
});
export const { useLoginMutation ,useSignUpMutation,useAddAdminMutation} = authApi;
