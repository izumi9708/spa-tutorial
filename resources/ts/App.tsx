import { ChangeEvent, ReactEventHandler, useEffect, useState } from "react";
import { getAllTasks, createTask, deleteTask } from "./operationTasks";

interface Task {
  id?: number
  title: string
  body: string
}

function App() {
  const [tasks, setTasks] = useState<Task[]>();
  const [title, setTitle] = useState<string>();
  const [body, setBody] = useState<string>();

  function postValue() {
    const title = document.querySelector('.input-title') as HTMLInputElement;
    const body = document.querySelector('.input-body') as HTMLInputElement;
    let boolValue: boolean[] = [];

    // バリデーション
    if (title.value.replace(/\s+/g, "") !== '') {
      boolValue.push(true);
    }

    // バリデーション
    if (body.value.replace(/\s+/g, "") !== '') {
      boolValue.push(true);
    }

    // バリデーションが問題なければpost
    if (boolValue.length === 2) {
      createTask(
        {
          'title': title.value.replace(/\s+/g, ""),
          'body': body.value.replace(/\s+/g, "")
        }
      )
        .then(res => {
          setTitle(title.value.replace(/\s+/g, ""));
          setBody(body.value.replace(/\s+/g, ""));

          title.value = '';
          body.value = '';

          alert('タスクが登録されました');

        }).catch(error => {
          console.log(error);

        })

    } else {
      alert('タイトルまたは本文が入力されていません。');
    }
  }


  function getId(event:ChangeEvent) {
    const id = event.target.closest('li')?.dataset.id;
    
    id && deleteTask(id)
    .then(res => {
      getAllTasks().then(res => {
        setTasks(res)
      })
    })
  }

  useEffect(() => {
    getAllTasks().then(res => {
      setTasks(res)
    })
  }, [title, body])

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
                  <div>タイトル：<input type="text" className="form-control input-title" /></div>
                  <div>本文：<input type="text" className="form-control input-body" /></div>
                </div>

                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={postValue}
                >追加</button>
              </form>

              { /* list */}
              <div className="todo-list mt-3">
                <h2>タスク一覧</h2>
                <ul>
                  {tasks && tasks.map(item => {
                    return (
                      <li key={item.id} data-id={item.id}>
                        <label>
                          <input type="checkbox" onChange={getId} />
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