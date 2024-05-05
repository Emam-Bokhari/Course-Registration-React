import { Fragment } from "react";
import CourseList from "./components/CourseList";
import CreditCalculation from "./components/CreditCalculatio";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
    <Fragment>

      <div className="bg-[#F3F3F3] max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-32 lg:my-10 py-10 " >

        <Header />

        <main>
          <div className="w-full flex flex-col md:flex-row gap-8 my-10">
            <CourseList />
            <CreditCalculation />
          </div>
        </main>

        <Footer />

      </div>


    </Fragment>
  )
}