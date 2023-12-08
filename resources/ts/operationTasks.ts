async function getAllTasks() {
  try {
    const result = await fetch('http://localhost:8888/spa-tutorial/public/api/task');

    return result.json();

  } catch (error) {
    alert('通信に失敗しました。リロードしてください');
  }
}

export { getAllTasks };


interface Task {
  id?: number
  title: string
  body: string
}

async function createTask(obj: Task) {

  try {
    const result = await fetch('http://localhost:8888/spa-tutorial/public/api/task', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj)
    })

    return result.json();

  } catch (error) {
    console.log(error);

  }
}

export { createTask };


async function deleteTask(id: string) {
  try {
    const result = await fetch(`http://localhost:8888/spa-tutorial/public/api/task/${id}`);

    return result.json();

  } catch (error) {
    alert('通信に失敗しました。リロードしてください');
  }
}

export { deleteTask }