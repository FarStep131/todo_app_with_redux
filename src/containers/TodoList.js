import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const mapStateToProps = state => ({
  todos: state
})

// toggleTodo という関数は、Todo の id のみの情報を必要としている。
const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

// TodoList Component に mapStateToProps と mapDispatchToProps
// TodoList Component に todos と toggleTodoを渡す。

// mapStateToProps は todos を返す。
// mapStateToProps、mapDispatchToPropsについて
// 名前の通りどちらもpropsを使ってコンポーネントにデータまたは関数を渡す時に利用する。
