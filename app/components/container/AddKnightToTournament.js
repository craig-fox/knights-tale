import React from 'react'
import { connect } from 'react-redux'
import { addKnightToTournament } from '../../actions/actions'

let AddKnightToTournament = ({ dispatch }) => {
    let input

    return (
        <div>
            <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        let knight = {}
        knight.name = input.value
        knight.title = 'Sir'
        knight.tournaments = []
        dispatch(addKnightToTournament(knight))
        input.value = ''
      }}>
                <input ref={node => {
          input = node
        }} />
                <button type="submit">
                    Add Knight
                </button>
            </form>
        </div>
    )
}
AddKnightToTournament = connect()(AddKnightToTournament)

export default AddKnightToTournament