import {useEffect, useState} from 'react'
import Xarrow from'react-xarrows';
import Draggable from 'react-draggable';
import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  height: 100vh;
  margin: auto;
  padding: 2%;
`
const InputBox = styled.div`
  display: flex;
  justify-content: space-around;
  div {
    width: 50%;
  }
`;

const NodeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  height: 100vh;
  max-width: 100%;
  margin: 2%;
`;

const Node = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #8cd3ff;
  border-radius: 100%;
  background-color: beige;
  width: 150px;
  height: 150px;
  font-size: 4rem;
  text-shadow: none;
  color: #000;
  box-shadow: 6px 6px 12px #111;
`;

const Symbol = styled.span`
   color: #02bfe7;
   font-weight: 700;
   font-size: 2rem;
`;


function App() {
  const [nodes, setNodes] = useState("");
  const [connections, setConnections] = useState("");
  const [nodeArray, setNodeArray] = useState([]);
  const [connectionsArray, setConnectionsArray] = useState([]);
  


  useEffect(() => {
    //Split node entries by comma for node rendering
    const newNodeArray = Array.from(nodes.split(","));
    setNodeArray(newNodeArray);
   
    //Split connection entries on symbols &,<,> for drawing arrows
    const newConnections = connections.split(",");
    if (connections.length > 1) {
      newConnections.map((connection, index) => {
        
        if (connection.includes(">")) {
          newConnections[index] = connection.split(">")
          newConnections[index].splice(1, 0,">")
        } else if (connection.includes("<")) {
          newConnections[index] = connection.split("<")
          newConnections[index].splice(1, 0,"<")
        } else if (connection.includes("&")) {
          newConnections[index] = connection.split("&")
          newConnections[index].splice(1, 0,"&")
        } else {
          newConnections[index] = [newConnections[index]]
        }
       
      });      
    }
    
    setConnectionsArray(newConnections)
   
   }, [nodes, connections])

  
  //Node Input Handler
  const handleNodes = (e) => {
    setNodes(e.target.value.trim());
  }

  //Connection Input Handler
  const handleConnections = (e) => {
    setConnections(e.target.value.trim());
  }

  //Change Node color on triple click
  const handleClick = (e) => {
    if (e.detail === 3) {
      const n = document.querySelector(`#${e.target.id}`);
      if (n.style.backgroundColor == "seagreen") {
        return n.style.backgroundColor = "beige"
      } else {
        return n.style.backgroundColor = "seagreen"
      }
    }    
  }


  return (
    <>
    <div>
      <header>
        <h1>Trees and Graphs</h1>
      </header> 
      <Container>
        <InputBox>
          <div>
            <label>Add Nodes: &nbsp;</label>
            <input
              type="text"
              name="nodes"
              value={nodes}
              onChange={handleNodes}
            />
            <p>Add nodes as comma separated node values in this input box</p>
          </div>
          <div>
            <label>Add Connections: &nbsp;</label>
            <input
              type="text"
              name="nodes"
              value={connections}
              onChange={handleConnections}
            />
            <p>
              Use the following characters for connections:<br/>
              <Symbol>&gt;</Symbol>&nbsp;&nbsp;for&nbsp;&nbsp;<Symbol>→</Symbol>&nbsp;&nbsp;,
              &nbsp;&nbsp;<Symbol>&lt;</Symbol>&nbsp;&nbsp;for&nbsp;&nbsp;<Symbol>←</Symbol>&nbsp;&nbsp;,
              &nbsp;&nbsp;<Symbol>&amp;</Symbol>&nbsp;&nbsp;for&nbsp;&nbsp;<Symbol>↔</Symbol>
            </p>
          </div>
          <div>
            <h2>Other Controls</h2>
            <p><Symbol>Double-click</Symbol> and drag to move nodes</p>
            <p><Symbol>Triple-click</Symbol> to mark node with color</p>
          </div>
        </InputBox>
        <NodeContainer>
        {nodes
          ? nodeArray.map(n => <Draggable><Node id={n} onClick={handleClick}>{n}</Node></Draggable>)
          : null 
        }
        {connectionsArray.length > 1
          ? connectionsArray.map((connection) => {
              const result = connection.map((c, index) => {
                switch(c) {
                  case ">":
                    const start = (typeof connection[index - 1]) !== "undefined" ? connection[index - 1] : 0
                    const end = (typeof connection[index + 1]) !== "undefined" ? connection[index + 1] : 0
                    return <Xarrow start={start} end={end} color="#02bfe7"/>                
                  case ">": 
                    const start2 = (typeof connection[index - 1]) !== "undefined" ? connection[index - 1] : 0
                    const end2 = (typeof connection[index + 1]) !== "undefined" ? connection[index + 1] : 0
                    return <Xarrow start={start2} end={end2} color="#02bfe7"/>
                  case "<":
                    const start3 = (typeof connection[index + 1]) !== "undefined" ? connection[index + 1] : 0
                    const end3 = (typeof connection[index - 1]) !== "undefined" ? connection[index - 1] : 0
                    return <Xarrow start={start3} end={end3} color="#02bfe7"/>
                  case "&":
                    const start4 = (typeof connection[index - 1]) !== "undefined" ? connection[index - 1] : 0
                    const end4 = (typeof connection[index + 1]) !== "undefined" ? connection[index + 1] : 0
                     
                    const start5 = (typeof connection[index + 1]) !== "undefined" ? connection[index + 1] : 0
                    const end5 = (typeof connection[index - 1]) !== "undefined" ? connection[index - 1] : 0
                    return <div><Xarrow start={start4} end={end4} color="#02bfe7"/><Xarrow start={start5} end={end5} color="#02bfe7"/></div>
                  case " ":
                    break;
                  default:
                    return
                }
              })
              return result
            })
          : null
        }
        </NodeContainer>
      </Container>   
    </div>
    </>
  );
}

export default App;
