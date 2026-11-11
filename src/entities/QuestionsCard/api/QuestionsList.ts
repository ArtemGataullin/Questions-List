import { baseApi } from "@/shared/api/baseApi";
import { API_CONFIG } from "@/shared/config/api/apiConfig";
import type { Questions, getQuestionsArg } from "../model/type";

export const questionsList = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuestions: builder.query<Questions, getQuestionsArg>({
      query: ({page, limit, skills, specializationSlug, rate, complexity, titleOrDescription, keywords}) => ({
        url: API_CONFIG.questions,
        params: {page, limit, skills, specializationSlug, rate, complexity, titleOrDescription, keywords}
      }),
      providesTags: ['Question'],
    })
  }),
  overrideExisting: false,
})

export const {useGetQuestionsQuery} = questionsList