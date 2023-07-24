import { Footer } from "../../component/Footer";
import { Header } from "../../component/Header";
import { Task } from "../../component/Task";
import { TaskInput } from "../../component/TaskInput";

export default function Home() {
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <div>
        <h4 className="display-4 fst-italic text-center">Todo List Mock Up</h4>
        <p className="text-secondary text-center">
          This lab teach you how to split react component(s)
        </p>
      </div>

      {/* Header section */}
      <Header></Header>
      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <div className="d-flex gap-1">
          <input
            className="form-control"
            placeholder="Insert a task here.."
          ></input>
          <button className="btn btn-primary">Add</button>
        </div>
        <TaskInput></TaskInput>
        {/* task */}
        <div className="d-flex p-3 gap-2 align-items-center border-bottom">
          <span>Read a book</span>
          <button className="btn btn-success">Done</button>
          <button className="btn btn-danger">Delete</button>
        </div>
        <Task title="Read a book"></Task>
        {/* task */}
        <div className="d-flex p-3 gap-2 align-items-center border-bottom">
          <span>Take a shower</span>
          <button className="btn btn-success">Done</button>
          <button className="btn btn-danger">Delete</button>
        </div>
        <Task title="Take a shower"></Task>
        {/* task */}
        <div className="d-flex p-3 gap-2 align-items-center border-bottom">
          <span>Sleep</span>
          <button className="btn btn-success">Done</button>
          <button className="btn btn-danger">Delete</button>
        </div>
        <Task title="Sleep"></Task>
      </div>

      {/* //footer section */}
      <div className="mt-3">
        <p className="text-secondary text-center">
          copyright © 2023 Chayanin Suatap 12345678
        </p>
      </div>
      <Footer
        year="2023"
        fullname="Poottipong Kunang"
        studentId="650612095"
      ></Footer>
    </div>
  );
}