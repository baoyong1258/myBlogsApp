let initState = {
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

export default (state = initState, action) => {
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
        default:
            return state;
    }
}