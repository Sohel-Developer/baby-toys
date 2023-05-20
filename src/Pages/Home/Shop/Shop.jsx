import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Card from './Card';
import Details from './Details';

const Shop = () => {
    const [toys, setToys] = useState([])
    const [showToys, setShowToys] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/alltoys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])


    const sportsCar = () => {
        const sports = toys.filter(toy => toy.category === "sportsCars")

        setShowToys(sports)
    }

    const movieCars = () => {
        const movieCars = toys.filter(toy => toy.category === "movieCars")

        setShowToys(movieCars)
    }

    const construction = () => {
        const construction = toys.filter(toy => toy.category === "construction")

        setShowToys(construction)

    }

    return (
        <div className='my-10'>
            <Tabs>
                <TabList>
                    <Tab>All Toys</Tab>
                    <Tab onClick={sportsCar}>Sports Cars</Tab>
                    <Tab onClick={movieCars}>Movie Cars</Tab>
                    <Tab onClick={construction}>Construction Vehicles</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  my-5 gap-5'>
                        {
                            toys.map(toy => <Card toy={toy} key={toy._id}></Card>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 my-5 gap-5'>
                        {
                            showToys.map(toy => <Card toy={toy} key={toy._id}></Card>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  my-5 gap-5'>
                        {
                            showToys.map(toy => <Card toy={toy} key={toy._id}></Card>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  my-5 gap-5'>
                        {
                            showToys.map(toy => <Card toy={toy} key={toy._id}></Card>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Shop;