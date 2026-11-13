import type { Paginated } from "@/shared/api/types"
import type { Skill } from "../skill/model/model"

export interface Question {
  id: number,
  title: string,
  slug: string,
  keywords: string[],
  description: string,
  imageSrc: string,
  rate: number,
  complexity: number
  longAnswer: string,
  shortAnswer: string,
  code: string,
}

export type Questions = Paginated<Question>

export type QuestionSkills = Skill

export interface getQuestionsArg {
  page?: number,
  limit?: number,
  keywords?: string[],
  specializationSlug?: string
  titleOrDescription?: string
  skills?: string[]
  complexity?: number,
  rate?: number,
}

export interface QuestionProps {
  title: string, 
  rate: number, 
  complexity: number, 
  img?: string,
  slug: string, 
  shortAnswer: string
}

export interface QuestionBySlug extends Question {
    status: string
    createdAt: string
    updatedAt: string
    questionSkills?: QuestionSkills[]
    createdBy?: {
        id: string
        username: string
    }
}
