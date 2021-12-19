// まず、Reducer を定義します。
// 引数には、state の初期値と Dispatch される Action を設定します。
const todosReducer = (state = [], action) => {
  // そして、Action の type によってデータをどのように変更するのかを switch 文を用いて記述します。
  switch (action.type) {
    // Action の type が ADD_TODO のとき、
    // 現在の todo に追加する形で state を更新します。
    // completedはデフォルトではfalse（未完了）としておく。
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    // Action の type が TOGGLE_TODO のとき、
    // ある一つの todo の completed を反転させる形で state を更新します。
    // ある一つの todo は id をもとにして探します。
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

export default todosReducer
