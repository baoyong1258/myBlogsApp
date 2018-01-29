import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';

export default () =>
<div>
    <h2>one page !</h2>
    <Button raised color="primary">Button</Button>
    <AppBar
        title="Title"
    />
    <style jsx>{`
        h2 {
        color: blue
        }
    `}</style>
</div>