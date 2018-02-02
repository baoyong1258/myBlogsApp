import React from 'react';
import Layout from '../../components/Layout';
import Frame from '../../components/Frame';
import Children from '../../components/Children';

class Basics extends React.Component {
    state = {
        name: 'git基础',
        message: 'git是代码管理工具',
        linkType: 'git',
    }
    render(){
        let { name,message,linkType } = this.state;
        return (
            <Layout title={name}>
                <Frame title={name}>
                    <Children message={message} linkType={linkType}>
                        <div>
                            <h3>直接记录快照，而非差异比较</h3>
                            <p>实际上，Git 更像是把变化的文件作快照后，记录在一个微型的文件系统中。每次提交更新时，它会纵览一遍所有文件的指纹信息并对文件作一快照，然后保存一个指向这次快照的索引。为提高性能，若文件没有变化，Git 不会再次保存，而只对上次保存的快照作一链接。</p>
                        </div>
                        <style jsx>{`
                           p {
                                text-indent: 2em;
                           }
                        `}</style>
                    </Children>
                </Frame>
            </Layout>
        )
    }
}

export default Basics;