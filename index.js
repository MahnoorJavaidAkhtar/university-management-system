#! /usr/bin/env node 
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}
class Student extends Person {
    id;
    courses;
    constructor(name, age, id) {
        super(name, age);
        this.id = id;
        this.courses = [];
    }
    registerationForCourse(course) {
        this.courses.push(course);
    }
}
class Instructor extends Person {
    salary;
    courses;
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
        this.courses = [];
    }
    assignCourse(course) {
        this.courses.push(course);
    }
}
class Course {
    id;
    name;
    students;
    instructor;
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.students = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    setInstructor(instructor) {
        this.instructor = instructor;
    }
}
class Department {
    name;
    courses;
    constructor(name) {
        this.name = name;
        this.courses = [];
    }
    addCourse(course) {
        this.courses.push(course);
    }
}
const student1 = new Student('Taha', 10, 12345);
const student2 = new Student('moiz', 45, 12346);
const instructor1 = new Instructor('Hamzah', 30, 100000);
const instructor2 = new Instructor('Hadi', 35, 67000);
const course1 = new Course(1, 'Introduction to Typescript');
const course2 = new Course(2, 'Introduction to javascript');
const department1 = new Department('Computer Science');
department1.addCourse(course1);
department1.addCourse(course2);
student1.registerationForCourse(course1);
student2.registerationForCourse(course1);
course1.addStudent(student1);
course1.addStudent(student2);
course1.setInstructor(instructor1);
console.log(student1.getName());
console.log(student1.courses);
console.log(instructor1.courses);
console.log(department1.courses);
export {};
