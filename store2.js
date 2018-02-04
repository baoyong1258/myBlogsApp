import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const exampleInitialState = {
    dataList: [
        {
            title: 'child',
            children: [
                {
                    title: 'index',
                    children: [],
                    url: '/child',
                    as: '/child'
                },
                {
                    title: 'demo',
                    children: [],
                    url: '/child?type=child&children=demo',
                    as: '/child/demo'
                }
            ],
            open: false,
        },{
            title: 'git',
            children: [
                {
                    title: 'git的概述',
                    children: [],
                    url: '/child?type=git',
                    as: '/git'
                },{
                    title: 'git基础',
                    children: [],
                    url: '/git/basics',
                    as: '/git/basics'
                },{
                    title: 'git原理',
                    children: [],
                    url: '/git/theory',
                }
            ],
            open: false,
        },{
            title: 'router',
            children: [
                {
                    title: 'index',
                    children: [],
                    url: '/router',
                },{
                    title: 'first',
                    children: [],
                    url: '/router?type=first',
                }
            ],
            open: false,
        },{
            title: 'checkout',
            children: [
                {
                    title: 'index',
                    children: [],
                    url: '/router?type=checkout',
                }
            ],
            open: false,
        }
    ],
}


// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
    switch(action.type){
        case 'OPEN':
            return {
                ...state,
                dataList: state.dataList.map(item => {
                    if(item.title == action.linkType && !item.open){
                        return {
                            ...item,
                            open: true,
                        }
                    }else {
                        return item;
                    }
                })
            }
        case 'CHANGE_OPNE':
            console.log(action.type);
            console.log(action.linkType);
            return {
                ...state,
                dataList: state.dataList.map(item => {
                    if(item.title == action.linkType){
                        return {
                            ...item,
                            open: !item.open,
                        }
                    }else {
                        return {
                            ...item,
                            open: false,
                        };
                    }
                })
            }
        case 'REPLACE':
            return Object.assign({}, state, {
                dataList: action.dataList
            })
        default:
            return state;
    }
}

// ACTIONS
export const changeOpenClock = (linkType) => dispatch => {
    return dispatch({
        type: 'CHANGE_OPNE',
        linkType: linkType
    })
}

export const OpenInit = (linkType) => dispatch => {
    return dispatch({
        type: 'OPEN',
        linkType: linkType
    })
}

export const replaceClick = (dataList) => dispatch => {
    return dispatch({
        type: 'REPLACE',
        dataList: dataList
    })
}

export const initStore = (initialState = exampleInitialState) => {
    return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
