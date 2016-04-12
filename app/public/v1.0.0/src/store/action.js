/**
 *
 * Created by cuitianhao on 16/4/12.
 */

import * as types from './mutation-types'

//exports all actions
export const toggleFormShow = ({ dispatch }) => {
    dispatch(types.TOGGLE_FORM_SHOW)
}