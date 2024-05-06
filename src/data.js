const data=[
    {
        id:crypto.randomUUID(),
        image:"https://i.ibb.co/QnWqdNt/c-programming.png",
        title:"Introduction to C Programming",
        description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        price:150,
        credit:2
    },
    {
        id:crypto.randomUUID(),
        image:"https://i.ibb.co/QnWqdNt/c-programming.png",
        title:"Introduction to Algorithms",
        description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        price:120,
        credit:4
    },
    {
        id:crypto.randomUUID(),
        image:"https://i.ibb.co/Qcrt8k3/c.png",
        title:"Introduction to C++ for DSA",
        description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        price:170,
        credit:3
    },
    {
        id:crypto.randomUUID(),
        image:"https://i.ibb.co/qRZqTWr/data-structure.png",
        title:"Basic Data Structures",
        description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        price:75,
        credit:5
    },
    {
        id:crypto.randomUUID(),
        image:"https://i.ibb.co/SRgBGsB/python.png",
        title:"Introduction to OOP Python",
        description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        price:210,
        credit:1
    },
    {
        id:crypto.randomUUID(),
        image:"https://i.ibb.co/M6Zsv5g/software-engineering.png",
        title:"Software Engineering",
        description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        price:90,
        credit:4
    },
    {
        id:crypto.randomUUID(),
        image:"https://i.ibb.co/K6rNvS9/aws.png",
        title:"AWS, Cloud Computing",
        description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        price:80,
        credit:6
    },
    {
        id:crypto.randomUUID(),
        image:"https://i.ibb.co/4WKGHQ9/datbase.png",
        title:"Database (MySQL)",
        description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        price:60,
        credit:3
    },
    {
        id:crypto.randomUUID(),
        image:"https://i.ibb.co/9tt4brJ/problem-solving.png",
        title:"Problem-Solving Part",
        description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        price:30,
        credit:7
    },
]

function getAllCourseData(){
    return data
}
export {getAllCourseData}