let Hello = React.createClass({
    getInitialState() {
        return {
            arr: [
                'test1',
                'test2',
                'test3',
                'test4',
                'test5',
                'test6',
                'test7',
                'test8',
                'test9'
            ]
        };
    },

    render() {
        return (
            <div>
                {
                    _.map(this.state.arr, e =>
                          <div key={e}>Hello2 {this.props.name + ' ' + moment().toDate()}</div>
                    )
                }
            </div>
        );
    }
});

React.render(<Hello name="World"/>, document.getElementById('content'));

