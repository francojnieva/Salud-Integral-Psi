import { Routes, Route } from 'react-router-dom'
import MainTitle from './components/MainTitle/MainTitle'
import Header from './components/Header/Header'
import AboutInstitution from './components/AboutInstitution/AboutInstitution'
import AboutUs from './components/AboutUs/AboutUs'
import TrainingAndCourses from './components/TrainingAndCourses/TrainingAndCourses'
import ContactFrom from './components/ContactFrom/ContactFrom'
import Footer from './components/Footer/Footer'
import NotFound from './components/NotFound/NotFound'


function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={
                    <>
                        <Header></Header>
                        <MainTitle></MainTitle>
                        <AboutInstitution></AboutInstitution>
                        <AboutUs></AboutUs>
                        <TrainingAndCourses></TrainingAndCourses>
                        <ContactFrom></ContactFrom>
                        <Footer></Footer>
                    </>
                } />
                <Route path='/contact' element={
                    <>
                        <Header></Header>
                        <ContactFrom></ContactFrom>
                        <Footer></Footer>
                    </>
                } />
                <Route path='/about-us' element={
                    <>
                        <Header></Header>
                        <AboutUs></AboutUs>
                        <Footer></Footer>
                    </>
                } />
                <Route path='/training-courses' element={
                    <>
                        <Header></Header>
                        <TrainingAndCourses></TrainingAndCourses>
                        <Footer></Footer>
                    </>
                } />
                <Route
                    path='*'
                    element={
                        <>
                            <NotFound />
                        </>
                    }
                />
            </Routes>
        </>
    )
}

export default App
