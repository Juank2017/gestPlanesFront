import { Navigate, Routes, Route } from 'react-router-dom';
import { DashBoardPage } from '../pages/DashBoardPage';
import { IndexPage } from '../pages/IndexPage';
import { UsuariosPage } from '../pages/usuarios/UsuariosPage';
import { TrabajadoresPage } from '../pages/trabajadores/TrabajadoresPage';
import { AltaTrabajador } from '../pages/trabajadores/AltaTrabajador';

export const GestPlanRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<IndexPage />} >
                <Route path="/dashboard/" element={<DashBoardPage />} />
                <Route path='/usuarios/' element={<UsuariosPage />} />
                <Route path='/trabajadores/' element={<TrabajadoresPage />} />
                <Route path='/AltaTrabajador/' element={<AltaTrabajador />} />

            </Route>
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    )
}