// 该组件的作用，刷新页面（从后端获取页面）时展开对应的siderbar状态
import { connect } from 'react-redux';
import { open } from '../../actions';
import React from 'react';

const mapStateToProps = (state, ownProps) => ({
    dataList: state.dataList
})
const mapDispatchToProps = {
    onOpenClick: open
}
class Children extends React.Component {

    componentDidMount() {
        let linkType = this.props.linkType;
        if(this.props.dataList.some(item => item.title == linkType && item.open)){
            return;
        }
        console.log(this);
        this.props.onOpenClick(linkType);
    }

    render(){
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Children);
