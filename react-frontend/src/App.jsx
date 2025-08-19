

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import { Product } from './pages/Product'
import { Cart } from './pages/Cart'
import Checkout from './pages/Checkout'
import Login from './pages/admin/Login'
import Dashboard from './pages/admin/Dashboard'

import { ToastContainer, toast } from 'react-toastify';
import { AdminRequireAuth } from './pages/admin/AdminRequireAuth'
import { AdminAuthProvider } from './components/context/AdminAuthContext'

import { default as CategoriesIndex } from './pages/admin/categories/Index'
import { default as CategoriesCreate } from './pages/admin/categories/Create'
import { default as CategoriesEdit } from './pages/admin/categories/Edit'

import { default as ProductsIndex } from './pages/admin/products/Index'
import { default as ProductsCreate } from './pages/admin/products/Create'
import { default as ProductsEdit } from './pages/admin/products/Edit'

function App() {

  return (
    <>
      <AdminAuthProvider>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/admin/login' element={<Login />} />
            <Route path='/admin/dashboard' element={
              <AdminRequireAuth>
                <Dashboard />
              </AdminRequireAuth>
            } />
            <Route path='/admin/categories' element={
              <AdminRequireAuth>
                <CategoriesIndex />
              </AdminRequireAuth>
            } />
            <Route path='/admin/categories/create' element={
              <AdminRequireAuth>
                <CategoriesCreate />
              </AdminRequireAuth>
            } />
            <Route path='/admin/categories/edit/:id' element={
              <AdminRequireAuth>
                <CategoriesEdit />
              </AdminRequireAuth>
            } />


            <Route path='/admin/products' element={
              <AdminRequireAuth>
                <ProductsIndex />
              </AdminRequireAuth>
            } />
            <Route path='/admin/products/create' element={
              <AdminRequireAuth>
                <ProductsCreate />
              </AdminRequireAuth>
            } />
            <Route path='/admin/products/edit/:id' element={
              <AdminRequireAuth>
                <ProductsEdit />
              </AdminRequireAuth>
            } />

          </Routes>
          <ToastContainer />
        </BrowserRouter>
      </AdminAuthProvider>
    </>
  )
}

export default App
