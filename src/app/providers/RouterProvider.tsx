import { BrowserRouter, Routes, Route } from "react-router";
import { lazy, Suspense } from 'react'
import {Layout} from "../layout/Layout";
import { ROUTES_CONFIG } from "@/shared/config/routes/routesConfig";

const ListQuestions = lazy(() => import('@/pages/ListQuestions'))
const Collections = lazy(() => import('@/pages/Collections'))
const CollectionQuestion = lazy(() => import('@/pages/CollectionQuestion'))
const Question = lazy(() => import('@/pages/Question'))
const NotServerPage = lazy(() => import('@/pages/NotServerPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

export function AppRouter () {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Загрузка...</div>}>
                <Routes>
                    <Route element={<Layout/>}>
                        <Route path={ROUTES_CONFIG.listQuestions} element={<ListQuestions />}></Route>
                        <Route path={ROUTES_CONFIG.Question} element={<Question />}></Route>
                        <Route path={ROUTES_CONFIG.Collection} element={<Collections />}></Route>
                        <Route path={ROUTES_CONFIG.CollectionQuestion} element={<CollectionQuestion />}></Route>
                        <Route path="*" element={<NotFoundPage />} />
                        <Route path="/500" element={<NotServerPage />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}