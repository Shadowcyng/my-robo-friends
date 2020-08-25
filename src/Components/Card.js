import React, {Component} from 'react';

class card extends Component{
render(){
    return(
<div className='bg-light-green dib br3 ma3 grow bw3 shadow-5'>
<img alt='robots' src={`https://robohash.org/${this.props.id}`} width='200' height='200' />
<div className='tc'>
    <h3>{this.props.name}</h3>
    <h4>{this.props.email}</h4>
</div>
</div>
    );
    }
}
export default card;