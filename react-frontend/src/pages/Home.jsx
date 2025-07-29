import React from 'react'
import Hero from '../components/home/Hero'
import Products from '../components/home/Products'
import Layout from '../components/Layout'

const Home = () => {
    return (
        <>
            <Layout>
                <Hero />
                <Products />
            </Layout>
        </>
    )
}

export default Home