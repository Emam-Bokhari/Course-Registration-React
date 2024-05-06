import { Fragment } from "react";
import { useState } from "react"
import CourseList from "./components/CourseList";
import CreditCalculation from "./components/CreditCalculatio";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { getAllCourseData } from "./data";

export default function App() {

  const defaultCourse = {
    "id": crypto.randomUUID(),
    "title": "Introduction to C Programming",
    "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    "image": "https://i.ibb.co/QnWqdNt/c-programming.png",
    "price": 120,
    "credit": 4
  }
  const data = getAllCourseData()
  const [courses, setCourses] = useState(data)
  const [selectCourse, setSelectCourse] = useState([])

  function handleSelectCourse(newCourse) {
    console.log(newCourse.credit,newCourse.price,"add")
    setSelectCourse([
      ...selectCourse,
      newCourse
    ])
  }
  console.log(selectCourse)


  return (
    <Fragment>

      <div className="bg-[#F3F3F3] max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-32 lg:my-10 py-10 " >

        <Header />

        <main>
          <div className="w-full flex flex-col md:flex-row gap-8 my-10">
            <CourseList
              onSelectCourse={handleSelectCourse}
              courses={courses} />
            <CreditCalculation selectedCourses={selectCourse} />
          </div>
        </main>

        <Footer />

      </div>


    </Fragment>
  )
}