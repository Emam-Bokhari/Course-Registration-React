import { Fragment } from "react"

export default function CreditCalculation({ selectedCourses }) {

    console.log(selectedCourses)
    const totalCreditHours = selectedCourses.reduce((previous, current) => {
        return previous + current.credit
    }, 0)
    const totalCreditPrice = selectedCourses.reduce((previous, current) => {
        return previous + current.price
    }, 0)

    const creditRemaining =20 - totalCreditHours

    

    return (
        <Fragment>
            <div className="w-full md:w-4/12 lg:w-1/4">

                <div className="min-h-[300px] p-3 bg-white rounded-lg space-y-3">
                    <h3 className="text-blue-500 font-medium font-[roboto] text-base">Credit Hour Remaining {creditRemaining} hr</h3>
                    <hr />
                    <p className="font-bold text-lg">Course Name</p>

                    {/* <!-- course name list --> */}
                    <div>
                        <ul className="text-[#777676] list-inside list-decimal text-base">
                            {selectedCourses.map((selectedCourse) => (
                                <li key={selectedCourse.title} >{selectedCourse.title}</li>
                            ))}

                        </ul>
                    </div>
                    <hr />
                    {/* <!-- Total credit hours --> */}
                    <p className="font-medium">Total Credit Hour : {totalCreditHours}</p>
                    <hr />
                    {/* <!-- Total price --> */}
                    <p className="font-medium">Total Price : {totalCreditPrice} USD</p>

                </div>

            </div>
        </Fragment>
    )
}