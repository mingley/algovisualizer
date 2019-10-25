import React from 'react';
import {getMergeSortAnimations, getBubbleSortAnimations, quickSortFunction} from '../sortingAlgos/sortingAlgos';
require("regenerator-runtime/runtime");
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron';

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            array:[]
        };
    }

    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
        const array = [];
        for(let i=0;i<270;i++){
            array.push(randomIntFromInterval(5,530))
        }
        this.setState({array});
    }

    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const isColorChange = i % 3 !== 2;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? 'red' : 'turquoise';
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * 3);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * 3);
          }
        }
      }

    bubbleSort(){
        const animations = getBubbleSortAnimations(this.state.array);
        for(let i=0;i<animations.length;i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if(isColorChange){
                const [barOneIndex, barTwoIndex]=animations[i];
                const barOneStyle = arrayBars[barOneIndex].style;
                const barTwoStyle = arrayBars[barTwoIndex].style;
                const color = i % 3 === 0 ? 'red' : 'turquoise';
                setTimeout(()=>{
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i*1);
            } else {
                setTimeout(()=>{
                    const [barOneIndex, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIndex].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i*1);
            }
        }
    }

    quickSort(){
      let animations = quickSortFunction(this.state.array, 0, this.state.array.length-1);
    }

    heapSort(){

    }

    testSortingAlgorithms() {
        for (let i = 0; i < 100; i++) {
          const array = [];
          const length = randomIntFromInterval(1, 1000);
          for (let i = 0; i < length; i++) {
            array.push(randomIntFromInterval(-1000, 1000));
          }
          const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
          const bubbleSortedArray = getBubbleSortAnimations(array.slice());
          console.log(arraysAreEqual(javaScriptSortedArray, bubbleSortedArray));
        }
      }
    
    

    render(){
        const {array} = this.state;
    return(
        <>
        <div className='array-container'>
          <Jumbotron>
            <h3>Sorting Algorithm Visualizer</h3>
            {array.map((value, index)=>{      
            return <div 
            className='array-bar' 
            key={index}
            style={{height: `${value}px`}}>
            </div>
            })}<br />
            <Button variant="info" size="sm" onClick={()=>this.resetArray()}>Generate Random Array</Button>
            <Button variant="info" size="sm" onClick={()=>this.mergeSort()}>mergeSort</Button>
            <Button variant="info" size="sm" onClick={()=>this.bubbleSort()}>bubbleSort</Button>
         </Jumbotron>
         </div>
         {/* <button onClick={()=>this.quickSort()}>quickSort</button> */}
         {/* <button onClick={()=>this.heapSort()}>heapSort</button> */}
         {/* <button onClick={()=>this.testSortingAlgorithms()}>test</button> */}
        </>
    )
  }
}



export default SortingVisualizer;