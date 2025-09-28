import { Course } from "src/app/models/course.model"

export interface coursesState{
    courses:Course[]
}

export const initialState:coursesState = {
    courses: [
        {
            id: 1,
            title: "Mastering Modern JavaScript",
            description: "A comprehensive course covering ES6+ features, asynchronous JavaScript, and front-end development essentials.",
            image: "../../../assets/images/jsi.jpeg",
            author: "John Doe",
            price: 49.99
          },
          
          {
            id: 2,
            title: "Angular - From Zero to Hero",
            description: "Learn to build robust and scalable single-page applications with Angular, including components, services, routing, and state management.",
            image: "../../../assets/images/jsi.jpeg",
            author: "Jane Smith",
            price: 59.99
          },
          {
            id: 3,
            title: "Node.js - The Complete Guide",
            description: "Master Node.js from the ground up, including asynchronous programming, Express.js, MongoDB, Mongoose, authentication, authorization, etc.",
            image: "../../../assets/images/jsi.jpeg",
            author: "John Doe",
            price: 79.99
          },
          {
            id: 4,
            title: "React - The Complete Guide",
            description: "Master React.js from scratch, including hooks, Redux, React Router, and building real-world projects. Learn to create dynamic and interactive user interfaces.",
            image: "../../../assets/images/jsi.jpeg",
            author: "Mery Smith",
            price: 49.99
          },
          {
            id: 5,
            title: "Microsoft SQL - The Complete Guide",
            description: "This course covers everything from basic queries and database design to advanced topics like stored procedures, triggers, and performance tuning.",
            image: "../../../assets/images/jsi.jpeg",
            author: "Jane Smith",
            price: 89.99
          }
    ],
}