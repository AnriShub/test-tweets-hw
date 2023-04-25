import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
export const SharedLayout = () => {
    return (
        <main>
            <div>
                <Suspense fallback={null}>
                    <Outlet />
                </Suspense>
            </div>
        </main>
    );
}

export default SharedLayout;