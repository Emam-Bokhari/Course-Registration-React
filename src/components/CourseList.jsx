import { Fragment } from "react"
import { getImageUrl } from "../utility/courseImage"

export default function CourseList({ courses,onSelectCourse }) {
    return (
        <Fragment>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full md:w-4/6 lg:w-3/4">

                {/* Start Card */}
                {courses.map((course) => (

                    <div key={course.id} className="bg-white p-3 rounded-lg space-y-3">

                        <img className="w-full object-contain" src={course.image} alt="" />

                        <h3 className="text-center font-[robotoslab] font-bold text-lg">{course.title}</h3>

                        <p className="text-justify text-[#777676] text-sm">{course.description}</p>

                        <div className="flex justify-center items-center gap-2">

                            <i className="fa-solid fa-dollar-sign"></i>

                            <p className="text-[#777676] text-base">Price : {course.price}</p>

                            <i className="fa-regular fa-bookmark"></i>

                            <p className="text-[#777676] text-base">Credit : {course.credit}hr</p>

                        </div>

                        <div>
                            <button
                                onClick={()=>onSelectCourse(course)}
                                className="bg-blue-500 hover:bg-blue-600 transform transition-all px-3 py-1 w-full rounded-sm text-white font-[roboto] text-lg">
                                Select
                            </button>
                        </div>

                    </div>
                ))}
                {/* End Card 1 */}



            </div>
        </Fragment>
    )
}