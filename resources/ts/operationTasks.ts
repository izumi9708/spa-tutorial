async function getAllTasks() {
  try {
    const result = await fetch('http://localhost:8888/spa-tutorial/public/api/user_entry');

    return result.json();

  } catch (error) {
    alert('通信に失敗しました。リロードしてください');
  }
}

export { getAllTasks }