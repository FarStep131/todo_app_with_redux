import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

// 1. ユーザが投稿ボタンを押す。
// 2. addTodo というアクションを Dispatch の引数に渡す。
// 3. Dispatch メソッドを実行する。
// 4. Reducer に実行したい Action が伝わる。
// 5. store の中 state が更新される。
// 6. state が更新されると再描画され、表示が切り替わる。

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        // ページのリロードを防ぎます。
        e.preventDefault()
        // 入力された文字列が空だった場合にはこれより先のコードは実行されません。
        if (!input.value.trim()) {
          return
        }
        // dispatch メソッド実行します。
        dispatch(addTodo(input.value))
        // 投稿ボタンを押した後に、テキストボックスの中身を空にします。
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

// storeとcomponentをつなぎます。
export default connect()(AddTodo)
