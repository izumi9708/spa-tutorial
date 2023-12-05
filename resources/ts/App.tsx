import { useEffect, useState } from "react";
import { getAllTasks } from "./operationTasks";

interface Task {
  id:number
  title:string
  body:string
}

function App() {
  const [tasks,setTasks] = useState<Task[]>();

  useEffect(() => {
    getAllTasks().then(res => {
      setTasks(res)
    })
  },[])

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">ToDo App</div>

            <div className="card-body">

              { /* form */}
              <form>
                <h2>タスクの追加</h2>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="text"
                    autoComplete="off" />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                >追加</button>
              </form>

              { /* list */}
              <div className="todo-list mt-3">
                <h2>タスク一覧</h2>
                <ul>
                  {tasks && tasks.map(item => {
                    return (
                      <li key={item.id}>
                        <label>
                          <input type="checkbox" />
                          <div>
                            <div>{item.title}</div>
                            <div>{item.body}</div>
                          </div>
                        </label>
                      </li>
                    )
                  })}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;