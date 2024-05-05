import { Fragment } from "react"

export default function CreditCalculation() {
    return (
        <Fragment>
            <div className="w-full md:w-4/12 lg:w-1/4">

                <div className="min-h-[300px] p-3 bg-white rounded-lg space-y-3">
                    <h3 className="text-blue-500 font-medium font-[roboto] text-base">Credit Hour Remaining 7 hr</h3>
                    <hr />
                    <p className="font-bold text-lg">Course Name</p>

                    {/* <!-- course name list --> */}
                    <div>
                        <ul className="text-[#777676] list-inside list-decimal text-base">
                            <li>Introduction to c programming</li>
                            <li>
                                Introduction to C++ for DSA
                            </li>
                            <li>
                                Software Engineering</li>
                        </ul>
                    </div>
                    <hr />
                    {/* <!-- Total credit hours --> */}
                    <p className="font-medium">Total Credit Hour : 13</p>
                    <hr />
                    {/* <!-- Total price --> */}
                    <p className="font-medium">Total Price : 48000 USD</p>

                </div>

            </div>
        </Fragment>
    )
}