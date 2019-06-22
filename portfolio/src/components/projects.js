import React from 'react';
import './projects.css';

class Projects extends React.Component {
  render() {
    return (
      <div style={{maxWidth: 1400}}>
      <h2> Projects </h2>
        <div className="ProjectBox" id="style-7">
          <div className="ProjectBoxTitle">ALGORITHM SOLVING</div>

          <a className="ProjectCard" href="https://github.com/slaytr/LeetCode/blob/master/twosum.py">
          <div className="ProjectCardImage">
            <i class="fab fa-github" style={{fontSize: 40}}></i>
          </div>
          <div className="ProjectCardText">
            <strong>Two Sum</strong>
            <br />
            Given an array of integers, return indices of the two numbers such that they add up to a specific target.
            <br/>
            <i style={{fontSize:12}}>Dynamic Programming, Arrays, Hash Tables/Dictionaries</i>
          </div>
          </a>

          <a className="ProjectCard" href="https://github.com/slaytr/LeetCode/blob/master/binarytreedistributecoins.py">
          <div className="ProjectCardImage">
            <i class="fab fa-github" style={{fontSize: 40}}></i>
          </div>
          <div className="ProjectCardText">
            <strong>Binary Tree Coin Distribution</strong>
            <br />
            Distribute coins to all nodes of a Binary Tree such that each node has a coin
            <br />
            <i style={{fontSize:12}}>Binary Tree, Recursion, Depth First Search</i>
          </div>
          </a>

          <a className="ProjectCard" href="https://github.com/slaytr/LeetCode/blob/master/longeststringchain.py">
          <div className="ProjectCardImage">
        <i class="fab fa-github" style={{fontSize: 40}}></i>
          </div>
          <div className="ProjectCardText">
            <strong>Longest String Chain</strong>
            <br />
            Given a list of words, find the length of the longest string chain.
            <br/>
            <i style={{fontSize:12}}>Dynamic Programming, Hash Tables/Dictionaries, Arrays, Optimization</i>
          </div>
          </a>

          <a className="ProjectCard" href="https://github.com/slaytr/LeetCode/blob/master/reverselinkedlist.py">
          <div className="ProjectCardImage">
        <i class="fab fa-github" style={{fontSize: 40}}></i>
          </div>
          <div className="ProjectCardText">
            <strong>Reverse a Linked List</strong>
            <br />
            Reverse a linked list, starting from the head node
           <br />
            <i style={{fontSize:12}}>Single Pass, Linked Lists, Node Traversal</i>
          </div>
          </a>

          <a className="ProjectCard" href="https://github.com/slaytr/LeetCode/blob/master/hammingdistance.py">
          <div className="ProjectCardImage">
        <i class="fab fa-github" style={{fontSize: 40}}></i>
          </div>
          <div className="ProjectCardText">
            <strong>Hamming Distance</strong>
            <br />
            Calculate the number of different bits of two integers in binary form
            <br />
            <i style={{fontSize:12}}>Binary, Bit Representation, Unit Conversion</i>
          </div>
          </a>

          <a className="ProjectCard" href="https://github.com/slaytr/LeetCode/blob/master/minimumaddparentheses.py">
          <div className="ProjectCardImage">
        <i class="fab fa-github" style={{fontSize: 40}}></i>
          </div>
          <div className="ProjectCardText">
            <strong>Minimum Parentheses</strong>
            <br />
            Evaluate the number of parentheses to make a given parentheses string valid
            <br />
            <i style={{fontSize:12}}>Patterns, Stacks, Lists</i>
          </div>
          </a>

          <div className="ProjectBoxTitle">AWS</div>

          <a className="ProjectCard" href="https://github.com/slaytr/myWebsite/tree/master/portfolio">
          <div className="ProjectCardImage">
            <i class="fab fa-github" style={{fontSize: 40}}></i>
          </div>
          <div className="ProjectCardText">
            <strong>Portfolio Website</strong>
            <br />
            All the code I've written for this website
            <br/>
            <i style={{fontSize:12}}>JavaScript, HTML, CSS, React, AWS S3/R53/CloudFront</i>
          </div>
          </a>

          <a className="ProjectCard" href="https://github.com/slaytr/Project-AWS/tree/master/CloudFormation">
          <div className="ProjectCardImage">
            <i class="fab fa-github" style={{fontSize: 40}}></i>
          </div>
          <div className="ProjectCardText">
            <strong>CloudFormation Webserver</strong>
            <br />
            Spinning up a secured webserver hosted on an EC2 Instance in AWS via CloudFormation
            <br/>
            <i style={{fontSize:12}}>Infrastructure as Code, AWS EC2/CloudFormation</i>
          </div>
          </a>


        </div>
      </div>
    )
  }
}

export default Projects;
