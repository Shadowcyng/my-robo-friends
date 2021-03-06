import React, {Component} from 'react';
import Cardlist from '../Components/Cardlist';
import SearchBox from '../Components/SearchBox.js';
import './App.css';
import Scroll from '../Components/Scroll';
class App extends Component{
        constructor(){
            super();
            this.state={
                robots:[],
                searchField:'',
            }
        }

        componentDidMount(){
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
                .then(users=>this.setState({robots:users}));
                    }   

            onSearchchange=(event)=>{
                this.setState({searchField:event.target.value});
                console.log(event.target.value);
            }
        render()
        {
            const{robots,searchField} = this.state;
        const filterRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return (!robots.length)?
            <h1 className='ma3 b--light-green pa2 f1'>Loading</h1>
        :( <div  className='tc'>
                <h1 className='f1'>ROBOT FRIENDS</h1>
                <SearchBox searchChange={this.onSearchchange}/>
                        <Scroll>
                              <Cardlist robots={filterRobots} />
                        </Scroll>

            </div>
        );
    }
}

export default App;
