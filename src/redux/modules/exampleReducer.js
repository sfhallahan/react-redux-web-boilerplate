const TOGGLE_VALUE = 'TOGGLE_VALUE'

export function toggleValue() {
  return {
    type: TOGGLE_VALUE
  }
}

const initialState = {
  isItTrue: true,
}

export default function exampleReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_VALUE:
      return {
        isItTrue: !state.isItTrue,
      }
    default:
      return state
  }
}
