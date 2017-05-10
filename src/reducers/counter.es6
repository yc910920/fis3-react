/**
 * @file counter.es6
 * @desc 加减器
 * @email 99874405@qq.com
 */
const initialState = {
    count: 98,
    countMax: 100,
    countMin: 0
};


export default function counterReducer(state = initialState, action) {
    switch (action.type) {
        case counterActionType.COUNTER_ADD:
            return {
                ...state,
                ...{
                    count: state.count + 1
                }
            };

        default:
            return state;
    }
};