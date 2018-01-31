import Layout from '../../components/Layout';
import Frame from '../../components/Frame';

export default () =>
    <Layout title="git基础">
        <Frame title="git基础">
            <div className="content">
                <h4>直接记录快照，而非差异比较</h4>
                <p className="content">
                    实际上，Git 更像是把变化的文件作快照后，记录在一个微型的文件系统中。每次提交更新时，它会纵览一遍所有文件的指纹信息并对文件作一快照，然后保存一个指向这次快照的索引。为提高性能，若文件没有变化，Git 不会再次保存，而只对上次保存的快照作一链接。
                </p>
                <h4>文件的三种状态</h4>
                <p className="content">
                    对于任何一个文件，在 Git 内都只有三种状态：已提交（committed），已修改（modified）和已暂存（staged）。
                </p>
                <p className="content">
                    已提交表示该文件已经被安全地保存在本地数据库中了；已修改表示修改了某个文件，但还没有提交保存；已暂存表示把已修改的文件放在下次提交时要保存的清单中
                </p>
                <h4>基本的 Git 工作流程如下：</h4>
                <p className="content">在工作目录中修改某些文件。</p>
                <p className="content">对修改后的文件进行快照，然后保存到暂存区域。</p>
                <p className="content">提交更新，将保存在暂存区域的文件快照永久转储到 Git 目录中。</p>
                <h4>git配置</h4>
                <p className="content">Git 提供了一个叫做 git config 的工具，专门用来配置或读取相应的工作环境变量。而正是由这些环境变量，决定了 Git 在各个环节的具体工作方式和行为</p>
                <style jsx>{`
                    p.content {
                        text-indent: 2em;
                    }
                `}</style>
            </div>
        </Frame>
    </Layout>