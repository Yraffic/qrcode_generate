import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import {PageGenerate} from './pages/Generate'
import {User} from './pages/User'

export const MainRoutes = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/generate" element={<PageGenerate />}/>
                <Route path="/:name/:id" element={<User />}/>
                <Route path="/" element={<Navigate to='/generate' />}/>
            </Routes>
        </BrowserRouter>
    )
} 